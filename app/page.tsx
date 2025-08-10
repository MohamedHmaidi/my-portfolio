"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Terminal,
  BarChart,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Cloud,
  Server,
  Zap,
  GitBranch,
  Monitor,
  ChevronDown,
  Calendar,
  Building,
  Award,
  Container,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Code,
  Sparkles,
  Rocket,
  TrendingUp,
  Globe,
  CheckCircle,
  BookOpen,
  Menu,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Define interfaces for data structures
interface SkillItem {
  name: string
  logo: string
}

interface SkillCategory {
  category: string
  items: SkillItem[]
  icon: React.ReactNode
  color: string
}

interface Certification {
  name: string
  code: string
  issuer: string
  date: string
  logo: string
  description: string
  skills: string[]
  credentialUrl: string
  color: string
}

interface EducationEntry {
  degree: string
  institution: string
  period: string
  location: string
  description: string
  courses: string[]
  skills: string[]
  color: string
}

interface ExperienceEntry {
  title: string
  company: string
  period: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

interface ProjectMetrics {
  automation?: string
  scalability?: string
  monitoring?: string
  reliability?: string
  system_availability?: string
  response_time?: string
  equipment_tracking?: string
  [key: string]: string | undefined // Allow for arbitrary string keys
}

interface Project {
  title: string
  description: string
  longDescription: string
  tech: string[]
  images: string[]
  featured: boolean
  metrics?: ProjectMetrics
}

interface Stat {
  label: string
  value: string
  icon: React.ReactNode
}

export default function ProfessionalDevOpsPortfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const [welcomeAnimationComplete, setWelcomeAnimationComplete] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Welcome screen sequence
    const welcomeTimer = setTimeout(() => {
      setWelcomeAnimationComplete(true)
    }, 3000) // Show welcome for 3 seconds

    const hideWelcomeTimer = setTimeout(() => {
      setShowWelcome(false)
      setIsLoaded(true)
      setIsVisible(true)
    }, 4000) // Hide welcome after 4 seconds

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "certifications", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(welcomeTimer)
      clearTimeout(hideWelcomeTimer)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

 const skills: SkillCategory[] = [
    {
      category: "Cloud and Virtualization",
      items: [
        { name: "OpenStack", logo: "/logos/openstack.png" },
        { name: "Azure", logo: "/logos/azuree.png" },
        { name: "AWS", logo: "/logos/aws.png" },
        { name: "Proxmox", logo: "/logos/proxmox.png" },
        { name: "Prometheus", logo: "/logos/Prometheus.png" },
        { name: "Grafana", logo: "/logos/grafana.png" },
        { name: "VMware vCenter", logo: "/logos/vmwarevcenter.png" },
        { name: "ESXi", logo: "/logos/esxi.png" },
        { name: "Nakivo Backup", logo: "/logos/nakivo.png" },
        { name: "Zimbra", logo: "/logos/zimbra.png" },
        { name: "KVM", logo: "/logos/kvm.png" },
      ],
      icon: <Cloud className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "DevOps and Automation",
      items: [
        { name: "Ansible", logo: "/logos/ansible.png" },
        { name: "Terraform", logo: "/logos/terraform.png" },
        { name: "Jenkins", logo: "/logos/Jenkins.png" },
        { name: "Git", logo: "/logos/Git.png" },
        { name: "GitHub", logo: "/logos/Github.png" },
        { name: "Kubespray", logo: "/logos/kubespray.png" },
        { name: "MetalLB", logo: "/logos/metallb.png" },
        { name: "Helm", logo: "/logos/Helm.png" },
      ],
      icon: <GitBranch className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Containerization and Orchestration",
      items: [
        { name: "Docker", logo: "/logos/docker.png" },
        { name: "Docker Compose", logo: "/logos/compose.png" },
        { name: "Docker Swarm", logo: "/logos/docker-swarm.png" },
        { name: "Kubernetes", logo: "/logos/kubernetes.png" },
      ],
      icon: <Container className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Business Intelligence",
      items: [
        { name: "Talend", logo: "/logos/talend.png" },
        { name: "Power BI", logo: "/logos/powerbi.png" },
        { name: "Excel", logo: "/logos/Excel.png" },
        { name: "SQL", logo: "/logos/sql.png" },
        { name: "NoSQL", logo: "/logos/NoSQL.jpg" },
      ],
      icon: <BarChart className="h-6 w-6" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      category: "Web Development",
      items: [
        { name: "Angular", logo: "/logos/angular.png" },
        { name: "Spring Boot", logo: "/logos/spring.png" },
        { name: "Node.js", logo: "/logos/node.png" },
        { name: ".NET", logo: "/logos/net.png" },
        { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
        { name: "Bootstrap", logo: "/logos/bootstrap.png" },
        { name: "Symfony", logo: "/logos/symfony.png" },
        { name: "Flask", logo: "/logos/flask.png" },
      ],
      icon: <Globe className="h-6 w-6" />,
      color: "from-teal-500 to-blue-500",
    },
    {
      category: "Desktop Development",
      items: [
        { name: "C", logo: "/logos/C.png" },
        { name: "Java", logo: "/logos/Java.png" },
        { name: "JavaFX", logo: "/logos/JavaFX.png" },
      ],
      icon: <Monitor className="h-6 w-6" />,
      color: "from-gray-500 to-slate-500",
    },
    {
      category: "Operating Systems",
      items: [
        { name: "Windows (PowerShell)", logo: "/logos/powershell.png" },
        { name: "Linux (Bash)", logo: "/logos/bash.png" },
      ],
      icon: <Terminal className="h-6 w-6" />,
      color: "from-neutral-500 to-zinc-500",
    },
    {
      category: "Data Science",
      items: [
        { name: "Python", logo: "/logos/python.png" },
        { name: "Pandas", logo: "/logos/pandas.webp" },
        { name: "SciPy", logo: "/logos/scipy.png" },
        { name: "NumPy", logo: "/logos/numpy.png" },
        { name: "Matplotlib", logo: "/logos/mathplot.png" },
        { name: "Scikit-learn", logo: "/logos/sckit.png" },
        { name: "OpenCV", logo: "/logos/opencv.png" },
      ],
      icon: <Brain className="h-6 w-6" />,
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const certifications: Certification[] = [
    {
      name: "Microsoft Azure Fundamentals",
      code: "AZ-900",
      issuer: "Microsoft",
      date: "2024",
      logo: "/logos/azuree.png",
      description: "Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
      skills: ["Cloud Computing", "Azure Services", "Security", "Compliance", "Pricing"],
      credentialUrl: "https://www.credly.com/badges/7c041a78-a448-49d9-866f-c75df2c3575c/public_url",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "AWS Educate",
      code: "AWS-101",
      issuer: "Amazon web service",
      date: "2023",
      logo: "/logos/aws.png",
      description: "Foundational knowledge of cloud concepts, AWS core services, global infrastructure, security.",
      skills: ["Cloud Computing", "AWS Services", "Security", "Compliance", "Cloud Pricing"],
      credentialUrl: "https://www.credly.com/badges/00309431-1def-4660-96ab-f77cbbf23321/public_url",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const education: EducationEntry[] = [
    {
      degree: "Engineering degree in Cloud Computing and IT Architecture",
      institution: "Private Higher School of Engineering and Technology (ESPRIT)",
      period: "2022 - 2025",
      location: "Tunis, Tunisia",
      description:
        "Comprehensive training in cloud infrastructure design, virtualization, IT architecture principles, and scalable distributed systems. Gained hands-on experience with cloud platforms, network configuration, and security best practices.",
      courses: [
        "Cloud Computing and Virtualization",
        "IT Infrastructure Architecture",
        "Distributed Systems and Microservices",
        "Network Security and Management",
        "Data Storage and Management",
        "DevOps and Automation",
        "Orchestration and Container Management",
        "Artificial Intelligence and Mathematics",
        "Operating System Administration",
      ],
      skills: [
        "Cloud Platforms",
        "Kubernetes",
        "Docker",
        "Terraform",
        "Ansible",
        "CI/CD Pipelines",
        "DevOps Practices",
        "Linux System Administration",
        "Network and Infrastructure Security",
        "Virtualization (VMware, Hyper-V)",
        "Microservices Architecture",
        "Monitoring and Logging (Prometheus, Grafana, ELK)",
        "Infrastructure as Code (IaC)",
        "API Management",
        "Scripting (Bash, Python)",
        "Agile and Scrum Methodologies",
        "System Design and Scalability",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      degree: "Bachelor's Degree in Business Computing",
      institution: "Higher Institute of Computer Science",
      period: "2019 - 2022",
      location: "Mahdia, Tunisia",
      description:
        "Solid foundation in Business Intelligence and data analysis. Skilled in configuring BI tools and dashboards, and implementing ETL processes to transform raw data into actionable insights. Experienced in supporting digital transformation and managing data-driven E-Business projects.",
      courses: [
        "Statistics and Probability",
        "Algorithms and Data Structures",
        "Big Data and Cloud Computing",
        "Information Systems",
        "Management",
        "Databases",
        "Web Programming",
        "Object-Oriented Programming",
        "Data Warehousing",
        "Data Mining and Machine Learning",
      ],
      skills: [
        "SQL",
        "Python",
        "Power BI",
        "ETL Processes",
        "Data Warehousing",
        "Data Analysis",
        "Business Intelligence",
        "Excel for Data Analytics",
        "Machine Learning Basics",
        "JavaScript",
        "HTML/CSS",
        "Web Development",
        "Decision Support Systems",
        "Information Systems",
        "Project Management",
        "E-Business Strategy",
        "Knowledge Management Systems",
      ],
      color: "from-purple-500 to-pink-500",
    },
  ]

  const experience: ExperienceEntry[] = [
    {
      title: "Cloud & DevOps Engineer Intern: DBaaS Platform",
      company: "Next Step IT",
      period: "02/2025 - 07/2025",
      location: "Charguia, Tunisia",
      description:
        "Designed and developed a complete Database-as-a-Service (DBaaS) platform. Implemented scalable database infrastructure, automated deployments using Kubernetes Operators and Helm, and built secure web interfaces with Angular and Spring Boot. Integrated full-stack monitoring with Prometheus and Grafana.",
      achievements: [
        "Designed and built a full-featured DBaaS platform from scratch",
        "Implemented scalable and resilient database infrastructure",
        "Automated service deployments using Kubernetes Operators and Helm",
        "Developed secure, responsive UI with Angular and Spring Boot",
        "Integrated observability stack with Prometheus and Grafana",
      ],
      technologies: [
        "Kubernetes",
        "NFS",
        "Ansible",
        "Kubespray",
        "MetalLB",
        "Helm",
        "Prometheus",
        "Grafana",
        "Spring Boot",
        "Angular",
        "MySQL",
        "Flask",
        "OpenCV",
      ],
    },
    {
      title: "Cloud Intern: Reporting System for Cloud Services",
      company: "Next Step IT",
      period: "07/2024 - 09/2024",
      location: "Charguia, Tunisia",
      description:
        "Designed and deployed an architecture integrating a backup solution, a messaging solution, and an IaaS solution. Developed an automated backend with PowerShell scripts and an interactive dashboard, including PDF report generation. Ensured production deployment and continuous operation.",
      achievements: [
        "Designed architecture integrating a backup solution, a messaging solution, and an IaaS solution",
        "Developed automated backend with PowerShell scripts",
        "Created an interactive dashboard with PDF report generation",
        "Ensured production deployment and continuous operation",
      ],
      technologies: [
        "VMware ESXi",
        "Backup Solution",
        "Messaging Solution",
        "IaaS Solution",
        "Grafana",
        "PowerShell",
        "VMware CLI",
        "Linux",
        "RESTful API",
        "SMTP",
        "Spring Boot",
        "Node.js",
        "PostgreSQL",
      ],
    },
    {
      title: "DevOps Intern - automated CI/CD and DevSecOps pipeline",
      company: "General Automation Company",
      period: "06/2023 - 08/2023",
      location: "Tunis, Tunisia",
      description:
        "Implemented an automated CI/CD pipeline with Jenkins for builds, tests, and deployments. Containerized and deployed a Spring Boot and Angular application on Kubernetes, ensuring quality, security, and performance.",
      achievements: [
        "Implemented CI/CD pipeline with Jenkins for automated builds, tests, and deployments",
        "Containerized Spring Boot and Angular application using Docker",
        "Deployed application on Kubernetes with focus on quality and security",
        "Utilized tools like Trivy and k6 for security and performance testing",
      ],
      technologies: [
        "Jenkins",
        "Nexus",
        "SonarQube",
        "Mockito",
        "Spring Boot",
        "Angular",
        "Docker",
        "Trivy",
        "k6",
        "Kubernetes",
        "MySQL",
      ],
    },
    {
      title: "BI Intern – ETL Pipeline & Monitoring Dashboard for SWIFT Transactions",
      company: "Arab International Bank of Tunisia (BIAT)",
      period: "02/2022 - 06/2022",
      location: "Tunis, Tunisia",
      description:
        "Designed a dashboard for monitoring BIAT's Swift processes, integrating a data warehouse for data processing and visualization. Data processing involved cleaning, integration, and ETL with Talend, followed by visualization in Power BI.",
      achievements: [
        "Designed a dashboard for monitoring BIAT's Swift processes",
        "Integrated a data warehouse for efficient data processing",
        "Performed data cleaning, integration, and ETL using Talend",
        "Created visualizations using Power BI for actionable insights",
      ],
      technologies: ["Java", "Talend", "Power BI", "Excel", "PostgreSQL"],
    },
  ]
const projects: Project[] = [
    {
      title: "Cloud Infrastructure and Orchestration with OpenStack",
      description:
        "Designed and deployed a scalable multi-node cloud infrastructure supporting virtualized resources and container workloads. Automated environment setup and configured a cluster for efficient workload management. Implemented monitoring to optimize performance and ensure high availability.",
      longDescription:
        "Designed and deployed a scalable multi-node cloud infrastructure supporting virtualized resources and container workloads. Automated environment setup and configured a cluster for efficient workload management. Implemented monitoring to optimize performance and ensure high availability.",
      tech: [
        "Openstack",
        "Keystone",
        "Nova",
        "Glance",
        "Magnum",
        "Heat",
        "Swift",
        "Ansible",
        "Kubernetes",
        "Prometheus",
        "Grafana",
      ],
      images: ["/projects/openstack1.png", "/projects/openstack2.png", "/projects/openstack3.png"],
      featured: true,
      metrics: { automation: "95% with Ansible", scalability: "Up to 10 nodes", monitoring: "Full coverage" },
    },
    {
      title: "DevSecOps Pipeline",
      description:
        "Created a comprehensive CI/CD pipeline to automate code compilation, testing, quality checks, vulnerability scanning, and deployment. Enhanced security with auditing and implemented email notifications for updates, ensuring a robust and efficient software delivery process.",
      longDescription:
        "Created a comprehensive CI/CD pipeline to automate code compilation, testing, quality checks, vulnerability scanning, and deployment. Enhanced security with auditing and implemented email notifications for updates, ensuring a robust and efficient software delivery process.",
      tech: [
        "Prometheus",
        "Grafana",
        "AlertManager",
        "Ansible",
        "cAdvisor",
        "GitHub",
        "Jenkins",
        "Maven",
        "SonarQube",
        "Trivy",
        "Nexus",
        "Docker",
        "Kubernetes",
        "KubeAudit",
      ],
      images: ["/projects/Jenkins.png", "/projects/jenkins2.png"],
      featured: false,
      metrics: {
        automation: "95% ",
        monitoring: "Full coverage ",
        reliability: "99.9% uptime",
      },
    },
    {
      title: "CSERS - ESPRIT Campus Security and Emergency System Deployed Microsoft Azure",
      description:
        "Designed and developed a web-based platform to enhance campus safety and emergency management. The system supports real-time incident reporting, alert notifications, equipment management, and centralized monitoring to ensure rapid response and effective coordination during critical situations.",
      longDescription:
        "Designed and developed a web-based platform to enhance campus safety and emergency management. The system supports real-time incident reporting, alert notifications, equipment management, and centralized monitoring to ensure rapid response and effective coordination during critical situations.",
      tech: ["SpringBoot", "Angular", "MySQL", "Microsoft Azure", "Docker", "Nginx", "LoadBalancer"],
      images: ["/projects/incident.png", "/projects/azure1.png", "/projects/azure2.png"],
      featured: true,
      metrics: { system_availability: "99.9%", response_time: "60% faster ", equipment_tracking: "95% accuracy" },
    },
  ]



  const stats: Stat[] = [
    { label: "Fresh Graduate", value: "2025", icon: <Calendar className="h-6 w-6" /> },
    { label: "Projects Built", value: "10+", icon: <Rocket className="h-6 w-6" /> },
    { label: "Technologies Learned", value: "25+", icon: <TrendingUp className="h-6 w-6" /> },
    { label: "Certifications", value: "2+", icon: <Award className="h-6 w-6" /> },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const openGallery = (project: Project, imageIndex = 0) => {
    setSelectedProject(project)
    setCurrentImageIndex(imageIndex)
  }

  const closeGallery = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
    }
  }

  // Welcome Screen Component
  const WelcomeScreen = () => (
    <div
      className={`fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center transition-all duration-1000 ${welcomeAnimationComplete ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        {/* Floating Particles */}
        {isMounted && (
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
                style={{
                  left: `${(i * 7 + 10) % 90}%`,
                  top: `${(i * 11 + 15) % 85}%`,
                  animationDelay: `${(i * 0.2) % 3}s`,
                  animationDuration: `${2 + (i % 3)}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Welcome Content */}
      <div className="relative z-10 text-center px-4">
        {/* Logo Animation */}
        <div className="mb-8 animate-welcome-logo">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 animate-pulse">
            <Server className="h-10 w-10 text-white" />
          </div>
        </div>

        {/* Typewriter Text */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="inline-block animate-typewriter">Welcome to my</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-typewriter-delayed">
            digital space
          </h2>
        </div>

        {/* Sparkles Animation */}
        <div className="flex justify-center items-center mt-8 space-x-2 animate-fade-in-delayed">
          <Sparkles className="h-6 w-6 text-cyan-400 animate-pulse" />
          <span className="text-white/80 text-lg">Hmaidi Mohamed</span>
          <Sparkles className="h-6 w-6 text-purple-400 animate-pulse animation-delay-500" />
        </div>

        {/* Loading Animation */}
        <div className="mt-12 animate-fade-in-delayed">
          <div className="w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-loading-bar"></div>
          </div>
          <p className="text-white/60 text-sm mt-4 animate-pulse">Loading portfolio...</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Welcome Screen */}
      {showWelcome && <WelcomeScreen />}

      {/* Main Portfolio Content */}
      <div className={`transition-all duration-1000 ${showWelcome ? "opacity-0" : "opacity-100"}`}>
        {/* Animated Background with Particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-10 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          </div>
          {/* Floating Particles */}
          {isMounted && (
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                  style={{
                    left: `${(i * 7 + 10) % 90}%`,
                    top: `${(i * 11 + 15) % 85}%`,
                    animationDelay: `${(i * 0.3) % 5}s`,
                    animationDuration: `${3 + (i % 4)}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Enhanced Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300">
                    <Server className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full"></div>
                </div>
                <div className="hidden sm:block">
                  <span className="text-white font-bold text-lg sm:text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Hmaidi Mohamed
                  </span>
                  <p className="text-white/60 text-xs sm:text-sm">
                    IT Engineer specialized in IT Architecture, DevOps, and Cloud Computing
                  </p>
                </div>
                <div className="block sm:hidden">
                  <span className="text-white font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Hmaidi Mohamed
                  </span>
                </div>
              </div>
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {["about", "skills", "certifications", "experience", "projects", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`relative text-sm font-medium transition-all duration-300 hover:text-cyan-400 group ${
                      activeSection === section ? "text-cyan-400" : "text-white/80"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transform origin-left transition-transform duration-300 ${
                        activeSection === section ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>
                ))}
              </div>
              {/* Desktop Action Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-cyan-400 hover:bg-white/10 transition-all duration-300"
                  asChild
                >
                  <Link href="https://github.com/MohamedHmaidi" target="_blank">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-cyan-400 hover:bg-white/10 transition-all duration-300"
                  asChild
                >
                  <Link href="https://www.linkedin.com/in/mohamed-hmaidi-b3b1741b2/" target="_blank">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                <Link href="MOHAMED-HMAIDI_CV_EN.pdf" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Link>
                </Button>
              </div>
              {/* Mobile Menu Button */}
              <div className="flex items-center space-x-2 md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-cyan-400 hover:bg-white/10 transition-all duration-300"
                  asChild
                >
                  <Link href="#" target="_blank">
                    <Download className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-cyan-400 hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-white/10">
                <div className="flex flex-col space-y-4 pt-4">
                  {["about", "skills", "certifications", "experience", "projects", "contact"].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`text-left text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                        activeSection === section ? "text-cyan-400" : "text-white/80"
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  ))}
                  <div className="flex items-center space-x-4 pt-2">
                    <Link
                      href="https://github.com/MohamedHmaidi"
                      target="_blank"
                      className="text-white/60 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/mohamed-hmaidi-b3b1741b2/"
                      target="_blank"
                      className="text-white/60 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section
          ref={heroRef}
          id="hero"
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div
                className={`space-y-6 lg:space-y-8 transform transition-all duration-1000 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-cyan-400 font-medium">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
                    <span className="text-sm sm:text-base">Welcome to my digital space</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                      Hmaidi
                    </span>
                    <br />
                    <span className="text-white">Mohamed</span>
                  </h1>
                  <div className="space-y-2">
                    <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light">
                      Junior DevOps & Cloud Engineer
                    </p>
                    <p className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">
                      I'm a fresh graduate passionate about DevOps, cloud technologies, and IT architecture. I enjoy
                      working on automation, building scalable systems, and using modern tools to improve how things run
                      , with a background in business intelligence and some experience in web development, I like
                      combining data, code, and infrastructure automation to create smart and efficient solutions. I'm
                      excited to keep learning and contribute to real projects.
                    </p>
                  </div>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="text-cyan-400 mb-2">{stat.icon}</div>
                      <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-white/60 text-xs sm:text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                    onClick={() => scrollToSection("projects")}
                  >
                    <Rocket className="mr-2 h-5 w-5" />
                    View My Work
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 bg-transparent backdrop-blur-sm"
                    onClick={() => scrollToSection("contact")}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Let's Connect
                  </Button>
                </div>
              </div>
              {/* Right Content - 3D Profile */}
              <div
                className={`relative transform transition-all duration-1000 delay-300 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
              >
                <div className="relative">
                  {/* Floating Elements */}
                  <div className="absolute -top-10 -left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float animation-delay-2000"></div>
                  {/* Main Profile Container */}
                  <div className="relative bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-white/10">
                    <div className="relative">
                      <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-400 p-1 transform hover:scale-105 transition-all duration-500">
                        <Image
                          src="/2222-removebg-preview.png"
                          alt="Hmaidi Mohamed - DevOps Engineer"
                          width={320}
                          height={320}
                          className="rounded-2xl object-cover w-full h-full"
                        />
                      </div>
                      {/* Floating Tech Icons */}
                      <div className="absolute -top-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl flex items-center justify-center animate-bounce">
                        <Cloud className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-xl flex items-center justify-center animate-bounce animation-delay-1000">
                        <Container className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="absolute top-1/2 -right-6 sm:-right-8 w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
                        <Code className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/60" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                About{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {[
                {
                  icon: <Cloud className="h-10 w-10 sm:h-12 sm:w-12" />,
                  title: "DevOps & Cloud Engineer",
                  description:
                    "Focused on building scalable, reliable, and automated infrastructure that ensures high availability and supports efficient software delivery",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  icon: <Zap className="h-10 w-10 sm:h-12 sm:w-12" />,
                  title: "Automation Focused",
                  description:
                    "Automating tasks from infrastructure provisioning to CI/CD pipelines, reducing manual steps and improving delivery speed",
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  icon: <BarChart className="h-10 w-10 sm:h-12 sm:w-12" />,
                  title: "Data & Insights",
                  description:
                    "Understanding and working with data to support decision-making, extract insights, and improve business outcomes",
                  color: "from-teal-500 to-cyan-500",
                },
                {
                  icon: <Code className="h-10 w-10 sm:h-12 sm:w-12" />,
                  title: "Web Development",
                  description:
                    "Creating user-friendly and responsive web experiences with a focus on performance, accessibility, and clean design",
                  color: "from-purple-500 to-fuchsia-500",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div
                      className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${item.color} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed text-sm sm:text-base">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Education Section */}
            <div className="mt-16 sm:mt-20 lg:mt-24">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                  Education{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Path
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
                  My academic background has provided me with a strong foundation in computer science, cloud
                  technologies, DevOps practices, data management, and web development.
                </p>
              </div>
              <div className="space-y-6 sm:space-y-8">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 animate-fade-in-up group overflow-hidden"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-6 sm:p-8">
                      <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                          <div className="flex flex-col mb-4">
                            <div>
                              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                                {edu.degree}
                              </h3>
                              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-cyan-400 mb-4">
                                <div className="flex items-center space-x-2">
                                  <Building className="h-4 w-4" />
                                  <span className="font-medium text-sm sm:text-base">{edu.institution}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Calendar className="h-4 w-4" />
                                  <span className="text-sm sm:text-base">{edu.period}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <MapPin className="h-4 w-4" />
                                  <span className="text-sm sm:text-base">{edu.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-white/80 mb-6 leading-relaxed text-sm sm:text-base">{edu.description}</p>
                          <div className="space-y-3">
                            <h4 className="text-white font-semibold mb-3 flex items-center">
                              <BookOpen className="h-4 w-4 text-cyan-400 mr-2" />
                              Key Courses
                            </h4>
                            {edu.courses.map((course, courseIndex) => (
                              <div key={courseIndex} className="flex items-start space-x-3 group/course">
                                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 group-hover/course:scale-150 transition-transform duration-300" />
                                <span className="text-white/70 leading-relaxed group-hover/course:text-white transition-colors duration-300 text-sm sm:text-base">
                                  {course}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-white font-semibold">Relevant Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.skills.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300 text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section id="skills" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-black/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                Technical{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
                Mastering the tools and technologies that drive modern infrastructure and cloud-native applications
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {skills.map((skillGroup, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 transform hover:scale-105 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${skillGroup.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="text-white">{skillGroup.icon}</div>
                      </div>
                      <CardTitle className="text-white text-base sm:text-lg">{skillGroup.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-3 group/skill">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                          <Image
                            src={skill.logo || "/placeholder.svg"}
                            alt={`${skill.name} logo`}
                            width={32}
                            height={32}
                            className="w-full h-full object-contain group-hover/skill:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-white font-medium group-hover/skill:text-cyan-100 transition-colors duration-300 text-sm sm:text-base">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                Professional{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Certifications
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
                Validated expertise through industry-recognized certifications that demonstrate my commitment to
                continuous learning and professional development
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 transform hover:scale-105 animate-fade-in-up group overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0">
                      {/* Certification Logo */}
                      <div className="flex-shrink-0 mx-auto sm:mx-0 sm:mr-6">
                        <div
                          className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${cert.color} rounded-2xl p-1 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                            <Image
                              src={cert.logo || "/placeholder.svg"}
                              alt={`${cert.name} logo`}
                              width={60}
                              height={60}
                              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      {/* Certification Details */}
                      <div className="flex-1 text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                              {cert.name}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-cyan-400 mb-2 text-sm">
                              <span className="font-semibold">{cert.code}</span>
                              <span className="hidden sm:inline">•</span>
                              <span>{cert.issuer}</span>
                              <span className="hidden sm:inline">•</span>
                              <span>{cert.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center sm:justify-start space-x-2 mt-2 sm:mt-0">
                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                            <span className="text-green-400 text-xs sm:text-sm font-medium">Verified</span>
                          </div>
                        </div>
                        <p className="text-white/80 mb-4 leading-relaxed text-sm sm:text-base">{cert.description}</p>
                        {/* Skills Covered */}
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2 text-sm">Skills Covered:</h4>
                          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                            {cert.skills.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-cyan-400/30 text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {/* Credential Link */}
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 bg-transparent transition-all duration-300 w-full sm:w-auto"
                          asChild
                        >
                          <Link href={cert.credentialUrl} target="_blank">
                            <ExternalLink className="mr-2 h-3 w-3" />
                            View Credential
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Future Certifications */}
            <div className="mt-12 sm:mt-16 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-white/10 max-w-2xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Next Certifications</h3>
                <p className="text-white/80 mb-6 text-sm sm:text-base">
                  Continuously expanding my expertise with upcoming certifications in cloud platforms and DevOps tools
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {["Azure Administrator Associate", "Kubernetes Administrator", "Terraform Associate"].map(
                    (cert, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-white/30 text-white/70 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 text-xs sm:text-sm"
                      >
                        {cert}
                      </Badge>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Experience Section */}
        <section id="experience" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-black/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                Professional{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {experience.map((exp, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 animate-fade-in-up group overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <div className="flex flex-col mb-4">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-cyan-400 mb-4">
                              <div className="flex items-center space-x-2">
                                <Building className="h-4 w-4" />
                                <span className="font-medium text-sm sm:text-base">{exp.company}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4" />
                                <span className="text-sm sm:text-base">{exp.period}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span className="text-sm sm:text-base">{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-white/80 mb-6 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                        <div className="space-y-3">
                          <h4 className="text-white font-semibold mb-3 flex items-center">
                            <Award className="h-4 w-4 text-cyan-400 mr-2" />
                            Key Achievements
                          </h4>
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start space-x-3 group/achievement">
                              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 group-hover/achievement:scale-150 transition-transform duration-300" />
                              <span className="text-white/70 leading-relaxed group-hover/achievement:text-white transition-colors duration-300 text-sm sm:text-base">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-white font-semibold">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                Featured{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
                Showcasing innovative solutions that drive business success and technical excellence
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 transform hover:scale-105 animate-fade-in-up group overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden cursor-pointer" onClick={() => openGallery(project, 0)}>
                    <Image
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {/* Project Metrics Overlay */}
                    <div className="absolute top-4 left-4 space-y-2">
                      {project.featured && (
                        <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs">
                          <Sparkles className="mr-1 h-3 w-3" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    {/* Gallery indicator */}
                    {project.images.length > 1 && (
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs sm:text-sm">
                        {project.images.length} photos
                      </div>
                    )}
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <ExternalLink className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <p className="text-xs sm:text-sm">View Gallery</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-white/70 mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                    {/* Project Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 p-2 sm:p-3 bg-white/5 rounded-lg">
                        {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                          <div key={metricIndex} className="text-center">
                            <div className="text-cyan-400 font-bold text-xs sm:text-sm">{value}</div>
                            <div className="text-white/60 text-xs capitalize">{key.replace("_", " ")}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-black/20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                Let's Build Something{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Amazing
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
                Ready to transform your infrastructure? Let's discuss your next project and create scalable solutions
                together.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Info */}
              <div className="space-y-6 sm:space-y-8 animate-fade-in-up animation-delay-500">
                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6" />,
                      label: "Email",
                      value: "hmaidi185@gmail.com",
                      href: "mailto:hmaidi185@gmail.com",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6" />,
                      label: "Phone",
                      value: "+216 58 229 725",
                      href: "tel:+21658229725",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />,
                      label: "Location",
                      value: "Tunisia",
                      href: "#",
                      color: "from-purple-500 to-pink-500",
                    },
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="text-white">{contact.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-base sm:text-lg">{contact.label}</h3>
                        <Link
                          href={contact.href}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-base sm:text-lg"
                        >
                          {contact.value}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Social Links */}
                <div className="pt-6 sm:pt-8 border-t border-white/10">
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    {[
                      {
                        icon: <Github className="h-4 w-4 sm:h-5 sm:w-5" />,
                        href: "https://github.com/MohamedHmaidi",
                        label: "GitHub",
                      },
                      {
                        icon: <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />,
                        href: "https://www.linkedin.com/in/mohamed-hmaidi-b3b1741b2/",
                        label: "LinkedIn",
                      },
                    ].map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white hover:text-cyan-400 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                      >
                        <div className="group-hover:scale-110 transition-transform duration-300">{social.icon}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* Contact Photo */}
              <div className="relative animate-fade-in-up animation-delay-700">
                <div className="relative">
                  {/* Floating Elements */}
                  <div className="absolute -top-10 -left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float animation-delay-2000"></div>
                  {/* Main Photo Container */}
                  <div className="relative bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-white/10 hover-glow">
                    <div className="relative">
                      <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-400 p-1 transform hover:scale-105 transition-all duration-500">
                        <Image
                          src="/mohamedhm.jpeg"
                          alt="Hmaidi Mohamed - Contact Photo"
                          width={320}
                          height={320}
                          className="rounded-2xl object-cover w-full h-full"
                        />
                      </div>
                      {/* Floating Tech Icons */}
                      <div className="absolute -top-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl flex items-center justify-center animate-bounce">
                        <Cloud className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-xl flex items-center justify-center animate-bounce animation-delay-1000">
                        <Container className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="absolute top-1/2 -right-6 sm:-right-8 w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
                        <Code className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="relative py-8 sm:py-12 px-4 sm:px-6 border-t border-white/10">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center">
                  <Server className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <span className="text-white font-bold text-lg sm:text-xl">Hmaidi Mohamed</span>
                  <p className="text-white/60 text-xs sm:text-sm">Junior Cloud & DevOps Engineer</p>
                </div>
              </div>
              <p className="text-white/60 text-center text-sm">© 2025 Hmaidi Mohamed.</p>
              <div className="flex items-center space-x-4">
                <Link
                  href="https://github.com/MohamedHmaidi"
                  target="_blank"
                  className="text-white/60 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mohamed-hmaidi-b3b1741b2/"
                  target="_blank"
                  className="text-white/60 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="mailto:hmaidi185@gmail.com"
                  className="text-white/60 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Enhanced Gallery Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close button - Dark version */}
              <button
                onClick={closeGallery}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black transition-all duration-300 hover:scale-110 border border-white/20"
              >
                <X className="h-5 w-5" />
              </button>
              {/* Image container with responsive sizing */}
              <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center">
                <Image
                  src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  width={700}
                  height={400}
                  className="object-contain rounded-lg max-w-full max-h-full"
                />
                {/* Navigation arrows - Dark version */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                      className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black transition-all duration-300 hover:scale-110 border border-white/20"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                      className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black transition-all duration-300 hover:scale-110 border border-white/20"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>
              {/* Project info */}
              <div className="mt-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{selectedProject.title}</h3>
                <p className="text-white/80 mb-4 max-w-2xl mx-auto text-sm leading-relaxed">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
                {/* Project Metrics */}
                {selectedProject.metrics && (
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 max-w-md mx-auto">
                    {Object.entries(selectedProject.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center p-2 sm:p-3 bg-white/5 rounded-lg">
                        <div className="text-cyan-400 font-bold text-sm sm:text-md">{value}</div>
                        <div className="text-white/60 text-xs capitalize">{key.replace("_", " ")}</div>
                      </div>
                    ))}
                  </div>
                )}
                {/* Image counter */}
                {selectedProject.images.length > 1 && (
                  <div className="flex justify-center space-x-2 mb-4">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentImageIndex(index)
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? "bg-cyan-400 scale-125" : "bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {selectedProject.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border-cyan-400/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
