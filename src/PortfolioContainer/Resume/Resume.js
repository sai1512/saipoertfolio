import React, { useState, useRef } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const detailsRef = useRef(null);

  const ResumeHeading = (props) => (
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet"></div>
        <div className="resume-sub-heading">
          <span className="resume-heading-des">{props.heading || ""}</span>
          <span className="resume-sub-heading-des">{props.subHeading || ""}</span>
          <span>{props.description || ""}</span>
        </div>
        {props.fromDate && props.toDate ? (
          <div className="heading-date">{props.fromDate + " - " + props.toDate}</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  // ✅ Updated skills grouped by category
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "Typescript",]
    },
    {
      title: "LLM & Agents",
      skills: [
        "RAG (ChromaDB/FAISS)", "MiniLM", "LangChain",
        "Prompt Engineering", "Multi-Agent Systems"
      ]
    },
    {
      title: "Automation & QA",
      skills: [
        "Playwright", "Cypress", "Selenium (POM)", "Jenkins", "GitLab CI",
        "JMeter", "OWASP ZAP", "WCAG 2.1 AA"
      ]
    },
    {
      title: "ML & Data",
      skills: ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "XGBoost", "Pandas", "NumPy"]
    },    
    {
      title: "Web Development",
      skills: ["React.js", "HTML", "CSS", "Flask", "Django", "REST APIs"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS EC2", "GCP", "Docker", "Git", "GitHub", "Vercel", "Heroku"]
    }
  ];

  const projectDetails = [
    {
      title: " Sentiment Analysis Prediction",
      duration: { fromDate: "2024" },
      description: "A web-based sentiment classification app that analyzes text input to predict positive or negative emotion using XGBoost and Random Forest. Built with Flask API and styled front-end, the application includes preprocessing (tokenization, stop-word removal), EDA, and model tuning for improved prediction accuracy.",
      subHeading:
        "Tech Stack: Python, Flask, HTML/CSS, XGBoost, Random Forest, Jupyter Notebook",
    },
    
    {
      title: "Home Assistant Steam Integration",
      duration: { fromDate: "2024" },
      description: "Enhanced the Steam integration in Home Assistant by implementing device triggers and conditions in Python. Conducted complete E2E testing to validate automation flows and used SonarCloud for static code analysis and quality improvement. Delivered as part of a cross-functional automation team.",
      subHeading:
        "Tech Stack: Python, Home Assistant, SonarCloud, E2E Testing, Git",
    },
    
    {
      title: "CodeQuack – Coding Tutorial Platform",
      duration: { fromDate: "2024" },
      description: "Developed a full-stack learning platform for interactive coding tutorials. Enabled video uploads, quizzes, feedback, and user authentication for learners and educators. Delivered an intuitive interface using modern JS frameworks and followed Agile/Lean methodologies for efficient iteration.",
      subHeading:
        "Tech Stack: React.js, JavaScript, MongoDB, Node.js, Git",
    },
  ];

  const resumeDetails = [
    // 0 - Education
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"MS in Software Engineering"}
        subHeading={"Blekinge Tekniska Högskola, Sweden"}
        fromDate={"2023"}
        toDate={"Present"}
      />
      <ResumeHeading
        heading={"Bachelors in Computer Science"}
        subHeading={"Blekinge Tekniska Högskola, Sweden"}
        fromDate={"2018"}
        toDate={"2022"}
      />
    </div>,

    // 1 - Work History
    <div className="resume-screen-container work-experience scroll-me" key="work-experience">
      {/* Master Thesis */}
      <div className="resume-heading">
        <div className="resume-main-heading">
          <span className="resume-heading-des">Master-Thesis, LLM-Powered E2E Test Generation & Automation</span>
          <div className="heading-date">Jan 2025 – Present</div>
        </div>
        <div className="resume-sub-heading-des">Telenor Sverige AB, Karlskrona, Sweden</div>
        <ul className="experience-description">
          <li>Developed a modular multi-agent RAG pipeline for Cypress test generation using DOM input.</li>
          <li>Integrated Playwright crawler, MiniLM+Chroma retriever, and GPT-4o planner with fallback strategies.</li>
          <li>Achieved 95% test pass rate and reduced manual test effort by 80% across 10+ production flows.</li>
        </ul>
      </div>

      {/* Automation Engineer */}
      <div className="resume-heading">
        <div className="resume-main-heading">
          <span className="resume-heading-des">Automation Engineer</span>
          <div className="heading-date">Aug 2022 – Jul 2023</div>
        </div>
        <div className="resume-sub-heading-des">USG IT Solutions Pvt. Ltd, Hyderabad, India</div>
        <ul className="experience-description">
          <li>Built a Python/Selenium POM framework covering 120+ regression flows (35% → 85% coverage).</li>
          <li>Integrated with Jenkins nightly CI; reduced manual testing by 70% and enabled 99.8% uptime releases.</li>
          <li>Led Git/GitLab workflows and ran JMeter, WCAG 2.1 AA, and OWASP ZAP test suites.</li>
        </ul>
      </div>

      {/* Data Science Intern */}
      <div className="resume-heading">
        <div className="resume-main-heading">
          <span className="resume-heading-des">Data Science Intern</span>
          <div className="heading-date">Apr 2021 – Jun 2021</div>
        </div>
        <div className="resume-sub-heading-des">APSSDC, Anantapur, India</div>
        <ul className="experience-description">
          <li>Cleaned and transformed government datasets to support public-sector planning decisions.</li>
          <li>Performed EDA and built visual reports using Pandas, NumPy, and Matplotlib in Python.</li>
        </ul>
      </div>
    </div>,


    // 2 - Programming Skills
    <div className="resume-screen-container programming-skills-container scroll-me" key="skills-section">
      {skillCategories.map((category, index) => (
        <div className="skill-category" key={index} style={{ marginBottom: "2rem" }}>
          <h4 style={{ color: "#ff5823", marginBottom: "0.5rem" }}>{category.title}</h4>
          <ul className="skill-list">
            {category.skills.map((skill, i) => (
              <li key={i} className="skill-item">✔ {skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>,

    // 3 - Projects
    <div className="resume-screen-container scroll-me" key="projects">
      {projectDetails.map((proj, index) => (
        <ResumeHeading
          key={index}
          heading={proj.title}
          subHeading={proj.subHeading}
          description={proj.description}
          fromDate={proj.duration.fromDate}
          toDate={proj.duration.toDate}
        />
      ))}
      <span className="profile-role-tagline">For more projects</span>
      <a href="https://github.com/sai1512">
        <button className="btn highlighted-btn">GitHub</button>
      </a>
    </div>,

    // 4 - Interests
    <div className="resume-screen-container scroll-me" key="interests">
      <ResumeHeading
        heading="Listening music"
        description="Music helps me unwind and for better sleep."
      />
      <ResumeHeading
        heading="Volleyball"
        description="My go‑to outdoor game that keeps me physically fit."
      />
    </div>,
  ];

  const onBulletClick = (index) => {
    setSelectedBulletIndex(index);
    if (detailsRef.current) {
      detailsRef.current.scrollTop = 0;
    }
  };

  const getBullets = () =>
    resumeBullets.map((bullet, index) => (
      <div
        onClick={() => onBulletClick(index)}
        className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div ref={detailsRef} className="resume-bullet-details scrollable">
            {resumeDetails[selectedBulletIndex]}
          </div>
        </div>
      </div>
    </div>
  );
}
