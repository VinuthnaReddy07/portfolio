/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Linkedin,
  Github,
  FileDown,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Cloud,
  Brain,
  Database,
} from 'lucide-react';

const SKILLS = [
  {
    title: "Programming Languages",
    items: ["Python", "SQL"],
  },
  {
    title: "Frameworks",
    items: ["LangChain", "LangGraph", "FastAPI"],
  },
  {
    title: "AWS Cloud",
    items: [
      "Compute",
      "Storage",
      "Databases",
      "Networking",
      "Security",
      "Serverless",
      "Monitoring",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "RAG",
      "LLMs",
      "Embeddings",
      "Prompt Engineering",
      "NLP",
      "Feature Engineering",
      "Multi-Agent Systems",
      "MLOps",
    ],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "CI/CD", "Git", "Jupyter Notebook"],
  },
  {
    title: "Soft Skills",
    items: [
      "Systems Thinking",
      "Technical Communication",
      "Adaptability to Emerging Technologies",
    ],
  },
];

const PROJECTS = [
  {
    title: "Multi-Agent Generative AI System for Coffee Shop Automation",
    category: "Amazon Bedrock · RAG",
    year: "2025",
    seed: "coffee-ai",
    featured: true,
    link: "/projects/coffee-ai/index.html",
    github: "https://github.com/VinuthnaReddy07/Multi-Agent-Generative-AI-System-on-AWS",
    description:
      "Built a multi-agent AI system using Amazon Bedrock with 5 domain agents and supervisor orchestration. Implemented RAG using Amazon S3 and Amazon OpenSearch Serverless, improving response accuracy by around 30%. Integrated Amazon DynamoDB and Amazon Aurora for real-time workflows, reducing manual effort by around 60%.",
    tech:
      "Amazon Bedrock, DynamoDB, Aurora, S3, OpenSearch Serverless, AWS Lambda, Streamlit, Strands SDK, RAG",
  },
  {
    title: "MLOps Pipeline for Customer Churn Prediction",
    category: "Amazon SageMaker · MLOps",
    year: "2025",
    seed: "churn-mlops",
    featured: true,
    github: "https://github.com/VinuthnaReddy07/Customer_churn_prediction_MLOps_pipeline",
    description:
      "Built an end-to-end ML pipeline using Amazon SageMaker Pipelines for data processing, training, evaluation, and deployment. Implemented model versioning and governance with SageMaker Model Registry, improving reproducibility by around 40%. Engineered features using Data Wrangler and Feature Store, reducing manual effort by around 50%.",
    tech:
      "Amazon SageMaker, S3, Data Wrangler, Feature Store, Python, Jupyter Notebook",
  },
  {
    title: "CI/CD Pipeline for ECS Fargate using CodePipeline and CodeDeploy",
    category: "AWS DevOps · Deployment",
    year: "2025",
    seed: "ecs-cicd",
    featured: true,
    link: "/projects/ecs/index.html",
    github: "https://github.com/VinuthnaReddy07/aws-ecs-fargate-cicd-pipeline",
    description:
      "Built an automated CI/CD pipeline using AWS CodePipeline to deploy containerized applications. Configured AWS CodeBuild to build Docker images and push them to Amazon ECR. Deployed applications on Amazon ECS with AWS Fargate using blue/green deployment via AWS CodeDeploy, achieving zero-downtime releases.",
    tech:
      "AWS CodePipeline, CodeBuild, CodeDeploy, ECS Fargate, ECR, Docker",
  },
];

const BUILDS = [
  {
    title: "Secure AI Agent System using Amazon Bedrock Guardrails",
    tag: "Secure GenAI",
    icon: ShieldCheck,
    github: "https://github.com/VinuthnaReddy07",
    points: [
      "Built secure AI agents using Amazon Bedrock Guardrails for input/output filtering and prompt injection protection",
      "Developed and tested workflows in SageMaker Jupyter notebooks with knowledge base integration",
      "Implemented PII masking and content moderation for data security and compliance"
    ],
    tech: "AWS (Bedrock, Guardrails), Lambda, API Gateway, DynamoDB, Python"
  },

  {
    title: "SageMaker MLOps Pipeline with Data Drift Monitoring",
    tag: "MLOps · Monitoring",
    icon: Cloud,
    github: "https://github.com/VinuthnaReddy07",
    points: [
      "Built model monitoring pipeline using SageMaker with data capture and drift detection",
      "Configured real-time alerts using CloudWatch and SNS",
      "Automated retraining using Lambda and Step Functions"
    ],
    tech: "AWS (SageMaker, S3, CloudWatch, SNS, Lambda), Python"
  },

  {
    title: "Data Preparation with SageMaker Data Wrangler & EMR",
    tag: "Data Engineering",
    icon: Database,
    github: "https://github.com/VinuthnaReddy07",
    points: [
      "Performed feature engineering and preprocessing using Data Wrangler",
      "Handled missing values, outliers, encoding and transformations",
      "Integrated Spark on EMR for scalable data processing"
    ],
    tech: "AWS (Data Wrangler, EMR, S3), Python, Spark"
  },

  {
    title: "Model Training using SageMaker XGBoost",
    tag: "ML Training",
    icon: Brain,
    github: "https://github.com/VinuthnaReddy07",
    points: [
      "Trained classification model using built-in XGBoost",
      "Built custom training pipeline using script mode",
      "Improved performance using hyperparameter tuning"
    ],
    tech: "AWS (SageMaker, S3, ECR), Python, XGBoost"
  },

  {
    title: "RBAC-Aware RAG System (Local LLM)",
    tag: "Secure RAG",
    icon: ShieldCheck,
    github: "https://github.com/VinuthnaReddy07",
    points: [
      "Built RAG pipeline with role-based access control",
      "Restricted data access across Finance, Legal, HR",
      "Implemented prompt security and adversarial testing"
    ],
    tech: "Python, FAISS, SentenceTransformers, Ollama (Mistral)"
  }
];

const CERTIFICATIONS = [
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "Scheduled - May",
  },
  {
    title: "AWS Certified ML Associate",
    issuer: "Amazon Web Services",
    date: "Scheduled - May",
  },
  {
    title: "Python Certification",
    issuer: "Kaggle",
    date: "Completed",
  },
];

const ACHIEVEMENTS = [
  {
    title: "AWS Educate Machine Learning Foundations Training Badge",
    desc: "Earned the AWS Educate Machine Learning Foundations Training Badge.",
    year: "Achievement",
  },
  {
    title: "HackerRank SQL Certifications",
    desc: "Earned HackerRank Basic and Intermediate SQL Certifications.",
    year: "Achievement",
  },
  {
    title: "Career Essentials in Data Analysis",
    desc: "Completed Microsoft and LinkedIn Learning Career Essentials in Data Analysis.",
    year: "Achievement",
  },
];

function BuildCard({ build }: { build: any }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = build.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden border border-[var(--color-ink)]/10 bg-[var(--color-ink)]/[0.02] p-6 transition hover:border-brand hover:bg-brand/10"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/30 text-[var(--color-ink)]">
          <Icon size={22} strokeWidth={2} />
        </div>

        <a
          href={build.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-ink)]/10 transition group-hover:bg-brand group-hover:text-white"
        >
          <ExternalLink size={16} />
        </a>
      </div>

      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
        {build.tag}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left"
      >
        <h3 className="mb-3 text-xl font-serif italic transition group-hover:text-brand">
          {build.title}
        </h3>
      </button>

      <p className="mb-4 text-sm leading-relaxed opacity-60">
        {build.points[0]}
      </p>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <ul className="mb-4 list-disc list-inside space-y-2 text-sm leading-relaxed opacity-70">
            {build.points.slice(1).map((point: string, index: number) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <p className="text-[11px] leading-relaxed opacity-50">
            <strong>Tech Stack:</strong> {build.tech}
          </p>
        </motion.div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 hover:text-brand hover:opacity-100"
      >
        {expanded ? "Show Less" : "View Details"}
      </button>
    </motion.div>
  );
}

function ProjectCard({ project }: { project: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group border border-[var(--color-ink)]/20 bg-white/40 p-7 hover:border-brand hover:shadow-lg transition"
    >
      <div className="flex justify-between items-start gap-4 mb-3">
        <h3 className="text-xl font-serif italic font-semibold leading-snug text-[var(--color-ink)]">
          {project.title}
        </h3>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-70 group-hover:opacity-100 transition"
        >
          <ExternalLink size={16} />
        </a>
      </div>

      <p className="text-[10px] uppercase tracking-[0.15em] opacity-70 mb-4">
        {project.category} / {project.year}
      </p>

      <p className="text-sm leading-relaxed opacity-90 mb-4">
        {expanded
          ? project.description
          : project.description.slice(0, 140) + "..."}
      </p>

      {expanded && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="text-[11px] leading-relaxed opacity-75 mb-4"
        >
          <strong>Tech Stack:</strong> {project.tech}
        </motion.p>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60 hover:opacity-100 hover:text-brand transition"
      >
        {expanded ? "Show Less" : "View Details"}
      </button>
    </motion.div>
  );
}

export default function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    document.title = "Vinuthna's Portfolio";
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#projects') {
        setShowAllProjects(true);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div
      className="min-h-screen bg-[var(--color-bg-warm)] text-[var(--color-ink)] selection:bg-brand/30"
      style={{ fontFamily: 'Calibri, Arial, sans-serif' }}
    >
      <nav className="fixed top-0 w-full z-50 px-8 py-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-4 md:gap-0 bg-[var(--color-bg-warm)]/80 backdrop-blur-md">
        <motion.button
          onClick={() => {
            setShowAllProjects(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl md:text-3xl font-serif font-semibold italic tracking-wide text-[var(--color-ink)]"
        >
          Mallu Vinuthna Reddy
        </motion.button>

        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-7 text-[16px] tracking-[0.1em] font-bold uppercase text-[var(--color-ink)]/70">
          {['about', 'skills', 'projects', 'builds', 'certifications', 'achievements'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => {
                if (item === 'projects') {
                  setShowAllProjects(true);
                } else {
                  setShowAllProjects(false);
                }
              }}
              className="hover:text-brand transition-colors"
            >
              {item}
            </a>
          ))}

          <div className="flex items-center gap-4 border-l border-[var(--color-ink)]/10 pl-5 ml-1">
            <a
              href="https://github.com/VinuthnaReddy07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
            >
              <Github size={16} strokeWidth={2.5} />
            </a>

            <a
              href="https://www.linkedin.com/in/malluvinuthnareddy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
            >
              <Linkedin size={16} strokeWidth={2.5} />
            </a>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-brand transition-colors lowercase italic font-serif text-sm font-bold"
          >
            <FileDown size={14} strokeWidth={2.5} />
            open cv
          </a>

          <a
            href="#contact"
            className="bg-brand/40 text-[var(--color-ink)] px-7 py-2.5 hover:bg-brand/60 transition-all font-bold tracking-[0.05em]"
          >
            HIRE ME
          </a>
        </div>
      </nav>

      <main>
        <AnimatePresence mode="wait">
          {showAllProjects ? (
            <motion.div
              key="projects-archive"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="pt-40 pb-24 px-8 md:px-12 lg:px-24 min-h-screen"
            >
              <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
                  <div>
                    <button
                      onClick={() => setShowAllProjects(false)}
                      className="text-[11px] uppercase tracking-[0.2em] font-bold hover:text-brand transition-colors flex items-center gap-2 mb-4 opacity-50"
                    >
                      <ArrowRight size={14} className="rotate-180" /> Back to Home
                    </button>

                    <h2 className="text-6xl font-serif italic text-brand">Full Collection</h2>
                  </div>

                  <div className="text-[11px] uppercase tracking-[0.2em] opacity-40 max-w-xs leading-relaxed">
                    A comprehensive archive of AI, cloud, and MLOps systems built with AWS.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                  {PROJECTS.map((project, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ y: -10 }}
                      className="group"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-2xl font-serif italic mb-2 tracking-tight">
                              {project.title}
                            </h3>
                            <p className="text-[11px] font-bold uppercase tracking-[0.1em] opacity-40">
                              {project.category} // {project.year}
                            </p>
                          </div>

                          <motion.div className="w-10 h-10 rounded-full border border-[var(--color-ink)]/10 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-colors">
                            <ExternalLink size={16} className="opacity-30 group-hover:opacity-100 group-hover:text-white transition-opacity" />
                          </motion.div>
                        </div>

                        <p className="text-sm leading-relaxed opacity-70">
                          {project.description}
                        </p>

                        <p className="text-[11px] leading-relaxed opacity-50">
                          {project.tech}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <>
              <section id="home" className="relative min-h-screen pt-36 pb-20 px-8 md:px-12 lg:px-24">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="relative flex justify-center lg:justify-start">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="absolute -left-6 md:-left-8 -bottom-6 md:-bottom-8 w-40 h-40 md:w-48 md:h-48 bg-brand rounded-full z-0 opacity-80"
                    />

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="relative z-10 w-full max-w-[300px] md:max-w-[340px] lg:max-w-[350px] aspect-[4/5] bg-neutral-200 overflow-hidden arch-frame"
                    >
                      <img
  src="/image.png"
  alt="Vinuthna Reddy"
  className="w-full h-full object-cover object-center"
/>
                    </motion.div>
                  </div>

                  <motion.div
                    className="flex items-center justify-center lg:justify-start text-center lg:text-left"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <h1
                     className="text-base sm:text-lg md:text-xl lg:text-2xl italic leading-relaxed max-w-xl font-normal"
                     style={{ fontFamily: 'calibiri' }}
                    >
                      Hi, I’m Vinuthna. I build AI systems where Generative AI, Machine Learning, and AWS come together.
                      <br />
                      I focus on designing LLM-based applications and RAG systems, thinking through how data, models, and cloud components interact to ensure scalability and performance.
                      <br />
                      I enjoy working on end-to-end AI workflows, from data to deployment, building systems that are reliable, production-ready, and practical in real-world use.
                    </h1>
                  </motion.div>
                </div>
              </section>

              <section
  id="skills"
  className="py-20 px-8 md:px-12 lg:px-24 border-t border-[var(--color-ink)]/10"
>
  <div className="container mx-auto">
    <div className="flex justify-between items-end mb-12">
      <h2 className="text-4xl font-serif italic font-bold text-[var(--color-ink)]">
        Skills
      </h2>

      <div className="text-[11px] uppercase tracking-[0.2em] opacity-50">
        core strengths
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SKILLS.map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8, scale: 1.02 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="p-7 border border-[var(--color-ink)]/20 bg-white/40 hover:border-brand hover:shadow-lg transition min-h-[170px]"
        >
          <h3 className="text-xl font-serif italic mb-5 text-[var(--color-ink)] font-semibold">
            {skill.title}
          </h3>

          <div className="flex flex-wrap gap-3">
            {skill.items.map((item: string, idx: number) => (
              <span
                key={idx}
                className="text-xs px-4 py-1.5 border border-[var(--color-ink)]/20 rounded-full text-[var(--color-ink)] opacity-90 hover:bg-brand hover:text-white transition"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section
  id="education"
  className="py-20 px-8 md:px-12 lg:px-24 border-t border-[var(--color-ink)]/10"
>
  <div className="container mx-auto">

    {/* Heading */}
    <h2 className="text-4xl font-serif italic font-bold mb-12 text-[var(--color-ink)]">
      Education
    </h2>

    {/* Education List */}
    <div className="space-y-8">

      {/* 1 */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-[var(--color-ink)]/10 pb-4">
        <div>
          <p className="font-semibold text-lg text-[var(--color-ink)]">
            Bachelors in Computer Science (BS-4 yrs)
          </p>
          <p className="text-sm opacity-80">
            Vishwa Vishwani Institutions
          </p>
        </div>

        <div className="text-sm opacity-80 mt-2 md:mt-0">
          <p><span className="font-semibold">Percentage:</span> 74.6%</p>
          <p>2021 - 2025</p>
        </div>
      </div>

      {/* 2 */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-[var(--color-ink)]/10 pb-4">
        <div>
          <p className="font-semibold text-lg text-[var(--color-ink)]">
            Board of Intermediate
          </p>
          <p className="text-sm opacity-80">
            Sri Chaitanya Junior College
          </p>
        </div>

        <div className="text-sm opacity-80 mt-2 md:mt-0">
          <p><span className="font-semibold">Percentage:</span> 94.6%</p>
          <p>2019 - 2021</p>
        </div>
      </div>

      {/* 3 */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <p className="font-semibold text-lg text-[var(--color-ink)]">
            Class X, CBSE
          </p>
          <p className="text-sm opacity-80">
            Chaitanya Central School
          </p>
        </div>

        <div className="text-sm opacity-80 mt-2 md:mt-0">
          <p><span className="font-semibold">Percentage:</span> 79%</p>
          <p>2018 - 2019</p>
        </div>
      </div>

    </div>
  </div>
</section>

<section
  id="projects"
  className="py-24 px-8 md:px-12 lg:px-24 border-t border-[var(--color-ink)]/10"
>
  <div className="container mx-auto">
    <div className="flex justify-between items-end mb-16">
      <h2 className="text-4xl font-serif italic font-bold text-[var(--color-ink)]">
        Projects
      </h2>

      <button
        onClick={() => setShowAllProjects(true)}
        className="text-xs uppercase tracking-[0.2em] opacity-70 hover:opacity-100 transition"
      >
        View all projects →
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS.filter((p) => p.featured).map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  </div>
</section>
              <section id="builds" className="py-24 px-8 md:px-12 lg:px-24 border-t border-[var(--color-ink)]/10">
                <div className="container mx-auto">
                  <div className="flex justify-between items-end mb-16">
                    <h2 className="text-4xl font-serif italic font-bold">Builds</h2>
                    <div className="text-[11px] uppercase tracking-[0.2em] opacity-40">
                      focused github work
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {BUILDS.map((build, i) => (
                      <BuildCard key={i} build={build} />
                    ))}
                  </div>
                </div>
              </section>

              <section id="certifications" className="py-24 px-8 md:px-12 lg:px-24 border-t border-[var(--color-ink)]/10 bg-[var(--color-bg-warm)]">
                <div className="container mx-auto">
                  <div className="flex justify-between items-end mb-16">
                    <h2 className="text-4xl font-serif italic font-bold">Certifications</h2>
                    <div className="text-[11px] uppercase tracking-[0.2em] opacity-40">
                      professional milestones
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CERTIFICATIONS.map((cert, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 border border-[var(--color-ink)]/5 bg-[var(--color-ink)]/[0.02] hover:bg-[var(--color-ink)]/[0.04] transition-colors group"
                      >
                        <div className="text-[10px] uppercase tracking-widest opacity-40 mb-4">
                          {cert.issuer}
                        </div>

                        <h3 className="text-xl font-serif italic mb-2 group-hover:text-brand transition-colors">
                          {cert.title}
                        </h3>

                        <div className="text-[10px] opacity-30 italic">{cert.date}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="achievements" className="py-24 px-8 md:px-12 lg:px-24 border-t border-[var(--color-ink)]/10">
                <div className="container mx-auto">
                  <div className="flex justify-between items-end mb-16">
                    <h2 className="text-4xl font-serif italic font-bold">Achievements</h2>
                    <div className="text-[11px] uppercase tracking-[0.2em] opacity-40">
                      impact & recognition
                    </div>
                  </div>

                  <div className="space-y-12">
                    {ACHIEVEMENTS.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-[var(--color-ink)]/5 group cursor-default"
                      >
                        <div className="max-w-2xl">
                          <h3 className="text-2xl font-serif italic mb-2 group-hover:text-brand transition-colors">
                            {achievement.title}
                          </h3>

                          <p className="opacity-60 text-sm leading-relaxed">
                            {achievement.desc}
                          </p>
                        </div>

                        <div className="text-[11px] font-bold tracking-[0.2em] opacity-30 mt-4 md:mt-0">
                          {achievement.year}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="about" className="py-24 bg-[var(--color-ink)] text-[var(--color-bg-warm)] px-8 md:px-12 lg:px-24">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                  <div>
                    <div className="space-y-8 opacity-80 leading-relaxed font-light">
                      <span
                        className="block mb-2 font-semibold text-3xl text-brand"
                        style={{ fontFamily: 'Eras Medium ITC, sans-serif', fontSize: '2rem' }}
                      >
                        About Me
                      </span>

                      <ul
                        className="list-disc list-inside space-y-5 text-lg"
                        style={{ fontFamily: 'Eras Medium ITC, sans-serif', fontSize: '1.25rem' }}
                      >
                        <li>
                          Hi, I’m Vinuthna. I build AI systems where
                          <strong className="text-brand"> Generative AI</strong>,
                          <strong className="text-brand"> Machine Learning</strong>, and
                          <strong className="text-brand"> AWS</strong> come together.
                        </li>

                        <li>
                          My core skills are in
                          <strong className="text-brand"> GenAI</strong>,
                          <strong className="text-brand"> AWS</strong>, and
                          <strong className="text-brand"> ML</strong>—designing LLM-based applications and RAG systems, and thinking through how data, models, and cloud components interact to ensure scalability and performance.
                        </li>

                        <li>
                          I enjoy working on end-to-end AI workflows, from data to deployment, building systems that are reliable, production-ready, and practical in real-world use.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col justify-end lg:items-end">
                    <div className="space-y-12 w-full max-w-sm">
                      <div className="border-b border-[var(--color-bg-warm)]/20 pb-8">
                        <h4 className="text-[10px] uppercase tracking-[0.2em] mb-4 opacity-40">Socials</h4>

                        <div className="flex gap-6">
                          <a
                            href="https://github.com/VinuthnaReddy07"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-brand transition-colors"
                          >
                            <Github size={20} />
                          </a>

                          <a
                            href="https://www.linkedin.com/in/malluvinuthnareddy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-brand transition-colors"
                          >
                            <Linkedin size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="contact" className="py-24 bg-brand/5 px-8 md:px-12 lg:px-24 border-t border-[var(--color-ink)]/10">
                <div className="container mx-auto max-w-4xl text-center">
                  <h2 className="text-5xl font-serif italic mb-8">
                    Ready to build something intelligent?
                  </h2>

                  <p className="text-xl opacity-60 mb-12">
                    I'm currently available for full-time AI, ML, and cloud-focused opportunities.
                  </p>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=vinuthnareddymallu@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[var(--color-ink)] text-[var(--color-bg-warm)] px-12 py-5 font-bold tracking-widest uppercase hover:bg-brand transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </section>
            </>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-16 px-8 md:px-12 lg:px-24 text-[10px] uppercase tracking-[0.2em] font-black opacity-80 flex flex-col md:flex-row justify-between gap-8">
        <div>© 2026 AI Engineering Portfolio</div>

        <div className="flex gap-10 text-[11px] lowercase italic font-serif font-bold">
          <a href="#" className="hover:text-brand transition-colors">privacy policy</a>
          <a href="#" className="hover:text-brand transition-colors">terms of service</a>
        </div>
      </footer>
    </div>
  );
}