/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { IoSendSharp } from 'react-icons/io5';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    
    setIsValid(
      updatedFormData.name.trim() !== '' &&
      updatedFormData.email.trim() !== '' &&
      updatedFormData.message.trim() !== ''
    );
  };

  const handleSubmit = async () => {
    if (isValid) {
      // Animate the form submission
      const submitAnimation = async () => {
        setSubmitted(true);
      };
      await submitAnimation();
    }
  };

  return (
    <Layout title="Contact">
      <PageSection>
        <PageWrapper>
          <motion.h1 
            className="intro__text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's Connect
          </motion.h1>
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p>
              Have a question or want to work together? Get in touch or shoot me an email directly on <b>dsd7888@gmail.com</b>. I'd love to hear from you!
            </p>
          </motion.article>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="form-container">
                  <div className="field-wrapper">
                    <motion.div
                      className={`field ${focusedField === 'name' ? 'focused' : ''}`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                      />
                      <div className="field-border" />
                    </motion.div>

                    <motion.div
                      className={`field ${focusedField === 'email' ? 'focused' : ''}`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                      />
                      <div className="field-border" />
                    </motion.div>
                  </div>

                  <motion.div
                    className={`field message-field ${focusedField === 'message' ? 'focused' : ''}`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                    <div className="field-border" />
                  </motion.div>
                  <br />

                  <motion.button
                    className="submit-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={!isValid}
                    onClick={handleSubmit}
                  >
                    <span>Send Message</span>
                    <IoSendSharp className="send-icon" />
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Message Sent!</h2>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/" className="mt-3 mb-5">
          Go Back Home
        </FooterLink>
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    background: linear-gradient(45deg, var(--cw), #888);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .form-container {
    max-width: 800px;
    margin: 2rem auto;
  }

  .field-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .field {
    position: relative;
    transition: all 0.3s ease;
    
    &.focused {
      transform: translateY(-2px);
      
      .field-border {
        transform: scaleX(1);
      }
    }
  }

  .field-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--cw), transparent);
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: left;
  }

  input, textarea {
    width: 100%;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 1rem;
    color: var(--cw);
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.05);
    }
  }

  .submit-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: auto;
    background: linear-gradient(45deg, var(--cw), #888);
    color: var(--bg);
    padding: 1rem 2rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .send-icon {
      transition: transform 0.3s ease;
    }

    &:hover .send-icon {
      transform: translateX(4px);
    }
  }

  .success-message {
    text-align: center;
    padding: 3rem;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    margin: 2rem 0;

    h2 {
      color: var(--cw);
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 585px) {
    .form-container {
      padding: 0 1rem;
    }
  }
`;

export default Contact;
