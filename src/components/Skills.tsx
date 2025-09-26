import React, { useState, useEffect } from 'react';
import { Code, Database, Cloud, Smartphone, Palette, Zap } from 'lucide-react';

const Skills = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-400',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
       // { name: 'Vue.js', level: 80 },
      ],
    },
    {
      icon: Database,
      title: 'Backend Development',
      color: 'from-purple-500 to-pink-400',
      skills: [
        { name: 'C/C++', level: 80 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 85 },
        { name: 'MySQL', level: 82 },
        { name: 'MongoDB', level: 80 },
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'from-green-500 to-teal-400',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 85 },
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      color: 'from-orange-500 to-yellow-400',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 60 },
       // { name: 'iOS/Swift', level: 70 },
        { name: 'Android', level: 75 },
      ],
    },
    {
      icon: Palette,
      title: 'Design & UI/UX',
      color: 'from-pink-500 to-rose-400',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'UI/UX Design', level: 75 },
        { name: 'Prototyping', level: 78 },
      ],
    },
    {
      icon: Zap,
      title: 'Tools & Technologies',
      color: 'from-indigo-500 to-purple-400',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'VS Code', level: 90 },
       // { name: 'Webpack', level: 75 },
        { name: 'Testing', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map(({ icon: Icon, title, color, skills }, categoryIndex) => (
              <div
                key={title}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-6">{title}</h3>
                
                <div className="space-y-4">
                  {skills.map(({ name, level }, skillIndex) => (
                    <div key={name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{name}</span>
                        <span className="text-blue-400 font-semibold">{level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: inView ? `${level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 3 + skillIndex) * 100}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-gray-700 rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                languages, and methodologies to stay at the forefront of software development.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['GraphQL', 'Rust', 'WebAssembly', 'AI/ML', 'Blockchain', 'Three.js'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;