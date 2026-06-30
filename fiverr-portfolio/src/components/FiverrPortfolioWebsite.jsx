export default function FiverrPortfolioWebsite() {
    const projects = [
      {
        title: "Client Business Website",
        description:
          "A modern, responsive business website designed to showcase services, and attract clients.",
        tech: ["React", "Responsive Design", "UI Design"],
        image: "/landscaping-preview.png",
        live: "https://landscaping-website-bp3lll0qu-garcesd98s-projects.vercel.app/",
      },
      {
        title: "AI Productivity SaaS Landing Page",
        description:
          "A modern portfolio with responsive navigation, smooth scrolling, and mobile-friendly design.",
        tech: ["React", "Javascript", "CSS", "Vite"],
        live: "https://studyflow-rck1zn9dh-garcesd98s-projects.vercel.app/",
      },
      {
        title: "Business Landing Page",
        description:
          "A clean landing page with service cards, strong calls-to-action, and a contact form.",
        tech: ["HTML", "CSS", "Responsive Design"],
      },
    ];
  
    const services = [
      {
        title: "Custom Website Development",
        description:
          "Landing pages, business websites, portfolio sites, and fully responsive layouts.",
        icon: "💻",
      },
      {
        title: "Front-End Development",
        description:
          "Modern HTML, CSS, and JavaScript with clean, maintainable code.",
        icon: "⚡",
      },
      {
        title: "Website Improvements",
        description:
          "Redesign outdated sites, fix bugs, improve speed, and optimize for mobile.",
        icon: "🛠️",
      },
    ];
  
    const skills = [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Git & GitHub",
      "VS Code",
      "Figma",
      "Accessibility",
      "Mobile Optimization",
    ];
  
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth">
        {/* Navbar */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold text-slate-900">Damian.dev</h1>
  
            <div className="hidden items-center gap-8 md:flex">
              <a href="#services" className="text-slate-600 transition hover:text-blue-500">
                Services
              </a>
              <a href="#projects" className="text-slate-600 transition hover:text-blue-500">
                Projects
              </a>
              <a href="#about" className="text-slate-600 transition hover:text-blue-500">
                About
              </a>
              <a href="#contact" className="text-slate-600 transition hover:text-blue-500">
                Contact
              </a>
            </div>
  
            <a
              href="https://www.fiverr.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-blue-500 px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-600"
            >
              Hire Me
            </a>
          </nav>
        </header>
  
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
              Available for freelance web development projects on Fiverr
            </p>
  
            <h2 className="max-w-2xl text-5xl font-bold leading-tight md:text-6xl">
              I Build Modern, Responsive Websites for Businesses and Creators
            </h2>
  
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Clean, fast, mobile-friendly websites designed to help your brand stand out and convert visitors into customers.
            </p>
  
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-slate-900 px-6 py-4 font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                View My Work
              </a>
  
              <a
                href="https://www.fiverr.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-4 font-medium transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-500"
              >
                Hire Me on Fiverr
              </a>
            </div>
          </div>
  
          <div className="flex justify-center">
            <div className="w-full max-w-lg rounded-3xl bg-slate-900 p-5 shadow-2xl">
              <div className="mb-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                <span className="h-3 w-3 rounded-full bg-green-400"></span>
              </div>
  
              <div className="rounded-2xl bg-slate-800 p-6 text-slate-200">
                <p className="mb-2 text-sm text-blue-400">&lt;body&gt;</p>
                <p className="ml-4 text-sm">&lt;h1&gt;Your Dream Website&lt;/h1&gt;</p>
                <p className="ml-4 text-sm">&lt;p&gt;Responsive. Fast. Professional.&lt;/p&gt;</p>
                <p className="mt-2 text-sm text-blue-400">&lt;/body&gt;</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Services */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
              Services
            </p>
            <h3 className="mt-3 text-4xl font-bold">What I Can Help You Build</h3>
          </div>
  
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 text-4xl">{service.icon}</div>
                <h4 className="text-2xl font-semibold">{service.title}</h4>
                <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Projects */}
        <section id="projects" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
                Portfolio
              </p>
              <h3 className="mt-3 text-4xl font-bold">Featured Projects</h3>
            </div>
  
            <div className="grid gap-8 lg:grid-cols-3">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.live || "#"}
                  onClick={(e) => !project.live && e.preventDefault()}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* IMAGE / PLACEHOLDER */}
                  {project.image ? (
                 <img
                    src={project.image}
                    alt={project.title}
                    className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                ) : (
              <div className="flex h-52 items-center justify-center bg-slate-200 text-slate-500">
              Project Screenshot Here
              </div>
                )}

                {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition group-hover:opacity-100">
                  <span className="rounded-xl bg-white px-5 py-2 font-medium text-slate-900">
                    View Live Site
                  </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">
                    <h4 className="text-2xl font-semibold">{project.title}</h4>

                    <p className="mt-4 leading-7 text-slate-600">
                      {project.description}
                      </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                   </div>
                   </a>
                  ))}
            </div>
          </div>
        </section>
  
          {/* About / Why Choose Me */}
        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
                Why Choose Me
              </p>
              <h3 className="mt-3 text-4xl font-bold">
                Clean Code, Strong Communication, and Mobile-First Design
              </h3>
  
              <p className="mt-6 leading-8 text-slate-600">
                I focus on building websites that are modern, easy to use, and responsive on every device. I communicate clearly, pay attention to detail, and make sure each project feels professional from start to finish.
              </p>
            </div>
  
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                "Responsive on all devices",
                "Clean and maintainable code",
                "Fast communication",
                "Attention to detail",
              ].map((item) => (
                  <div
                  key={item}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 text-2xl text-blue-500">✓</div>
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Skills */}
        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Skills & Tools
            </p>
            <h3 className="mt-3 text-4xl font-bold">Technologies I Use</h3>
  
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
  
        {/* Contact */}
        <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            Contact
          </p>
  
          <h3 className="mt-3 text-4xl font-bold">
            Ready to Bring Your Website Idea to Life?
          </h3>
  
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Let’s work together to create a website that looks professional, works on every device, and helps your business stand out.
          </p>
  
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.fiverr.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-blue-500 px-7 py-4 font-medium text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-600"
            >
              Message Me on Fiverr
            </a>
  
            <a
              href="mailto:your@email.com"
              className="rounded-2xl border border-slate-300 px-7 py-4 font-medium transition hover:border-blue-500 hover:text-blue-500"
            >
              Email Me
            </a>
          </div>
        </section>
      </div>
    );
  }
  