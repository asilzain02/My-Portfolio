import React from 'react';
import { Code2, Rocket, Users, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and approaches to solve complex problems.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with cross-functional teams to deliver exceptional products.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering high-quality solutions that exceed expectations.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate and detail-oriented Software Engineer with a strong foundation in programming,
              problem-solving, and software development principles. As a fresher, I bring enthusiasm to learn,
              adaptability to new technologies, and the ability to work collaboratively in dynamic environments.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
              I have hands-on experience in building academic and personal projects using languages such as Java,
              Python, C/C++, and JavaScript, along with exposure to web development, databases, and version control systems like Git.
              I enjoy tackling complex challenges, writing clean and efficient code, and continuously improving my technical
              and soft skills. With a keen interest in software design patterns, full-stack development, and emerging technologies like AI and IoT,
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
              I am eager to contribute to real-world projects while growing into a versatile engineer. My goal is to leverage my skills
              and dedication to deliver high-quality solutions and make a meaningful impact in the software industry.
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Name:</span>
                    <span className="text-white font-semibold">Asil Zain</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Location:</span>
                    <span className="text-white font-semibold">VIT Vellore</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Experience:</span>
                    <span className="text-white font-semibold">Fresher</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Email:</span>
                    <span className="text-blue-400 font-semibold">asilzain02@gmail.com</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-green-400 font-semibold flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-900/70 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;