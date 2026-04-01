"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, Mail, MapPin, ExternalLink } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaLinkedin } from "react-icons/fa6"
import { cn } from "@/lib/utils"

const GitHubIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const frontendSkills = [
  { name: "HTML5",      level: "Experienced" },
  { name: "CSS3",       level: "Experienced" },
  { name: "Sass",       level: "Intermediate" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React",      level: "Basic" },
  { name: "UX / UI",   level: "Experienced" },
]

const backendSkills = [
  { name: "PHP",        level: "Advanced" },
  { name: "Python",     level: "Intermediate" },
  { name: "Java",       level: "Intermediate" },
  { name: "MySQL",      level: "Intermediate" },
  { name: "WordPress",  level: "Experienced" },
  { name: "Shopify",    level: "Experienced" },
  { name: "Git / GitHub", level: "Advanced" },
  { name: "Figma",      level: "Experienced" },
  { name: "Adobe XD",   level: "Experienced" },
]

const levelColor: Record<string, string> = {
  Advanced:     "bg-primary text-primary-foreground",
  Experienced:  "bg-foreground text-background",
  Intermediate: "bg-muted text-foreground",
  Basic:        "bg-muted/50 text-muted-foreground",
}

const projects = [
  {
    title: "Boro Media",
    description: "Business website built with WordPress — live production site",
    image: "/assets/boromedia.JPG",
    liveUrl: "https://boromediaa.com/",
    githubUrl: null,
    tag: "WordPress",
  },
  {
    title: "Bola Cleaning LLC",
    description: "Business website built with WordPress for a cleaning company",
    image: "/assets/bola.JPG",
    liveUrl: "https://bolacleaningllc.com/",
    githubUrl: null,
    tag: "WordPress",
  },
  {
    title: "Workopia",
    description: "Job listing web application built with PHP & Laravel",
    image: "/assets/workopia.png",
    liveUrl: "https://march141.sg-host.com/",
    githubUrl: null,
    tag: "Laravel",
  },
  {
    title: "Sass Design Project",
    description: "CSS/Sass design experiment — The Unicorn",
    image: "/assets/sass.png",
    liveUrl: "https://theunicornsass.netlify.app/",
    githubUrl: "https://github.com/dineboro/design-beginner",
    tag: "Sass",
  },
]

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export function DesignAgency() {
  const [scrollY, setScrollY] = useState(0)
  const [formSent, setFormSent] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSent(true)
  }

  return (
    <div className="flex flex-col bg-gradient-to-br from-background via-background to-muted/20">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="home" className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 border border-muted rounded-3xl bg-gradient-to-br from-background to-muted/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 md:py-16">

            {/* Text */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="flex flex-col items-center text-center md:items-start md:text-left space-y-5"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center rounded-3xl bg-muted px-3 py-1 text-sm"
                >
                  👋 Open to opportunities
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                >
                  Hello, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                    Dine Boro
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="text-xl font-medium text-foreground/80"
                >
                  Full-Stack Web Developer &amp; UX-Focused Designer
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="max-w-[480px] text-muted-foreground md:text-lg"
                >
                  I build responsive, accessible web applications from front-end interfaces
                  to back-end logic, with a strong focus on clean code, usability, and performance.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <a href="#projects" className={cn(buttonVariants({ size: "lg" }), "rounded-3xl group")}>
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-3xl")}>
                  Contact Me
                </a>
              </motion.div>
            </motion.div>

            {/* Portrait photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <div className="relative">
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-primary/40 -z-10" />
                <div
                  className="relative w-[240px] sm:w-[280px] md:w-[300px] overflow-hidden rounded-2xl border-4 border-muted shadow-xl"
                  style={{ aspectRatio: '3/4' }}
                >
                  <Image
                    src="/assets/about.JPG"
                    alt="Dine Boro"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="container mx-auto px-4 md:px-6 border border-muted rounded-3xl"
        >
          <div className="flex flex-col items-center text-center space-y-3 py-10">
            <div className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm">Explore My</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tools &amp; Experience</h2>
          </div>

          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 pb-12"
          >
            {/* Frontend */}
            <motion.div variants={itemFadeIn} className="rounded-3xl border p-6 bg-background/80">
              <h3 className="text-xl font-bold mb-5">Frontend Development</h3>
              <div className="grid grid-cols-2 gap-3">
                {frontendSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between rounded-xl border px-3 py-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className={cn("text-xs px-2 py-0.5 rounded-full", levelColor[skill.level])}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backend & Tools */}
            <motion.div variants={itemFadeIn} className="rounded-3xl border p-6 bg-background/80">
              <h3 className="text-xl font-bold mb-5">Backend &amp; Tools</h3>
              <div className="grid grid-cols-2 gap-3">
                {backendSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between rounded-xl border px-3 py-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className={cn("text-xs px-2 py-0.5 rounded-full", levelColor[skill.level])}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="container mx-auto px-4 md:px-6 border border-muted rounded-3xl bg-muted/10"
        >
          <div className="flex flex-col items-center text-center space-y-3 py-10">
            <div className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm">Browse My Recent</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
          </div>

          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid gap-6 py-6 sm:grid-cols-2 lg:grid-cols-2"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index} variants={itemFadeIn} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}
                className="rounded-3xl border bg-background overflow-hidden flex flex-col"
              >
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 hover:scale-105" />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">{project.tag}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{project.description}</p>
                  <div className="flex gap-2 pt-1">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className={cn(buttonVariants({ size: "sm", variant: "default" }), "rounded-full gap-1")}>
                        Live Demo <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className={cn(buttonVariants({ size: "sm", variant: "outline" }), "rounded-full gap-1")}>
                        GitHub <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center pb-10">
            <a href="https://github.com/dineboro" target="_blank" rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "rounded-3xl group")}>
              More on GitHub
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="container mx-auto px-4 md:px-6 border border-muted rounded-3xl"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }} className="space-y-5 p-6"
            >
              <div className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm">Get To Know More</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border p-4 text-center">
                  <p className="text-2xl font-bold text-primary">2+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="rounded-2xl border p-4 text-center">
                  <p className="text-2xl font-bold text-primary">A.A.S</p>
                  <p className="text-sm text-muted-foreground">Web App Development</p>
                </div>
              </div>

              <p className="text-muted-foreground md:text-lg/relaxed">
                I&apos;m Nourou Dine Chabi Boro, a full-stack web developer and UX-focused designer
                based in Cedar Rapids, Iowa. I build responsive, accessible web applications from
                front-end interfaces to back-end logic, with a strong focus on clean code, usability,
                and performance.
              </p>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Currently pursuing an A.A.S in Web Application Development at Kirkwood Community
                College, alongside Java Programming and Web Development certificates. I use tools
                like Figma and Adobe XD to turn ideas and user research into working products.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <a href="#contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-3xl")}>
                  Contact Me
                </a>
                <a href="https://www.linkedin.com/in/dineboro/" target="_blank" rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-3xl")}>
                  LinkedIn
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }} className="flex items-center justify-center p-6"
            >
              <div className="relative">
                {/* Decorative offset border */}
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-primary/40 -z-10" />
                {/* Photo frame */}
                <div className="relative w-[260px] md:w-[300px] overflow-hidden rounded-2xl border-4 border-muted shadow-xl" style={{ aspectRatio: '3/4' }}>
                  <Image
                    src="/assets/about.JPG"
                    alt="Dine Boro"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
          className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 border border-muted rounded-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }} className="space-y-5 p-6"
          >
            <div className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm">Get in Touch</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Contact Me</h2>
            <p className="max-w-[500px] text-muted-foreground md:text-lg/relaxed">
              Have a project in mind or just want to say hi? I&apos;d love to hear from you.
            </p>

            <div className="space-y-4 mt-2">
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <div className="rounded-2xl bg-muted p-2">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a href="mailto:dineboro.db@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    dineboro.db@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <div className="rounded-2xl bg-muted p-2">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Cedar Rapids, Iowa</p>
                </div>
              </motion.div>
            </div>

            <div id="socials" className="flex gap-3 pt-2">
              <motion.a
                href="https://www.linkedin.com/in/dineboro/" target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }} whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center rounded-2xl border p-2.5 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/dineboro" target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }} whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center rounded-2xl border p-2.5 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }} className="rounded-3xl border bg-background p-6 shadow-sm m-6"
          >
            <h3 className="text-xl font-bold">Send a Message</h3>
            <p className="text-sm text-muted-foreground mt-1">I&apos;ll get back to you as soon as possible.</p>
            {formSent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex flex-col items-center justify-center gap-3 py-12 text-center"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <h4 className="text-lg font-semibold">Message sent!</h4>
                <p className="text-sm text-muted-foreground">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                <button onClick={() => setFormSent(false)} className="text-sm text-primary underline underline-offset-4 mt-2">
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleFormSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                    <Input id="first-name" placeholder="Your first name" className="rounded-2xl" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                    <Input id="last-name" placeholder="Your last name" className="rounded-2xl" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" className="rounded-2xl" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[120px] rounded-2xl" required />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full rounded-2xl">Send Message</Button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </motion.div>
      </section>

    </div>
  )
}
