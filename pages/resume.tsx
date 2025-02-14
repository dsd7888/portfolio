/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiEye, FiMail } from 'react-icons/fi';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('preview');
  const resumeData = 'https://drive.google.com/file/d/1JcTkwdyrSJ7DlPtsF0Hq5aPejXUjTP_0/view?usp=sharing/view';

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <Layout title="Resume">
      <PageWrapper>
        <StyledResume>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="intro__text">Resumé</h1>
            
            <div className="actions-container">
              <TabButton 
                active={activeTab === 'preview'}
                onClick={() => setActiveTab('preview')}
              >
                <FiEye /> Preview
              </TabButton>
              
              <motion.a
                href={resumeData}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiEye /> View Full
              </motion.a>
              
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1JcTkwdyrSJ7DlPtsF0Hq5aPejXUjTP_0"
                className="action-button download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload /> Download
              </motion.a>
            </div>

            <AnimatePresence mode="wait">
              {isLoading ? (
                <LoadingWrapper
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="loader" />
                </LoadingWrapper>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="resume-container"
                >
                  <iframe
                    src={resumeData.replace('/view', '/preview')}
                    allowFullScreen
                    title="Dhruv Dakhara Resumé"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <ContactButton href="/contact">
              <FiMail />
              <span>Let's Connect</span>
            </ContactButton>
          </motion.div>
        </StyledResume>
      </PageWrapper>
    </Layout>
  );
};

const StyledResume = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--text-color) !important;
    opacity: 0.9;
  }
  iframe {
    width: 100%;
    filter: invert(var(--invert)) grayscale(calc(var(--invert) - 0.15));
    border: none;
    height: 44.5rem;
    @media (min-width: 768px) {
      width: 82.8% !important;
      height: 60.4rem !important;
    }
  }

  .actions-container {
    display: flex;
    gap: 1rem;
    margin: 2rem 0;
    flex-wrap: wrap;
  }

  .action-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    background: var(--primary-color);
    color: #FFFFFF;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s ease;

    &.download {
      background: var(--secondary-color);
      color: #FFFFFF;
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }

  .resume-container {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    
    iframe {
      width: 100%;
      height: 80vh;
      border: none;
      background: var(--background);
    }
  }
`;

const TabButton = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  background: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? '#FFFFFF' : '#FFFFFF'};
  border: 2px solid var(--primary-color);
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: ${props => props.active ? '600' : '500'};
  opacity: ${props => props.active ? '1' : '0.9'};
`;

const LoadingWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid var(--background);
    border-bottom-color: var(--primary-color);
    border-radius: 50%;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }
`;

const ContactButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--primary-color);
  color: #FFFFFF;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  margin: 2rem 0;
  width: fit-content;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export default Resume;
