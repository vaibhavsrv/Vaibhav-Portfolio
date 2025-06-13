// Portfolio Website for Vaibhav Srivastava
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="font-sans bg-gray-50 text-gray-800">
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Vaibhav Srivastava</h1>
        <p className="text-lg md:text-2xl">CSE Student | Full-Stack Developer | AI/ML Enthusiast</p>
        <div className="mt-6 flex gap-4">
          <a href="mailto:srvaibhav8@gmail.com" className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold shadow hover:scale-105">Email</a>
          <a href="https://linkedin.com/in/vaisrv" target="_blank" className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold shadow hover:scale-105">LinkedIn</a>
          <a href="https://github.com/vaibhavsrv" target="_blank" className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold shadow hover:scale-105">GitHub</a>
        </div>
      </section>

      <section className="p-8 md:p-16 max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m a B.Tech Computer Science student at Galgotias University with a strong passion for backend development, full-stack projects, and AI/ML. I've built real-world applications ranging from OCR tools to Android apps. I thrive in collaborative environments and am constantly exploring new technologies to improve user-centric solutions.
        </p>
      </section>

      <section className="bg-white p-8 md:p-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <div>
            <h3 className="font-semibold">Languages & Tools</h3>
            <ul className="list-disc list-inside">
              <li>Python, Java, JavaScript, SQL</li>
              <li>Firebase, GitHub, Android Studio, Postman, Tesseract OCR</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Frameworks & Concepts</h3>
            <ul className="list-disc list-inside">
              <li>ReactJS, Node.js, Express.js, MongoDB, MySQL</li>
              <li>OOP, DSA, DBMS, OS, SDLC</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="p-8 md:p-16 bg-gray-100" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Online Language Learning Platform</h3>
            <p>Python, Flask, MySQL, ReactJS</p>
            <p>Built REST APIs for lessons, quizzes, and login with JWT authentication. Designed responsive UI with gamification features.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">College Companion Android App</h3>
            <p>Java, Firebase, SQLite</p>
            <p>Developed app for reminders, deadlines, and campus navigation with real-time alerts.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">OCR Text Recognition System</h3>
            <p>Python, Tkinter, Flask, Tesseract</p>
            <p>Converted images to text in multiple languages with real-time error handling and export.</p>
          </div>
        </div>
      </section>

      <section className="p-8 md:p-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Infosys Springboard – AI & ML Foundations (Jun 2025)</li>
          <li>Postman API Fundamentals (Jun 2025)</li>
          <li>Oracle SQL Programming (Jan 2024)</li>
          <li>HackerRank Problem Solving – Basic (Jun 2025)</li>
        </ul>
      </section>

      <section className="bg-blue-600 text-white p-8 md:p-16 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p>Email: <a href="mailto:srvaibhav8@gmail.com" className="underline">srvaibhav8@gmail.com</a></p>
        <p>Phone: +91 9670343201</p>
        <p>GitHub: <a href="https://github.com/vaibhavsrv" target="_blank" className="underline">vaibhavsrv</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/vaisrv" target="_blank" className="underline">vaisrv</a></p>
      </section>
    </main>
  );
}

export default App;