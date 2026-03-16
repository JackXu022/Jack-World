const siteContent = {
  hero: {
    status: "Software engineer focused on scalable platforms and applied AI",
    name: "Jack Xu",
    title: "Backend and full-stack engineer building scalable software and practical AI systems.",
    summary:
      "I work on security-sensitive platform engineering across Microsoft 365 access management, large-scale commerce infrastructure, and product-focused backend systems. This site keeps the strongest signals up front: experience, projects, and a direct path to contact.",
    primaryCta: {
      label: "View Experience",
      href: "#experience",
    },
    secondaryCta: {
      label: "Email Me",
      href: "mailto:jackxu039@gmail.com",
    },
    stats: [
      { value: "50K+", label: "Daily Graph API traffic owned end-to-end" },
      { value: "JIT / JEA", label: "Security access concepts in daily work" },
      { value: ".NET + Azure", label: "Current production stack" },
    ],
    highlightQuote: "Build useful systems.",
    quickFacts: [
      { label: "Based In", value: "Bothell, Washington" },
      { label: "Email", value: "jackxu039@gmail.com" },
      { label: "Focus", value: "Security, platform, backend systems" },
      { label: "Stack", value: "C#, .NET, Azure, Java" },
    ],
  },
  about: {
    heading: "About",
    title: "How I work.",
    text:
      "I work across backend infrastructure, security-focused platform engineering, and product delivery. My recent work centers on Microsoft 365 access management, just-in-time and just-enough access concepts, and a Graph API serving more than 50,000 requests a day end-to-end.",
    tags: ["Access management", "Distributed systems", "API ownership", "Production pragmatism"],
  },
  education: {
    heading: "Education",
    title: "Built on fundamentals.",
    items: [
      {
        school: "Cornell University",
        location: "Ithaca, NY",
        degree: "Master of Engineering in Electrical and Computer Engineering",
        meta: "Aug 2019 - Dec 2020",
        detail:
          "GPA 3.81/4.0. Coursework included Operating Systems, Introduction to Database Systems, Cloud Computing, and Machine Learning.",
      },
      {
        school: "University of Bridgeport",
        location: "Bridgeport, CT",
        degree: "Bachelor of Science in Electrical Engineering",
        meta: "Aug 2017 - May 2019",
        detail: "GPA 3.935/4.0.",
      },
      {
        school: "Wuhan University of Science and Technology",
        location: "Wuhan, China",
        degree: "Bachelor of Science in Electrical Engineering",
        meta: "Aug 2015 - May 2017",
        detail: "GPA 3.77/4.0, Rank 2/80.",
      },
    ],
  },
  experience: {
    heading: "Experience",
    title: "Where I’ve worked.",
    items: [
      {
        role: "Software Engineer II",
        company: "Microsoft",
        period: "Jun 2024 - Present",
        summary:
          "Develop features for Microsoft 365 access management with a focus on security, just-in-time access, and just-enough access. Own a Graph API end-to-end that handles more than 50,000 requests per day, using .NET, C#, and Azure in daily production work.",
        bullets: [".NET", "C#", "Azure", "Graph API", "Access management"],
      },
      {
        role: "Software Engineer II",
        company: "Flexport",
        period: "Aug 2021 - Mar 2024",
        summary:
          "Improved and maintained a system that imports and manages more than 15 million active products. Automated classification workflows in the app, built client-specific self-service features, and cut landing-page query latency from 15 seconds to 800 milliseconds.",
        bullets: ["Java", "Node.js", "React", "Algolia Search"],
      },
      {
        role: "Software Engineer I",
        company: "Oracle Cerner",
        period: "Feb 2021 - Aug 2021",
        summary:
          "Developed a web application for indoor mapping, using Ruby on Rails for backend services and React for the front-end experience.",
        bullets: ["Ruby on Rails", "React", "Mapping tools"],
      },
      {
        role: "Software Engineering Intern",
        company: "Future Engineer Intern",
        period: "Jun 2020 - Aug 2020",
        summary:
          "Fine-tuned BERT models for semantic news search and combined content-based filtering with neural collaborative filtering to improve recommendation correctness and real-time performance.",
        bullets: ["BERT", "Recommendation systems", "NLP"],
      },
    ],
  },
  projects: {
    heading: "Projects",
    title: "Things I’ve built.",
    items: [
      {
        name: "Classification App on AWS",
        type: "Production-grade system",
        description:
          "Designed, deployed, and automated a classification application using AWS EC2, RDS, API Gateway, TypeScript for the frontend, and Kotlin for the backend. Reduced the per-classification processing duration by about five minutes and delivered daily savings of over 80 hours for trade advisors handling more than 1,000 classifications.",
        tech: ["AWS EC2", "Amazon RDS", "TypeScript", "Kotlin", "API Gateway"],
      },
      {
        name: "Cow Face ID on Azure",
        type: "Computer vision system",
        description:
          "Built a livestock recognition platform using image and real-time video stream processing on Azure Functions, Azure Kubernetes Service, SignalR, Blob Storage, Message Queue, and Azure ML CI/CD.",
        tech: ["Azure Functions", "Azure Kubernetes Service", "SignalR", "Azure ML"],
      },
      {
        name: "Real-Time News Fetching and Recommendation System",
        type: "Data and ML pipeline",
        description:
          "Designed a React-based web application for custom news feeds, built a Kafka-like log collector with RabbitMQ on MongoDB for client-side analysis, and trained topic models with TensorFlow and NLTK.",
        tech: ["React", "RabbitMQ", "MongoDB", "TensorFlow", "NLTK"],
      },
    ],
  },
  skills: {
    heading: "Skills",
    title: "Tools I use.",
    items: [
      ".NET",
      "C#",
      "Azure",
      "Java",
      "React",
      "Python",
      "Node.js",
      "C++",
      "TypeScript",
      "Ruby on Rails",
      "Kotlin",
      "SQL",
      "PostgreSQL",
      "Spring",
      "Kafka",
      "RabbitMQ",
      "Redis",
      "TensorFlow",
      "Flask",
      "Shell",
      "Git",
      "Docker",
    ],
  },
  contact: {
    heading: "Contact",
    title: "Let’s connect.",
    text:
      "Email is the best way to reach me. LinkedIn works as well for recruiting and professional contact.",
    links: [
      { label: "Email", value: "jackxu039@gmail.com", href: "mailto:jackxu039@gmail.com" },
      { label: "LinkedIn", value: "linkedin.com/in/zhaopeng-xu-04b041192", href: "https://www.linkedin.com/in/zhaopeng-xu-04b041192" },
    ],
  },
};

const app = document.querySelector("#app");

function renderHero(hero) {
  return `
    <section class="hero" id="home">
      <article class="panel hero-copy fade-up">
        <div>
          <div class="eyebrow">${hero.status}</div>
          <h1>${hero.name}</h1>
          <p>${hero.title}</p>
          <p>${hero.summary}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${hero.primaryCta.href}">${hero.primaryCta.label}</a>
            <a class="button button-secondary" href="${hero.secondaryCta.href}">${hero.secondaryCta.label}</a>
          </div>
        </div>
        <div class="hero-meta">
          ${hero.stats
            .map(
              (stat) => `
                <div class="stat">
                  <span class="stat-value">${stat.value}</span>
                  <span>${stat.label}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </article>

      <aside class="panel hero-card fade-up delay-1">
        <div class="portrait">
          <span class="portrait-tag">Software Engineer</span>
          <div class="portrait-quote">${hero.highlightQuote}</div>
        </div>
        <div class="mini-grid">
          ${hero.quickFacts
            .map(
              (item) => `
                <div class="mini-card">
                  <p class="mini-label">${item.label}</p>
                  <strong>${item.value}</strong>
                </div>
              `
            )
            .join("")}
        </div>
      </aside>
    </section>
  `;
}

function renderSectionLabel(section) {
  return `
    <header class="section-header">
      <span>${section.heading}</span>
      <h2>${section.title}</h2>
    </header>
  `;
}

function renderAbout(section) {
  return `
    <section class="section" id="about">
      ${renderSectionLabel(section)}
      <div class="section-content fade-up delay-1">
        <article class="panel card">
          <p class="lead">${section.text}</p>
        </article>
        <article class="panel card">
          <div class="pill-row">
            ${section.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderEducation(section) {
  return `
    <section class="section" id="education">
      ${renderSectionLabel(section)}
      <div class="section-content fade-up delay-1">
        <div class="timeline">
          ${section.items
            .map(
              (item) => `
                <article class="timeline-item">
                  <div class="timeline-top">
                    <h3>${item.school} <span class="timeline-meta">${item.location}</span></h3>
                    <span class="timeline-meta">${item.meta}</span>
                  </div>
                  <p><strong>${item.degree}</strong></p>
                  <p>${item.detail}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderExperience(section) {
  return `
    <section class="section" id="experience">
      ${renderSectionLabel(section)}
      <div class="section-content fade-up delay-1">
        <div class="timeline">
          ${section.items
            .map(
              (item) => `
                <article class="timeline-item">
                  <div class="timeline-top">
                    <h3>${item.role} <span class="timeline-meta">@ ${item.company}</span></h3>
                    <span class="timeline-meta">${item.period}</span>
                  </div>
                  <p>${item.summary}</p>
                  <div class="pill-row">
                    ${item.bullets.map((bullet) => `<span class="pill">${bullet}</span>`).join("")}
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderProjects(section) {
  return `
    <section class="section" id="projects">
      ${renderSectionLabel(section)}
      <div class="section-content fade-up delay-2">
        <div class="project-grid">
          ${section.items
            .map(
              (project) => `
                <article class="panel project">
                  <div class="project-top">
                    <h3>${project.name}</h3>
                    <span class="project-meta">${project.type}</span>
                  </div>
                  <p>${project.description}</p>
                  <div class="skill-list">
                    ${project.tech.map((tech) => `<span class="skill">${tech}</span>`).join("")}
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderSkills(section) {
  return `
    <section class="section" id="skills">
      ${renderSectionLabel(section)}
      <div class="section-content fade-up delay-2">
        <article class="panel card">
          <div class="skill-list">
            ${section.items.map((item) => `<span class="skill">${item}</span>`).join("")}
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderContact(section) {
  return `
    <section class="section" id="contact">
      <header class="section-header section-header-compact">
        <span>${section.heading}</span>
        <h2>${section.title}</h2>
      </header>
      <div class="section-content fade-up delay-3">
        <article class="panel card contact-card">
          <div class="contact-copy">
            <p class="lead">${section.text}</p>
          </div>
          <div class="contact-actions">
            <div class="contact-list">
              ${section.links
                .map(
                  (link) => `
                    <a class="pill contact-link" href="${link.href}" ${link.href.startsWith("mailto:") ? "" : 'target="_blank" rel="noreferrer"'}>
                      ${link.label}: ${link.value}
                    </a>
                  `
                )
                .join("")}
            </div>
          </div>
        </article>
      </div>
    </section>
  `;
}

app.innerHTML = `
  ${renderHero(siteContent.hero)}
  ${renderAbout(siteContent.about)}
  ${renderEducation(siteContent.education)}
  ${renderExperience(siteContent.experience)}
  ${renderProjects(siteContent.projects)}
  ${renderSkills(siteContent.skills)}
  ${renderContact(siteContent.contact)}
`;
