import './styles.css';
import About from './components/About/About';
// import Contact from './Contact';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import SkillSection from './components/Skill/SkillSection';
import { SiCss3, SiDevexpress, SiJavascript, SiMicrosoftsqlserver, SiNextdotjs, SiPostgresql, SiPython, SiReact, SiTailwindcss, SiTypescript, SiVisualbasic, SiVite } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { DiGithubFull } from 'react-icons/di';
import { FaAngular, FaNode, FaGit } from 'react-icons/fa';
import ProjectSection from './components/ProjectSection/ProjectSection';
import Project from './components/Project/Project';
import Education from './components/Education/Education';
import Qualification from './components/Qualification/Qualification';

function App() {
  const programmingLanguages = [
    { name: 'VB.NET', icon: SiVisualbasic, link: 'abc' },
    { name: 'C#', icon: SiCsharp, link: 'abc' },
    { name: 'HTML5', icon: SiHtml5, link: 'abc' },
    { name: 'CSS3', icon: SiCss3, link: 'abc' },
    { name: 'JavaScript', icon: SiJavascript, link: 'abc' },
    { name: 'TypeScript', icon: SiTypescript, link: 'abc' },
    { name: 'Python', icon: SiPython, link: 'abc' }
  ];

  const frameworksAndLibraries = [
    { name: 'DevExpress', icon: SiDevexpress, link: '' },
    { name: 'Angular', icon: FaAngular, link: '' },
    { name: 'Node.js', icon: FaNode, link: '' },
    { name: 'React', icon: SiReact, link: '' },
    { name: 'Next.js', icon: SiNextdotjs, link: '' },
    { name: 'Vite', icon: SiVite, link: '' },
    { name: 'Tailwind', icon: SiTailwindcss, link: '' }
  ];

  const databases = [
    { name: 'SQL Server', icon: SiMicrosoftsqlserver, link: '' },
    { name: 'PostgreSQL', icon: SiPostgresql, link: '' }
  ];

  const versionControlAndTools = [
    { name: 'Git', icon: FaGit, link: '' },
    { name: 'GitHub', icon: DiGithubFull, link: '' }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      technologies: ['React', 'TypeScript', 'CSS'],
      platform: 'Web'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      platform: 'Web'
    }
  ];

  const educations = [
    { id: 1, institution: 'Mikroskil University', degree: 'Bachelor of Science in Computer Science', year: '2014 - 2019' }
  ];

  const qualifications = [
    { id: 1, name: 'Certified Full Stack Developer' },
    { id: 2, name: 'Microsoft Certified Professional (MCP)' },
    // Add more qualification entries as needed...
  ];
  
  return (
    <>
      <div>
        <section className='nav-section'>
          <NavBar />
        </section>
        <section className='main-section'>
          <main className='main-container'>
            {/* <div className="about-and-stack-flex"> */}
              <section id='about' className='main-container-about-section'>
                <About />
              </section>
              <section id='stack' className='main-container-skill-section'>
                <SkillSection title="Languages" skills={programmingLanguages} />
                <SkillSection title="Frameworks & Libraries" skills={frameworksAndLibraries} />
                <SkillSection title="Databases" skills={databases} />
                <SkillSection title="Version Control and Collab Tools" skills={versionControlAndTools} />
              </section>
            {/* </div> */}
            <section id='projects' className='main-container-poject-section'>
              <ProjectSection projects={projects} />
            </section>
            <section id='education' className='main-container-education-section'>
              <Education educations={educations} />
            </section>
            <section id='qualification' className='main-container-qualification-section'>
              <Qualification qualifications={qualifications} />
            </section>
            <section id='contact' className='main-container-contact-section'>
              {/* <Contact /> */}
            </section>
          </main>
        </section>
      </div>
    </>
  )
}

export default App
