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
const Projects = () => {
  const projectsData = useContext(ProjectsContext);

  return (
    <Layout title="Projects">
      <PageSection>
        <PageWrapper>
          <h1 className="intro__text">Projects.</h1>

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

  .mobile-text {
    display: none;
  }

  @media (max-width: 768px) {
    .desktop-text {
      display: none;
    }
    .mobile-text {
      display: inline;
    }
  }

  .highlight {
    color: var(--primary-color);
    font-weight: 900;
    text-shadow: 0px 0px 10px rgba(255, 215, 0, 0.6);
  }
`;

export default Projects;