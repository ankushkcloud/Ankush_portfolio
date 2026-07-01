export const profile = {
  name: "Ankush Kumar",
  roles: ["Technology Officer", "Cloud Engineer", "DevOps Engineer", "Linux Administrator"],
  location: "Noida, Uttar Pradesh, India",
  phone: "+91-9693444208",
  email: "ankushctis22@gmail.com",
  linkedin: "#",
  github: "#",
  resume: "#",
  summary:
    "Cloud & DevOps engineer who deploys and runs production infrastructure end to end - AWS, Linux, Nginx, Docker and CI/CD pipelines - with an eye on uptime, security and clean automation.",
};

export const trustedTechnologies = [
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Linux",
  "Ubuntu",
  "GitHub Actions",
  "Ansible",
  "Nginx",
  "MongoDB",
  "React",
  "Node.js",
  "TypeScript",
  "Next.js",
  "Azure",
  "GCP",
];

export const skillGroups = [
  {
    label: "Cloud Platforms",
    tag: "cloud",
    items: ["AWS EC2", "IAM", "VPC", "S3", "CloudWatch", "Route 53"],
  },
  {
    label: "Operating Systems",
    tag: "os",
    items: ["Ubuntu Linux", "Windows Server"],
  },
  {
    label: "DevOps & CI/CD",
    tag: "devops",
    items: ["Docker", "Git", "GitHub Actions", "Jenkins", "Nginx"],
  },
  {
    label: "Microsoft Stack",
    tag: "msft",
    items: ["Active Directory", "Microsoft 365", "OneDrive Admin"],
  },
  {
    label: "Networking",
    tag: "net",
    items: ["TCP/IP", "DNS", "DHCP", "VLAN", "Routing"],
  },
  {
    label: "Monitoring",
    tag: "mon",
    items: ["CloudWatch", "Zabbix", "Netdata"],
  },
  {
    label: "Databases",
    tag: "db",
    items: ["MongoDB", "MySQL"],
  },
  {
    label: "Scripting",
    tag: "script",
    items: ["Bash", "Shell Scripting"],
  },
];

export const experience = [
  {
    role: "Technology Officer",
    company: "Studio Sonrai Pvt. Ltd.",
    period: "May 2026 - Present",
    current: true,
    points: [
      "Own Linux production servers and cloud infrastructure end to end for enterprise web apps.",
      "Configure Nginx, reverse proxies and SSL to keep sites fast, secure and highly available.",
      "Run Active Directory and Microsoft 365 / OneDrive administration for the org.",
      "Ship deployments through Git-based CI/CD workflows with monitoring and disaster recovery in place.",
    ],
  },
  {
    role: "IT Engineer",
    company: "Proxinet Technology Pvt. Ltd.",
    period: "Aug 2025 - Apr 2026",
    points: [
      "Managed AWS infrastructure - EC2, IAM, VPC, S3, CloudWatch - for production workloads.",
      "Administered Ubuntu servers: users, packages, permissions and hardening.",
      "Deployed sites via Nginx with SSL issuance/renewal and DNS/VLAN configuration.",
      "Handled cloud migrations, incident response and proactive uptime monitoring.",
    ],
  },
  {
    role: "DevOps Intern",
    company: "Trueixtech Solution Pvt. Ltd.",
    period: "Feb 2025 - Jun 2025",
    points: [
      "Deployed AWS-hosted apps (EC2, IAM, S3) and containerized services with Docker.",
      "Automated builds and releases with Jenkins CI/CD pipelines.",
      "Configured Ubuntu servers and Nginx, and monitored infra with CloudWatch, Zabbix and Netdata.",
    ],
  },
  {
    role: "Network Engineer",
    company: "Hexagon India Corporation Pvt. Ltd.",
    period: "Apr 2024 - Jul 2024",
    points: [
      "Supported enterprise network and data center operations, including DNS/DHCP/VLAN troubleshooting.",
      "Ran Linux health checks, incident support and preventive maintenance alongside senior engineers.",
    ],
  },
];

export const projects = [
  {
    title: "AWS Linux Server Deployment & Infra Management",
    description:
      "Production-ready Ubuntu server on EC2 with hardened SSH, Nginx reverse proxy, SSL and CloudWatch monitoring.",
    stack: ["AWS EC2", "Nginx", "IAM", "Bash", "CloudWatch"],
  },
  {
    title: "CI/CD Pipeline - GitHub Actions",
    description:
      "Automated build, test and deploy pipeline for React and Node.js apps, cutting manual release effort significantly.",
    stack: ["GitHub Actions", "React", "Node.js", "Git"],
  },
  {
    title: "CI/CD Pipeline - Website Deployment",
    description:
      "Zero/low-downtime deployment workflow from GitHub to Linux hosting, with rollback and post-deploy checks.",
    stack: ["GitHub Actions", "Nginx", "SSL", "Linux"],
  },
];

export const certifications = [
  { name: "EXIN Cloud Computing Certification", issuer: "EXIN" },
  { name: "AWS Database and File System", issuer: "Great Learning" },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    field: "Cloud Technology & Information Security",
    school: "Vivekananda Global University, Jaipur",
    year: "2024",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "D.S. College, Katihar",
    year: "2022",
  },
];

export const languages = ["English", "Hindi"];

export const terminalLines = [
  { type: "cmd", text: "terraform apply -auto-approve" },
  { type: "out", text: "Apply complete! Resources: 8 added, 0 changed, 0 destroyed." },
  { type: "cmd", text: "kubectl get nodes" },
  { type: "out", text: "worker-01 Ready | worker-02 Ready | control-plane Ready" },
  { type: "cmd", text: "docker ps --format 'table {{.Names}}\\t{{.Status}}'" },
  { type: "out", text: "nginx-proxy Up 14 days | api-service Up 14 days" },
  { type: "cmd", text: "aws s3 ls s3://prod-artifacts --summarize" },
  { type: "out", text: "Total Objects: 128 | Total Size: 4.2 GiB" },
  { type: "cmd", text: "systemctl status nginx" },
  { type: "out", text: "active (running) - reverse proxy healthy" },
  { type: "cmd", text: "ansible-playbook harden-linux.yml" },
  { type: "out", text: "ok=42 changed=3 failed=0" },
  { type: "cmd", text: "gh run list --workflow deploy.yml" },
  { type: "out", text: "deploy.yml success - main - 2m 18s" },
  { type: "cmd", text: "helm install monitoring prometheus-community/kube-prometheus-stack" },
  { type: "out", text: "STATUS: deployed | REVISION: 1" },
];
