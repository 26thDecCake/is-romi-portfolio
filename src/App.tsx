import About from './components/About/About';
import './App.css'
import SkillSection from './components/Skill/SkillSection';
import { SiCss3, SiDevexpress, SiJavascript, SiMicrosoftsqlserver, SiNextdotjs, SiPython, SiReact, SiTailwindcss, SiTypescript, SiVisualbasic, SiVite } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { DiGithubFull } from 'react-icons/di';
import { FaAngular, FaNode, FaGit } from 'react-icons/fa';
import TerminalComponent from './components/Terminal/Terminal';
import { BiLogoPostgresql } from 'react-icons/bi';

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
    { name: 'PostgreSQL', icon: BiLogoPostgresql, link: '' }
  ];

  const versionControlAndTools = [
    { name: 'Git', icon: FaGit, link: '' },
    { name: 'GitHub', icon: DiGithubFull, link: '' }
  ];
  
  return (
    <>
      <section className='main-section'>
        <main className='main-container'>
          <div className="left_side">
            <section id='about'>
              <About />
            </section>
            <section id='stack'>
              <SkillSection title="Languages" skills={programmingLanguages} />
              <SkillSection title="Frameworks & Libraries" skills={frameworksAndLibraries} />
              <SkillSection title="Databases" skills={databases} />
              <SkillSection title="Version Control and Collab Tools" skills={versionControlAndTools} />
            </section>
          </div>
          <div className="right_side">
            <section id="terminal">
            <TerminalComponent />
            </section>
          </div>
        </main>
      </section>
    </>
  )
}

export default App
