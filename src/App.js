import './tailwind.config.js';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const personalInfo = {
    name: "Gannatullah Gouda",
    role: "Data Scientist",
    email: "gannaasaad@gmail.com",
    phone: "+20 1092734918",
    location: "ElObour city, Egypt",
    about: "Passionate data scientist with expertise in Statistical analysis and artificial intelligence. Dedicated to solving complex problems through data-driven approaches.",
    education: [
      {
        degree: "B.S. in Business Analytics",
        university: "The Egyptian Russian university",
        year: "2021-2025",
        cgpa: "3.86"
      }
    ],
    experience: [
      {
        title: "Generative AI Professional DEPI program",
        company: "DEPI",
        duration: "Oct 2024 present",
        description: "The DEPI program gives me hands-on training in generative AI models like GPT and diffusion models, deep learning techniques, data preprocessing and analysis, AI ethics, and cloud-based AI deployment, helping me build both the technical expertise and practical skills I need for real-world applications."
      },
      {
        title: "Data Analyst Intern",
        company: "SAM Brokerage Company",
        duration: "August 2024- Sept 2024",
        description: "Leveraged expertise in data organization and cleaning to generate insightful reports and dashboards, enabling the company to monitor ships, optimize maritime trade agreements, and enhance operational efficiency and decision-making."
      },
      {
        title: "Financial Planning and Analysis ",
        company: "Americana foods",
        duration: "Sep 2022 - Feb 2023",
        description: "Enhanced Americana's manufacturing competitiveness by providing innovative and sustainable solutions and insights to address the Finance department's challenges. This was achieved with the support of technical and non-technical capacity-building workshops, coaching, and field visits."
      }
    ],
    projects: [
      {
        title: "Predicting Start-up Success with Advanced Predictive Analytics ",
        description: "I leveraged meticulous data analysis and advanced machine learning techniques like logistic regression, decision trees, and SVMs to enhance start-up success predictions while streamlining data preprocessing and EDA to improve efficiency and refine predictive models.",
        image: "https://th.bing.com/th/id/OIP.adWM0bAA_fOk5xUyFu-CGgHaFj?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        github: "https://github.com/GannaAsaad/Predicitve-analytics-using-R"
      },
      {
        title: "From Burgers to Bytes: Unveiling Insights from Comprehensive Data Analysis using R",
        description: "A comprehensive analysis that explored the potency of simulated data",
        image: "https://th.bing.com/th/id/OIP.uPSY65sz1dj9OQz0TarDswHaHJ?w=199&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        github: "https://th.bing.com/th/id/OIP.uPSY65sz1dj9OQz0TarDswHaHJ?w=199&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      },
      {
        title: "Cardiovascular Disease Risk Analysis using Python",
        description: "Advanced data preparation and visualization techniques that uncovered relationships and factors that increase the cardiovascular disease risk",
        image: "https://th.bing.com/th/id/OIP.f4ihEogJzs4rbdZ4LO0wzAHaD4?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        github: "https://www.kaggle.com/code/gannaasaad/cardiovascular-project"
      },
      {
        title: "Identifying Stroke Risk Factors through Statistical Analysis using Excel",
        description: "Rigorous statistical analysis and dashboard building on the Stroke recognition dataset using Microsoft Excel",
        image: "https://th.bing.com/th/id/OIP.IroZVAnFlDTKoIKwiLTPCwHaE2?w=294&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        github: "https://github.com/GannaAsaad/Statistical-analysis-using-Excel-and-power-BI"
      },
      {
        title: "HR Data Analysis for Organizational Success using Excel and power BI",
        description: "enhance workforce management and strategic decision-making processes through Interpreting KPIs focusing on the employee performance, satisfaction, and retention metrics using Power Query and Power BI",
        image: "https://th.bing.com/th/id/OIP.zlJPOSE-EH14l27BAmqojAAAAA?w=229&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        github: "https://github.com/GannaAsaad/Statistical-analysis-using-Excel-and-power-BI"
      }
    ],
  };
   
    const skills = [
        { category: "Programming", items: ["Python: ", " Pandas ", " NumPy ", "SciPy" , " Matplotlip ","R:"," ggplot2 ", "dplyr", "tidymodels", "SQL"] },
        { category: "Machine Learning", items: ["TensorFlow", "PyTorch", "Scikit-learn"] },
        { category: "Tools", items: ["Docker", "Git", "AWS", "Kubernetes"] }
      ];
    
      const navigateToSection = (section) => {
        setActiveSection(section);
        setIsMenuOpen(false);
      };
    
      return (
        <div className="min-h-screen bg-[#4682A9]">
      {/* Navigation */}
          <nav className="fixed w-full bg-[#FFFFFF] shadow-sm z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-[#4682A9]">{personalInfo.name}</h1>
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#4682A9]">
                  {isMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
                </button>
              </div>
              <div className={`${isMenuOpen ? "block" : "hidden"} md:block absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent`}>
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
                  {["home", "ٍservices", "experience", "projects", "skills", "contact"].map((section) => (
                    <li key={section}>
                      <button
                        onClick={() => navigateToSection(section)}
                        className={`${activeSection === section ? "font-bold text-[#91C8E4]" : "font-bold text-[#EEE9DA]"} hover:text-primary capitalize`}
                      >
                        {section}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
    
          {/* Main Content */}
          <main className="pt-20">
            {/* Home Section */}
            {activeSection === "home" && (
              <section className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="md:w-1/2 mb-8 md:mb-0">
                    <img
                      src="https://raw.githubusercontent.com/abdelrahmanmah/SafeZoneInc/refs/heads/main/Ganna.jpeg"
                      alt="Profile"
                      className="rounded-full w-64 h-64 object-cover mx-auto"
                    />
                  </div>
                  <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-[#FFFFFF] mb-4">Welcome! I'm {personalInfo.name}👋</h1>
                    <h2 className="text-3xl font-bold text-[#C9E6F0] mb-4">{personalInfo.role}</h2>
                    <p className="text-[#EEE9DA]">{personalInfo.about}</p>
                  </div>
                </div>
              </section>
            )}
    
            {/* About Section */}
            {activeSection === "about" && (
              <section className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-[#4682A9] mb-8">About Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-bold text-[#4682A9] mb-4">Personal Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <FaEnvelope className="text-xl text-[#91C8E4] mr-2" />
                        <span style = {{color:'#5A72A0'}}> {personalInfo.email}</span>
                      </div>
                      <div className="flex items-center">
                        <FaPhone className="text-xl text-[#91C8E4] mr-2" />
                        <span style = {{color:'#5A72A0'}}> {personalInfo.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="text-xl text-[#91C8E4] mr-2" />
                        <span style = {{color: '#5A72A0'}}> {personalInfo.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-sm">
                    {personalInfo.education.map((edu, index) => (
                    <div key={index} className="mb-4 text-[#4682A9]"> {/* Apply color here */}
                   <h4 className="text-2xl font-bold text-[#4682A9]">{edu.degree}</h4> {/* Change color */}
                   <p className="text-xl text-[#4682A9]">{edu.university}</p> {/* Change color */}
                   <p className="text-l text-[#5A72A0]">{edu.year}</p> {/* Change color */}
                   <p className="text-l text-[#5A72A0]">CGPA: {edu.cgpa}</p> {/* Change color */}
                   </div> 
                  
                      ))}
                   </div>
                </div>
    
              </section>
            )}
    
            {/* Experience Section */}
            {activeSection === "experience" && (
              <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-[#4682A9] mb-8">Experience</h2>
                <div className="space-y-6">
                  {personalInfo.experience.map((exp, index) => (
                    <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-[#4682A9] ">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.duration}</p>
                      <p className="mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
    
            {/* Projects Section */}
            {activeSection === "projects" && (
              <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-[#4682A9] mb-8">Projects</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {personalInfo.projects.map((project, index) => (
                    <div key={index} className="bg-card rounded-lg shadow-sm overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#4682A9] mb-2">{project.title}</h3>
                        <p className="mb-4">{project.description}</p>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary-foreground"
                        >
                          <FaGithub className="mr-2" /> View on GitHub
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
    
    {activeSection === "skills" && (
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Skills</h2>
        
        <div className="grid gap-12"> {/* Increased gap for more spacing */}
          {/* Programming Section */}
          <div className="bg-[#FDF7E4] p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#4682A9] mb-4">Programming</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#727D73] px-3 py-1 rounded-full text-sm text-white">Python</span>
              {["Pandas", "NumPy", "SciPy", "Matplotlib"].map((lib, idx) => (
                <span key={idx} className="bg-[#8BA9C1] px-3 py-1 rounded-full text-sm text-white">
                  {lib}
                </span>
              ))}
              <span className="bg-[#727D73] px-3 py-1 rounded-full text-sm text-white">R</span>
              {["ggplot2", "dplyr", "tidymodels"].map((lib, idx) => (
                <span key={idx} className="bg-[#8BA9C1] px-3 py-1 rounded-full text-sm text-white">
                  {lib}
                </span>
              ))}
              <span className="bg-[#727D73] px-3 py-1 rounded-full text-sm text-white">SQL</span>
            </div>
          </div>
    
          {/* Machine Learning Section */}
          <div className="bg-[#FDF7E4] p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#4682A9] mb-4">Artificial Intelligence</h3>
            <div className="flex flex-wrap gap-2">
              {["Supervised and Unsupervised learning tasks", "Natural language processing", "Deep learning models deployment", "Generative AI models deployment", "Models Tuning and evaluation"].map((lib, idx) => (
                <span key={idx} className="bg-[#727D73] px-3 py-1 rounded-full text-sm text-white">
                  {lib}
                </span>
              ))}
            </div>
          </div>
    
          {/* Tools Section */}
          <div className="bg-[#FDF7E4] p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#4682A9] mb-4">Business Intelligence Tools</h3>
            <div className="flex flex-wrap gap-5">
              <span className="bg-[#727D73] px-3 py-1 rounded-full text-sm text-white">PowerBI</span>
              {["Excel", "Python"].map((lib, idx) => (
                <span key={idx} className="bg-[#8BA9C1] px-3 py-1 rounded-full text-sm text-white">
                  {lib}
                </span>
              ))}
            </div> 
          </div>
    
          {/* Soft Skills Section */}
          <div className="bg-[#FDF7E4] p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#4682A9] mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Commitment", "Flexibility", "Problem-Solving", "Time Management", "Leadership"].map((lib, idx) => (
                <span key={idx} className="bg-[#8BA9C1] px-3 py-1 rounded-full text-sm text-white">
                  {lib}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    )}
     
    
            {/* Contact Section */}
            {activeSection === "contact" && (
              <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
                <div className="max-w-2xl mx-auto">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        rows="4"
                        className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                  <div className="flex justify-center space-x-6 mt-8">
                    <a href="#" className="text-foreground hover:text-primary">
                      <FaLinkedin size={24} />
                    </a>
                    <a href="#" className="text-foreground hover:text-primary">
                      <FaGithub size={24} />
                    </a>
                    <a href="#" className="text-foreground hover:text-primary">
                      <FaKaggle size={24} />
                    </a>
                  </div>
                </div>
              </section>
            )}
          </main>
        </div>
      );

  };



export default Portfolio;
