
import { useState } from "react";
function Header() {

  const [activeLink, setActiveLink] = useState("profile");
  return (
    <header className="header">

      <h1 className="logo">MY ONLINE CV</h1>

          <nav className="nav">

        <a
          href="#profile"
          className={activeLink === "profile" ? "active" : ""}
          onClick={() => setActiveLink("profile")}
        >
          Profile
        </a>

        <a
          href="#education"
          className={activeLink === "education" ? "active" : ""}
          onClick={() => setActiveLink("education")}
        >
          Education
        </a>

        <a
          href="#skills"
          className={activeLink === "skills" ? "active" : ""}
          onClick={() => setActiveLink("skills")}
        >
          Skills
        </a>

        <a
          href="#experience"
          className={activeLink === "experience" ? "active" : ""}
          onClick={() => setActiveLink("experience")}
        >
          Experience
        </a>

        <a
          href="#projects"
          className={activeLink === "projects" ? "active" : ""}
          onClick={() => setActiveLink("projects")}
        >
          Projects
        </a>

        <a
          href="#references"
          className={activeLink === "references" ? "active" : ""}
          onClick={() => setActiveLink("references")}
        >
          References
        </a>
      </nav>

    </header>
  );
}

export default Header;