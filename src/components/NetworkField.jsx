import { useEffect, useRef } from "react";

const NODE_TYPES = ["cloud", "vm", "db", "ci"];

export default function NetworkField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width;
    let height;
    let nodes;
    let packets;
    let raf;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      const count = Math.min(54, Math.max(26, Math.floor((width * height) / 21000)));
      nodes = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.5 + 0.8,
        type: index % 9 === 0 ? NODE_TYPES[index % NODE_TYPES.length] : null,
      }));

      packets = Array.from({ length: Math.min(12, Math.floor(count / 4)) }, () => ({
        from: Math.floor(Math.random() * count),
        to: Math.floor(Math.random() * count),
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.003,
      }));
    }

    function drawInfraIcon(node) {
      if (!node.type) return;
      ctx.save();
      ctx.translate(node.x, node.y);
      ctx.strokeStyle = "rgba(122, 174, 255, 0.42)";
      ctx.fillStyle = "rgba(16, 30, 50, 0.68)";
      ctx.lineWidth = 1;
      ctx.shadowColor = "rgba(56, 189, 248, 0.25)";
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.roundRect(-11, -11, 22, 22, 6);
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.fillStyle = "rgba(56, 189, 248, 0.9)";
      ctx.font = "8px JetBrains Mono, monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(node.type.toUpperCase(), 0, 1);
      ctx.restore();
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(73, 138, 255, 0.035)");
      gradient.addColorStop(1, "rgba(56, 189, 248, 0.018)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20 || n.x > width + 20) n.vx *= -1;
        if (n.y < -20 || n.y > height + 20) n.vy *= -1;
      }

      const links = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            links.push([a, b, dist]);
            ctx.strokeStyle = `rgba(122, 174, 255, ${0.13 * (1 - dist / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const packet of packets) {
        if (!links.length) break;
        packet.progress += packet.speed;
        if (packet.progress >= 1) {
          packet.progress = 0;
          const link = links[Math.floor(Math.random() * links.length)];
          packet.fromNode = link[0];
          packet.toNode = link[1];
        }
        const a = packet.fromNode || nodes[packet.from];
        const b = packet.toNode || nodes[packet.to];
        if (!a || !b) continue;
        const x = a.x + (b.x - a.x) * packet.progress;
        const y = a.y + (b.y - a.y) * packet.progress;
        ctx.beginPath();
        ctx.arc(x, y, 2.1, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56, 189, 248, 0.85)";
        ctx.shadowColor = "rgba(56, 189, 248, 0.7)";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56, 189, 248, 0.52)";
        ctx.fill();
        drawInfraIcon(n);
      }

      if (!reduceMotion) raf = requestAnimationFrame(step);
    }

    resize();
    step();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-field" aria-hidden="true" />;
}
