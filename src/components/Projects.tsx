import React, { useState } from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe, Database, Brain } from 'lucide-react';


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ml', label: 'ML' },
    { id: 'api', label: 'APIs' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Astro Edge AI',
      description: 'AstroEdge AI is designed as a mission control console to assist astronauts with navigation, repairs, stress management, and real-time decision support.',
      image: '/images/astroedgeAI.png?auto=compress&cs=tinysrgb&w=600',
      category: 'ml',
      tech: ['Python 3.10+','Tkinter (GUI)','llama-cpp-python (LLM inference)','SpeechRecognition (Voice input)','pyttsx3 (Voice output)','psutil (System stats)','Vosk (Hotword detection)'],
      github: 'https://github.com/asilzain02/Astro-Edge-AI',
      featured: true,
    },
    {
      id: 2,
      title: 'Spam Email Detection',
      description: 'A Flask web application for detecting spam emails using Natural Language Processing (NLP) and Machine Learning (Naive Bayes). This project allows users to input an email, and the trained model predicts whether it’s Spam or Not Spam.',
      image: '/images/spamemail.png?auto=compress&cs=tinysrgb&w=600',
      category: 'web',
      tech: ['Python 3.9+','Flask (web framework)','Scikit-learn (ML model & vectorization)','NLTK (stopwords processing)','Pandas (data handling)','Pickle (model persistence)'],
      github: 'https://github.com/asilzain02/Spam-Email-Detection-Flask-Machine-Learning-',
      featured: false,
    },
    {
      id: 3,
      title: 'Text Summarization',
      description: 'It takes user-provided text, generates a summary by ranking important sentences based on word frequencies, and evaluates the quality of the generated summary using ROUGE metrics against a reference summary.',
      image: '/images/textsummarize.png?auto=compress&cs=tinysrgb&w=600',
      category: 'web',
      tech: ['Python', 'Flask', 'NLP'],
      github: 'https://github.com/asilzain02/Text-Summarization-using-SpaCy-ROUGE-Score',
      featured: false,
    },
    {
      id: 4,
      title: 'Face Recognition System',
      description: 'This project implements a face recognition system using the face_recognition library (built on dlib) and OpenCV. The system loads known faces from a dataset folder, detects and recognizes faces in target images, and labels them with names or "Unknown".',
      image: '/images/facesystem.png?auto=compress&cs=tinysrgb&w=600',
      category: 'ml',
      tech: ['Python','OpenCV','NumPy','HOG + CNN'],
      github: 'https://github.com/asilzain02/Face-Recognition-System-using-OpenCV',
      featured: true,
    },
    {
      id: 5,
      title: 'Hand Gesture Recognition System',
      description: 'This is a sample program that recognizes hand signs and finger gestures with a simple MLP using the detected key points.',
      image: '/images/handgesture.png?auto=compress&cs=tinysrgb&w=600',
      category: 'ml',
      tech: ['Python', 'mediapipe', 'OpenCV', 'Tensorflow','scikit-learn'],
      github: 'https://github.com/asilzain02/Hand-Gesture-Recognition-System',
      featured: false,
    },
    {
      id: 6,
      title: 'AI Based WiFi Naming Trap Detector',
      description: 'This project implements a Wi-Fi SSID classification system using a pre-trained Machine Learning model and Flask web interface. It scans available Wi-Fi networks (or allows manual SSID entry), runs them through a trained classifier, and predicts whether each SSID is Fake or Legit.',
      image: '/images/fakewifi.png?auto=compress&cs=tinysrgb&w=600',
      category: 'web',
      tech: ['Python', 'Flask', 'scikit-learn', 'pandas', 'joblib'],
      github: 'https://github.com/asilzain02/AI-Based-WiFi-Naming-Trap-Detector',
      featured: true,
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return Globe;
      case 'ml': return Brain;
      case 'api': return Database;
      default: return Code;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore a selection of projects that showcase my technical expertise and creative problem-solving abilities.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(({ id, label }) => {
              const Icon = getCategoryIcon(id);
              return (
                <button
                  key={id}
                  onClick={() => setSelectedCategory(id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`group bg-gray-900/50 backdrop-blur-sm border rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ${
                  project.featured
                    ? 'border-blue-500/50 shadow-lg shadow-blue-500/10'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <a
                      href={project.github}
                      className="bg-gray-800/80 backdrop-blur-sm text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                    >
                      <Github size={18} />
                    </a>
                    <a
                     // place that last line for external link
                     ></a>
                   
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/asilzain02?tab=repositories"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-full hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

<a
// href={project.demo}
// className="bg-blue-500/80 backdrop-blur-sm text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
>
<ExternalLink size={18} />
</a>

export default Projects;