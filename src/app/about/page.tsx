import Image from "next/image";

export default function About() {
  return (
    <div className="container max-w-5xl mx-auto py-16 px-4">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        About Me
      </h1>

      {/* Bio */}
      <section className="mb-16">
        <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
          I'm a passionate Full Stack Developer with experience in building
          real-time, modern web applications. I specialize in both frontend and
          backend development to deliver seamless, efficient, and user-focused
          digital products.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center text-white border-b border-gray-800 pb-4">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-4">Frontend</h3>
            <ul className="text-gray-400 space-y-2">
              <li>React.js & Next.js</li>
              <li>TypeScript & JavaScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 & CSS3</li>
            </ul>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-4">Backend</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Node.js & Express</li>
              <li>RESTful APIs</li>
              <li>MongoDB & SQL</li>
              <li>Authentication (JWT)</li>
            </ul>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-4">Tools & Others</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Git & GitHub</li>
              <li>Postman</li>
              <li>Vercel Deployment</li>
              <li>C++ & System Design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center text-white border-b border-gray-800 pb-4">
          What I've Been Doing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Real-time Full Stack Projects",
              desc: "Built full-fledged applications like:\n• AI Voice Medical Assistant\n• AI Voice Interview Preparation\n• E-Commerce Bookstore\n• Real-time Chat App with Video Call",
            },
            {
              title: "Self-Learning & Growth",
              desc: "Actively learning system design, DevOps, and scalable architecture. Continuously growing through projects and open-source.",
            },
            {
              title: "UI/UX Practice",
              desc: "Focusing on clean, accessible interfaces and responsive designs.",
            },
            {
              title: "Career Building",
              desc: "Mastering DSA in C++, building real-world projects, and improving communication.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center text-white border-b border-gray-800 pb-4">
          Professional Experience
        </h2>
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
            <div className="flex-shrink-0 bg-white p-2 rounded-lg">
              <Image
                src="/logos/aetherpro_healthcare_private_limited_logo.jpeg"
                alt="AetherPro Healthcare Logo"
                width={80}
                height={64}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Full Stack Developer Intern
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-400">
                <span className="bg-gray-800 px-3 py-1 rounded-full text-blue-400">
                  AetherPro Healthcare Pvt. Ltd.
                </span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-purple-400">
                  Remote
                </span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-green-400">
                  Jul 2025 – Aug 2025
                </span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4 text-white">Key Achievements</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-400 list-disc list-inside">
              <li>Built full-stack web platform with Next.js & React.js</li>
              <li>Developed robust APIs with Node.js & Express</li>
              <li>Implemented secure user authentication systems</li>
              <li>Built ICD/CPT code management modules</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-white">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React.js", "Node.js", "Express", "GitHub", "Vercel", "Postman"].map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-8 pt-6 border-t border-gray-800">
            <a
              href="https://drive.google.com/file/d/1RmAhngXdSS6Dr6hpAc6cWwfOcFAQ85lI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              View Certificate →
            </a>
            <a
              href="/certs/Aetherpro_LOR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              Letter of Recommendation →
            </a>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center text-white border-b border-gray-800 pb-4">
          Education
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Degree */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-white p-2 rounded-lg flex-shrink-0">
              <Image src="/logos/CBIT.png" alt="CBIT Logo" width={64} height={48} className="object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Chaitanya Bharathi Institute Of Technology</h3>
              <p className="text-gray-400 font-medium mb-3">Bachelor of Engineering - BE, Computer Science</p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>Jul 2023 - Jul 2027 • Currently Pursuing</p>
                <p className="italic">"Focusing on full-stack development, software engineering, and preparing for high-growth career roles."</p>
              </div>
            </div>
          </div>

          {/* Intermediate */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-white p-2 rounded-lg flex-shrink-0">
              <Image src="/logos/tswreis.png" alt="TSWREIS Logo" width={64} height={48} className="object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">TSWREIS COE Gowlidoddi</h3>
              <p className="text-gray-400 font-medium mb-3">Intermediate, MPC</p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>Jul 2021 - Jul 2023 • Grade: 97.4%</p>
                <p className="italic">"Mathematics, Physics & Chemistry with outstanding academic performance."</p>
              </div>
            </div>
          </div>

          {/* High School */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-white p-2 rounded-lg flex-shrink-0">
              <Image src="/logos/tswreis.png" alt="TSWREIS Logo" width={64} height={48} className="object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">TSWREIS COE Chilkur</h3>
              <p className="text-gray-400 font-medium mb-3">Secondary Education</p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>Jul 2015 - Jul 2021 • Grade: 10 CGPA</p>
                <p className="italic">"Foundation years with excellent academic performance and holistic development."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
