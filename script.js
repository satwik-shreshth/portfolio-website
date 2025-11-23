// ---------- Portfolio Data (from your resume) ----------
const portfolioData = {
  name: "Satwik Shreshth",
  title: "Software Developer",
  location: "Gaya, Bihar",
  email: "satwikshreshth2002@gmail.com",
  phone: "+91 72600 91323",
  links: {
    linkedin:
      "https://www.linkedin.com/in/satwik-shreshth-5310372b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/satwik-shreshth",
    portfolio: "https://satwik-shreshth.github.io/Satwik-Portolio/",
    resume:
      "https://drive.google.com/file/d/1sQ3UfSMGn2rYDhONTGmJTBT4BRqf0V9y/view?usp=drive_link"
  },
  skills: [
    {
      category: "Programming Languages",
      items: ["C", "C++", "Java", "Python", "HTML", "CSS", "JavaScript"]
    },
    {
      category: "Databases",
      items: ["Oracle 11g"]
    },
    {
      category: "Tools & Technologies",
      items: [
        "Visual Studio",
        "Jupyter Notebook",
        "Google Colab",
        "Git & GitHub",
        "MS-Office",
        "GEE",
        "QGIS"
      ]
    },
    {
      category: "Core Competencies",
      items: [
        "Software Development",
        "Data Analysis",
        "Image Classification",
        "GIS-based Modelling"
      ]
    }
  ],
  projects: [
    {
      title: "Satellite-Based Land Use / Land Cover Analysis Using Random Forest",
      type: ["ml", "remote-sensing"],
      description:
        "Developed a satellite-based LULC classification workflow using Random Forest on multispectral imagery. Integrated pre-processing, feature extraction, and classifier tuning to generate accurate thematic maps.",
      tech: ["Python", "Random Forest", "Remote Sensing", "GIS"],
      role:
        "Designed and implemented the classification pipeline, from data preparation to accuracy assessment.",
      github: "",
      demo: ""
    },
    {
      title: "Image-to-Sketch Generation Using U-Net Convolutional Neural Network",
      type: ["ml"],
      description:
        "Implemented a U-Net based deep learning model that converts natural images into sketch-like representations, leveraging encoder–decoder architecture and skip connections for structural preservation.",
      tech: ["Python", "U-Net", "Deep Learning", "Image Processing"],
      role:
        "Built and trained the model, handled data augmentation, and evaluated visual quality and structural consistency.",
      github: "",
      demo: ""
    },
    {
      title: "Interactive Portfolio Website",
      type: ["web"],
      description:
        "Designed and developed a fully responsive personal portfolio to showcase projects, education, and experience with animated UI elements and modern aesthetics.",
      tech: ["HTML", "CSS", "JavaScript"],
      role:
        "Implemented layout, animations, and interaction logic using vanilla JavaScript and CSS.",
      github: "https://github.com/satwik-shreshth/Satwik-Portolio",
      demo: "https://satwik-shreshth.github.io/Satwik-Portolio/"
    },
    {
      title: "NDWI-Based Water Bodies Mapping Using Satellite Imagery",
      type: ["remote-sensing", "ml"],
      description:
        "Applied the Normalized Difference Water Index (NDWI) to multispectral satellite imagery to automatically detect and map surface water bodies, supporting hydrological and environmental analysis.",
      tech: ["NDWI", "Remote Sensing", "Python", "GIS"],
      role:
        "Processed imagery, computed NDWI, and post-processed results for cartographic visualization and validation.",
      github: "",
      demo: ""
    }
  ],
  experiences: [
    {
      category: "Research Experience",
      items: [
        {
          title: "Intern – Remote Sensing and GIS",
          org: "India Space Academy",
          period: "Jul 2025 – Aug 2025",
          description:
            "Worked on Land Use / Land Cover classification and water body mapping using NDWI. Involved in satellite data preprocessing, applying classification algorithms, and interpreting geospatial outputs."
        }
      ]
    },
    {
      category: "Work Experience",
      items: [
        {
          title: "Technical Representative / Exam Operations",
          org: "Bytes Softech Pvt. Ltd. (C-DAC ATC Delhi)",
          period: "Feb 2024 – Aug 2024",
          description:
            "Conducted and supported large-scale examinations including AFCAT, Agniveer Vayu, and ICG as technical representative. Gained experience in software handling, database management, coordination, and real-time system troubleshooting."
        }
      ]
    },
    {
      category: "Leadership & Activities",
      items: [
        {
          title: "Team Representative, Bihar (NSS) – 23rd National Youth Festival",
          org: "Lucknow",
          period: "Jan 2020",
          description:
            "Volunteered and served as team representative for the Bihar contingent at the 23rd National Youth Festival, contributing to coordination and cultural exchange."
        },
        {
          title: "Team Representative, Bihar (NSS) – National Integration Camp",
          org: "Vinoba Bhave University, Hazaribagh",
          period: "March-2020",
          description:
            "Participated in inter-state cultural exchange and led social awareness activities promoting national integration and teamwork."
        },
        {
          title: "NSS Volunteer",
          org: "National Service Scheme",
          period: "2019 – 2026",
          description:
            "Actively engaged in community outreach, social service activities, and campus initiatives under NSS."
        },
        {
          title: "Member – Cultural Committee",
          org: "Sikkim University Students Association (SUSA)",
          period: "2024 – 2025",
          description:
            "Organized and coordinated multiple cultural events within the university, enhancing student engagement and campus culture."
        }
      ]
    }
  ],
  education: [
    {
      degree: "Master of Computer Application (MCA)",
      inst: "Sikkim University, Sikkim",
      period: "Sept 2024 – Present",
      score: "CGPA (1st Year): 8.25"
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      inst: "Magadh University, Bodhgaya, Bihar",
      period: "Jul 2019 – Apr 2022",
      score: "70.06%"
    },
    {
      degree: "Intermediate of Science (BSEB)",
      inst: "A.M. College, Gaya",
      period: "2017 – 2019",
      score: "66%"
    },
    {
      degree: "Matriculation (JAC)",
      inst: "S.S.H.S. Pandeypura",
      period: "2016 – 2017",
      score: "81%"
    }
  ],
  socials: [
    {
      name: "Email",
      url: "mailto:satwikshreshth2002@gmail.com",
      icon: "✉️",
      platform: "email",
      description: "Send me an email"
    },
    {
      name: "WhatsApp",
      url:
        "https://wa.me/917260091323?text=Hi%20Satwik%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect%21",
      icon: "💬",
      platform: "whatsapp",
      description: "Chat on WhatsApp"
    },
    {
      name: "LinkedIn",
      url:
        "https://www.linkedin.com/in/satwik-shreshth-5310372b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: "💼",
      platform: "linkedin",
      description: "View my professional profile"
    },
    {
      name: "GitHub",
      url: "https://github.com/satwik-shreshth",
      icon: "🐙",
      platform: "github",
      description: "Explore my repositories"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/satwik.shreshth.777",
      icon: "📘",
      platform: "facebook",
      description: "Connect on Facebook"
    },
    {
      name: "Instagram",
      url:
        "https://www.instagram.com/satwik_shreshth?igsh=MTFqb3k4aG96Y3Vr",
      icon: "📸",
      platform: "instagram",
      description: "Follow me on Instagram"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/satwikshreshth",
      icon: "🐦",
      platform: "twitter",
      description: "Follow me on Twitter"
    },
    {
      name: "Resume (PDF)",
      url:
        "https://drive.google.com/file/d/1sQ3UfSMGn2rYDhONTGmJTBT4BRqf0V9y/view?usp=drive_link",
      icon: "📄",
      platform: "resume",
      description: "Download my latest resume"
    },
    {
      name: "Portfolio",
      url: "https://satwik-shreshth.github.io/Satwik-Portolio/",
      icon: "🌐",
      platform: "web",
      description: "Original portfolio version"
    }
  ]
};

// ------------ Portfolio App ------------
class PortfolioApp {
  constructor() {
    this.currentSection = "home";
    this.intersectionObserver = null;
    this.particles = [];
    this.clickSound = null;
    this.init();
  }

  async init() {
    this.setupClickSound();
    await this.simulateLoading();
    this.setupEventListeners();
    this.setupIntersectionObserver();
    this.renderSkills();
    this.renderProjects();
    this.renderExperience();
    this.renderEducation();
    this.renderSocialLinks();
    this.setupThemeToggle();
    this.setupContactForm();
    this.startAnimations();
    this.setupScrollEffects();
    this.createParticleSystem();
    this.setFooterYear();
  }

  setupClickSound() {
    try {
      // optional: add small click.mp3 next to your js
      this.clickSound = new Audio("click.mp3");
    } catch {
      this.clickSound = null;
    }
  }

  playClickSound() {
    if (!this.clickSound) return;
    try {
      this.clickSound.currentTime = 0;
      this.clickSound.play().catch(() => {});
    } catch {}
  }

  async simulateLoading() {
    return new Promise((resolve) => {
      const loader = document.getElementById("loader");
      setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.style.display = "none";
          resolve();
        }, 500);
      }, 1200);
    });
  }

  setupEventListeners() {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const navMenu = document.getElementById("navMenu");

    if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        mobileMenuBtn.textContent = navMenu.classList.contains("active")
          ? "✕"
          : "☰";
        this.playClickSound();
      });
    }

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        if (!target) return;

        e.preventDefault();
        const headerHeight = document.getElementById("header").offsetHeight;

        window.scrollTo({
          top: target.offsetTop - headerHeight + 1,
          behavior: "smooth"
        });

        navMenu?.classList.remove("active");
        if (mobileMenuBtn) mobileMenuBtn.textContent = "☰";
        this.playClickSound();
      });
    });

    const scrollTopBtn = document.getElementById("scrollTop");
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        this.playClickSound();
      });
    }

    window.addEventListener("scroll", () => {
      this.handleScroll();
      this.handleParallax();
    });

    this.startTypingEffect();
  }

  setupIntersectionObserver() {
    const options = {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px"
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          const sectionId = entry.target.id;
          if (sectionId) this.updateActiveNavLink(sectionId);
        }
      });
    }, options);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      this.intersectionObserver.observe(el);
    });

    document.querySelectorAll("section[id]").forEach((section) => {
      this.intersectionObserver.observe(section);
    });
  }

  updateActiveNavLink(id) {
    document
      .querySelectorAll(".nav-link")
      .forEach((link) => link.classList.remove("active"));

    const active = document.querySelector(`.nav-link[href="#${id}"]`);
    if (active) active.classList.add("active");
    this.currentSection = id;
  }

  handleScroll() {
    const header = document.getElementById("header");
    const scrollTopBtn = document.getElementById("scrollTop");
    const y = window.scrollY || window.pageYOffset;

    if (y > 90) {
      header.classList.add("scrolled");
      scrollTopBtn.classList.add("visible");
    } else {
      header.classList.remove("scrolled");
      scrollTopBtn.classList.remove("visible");
    }
  }

  handleParallax() {
    const scrolled = window.scrollY;
    const hero = document.querySelector(".hero");
    if (!hero) return;
    if (scrolled < hero.offsetHeight) {
      hero.style.transform = `translate3d(0, ${scrolled * -0.25}px, 0)`;
    }
  }

  renderSkills() {
    const grid = document.getElementById("skillsGrid");
    if (!grid) return;

    grid.innerHTML = portfolioData.skills
      .map(
        (group) => `
      <article class="skill-card">
        <h3>${group.category}</h3>
        <div class="skill-pill-row">
          ${group.items
            .map((skill) => `<span class="skill-pill">${skill}</span>`)
            .join("")}
        </div>
      </article>`
      )
      .join("");

    // subtle fade-in
    document.querySelectorAll(".skill-card").forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(25px)";
      setTimeout(() => {
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 120 * index);
    });
  }

  renderProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    const renderCards = (filter) => {
      const filtered =
        filter === "all"
          ? portfolioData.projects
          : portfolioData.projects.filter((p) => p.type.includes(filter));

      if (!filtered.length) {
        grid.innerHTML =
          '<p style="text-align:center;color:var(--text-secondary);font-size:0.9rem;">No projects in this category yet.</p>';
        return;
      }

      grid.innerHTML = filtered
        .map(
          (p) => `
        <article class="project-card" data-types="${p.type.join(",")}">
          <div class="project-badge-row">
            ${p.type
              .map((t) => `<span class="project-badge">${this.mapType(t)}</span>`)
              .join("")}
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-meta">
            <span>Role: ${p.role}</span>
          </div>
          <div class="project-badge-row">
            ${p.tech
              .map((tech) => `<span class="project-badge">${tech}</span>`)
              .join("")}
          </div>
          <div class="project-links">
            ${
              p.github
                ? `<a href="${p.github}" target="_blank" class="project-link-btn">🐙 GitHub</a>`
                : ""
            }
            ${
              p.demo
                ? `<a href="${p.demo}" target="_blank" class="project-link-btn">🔗 Live Demo</a>`
                : ""
            }
          </div>
        </article>`
        )
        .join("");
    };

    renderCards("all");

    // filter buttons
    document.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        document
          .querySelectorAll(".filter-chip")
          .forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        const filter = chip.getAttribute("data-filter");
        renderCards(filter);
        this.playClickSound();
      });
    });
  }

  mapType(type) {
    switch (type) {
      case "ml":
        return "Machine Learning / Deep Learning";
      case "remote-sensing":
        return "Remote Sensing & GIS";
      case "web":
        return "Web Development";
      default:
        return type;
    }
  }

  renderExperience() {
    const container = document.getElementById("experienceContainer");
    if (!container) return;

    container.innerHTML = portfolioData.experiences
      .map(
        (group) => `
      <section class="experience-category">
        <h3>${group.category}</h3>
        <div class="experience-grid">
          ${group.items
            .map(
              (item) => `
            <article class="experience-item">
              <div class="experience-header">
                <div>
                  <h4 class="experience-title">${item.title}</h4>
                  <p class="experience-org">${item.org}</p>
                </div>
                <span class="experience-date">${item.period}</span>
              </div>
              <p class="experience-description">${item.description}</p>
            </article>`
            )
            .join("")}
        </div>
      </section>`
      )
      .join("");
  }

  renderEducation() {
    const timeline = document.getElementById("educationTimeline");
    if (!timeline) return;

    timeline.innerHTML = portfolioData.education
      .map(
        (edu) => `
      <div class="edu-item">
        <div class="edu-dot"></div>
        <div class="edu-card">
          <div class="edu-degree">${edu.degree}</div>
          <div class="edu-inst">${edu.inst}</div>
          <div class="edu-meta">${edu.period} · ${edu.score}</div>
        </div>
      </div>`
      )
      .join("");
  }

  renderSocialLinks() {
    const container = document.getElementById("socialLinks");
    if (!container) return;

    container.innerHTML = portfolioData.socials
      .map(
        (s) => `
      <a href="${s.url}" target="_blank" class="social-link" data-platform="${s.platform}">
        <div class="social-icon">${s.icon}</div>
        <div class="social-details">
          <h4>${s.name}</h4>
          <p>${s.description}</p>
        </div>
      </a>`
      )
      .join("");

    // ripple effect
    document.querySelectorAll(".social-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        this.playClickSound();

        const rect = link.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const ripple = document.createElement("span");
        ripple.style.position = "absolute";
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,0.25)";
        ripple.style.pointerEvents = "none";
        ripple.style.transform = "scale(0)";
        ripple.style.opacity = "0.9";
        ripple.style.transition = "transform 0.4s ease, opacity 0.4s ease";

        link.appendChild(ripple);
        requestAnimationFrame(() => {
          ripple.style.transform = "scale(1)";
          ripple.style.opacity = "0";
        });

        setTimeout(() => ripple.remove(), 450);
      });
    });
  }

  setupThemeToggle() {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;

    const root = document.documentElement;
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      root.classList.add("light-theme");
      btn.textContent = "☀️";
    } else {
      btn.textContent = "🌙";
    }

    btn.addEventListener("click", () => {
      const isLight = root.classList.toggle("light-theme");
      btn.textContent = isLight ? "☀️" : "🌙";
      localStorage.setItem("theme", isLight ? "light" : "dark");
      this.playClickSound();
    });
  }

  setupContactForm() {
    const form = document.getElementById("contactForm");
    const statusEl = document.getElementById("formStatus");
    if (!form || !statusEl) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const name = (data.get("name") || "").trim();
      const email = (data.get("email") || "").trim();
      const subject = (data.get("subject") || "").trim();
      const message = (data.get("message") || "").trim();

      if (!name || !email || !subject || !message) {
        statusEl.textContent = "Please fill in all required fields.";
        statusEl.className = "form-status error";
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        statusEl.textContent = "Please enter a valid email address.";
        statusEl.className = "form-status error";
        return;
      }

      const mailSubject = encodeURIComponent(
        `Portfolio contact from ${name}: ${subject}`
      );
      const bodyLines = [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message
      ];
      const mailBody = encodeURIComponent(bodyLines.join("\n"));

      window.location.href = `mailto:${portfolioData.email}?subject=${mailSubject}&body=${mailBody}`;
      statusEl.textContent = "Opening your email app…";
      statusEl.className = "form-status success";
      form.reset();
      this.playClickSound();
    });
  }

  startTypingEffect() {
    const subtitle = document.querySelector(".hero-subtitle");
    if (!subtitle) return;

    const texts = [
      "Software Developer",
      "MCA Student at Sikkim University",
      "Machine Learning & Deep Learning Enthusiast",
      "Image Processing & Remote Sensing Learner",
      "IoT & GIS Explorer"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const current = texts[textIndex];

      if (isDeleting) {
        subtitle.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        subtitle.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === current.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 1200);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }

      const speed = isDeleting ? 50 : 120;
      setTimeout(type, speed);
    };

    setTimeout(type, 700);
  }

  startAnimations() {
    const logo = document.getElementById("logo");
    if (logo) {
      logo.addEventListener("mouseenter", () => {
        logo.style.background =
          "linear-gradient(45deg, #f093fb, #f97373, #f59e0b)";
        logo.style.webkitBackgroundClip = "text";
      });
      logo.addEventListener("mouseleave", () => {
        logo.style.background =
          "linear-gradient(45deg, var(--primary), var(--accent))";
        logo.style.webkitBackgroundClip = "text";
      });
    }
  }

  setupScrollEffects() {
    document
      .querySelectorAll('a[href^="#"]')
      .forEach((anchor) =>
        anchor.addEventListener("click", (e) => {
          const target = document.querySelector(
            anchor.getAttribute("href")
          );
          if (!target) return;
          e.preventDefault();
          const headerHeight = document.getElementById("header").offsetHeight;
          window.scrollTo({
            top: target.offsetTop - headerHeight + 1,
            behavior: "smooth"
          });
        })
      );
  }

  createParticleSystem() {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "-1";
    canvas.style.opacity = "0.35";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // build particles
    for (let i = 0; i < 60; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2.2 + 0.8,
        opacity: Math.random() * 0.6 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(102,126,234,${p.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }

  setFooterYear() {
    const el = document.getElementById("footerYear");
    if (el) {
      el.textContent = new Date().getFullYear();
    }
  }
}

// ------------ Init ------------
document.addEventListener("DOMContentLoaded", () => {
  new PortfolioApp();

  console.log(`
✨ Welcome to Satwik's Portfolio (Console View)
• Stack: HTML + CSS + Vanilla JS
• Features: Dark/Light theme, animated sections, project filters, particle background.
Explore the code and enjoy!
  `);

  // Konami easter egg
  const sequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA"
  ];
  let buffer = [];

  document.addEventListener("keydown", (e) => {
    buffer.push(e.code);
    if (buffer.length > sequence.length) buffer.shift();
    if (JSON.stringify(buffer) === JSON.stringify(sequence)) {
      document.body.style.transition = "transform 1.2s ease";
      document.body.style.transform = "rotate(360deg)";
      setTimeout(() => {
        document.body.style.transform = "";
        alert("🎉 Konami code unlocked!");
      }, 1400);
    }
  });
});

// Optional service worker (ignored if not present)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
