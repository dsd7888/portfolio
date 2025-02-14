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
      <PageSection>
        <PageWrapper className="mb-5">
          {/* Animated Hero Section */}
          <div className="hero-section">
            <h1 className="hero-title">
              {['A', 'b', 'o', 'u', 't', ' ', 'M', 'e'].map((letter, index) => (
                <span key={index} className="bounce-letter">{letter}</span>
              ))}
            </h1>
            <div className="scroll-indicator">
              <div className="mouse"/>
            </div>
          </div>

          {/* Enhanced Photo Section with Parallax */}
          <PageWrapper className="photo-section">
            <div className="photo-container">
              <img
                src="/img/Dhruv.jpeg"
                alt="Dhruv Dakhara"
                className="profile-photo"
              />
              <div className="photo-overlay"/>
            </div>
          </PageWrapper>

          {/* Vision Section with Animated Background */}
          <PageWrapper className="vision-section">
            <div className="vision-container">
              <h1 className="vision-title">Vision</h1>
              <div className="vision-content">
                <p className="vision-text">
                  I believe in a future where technology empowers individuals, fosters inclusivity, and transforms the way we interact with the world.My mission is to engineer solutions that are innovative, impactful, and accessible applications that go beyond functionality to create meaningful change.  

                  By blending technical expertise, creativity, and a problem-solving mindset, I strive to develop technologies that bridge gaps, enhance efficiency, and unlock new possibilities. Whether it's through AI-driven solutions, intelligent systems, or intuitive user experiences, my goal is to contribute to projects that solve real-world challenges and leave a lasting impact on society.
                </p>
              </div>
            </div>
          </PageWrapper>
          <br />
          {/* Interactive Timeline */}
          <div className="experience-section">
            <h3 className="section-title">Work Experience</h3>
            <div className="timeline-container">
              <ul className="timeline">
                
                <li className="mt-2">
                  <p>
                    <strong>Web Development Intern</strong>
                  </p>
                  <p>
                    <span style={{ fontSize: "1.2em", fontWeight: "bold", color: "#4caf50" }}>
                      Jabsz Gaming Studio India
                    </span>
                    <strong><span style={{ marginLeft: "400px" }}>Sept 2024 - Dec 2024</span></strong>
                  </p>
                  <p>
                    Led the development of an employee portal, streamlining internal workflows by integrating 
                    time tracking, leave requests, and onboarding tools, enhancing employee efficiency by 30% and 
                    improving administrative oversight.
                    <br />
                    Optimized frontend performance by implementing React with Vite and Tailwind CSS, reducing load 
                    times by 40%, ensuring a seamless user experience and improving system scalability.
                  </p>
                </li>

                <li>
                  <p>
                    <strong>Machine Learning Intern</strong>
                  </p>
                  <p>
                    <span style={{ fontSize: "1.2em", fontWeight: "bold", color: "#4caf50" }}>
                      GatiSoftTech
                    </span>
                    <strong><span style={{ marginLeft: "520px" }}>June 2024 - July 2024</span></strong>
                  </p>
                  <p>
                    Developed a jewelry recognition system using Python, Flask, PyTorch, and FAISS, implementing a custom 
                    MobileNetV3-based neural network architecture, which improved feature extraction efficiency by 4%.
                    <br />
                    Built a RESTful API for image indexing, utilizing multi-threading and state management, boosting system 
                    performance and reliability for large-scale datasets with advanced computer vision techniques.
                  </p>
                </li>

                <li>
                  <p>
                    <strong>Web Development Intern</strong>
                  </p>
                  <p>
                    <span style={{ fontSize: "1.2em", fontWeight: "bold", color: "#4caf50" }}>
                      Social 101
                    </span>
                    <strong><span style={{ marginLeft: "570px" }}>Dec 2023 - Jan 2024</span></strong>
                  </p>
                  <p>
                    Spearheaded the development and enhancement of websites for leading companies, ensuring a seamless online 
                    presence and superior user experience, leading to increased user engagement.
                    <br />
                    Collaborated with UI/UX teams to create responsive web interfaces, boosting user satisfaction and web traffic.
                  </p>
                </li>

              </ul>
            </div>
          </div>

          {/* Interactive Skills Cloud */}
          <PageWrapper className="skills-section">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-cloud">
              {['Java', 'Python', 'React', 'Node.js', 'CSS', 'HTML', 'MySQL', 'Flask', 'Git', 'JavaScript', 'C++', 'OpenCV', 'AWS'].map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-item"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </PageWrapper>
        </PageWrapper>
      </PageSection>
      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
          Lets Continue To Projects
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .hero-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .hero-title {
    font-size: 4rem;
    display: flex;
    gap: 0.5rem;
  }

  .bounce-letter {
    display: inline-block;
    animation: bounce 1s ease infinite;
    animation-delay: calc(var(--index) * 0.1s);
  }

  .scroll-indicator {
    position: absolute;
    bottom: 15rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .mouse {
    width: 26px;
    height: 42px;
    border: 2px solid var(--cw);
    border-radius: 13px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 10px;
      transform: translateX(-50%);
      width: 4px;
      height: 8px;
      background: var(--cw);
      border-radius: 2px;
      animation: scroll 1.5s infinite;
    }
  }

  .photo-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, rgba(0, 188, 212, 0.05) 0%, transparent 70%);
      pointer-events: none;
    }
  }

  .photo-container {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 40px rgba(0, 188, 212, 0.2);
      
      .photo-overlay {
        opacity: 0.3;
      }

      img {
        transform: scale(1.1);
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }

  .photo-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #00bcd4, #4caf50);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .vision-container {
    position: relative;
    padding: 2rem;
    background: rgba(0, 188, 212, 0.05);
    border-radius: 1rem;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(0, 188, 212, 0.1), rgba(76, 175, 80, 0.1));
      transform: translateX(-100%);
      transition: transform 0.5s ease;
    }

    &:hover:before {
      transform: translateX(0);
    }
  }

  .skills-section {
    padding: 4rem 0;
    text-align: center;
  }

  .skills-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, #00bcd4, #4caf50);
      border-radius: 2px;
    }
  }

  .skills-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    perspective: 1000px;
  }

  .skill-item {
    background: rgba(0, 188, 212, 0.1);
    color: var(--cw);
    padding: 1rem 1.5rem;
    border-radius: 2rem;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        45deg,
        rgba(0, 188, 212, 0.1),
        rgba(76, 175, 80, 0.1)
      );
      transform: translateX(-100%);
      transition: transform 0.4s ease;
    }

    &:hover {
      transform: translateY(-5px) scale(1.05);
      background: rgba(0, 188, 212, 0.2);
      box-shadow: 
        0 10px 20px rgba(0, 188, 212, 0.1),
        0 6px 6px rgba(0, 188, 212, 0.1);

      &:before {
        transform: translateX(0);
      }
    }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes scroll {
    0% { transform: translateX(-50%) translateY(0); opacity: 1; }
    100% { transform: translateX(-50%) translateY(10px); opacity: 0; }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Responsive design adjustments */
  @media (max-width: 1024px) {
    .skills-cloud {
      max-width: 800px;
      gap: 1rem;
    }

    .skill-item {
      padding: 0.8rem 1.2rem;
    }
  }

  @media (max-width: 768px) {
    .photo-container {
      width: 250px;
      height: 250px;
    }

    .skills-cloud {
      gap: 0.8rem;
    }

    .skill-item {
      padding: 0.6rem 1rem;
      font-size: 0.9rem;
    }
  }

  .experience-section {
    padding: 4rem 0;
    
    .section-title {
      font-size: 2.5rem;
      margin-bottom: 3rem;
      text-align: center;
      position: relative;
      
      &:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 3px;
        background: linear-gradient(90deg, #00bcd4, #4caf50);
        border-radius: 2px;
      }
    }
  }

  .timeline-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
  }

  .timeline {
    list-style: none;
    padding: 0;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(to bottom, #00bcd4, #4caf50);
    }

    li {
      position: relative;
      padding-left: 2rem;
      margin-bottom: 3rem;
      animation: fadeInUp 0.5s ease forwards;
      opacity: 0;
      transform: translateY(20px);

      &:last-child {
        margin-bottom: 0;
      }

      &:before {
        content: '';
        position: absolute;
        left: -6px;
        top: 0;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #00bcd4;
        border: 2px solid var(--bg);
        transition: all 0.3s ease;
      }

      &:hover:before {
        background: #4caf50;
        transform: scale(1.2);
        box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
      }

      p {
        margin: 0.5rem 0;
        line-height: 1.6;
        
        strong {
          color: var(--cw);
        }
      }
    }
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Add animation delays for timeline items */
  .timeline li:nth-child(1) { animation-delay: 0.2s; }
  .timeline li:nth-child(2) { animation-delay: 0.4s; }
  .timeline li:nth-child(3) { animation-delay: 0.6s; }
`;

export default About;
