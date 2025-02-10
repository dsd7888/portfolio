/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useContext } from 'react';
import styled from 'styled-components';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
import Tabs, { TabItems } from '../components/Tabs';
import MansoryLayout from '../components/Mansory';
import MansoryItem from '../components/Mansory/mansory-item';
import { ProjectsContext } from '../components/Utils/context';
import { motion } from 'framer-motion';

// const Projects = () => {
//   const projectsData = useContext(ProjectsContext);
//   console.log(projectsData);
//   return (
//     <Layout title="Project">
//       <PageSection>
//         <PageWrapper>
//           <h1 className="intro__text">Projects.</h1> <br />
//               <MansoryLayout>
//                 {projectsData.map((item, index) => (
//                   <MansoryItem key={index} item={item} />
//                 ))}
//               </MansoryLayout>
//               <MansoryLayout>
//                 {projectsData.map(
//                   (item, index) =>
//                     item.type.includes('project') && (
//                       <MansoryItem key={index} item={item} />
//                     )
//                 )}
//               </MansoryLayout>
//               <MansoryLayout>
//                 {projectsData.map(
//                   (item, index) =>
//                     item.type.includes('tools') && (
//                       <MansoryItem key={index} item={item} />
//                     )
//                 )}
//               </MansoryLayout>
//               <MansoryLayout>
//                 {projectsData.map(
//                   (item, index) =>
//                     item.type.includes('open-source') && (
//                       <MansoryItem key={index} item={item} />
//                     )
//                 )}
//               </MansoryLayout>
//         </PageWrapper>
//       </PageSection>

//       <PageWrapper>
//         <FooterLink goto="/resume" className="mt-3 mb-5">
//           Lets Go To My Resume.
//         </FooterLink>
//         <br />
//       </PageWrapper>
//     </Layout>
//   );
// };
const Projects = () => {
  const projectsData = useContext(ProjectsContext);

  return (
    <Layout title="Projects">
      <PageSection>
        <PageWrapper>
          <h1 className="intro__text">Projects.</h1>

          {/* Engaging Animated Text */}
          <motion.p 
            className="info-text"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
          >
             <span className="highlight">Click on a project to explore the magic inside!</span>
          </motion.p>

          <br />
          <MansoryLayout>
            {projectsData
              .filter((item) => item.type.includes("project")) // Only include items with "project" in their type
              .map((item, index) => (
                <MansoryItem key={index} item={item} />
              ))}
          </MansoryLayout>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/resume" className="mt-3 mb-5">
          Let's Go To My Resume.
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

export const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }

  .info-text {
    font-size: var(--font-md);
    color: #00acc1;
    text-align: center;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .highlight {
    color: var(--primary-color);
    font-weight: 900;
    text-shadow: 0px 0px 10px rgba(255, 215, 0, 0.6);
  }
`;

export default Projects;