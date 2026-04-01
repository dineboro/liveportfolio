import React from "react"
import { Home, FolderKanban, Share2, User, Mail } from "lucide-react"
import { FaLinkedin } from "react-icons/fa6"

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const navLinks = [
  { label: "Home",     href: "#home",     icon: <Home size={14} /> },
  { label: "Projects", href: "#projects", icon: <FolderKanban size={14} /> },
  { label: "Socials",  href: "#socials",  icon: <Share2 size={14} /> },
  { label: "Github",   href: "#github",   icon: <GitHubIcon /> },
  { label: "About",    href: "#about",    icon: <User size={14} /> },
  { label: "Contact",  href: "#contact",  icon: <Mail size={14} /> },
]

const socialLinks = [
  { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/dineboro/", label: "LinkedIn" },
  { icon: <GitHubIcon />,           href: "https://github.com/dineboro",           label: "GitHub" },
]

export function Footer7() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">ND</span>
              </div>
              <span className="text-xl font-semibold text-foreground">Nourou Dine</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Full-stack web developer &amp; UX designer based in Cedar Rapids, Iowa.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="hover:text-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Dine Boro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
