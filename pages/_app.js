/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import App from 'next/app';
import React from 'react';
import { PageTransition } from 'next-page-transitions';

/* -------------------------- Internal Dependecies -------------------------- */

import AppContext from '../components/Utils/context';

export default class MyApp extends App {
  constructor() {
    super();
  }

  loadTheme = () => {
    const { theme } = this.state;
  };

  handleopen = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };
  setTheme = () => {
    const { theme } = this.state;
    this.setState({ theme: !theme });
  };
  closeShow = () => {
    this.setState({ show: false });
  };
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <PageTransition
          timeout={200}
          classNames="page-transition"
          loadingDelay={100}
        >
          <AppContext.Provider
            key={Math.floor(Math.random() * Math.floor(20))}
            value={{
              loadTheme: this.loadTheme,
              setTheme: this.setTheme,
              handleopen: this.handleopen,
              closeShow: this.closeShow,
            }}
          >
            <Component {...pageProps} />
          </AppContext.Provider>
        </PageTransition>
      </>
    );
  }
}
