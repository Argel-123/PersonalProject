import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import heroImg from "./assets/Me.jpg";
import splash from "./assets/Splash-Water-.png";
// import slqImg from './assets/img/sql-server.png'
import typescripts from "./assets/img/typescript.png";
import mongodbImg from "./assets/img/mongodb.png";
import visitor from "./assets/projects/VMS.png";
import studentgrade from "./assets/projects/StudentGrade.png";
import Studentattendance from "./assets/projects/StudentAttendance.png";
import laundryshop from "./assets/projects/LaundryShop.png";
import dreamstay from "./assets/projects/DreamStay.png";
import aquaflow from "./assets/projects/AquaFlow.png";
import slq from "./assets/img/mysql.png";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ sending: false, message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, message: "" });

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setStatus({ sending: false, message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          sending: false,
          message: data.error || "Something went wrong.",
        });
      }
    } catch (err) {
      setStatus({
        sending: false,
        message: "Failed to send. Try again later.",
      });
    }
  };

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <h1>
            <span>Argel Joseph</span>
          </h1>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#About">About Me</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <div className="Images">
          <div className="splash">
            <img src={splash} alt="splash" />
          </div>
          <div className="hero-image">
            <img src={heroImg} alt="Hero Image" />
          </div>
        </div>
        <div className="hero-content">
          <h1>Hi,</h1>
          <div className="loader">
            <h2>I'm </h2>
            <div className="words">
              <span className="word">Argel Joseph</span>
              <span className="word">Web Developer</span>
            </div>
          </div>
          <p>
            I'm a passionate web developer with a knack for creating stunning
            and functional websites. With experience in <strong>HTML</strong>,{" "}
            <strong>CSS</strong>, <strong>JavaScript</strong>, and{" "}
            <strong>React</strong>,etc., I bring ideas to life on the web. Let's
            build something amazing together!
          </p>
          <a href="#Projects" className="btn">
            View My Work
          </a>
        </div>
      </section>

      <section className="about" id="About">
        {/* <div className="line"></div> */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm a dedicated web developer with a passion for crafting beautiful
            and functional websites. With expertise in <strong>HTML</strong>,{" "}
            <strong>CSS</strong>, <strong>JavaScript</strong>, and{" "}
            <strong>React</strong>,etc., I bring ideas to life on the web. I
            thrive on solving complex problems and creating seamless user
            experiences. Let's connect and build something amazing together!
          </p>
          <a href="#" className="btn">
            Learn More
          </a>
          <div className="icons">
            <i className="bx bxl-facebook-circle"></i>
            <i className="bx bxl-instagram-alt"></i>
            <i className="bx bxl-github"></i>
            <i className="bx bxl-tiktok"></i>
          </div>
        </div>
        <div className="about-image">
          <img src={heroImg} alt="Hero Image" />
        </div>
      </section>

      <section className="skills" id="Skills">
        <h2>Skills</h2>
        <p className="p-text">Skills that Experience with</p>
        <div className="cards">
          <div className="skill-card">
            <div className="icons">
              <i class="bx bxl-html5"></i>
            </div>
            <h3>HTML</h3>
            <p>
              Proficient in creating semantic and accessible web pages using
              HTML5.
            </p>
          </div>
          <div className="skill-card">
            <div className="icons">
              <i class="bx bxl-css3"></i>
            </div>
            <h3>CSS</h3>
            <p>
              Skilled in styling and layout design using CSS3, including Flexbox
              and Grid.
            </p>
          </div>
          <div className="skill-card">
            <div className="icons">
              <i class="bx bxl-javascript"></i>
            </div>
            <h3>JavaScript</h3>
            <p>
              Experienced in building interactive web applications using
              JavaScript ES6+ features.
            </p>
          </div>
          <div className="skill-card">
            <div className="icons">
              <i class="bx bxl-react"></i>
            </div>
            <h3>React</h3>
            <p>
              Proficient in building dynamic user interfaces and single-page
              applications using React.js.
            </p>
          </div>
          <div className="skill-card">
            <div className="icons">
              <i class="bx bxl-php"></i>
            </div>
            <h3>PHP</h3>
            <p>
              Proficient in building dynamic web applications using PHP and
              MySQL.
            </p>
          </div>

          <div className="skill-card">
            <div className="icon-img">
              <img src={typescripts} alt="type" />
            </div>
            <h3>TypeScript</h3>
            <p>
              Proficient in building scalable web applications using TypeScript
              and React.
            </p>
          </div>

          <div className="skill-card">
            <div className="icon-img">
              <img src={slq} alt="mysql" />
            </div>
            <h3>MySql</h3>
            <p>
              Proficient in managing and creating a database for every system
              and web application.
            </p>
          </div>
          <div className="skill-card">
            <div className="icon-img">
              <img src={mongodbImg} alt="mongodb" />
            </div>
            <h3>MongoDB</h3>
            <p>
              Proficient in managing and creating a database for every system
              and web application.
            </p>
          </div>
        </div>
      </section>

      <section className="projects" id="Projects">
        <h2>Projects</h2>

        <div className="project">
          <div className="project-card one">
            <div className="project-img">
              <img src={visitor} alt="project" />
            </div>
            <div className="texts">
              <h3>Visitor Management System</h3>
              <p>
                A web application designed to streamline the process of managing
                and tracking visitors in a facility.
              </p>
            </div>
            <div className="button">
              <a
                href="http://localhost/Omni_final_System_VMS/index.php"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="project-card two">
            <div className="project-img">
              <img src={studentgrade} alt="project" />
            </div>
            <div className="texts">
              <h3>Student Grade Management System</h3>
              <p>
                A web application designed to streamline the process of managing
                and tracking visitors in a facility.
              </p>
            </div>
            <div className="button">
              <a
                href="http://localhost/student_Grading_System/login.php"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="project-card two">
            <div className="project-img">
              <img src={Studentattendance} alt="project" />
            </div>
            <div className="texts">
              <h3>Student Attendance Management System</h3>
              <p>
                A web application designed to streamline the process of managing
                and tracking visitors in a facility.
              </p>
            </div>
            <div className="button">
              <a
                href="http://localhost/Student_Attendance_System/index.php"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="project-card two">
            <div className="project-img">
              <img src={laundryshop} alt="project" />
            </div>
            <div className="texts">
              <h3>Laundry Shop Management System</h3>
              <p>
                A web application designed to streamline the process of managing
                and tracking visitors in a facility.
              </p>
            </div>
            <div className="button">
              <a
                href="http://localhost/laundry_Shop_system/index.php"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="project-card two">
            <div className="project-img">
              <img src={dreamstay} alt="project" />
            </div>
            <div className="texts">
              <h3>Hotel Booking Management System</h3>
              <p>
                A web application designed to streamline the process of managing
                and tracking visitors in a facility.
              </p>
            </div>
            <div className="button">
              <a
                href="http://localhost/hotel_management/index.php"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="project-card two">
            <div className="project-img">
              <img src={aquaflow} alt="project" />
            </div>
            <div className="texts">
              <h3>Aqua Flow System</h3>
              <p>
                A web application designed to streamline the process of managing
                and tracking visitors in a facility.
              </p>
            </div>
            <div className="button">
              <a href="http://localhost/AquaFlow/index.php" className="btn">
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="Contact">
        <div className="contact-form">
          <div className="contact-info-text">
            <h3>What's in your mind?</h3>
            <h4>We can build together based on your vision.</h4>
            <div className="contact-infos">
              <ul>
                <li>
                  <i className="bx bxs-envelope"></i>
                  posadasargeljoseph433@gmail.com
                </li>
                <li>
                  <i className="bx bxs-phone"></i>+69 994-441-0317
                </li>
                <li>
                  <i className="bx bxs-map"></i>Mindanao, Kapatagan, Lanao del
                  norte Philippines
                </li>
                <li>
                  <i className="bx bxs-time"></i>Mon-Fri: 9AM - 5PM
                </li>
              </ul>
            </div>
          </div>

          <form className="email-form" onSubmit={handleSubmit}>
            <h2 className="contact-title">Contact Me!</h2>
            <div className="box">
              <div className="contentbox">
                <p>
                  Name <span>*</span>
                </p>
                <input
                  type="text"
                  name="name"
                  placeholder="Jhon Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contentbox">
                <p>
                  Email <span>*</span>
                </p>
                <input
                  type="email"
                  name="email"
                  placeholder="youremail@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="content-textarea">
                <p>
                  Message <span>*</span>
                </p>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
            <button type="submit" className="btn" disabled={status.sending}>
              {status.sending ? "Sending..." : "Send Message"}
            </button>
            {status.message && (
              <p style={{ marginTop: "12px" }}>{status.message}</p>
            )}
          </form>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2026 Argel Joseph Posadas. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
