/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { arrayRandomItem } from 'codewonders-helpers';
import { motion } from 'framer-motion';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

import { getTransitions } from '../components/Utils';

const Home = () => {
  const [color] = useState(arrayRandomItem(['#37609c', '#34c759', '#5856d6']));

  return (
    <Layout>
      <PageSection color={color}>
        <PageWrapper>
          <article>
            <motion.h1
              data-text="Dhruv Dakhara"
              className="intro__text"
              {...getTransitions(0.1)}
            >
              <mark className="mark">Dhruv Dakhara</mark>
            </motion.h1>
            <motion.p {...getTransitions(0.3)}>
              {' '}
              Hi, I’m Dhruv Dakhara, a Computer Science student at Vellore Institute of Technology.

              I am passionate about full-stack development, AI-driven solutions, and data engineering, with hands-on experience in React, Next.js, PyTorch, AWS, and MongoDB. My journey in tech has led me to develop and optimize web applications, build AI-powered recognition systems, and work on scalable software solutions.

              From enhancing web interfaces for leading companies to implementing cutting-edge deep learning models for image recognition, I thrive on solving complex problems and pushing the boundaries of innovation.

              Beyond coding, I enjoy collaborating with tech communities and leading initiatives that foster learning and growth. Whether it's developing impactful applications or exploring the latest advancements in AI and software engineering, I am always eager to build, learn, and innovate.

              Feel free to explore my {' '}
              <Link href="/projects" aria-label="Go to Projects Page">
                Projects
              </Link>{' '}
              projects or {' '}
              <Link href="/contact" aria-label="Go to Contact Page">
                Contact
              </Link>{' '}
              me for collaborations and opportunities!
            </motion.p>
          </article>
          <br />
          <motion.div {...getTransitions(0.7)}>
            <FooterLink goto="/about">See More About Me</FooterLink>
          </motion.div>

          <br />
        </PageWrapper>
      </PageSection>
    </Layout>
  );
};

const PageSection = styled.div`
  min-height: calc(100vh - 39vh);
  display: flex;
  align-items: center;
  justify-content: center;
  .intro__text {
    font-size: 2.275em;
    font-weight: 500;
    margin: 2rem 0rem 1.5rem;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 9.9px;

    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &::before {
      left: 2px;
      text-shadow: -1px 0 #00ffff;
      animation: noise-anim-2 15s infinite linear alternate-reverse;
    }

    &::after {
      left: -2px;
      text-shadow: 3px 0 #ff69b4;
      animation: noise-anim 2s infinite linear alternate-reverse;
    }

    @keyframes noise-anim {
      0% {
        clip-path: inset(29% 0 25% 0);
      }
      5% {
        clip-path: inset(9% 0 38% 0);
      }
      10% {
        clip-path: inset(96% 0 1% 0);
      }
      15% {
        clip-path: inset(75% 0 23% 0);
      }
      20% {
        clip-path: inset(46% 0 50% 0);
      }
      25% {
        clip-path: inset(3% 0 46% 0);
      }
      30% {
        clip-path: inset(82% 0 2% 0);
      }
      35% {
        clip-path: inset(88% 0 1% 0);
      }
      40% {
        clip-path: inset(91% 0 8% 0);
      }
      45% {
        clip-path: inset(96% 0 2% 0);
      }
      50% {
        clip-path: inset(59% 0 38% 0);
      }
      55% {
        clip-path: inset(41% 0 53% 0);
      }
      60% {
        clip-path: inset(21% 0 47% 0);
      }
      65% {
        clip-path: inset(89% 0 4% 0);
      }
      70% {
        clip-path: inset(1% 0 95% 0);
      }
      75% {
        clip-path: inset(86% 0 4% 0);
      }
      80% {
        clip-path: inset(95% 0 5% 0);
      }
      85% {
        clip-path: inset(54% 0 36% 0);
      }
      90% {
        clip-path: inset(70% 0 27% 0);
      }
      95% {
        clip-path: inset(6% 0 16% 0);
      }
      100% {
        clip-path: inset(95% 0 2% 0);
      }
    }
    @keyframes noise-anim-2 {
      0% {
        clip-path: inset(76% 0 21% 0);
      }
      5% {
        clip-path: inset(54% 0 7% 0);
      }
      10% {
        clip-path: inset(55% 0 29% 0);
      }
      15% {
        clip-path: inset(89% 0 3% 0);
      }
      20% {
        clip-path: inset(33% 0 40% 0);
      }
      25% {
        clip-path: inset(17% 0 56% 0);
      }
      30% {
        clip-path: inset(37% 0 51% 0);
      }
      35% {
        clip-path: inset(38% 0 19% 0);
      }
      40% {
        clip-path: inset(93% 0 4% 0);
      }
      45% {
        clip-path: inset(44% 0 14% 0);
      }
      50% {
        clip-path: inset(53% 0 26% 0);
      }
      55% {
        clip-path: inset(67% 0 11% 0);
      }
      60% {
        clip-path: inset(85% 0 13% 0);
      }
      65% {
        clip-path: inset(27% 0 37% 0);
      }
      70% {
        clip-path: inset(87% 0 4% 0);
      }
      75% {
        clip-path: inset(10% 0 8% 0);
      }
      80% {
        clip-path: inset(51% 0 27% 0);
      }
      85% {
        clip-path: inset(10% 0 60% 0);
      }
      90% {
        clip-path: inset(83% 0 3% 0);
      }
      95% {
        clip-path: inset(23% 0 55% 0);
      }
      100% {
        clip-path: inset(1% 0 81% 0);
      }
    }
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    line-height: 2.3;
    font-weight: 400;
    color: var(--article-color) !important;

    a,button {
      font-size: calc(var(--font-sm) + 0.9px);
      line-height: 20px;
      position: relative;
      border: none;
      font-weight: 800;
      background: transparent;
      text-transform: uppercase;
    }
  }
  /* button {
    font-size: var(--font-sm);
    background: var(--button-index);
    border: none;
    border-radius: 5px;
    transition: all 0.4s ease;
    padding: 1px 12px;
    &:hover {
      background: ${(props) => props.color};
      color: #fff;
    }
  } */
  @media (max-width: 585px) {
    margin: 3rem 0;
    display: block;
    min-height: 100%;
  }
  @media (max-width: 989px) {
    margin: 3rem 0;
    display: block;
  }
  @media (max-width: 220px) {
    margin: 3rem 0;
    display: block;
    min-height: 100%;
  }
  @media (prefers-reduced-motion: reduce) {
    /* Stop the animation */

    .intro__text {
      animation: none;

      &::before,
      &::after {
        content: none;
      }
    }
  }
`;
export default Home;
