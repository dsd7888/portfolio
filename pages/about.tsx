/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
/* ---------------------------- Image Dependency ---------------------------- */
import { Date, Github, Dribble, Product } from '../components/Icons';


const About = () => {
  return (
    <Layout title="About Me">
      <StyledPage>
        <PageWrapper>
          {/* Hero Section */}
          <section className="hero">
            <h1>
              {['A', 'b', 'o', 'u', 't', ' ', 'M', 'e'].map((letter, index) => (
                <span key={index} className="bounce">{letter}</span>
              ))}
            </h1>
            <div className="scroll-indicator">
              <div className="mouse" />
            </div>
          </section>

          {/* Photo Section */}
          <section className="photo">
            <div className="photo-wrapper">
              <img src="/img/Dhruv.jpeg" alt="Dhruv Dakhara" />
              <div className="overlay" />
            </div>
          </section>

          {/* Vision Section */}
          <section className="vision">
            <h2>Vision</h2>
            <div className="content">
              <p>
                I believe in a future where technology empowers individuals, fosters inclusivity, 
                and transforms the way we interact with the world. My mission is to engineer solutions 
                that are innovative, impactful, and accessible applications that go beyond functionality 
                to create meaningful change.
              </p>
              <p>
                By blending technical expertise, creativity, and a problem-solving mindset, I strive 
                to develop technologies that bridge gaps, enhance efficiency, and unlock new possibilities. 
                Whether it's through AI-driven solutions, intelligent systems, or intuitive user experiences, 
                my goal is to contribute to projects that solve real-world challenges and leave a lasting 
                impact on society.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section className="experience">
            <h2>Work Experience</h2>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <h3>{exp.role}</h3>
                  <div className="company-info">
                    <span className="company">{exp.company}</span>
                    <span className="duration">{exp.duration}</span>
                  </div>
                  <ul>
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="skills">
            <h2>Skills</h2>
            <div className="skills-grid">
              {['Java', 'Python', 'React', 'Node.js', 'CSS', 'HTML', 'MySQL', 
                'Flask', 'Git', 'JavaScript', 'C++', 'OpenCV', 'AWS'].map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </PageWrapper>

        <PageWrapper>
          <FooterLink goto="/projects" className="footer-link">
            Lets Continue To Projects
          </FooterLink>
        </PageWrapper>
      </StyledPage>
    </Layout>
  );
};

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'Jabsz Gaming Studio India',
    duration: 'Sept 2024 - Dec 2024',
    description: [
      'Led the development of an employee portal, streamlining internal workflows by integrating time tracking, leave requests, and onboarding tools, enhancing employee efficiency by 30% and improving administrative oversight.',
      'Optimized frontend performance by implementing React with Vite and Tailwind CSS, reducing load times by 40%, ensuring a seamless user experience and improving system scalability.'
    ]
  },
  {
    role: 'Machine Learning Intern',
    company: 'GatiSoftTech',
    duration: 'June 2024 - July 2024',
    description: [
      'Developed a jewelry recognition system using Python, Flask, PyTorch, and FAISS, implementing a custom MobileNetV3-based neural network architecture, which improved feature extraction efficiency by 4%.',
      'Built a RESTful API for image indexing, utilizing multi-threading and state management, boosting system performance and reliability for large-scale datasets with advanced computer vision techniques.'
    ]
  },
  {
    role: 'Web Development Intern',
    company: 'Social 101',
    duration: 'Dec 2023 - Jan 2024',
    description: [
      'Spearheaded the development and enhancement of websites for leading companies, ensuring a seamless online presence and superior user experience, leading to increased user engagement.',
      'Collaborated with UI/UX teams to create responsive web interfaces, boosting user satisfaction and web traffic.'
    ]
  }
];

const StyledPage = styled.div`
  /* Base styles */
  section {
    padding: 4rem 1rem;
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
  }

  h2 {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    margin-bottom: 2rem;
    text-align: center;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, #4caf50, #4caf50);
      border-radius: 2px;
    }
  }

  /* Hero Section */
  .hero {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      font-size: clamp(2rem, 6vw, 4rem);
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .bounce {
      display: inline-block;
      animation: bounce 1s ease infinite;
      animation-delay: calc(var(--index) * 0.1s);
    }
  }

  /* Photo Section */
  .photo {
    .photo-wrapper {
      width: min(300px, 80vw);
      aspect-ratio: 1;
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  /* Vision Section */
  .vision {
    .content {
      background: rgba(0, 188, 212, 0.05);
      padding: 2rem;
      border-radius: 1rem;
      
      p {
        margin-bottom: 1rem;
        line-height: 1.6;
        font-size: clamp(0.9rem, 2vw, 1rem);
      }
    }
  }

  /* Experience Section */
  .experience {
    .timeline {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      position: relative;
      padding-left: 3rem;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 3px;
        background: linear-gradient(to bottom, #4caf50, #4caf50);
      }
    }

    .experience-item {
      padding: 1.5rem;
      background: rgba(0, 188, 212, 0.05);
      border-radius: 1rem;
      color: #ffffff;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        left: -3rem;
        top: 1.5rem;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #4caf50;
        border: 3px solid #4caf50;
        z-index: 1;
      }

      &::after {
        content: '';
        position: absolute;
        left: -1.5rem;
        top: 2rem;
        width: 1.5rem;
        height: 2px;
        background: #4caf50;
      }

      &:hover::before {
        transform: scale(1.2);
        transition: transform 0.3s ease;
      }

      h3 {
        color: #ffffff;
        font-size: clamp(1.2rem, 3vw, 1.5rem);
        margin-bottom: 0.5rem;
      }

      .company-info {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 1rem;

        .company {
          color: #4caf50;
          font-weight: bold;
        }
        
        .duration {
          color: #ffffff;
        }
      }

      ul {
        list-style: none;
        padding-left: 0;
        
        li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
          font-size: clamp(0.9rem, 2vw, 1rem);
          color: #ffffff;
          
          &::before {
            content: "•";
            color: #4caf50;
            margin-right: 0.5rem;
          }
        }
      }
    }
  }

  /* Skills Section */
  .skills {
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 1rem;
      justify-items: center;
    }

    .skill-item {
      background: rgba(0, 188, 212, 0.1);
      padding: 0.8rem 1.2rem;
      border-radius: 2rem;
      color: #ffffff;
      font-size: clamp(0.8rem, 2vw, 1rem);
      transition: all 0.3s ease;
      width: 100%;
      text-align: center;

      &:hover {
        transform: translateY(-5px);
        background: rgba(0, 188, 212, 0.2);
      }
    }
  }

  /* Animations */
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    section {
      padding: 2rem 1rem;
    }

    .company-info {
      flex-direction: column;
      gap: 0.5rem;
      
      .duration {
        margin-left: 0;
      }
    }

    .experience {
      .timeline {
        padding-left: 2rem;
      }

      .experience-item {
        &::before {
          left: -2rem;
          width: 12px;
          height: 12px;
        }

        &::after {
          left: -1rem;
          width: 1rem;
        }
      }
    }
  }

  .footer-link {
    display: block;
    text-align: center;
    margin: 2rem 0;
  }
`;

export default About;
