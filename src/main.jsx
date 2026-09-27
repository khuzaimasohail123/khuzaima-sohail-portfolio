import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Code2, Database, Download, ExternalLink, Github,
GraduationCap, Linkedin, Mail, Menu, MessageCircle, Moon, Smartphone,
Sun, UserRound, X, Zap
} from "lucide-react";
import "./styles.css";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/khuzaima-sohail-782020372",
  github: "https://github.com/Khuzaimasohail123",
  innoplanner: "https://github.com/Khuzaimasohail123/InnoPlanner-",
  MessageCircle: "https://wa.me/923430379143"
};

const skills = [
  { name: "Flutter", icon: Smartphone },
  { name: "Dart", icon: Code2 },
  { name: "Firebase", icon: Zap },
  { name: "SQLite", icon: Database },
  { name: "Git & GitHub", icon: Github },
  { name: "Responsive UI", icon: Code2 },
  { name: "REST APIs", icon: Code2 },
  { name: "Problem Solving", icon: Zap }
];

const projects = [
  {
    number: "01",
    title: "InnoPlanner",
    type: "Final Year Project",
    description:
      "A cross-platform Flutter application for interior and exterior design planning, combining interactive planning tools, local storage, and AI-assisted design concepts.",
    tags: ["Flutter", "Dart", "Firebase", "SQLite", "AI"],
    link: LINKS.innoplanner
  },
  {
    number: "02",
    title: "Personal Portfolio",
    type: "Web Project",
    description:
      "A responsive developer portfolio designed to present my skills, education, experience, projects, and professional links in one place.",
    tags: ["React", "Vite", "CSS", "Responsive"],
    link: LINKS.github
  }
];

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const sections = ["home", "about", "skills", "experience", "projects", "contact"];
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.2, 0.5] }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <div className="site">
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => go("home")} aria-label="Go home">
            <span className="brand-mark">KS</span>
            <span>Khuzaima<span className="accent">.</span></span>
          </button>

          <div className={`nav-links ${menu ? "open" : ""}`}>
            {["home", "about", "skills", "experience", "projects", "contact"].map(item => (
              <button
                key={item}
                className={active === item ? "active" : ""}
                onClick={() => go(item)}
              >
                {item}
              </button>
            ))}
            <a className="nav-linkedin" href={LINKS.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>

          <div className="nav-actions">
            <button className="icon-btn" onClick={() => setDark(v => !v)} aria-label="Toggle theme">
              {dark ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <button className="menu-btn" onClick={() => setMenu(v => !v)} aria-label="Toggle menu">
              {menu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" /> Available for opportunities</div>
              <p className="hello">Hello, I'm</p>
              <h1>Khuzaima <span>Sohail</span></h1>
              <h2>Software Engineer &amp; <span>Flutter Developer</span></h2>
              <p className="hero-text">
                I build clean, practical and responsive applications with Flutter,
                modern UI principles, Firebase and local data solutions.
              </p>
              <div className="hero-buttons">
                <button className="primary-btn" onClick={() => go("projects")}>
                  View My Work <ArrowUpRight size={18} />
                </button>
                <a className="secondary-btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
              <div className="quick-links">
                <a href={LINKS.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
                <button onClick={() => go("contact")}><Mail size={18} /> Contact</button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="glow glow-one" />
              <div className="glow glow-two" />
              <div className="profile-frame">
                <div className="profile-top">
                  <span>PORTFOLIO / 2026</span>
                  <span>KS</span>
                </div>
                <div className="profile-photo-wrap">
                  <img src="/profile.png.jpeg" alt="Khuzaima Sohail" className="profile-photo" />
                </div>
                <div className="profile-bottom">
                  <div>
                    <strong>Khuzaima Sohail</strong>
                    <span>Software Engineer</span>
                  </div>
                  <span className="available">● Open</span>
                </div>
              </div>
            </div>
          </div>
          <button className="scroll-cue" onClick={() => go("about")}>Scroll to explore <span>↓</span></button>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">01 / About</p>
              <h2>A developer focused on <span>building useful things.</span></h2>
            </div>
            <div className="about-grid">
              <div className="about-card large-card">
                <UserRound size={28} />
                <h3>Who I am</h3>
                <p>
                  I am a Software Engineering graduate with a strong interest in mobile
                  application development. My main focus is Flutter and Dart, with practical
                  experience building user interfaces, handling local data, and connecting
                  applications with cloud services.
                </p>
                <p>
                  I enjoy turning ideas into simple, usable products and continuously improving
                  my development and problem-solving skills.
                </p>
              </div>
              <div className="about-side">
                <div className="mini-card">
                  <GraduationCap size={25} />
                  <div><span>Education</span><strong>BS Software Engineering</strong><small>GCUF · 2022–2026</small></div>
                </div>
                <div className="mini-card">
                  <Code2 size={25} />
                  <div><span>Primary Stack</span><strong>Flutter + Dart</strong><small>Mobile application development</small></div>
                </div>
                <div className="mini-card">
                  <Zap size={25} />
                  <div><span>Based in</span><strong>Lahore, Pakistan</strong><small>Open to junior opportunities</small></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">02 / Skills</p>
              <h2>Tools I use to <span>turn ideas into apps.</span></h2>
            </div>
            <div className="skills-grid">
              {skills.map(({ name, icon: Icon }) => (
                <div className="skill-card" key={name}>
                  <div className="skill-icon"><Icon size={22} /></div>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <div className="section-head">
              <p className="section-kicker">03 / Experience</p>
              <h2>Experience that shaped my <span>professional skills.</span></h2>
            </div>
            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-date">6 MONTHS</div>
                <div className="timeline-content">
                  <p className="company">Homyfy.pk</p>
                  <h3>Customer Support Executive</h3>
                  <p>
                    Handled customer calls and inquiries, order confirmations and complaints,
                    CRM updates, customer relationships, and day-to-day coordination while
                    following company SOPs and working with the team to improve customer satisfaction.
                  </p>
                  <div className="tags"><span>Customer Support</span><span>CRM</span><span>Communication</span><span>Problem Solving</span></div>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-date">2022–2026</div>
                <div className="timeline-content">
                  <p className="company">GCUF</p>
                  <h3>BS Software Engineering</h3>
                  <p>
                    Developed software engineering foundations through coursework and practical
                    projects, with a major focus on mobile application development through the
                    InnoPlanner final year project.
                  </p>
                  <div className="tags"><span>Software Engineering</span><span>Flutter</span><span>FYP</span></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="container">
            <div className="section-head row-head">
              <div>
                <p className="section-kicker">04 / Projects</p>
                <h2>Selected work &amp; <span>things I've built.</span></h2>
              </div>
              <a className="text-link" href={LINKS.github} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={17} /></a>
            </div>
            <div className="project-grid">
              {projects.map(project => (
                <article className="project-card" key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                    Open project <ExternalLink size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-card">
            <div>
              <p className="section-kicker">05 / Contact</p>
              <h2>Let's build something <span>useful.</span></h2>
              <p className="contact-text">
                I’m open to junior Flutter opportunities, internships, freelance work,
                and interesting software projects.
              </p>
            </div>
            <div className="contact-actions">
              <a className="primary-btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} /> Connect on LinkedIn
              </a>
              <a className="secondary-btn" href={LINKS.github} target="_blank" rel="noreferrer">
                <Github size={18} /> View GitHub
              </a>
              <a className="secondary-btn" href={LINKS.MessageCircle} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Chat on MessageCircle
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Khuzaima Sohail</span>
          <span>Designed &amp; built with React.</span>
          <div className="footer-links">
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a href={LINKS.MessageCircle} target="_blank" rel="noreferrer" aria-label="MessageCircle"><MessageCircle size={17} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);