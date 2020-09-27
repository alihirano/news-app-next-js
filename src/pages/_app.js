import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { configureStore } from '../store';
import { PageTransition } from 'next-page-transitions';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NextNProgress from 'nextjs-progressbar';
import ReactNotification from 'react-notifications-component';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
      return { ...pageProps };
    }
  }

  render() {
    const { Component, pageProps, store, router } = this.props;
    return (
      <Provider store={store}>
        <ReactNotification />
        <NextNProgress />
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </Provider>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(MyApp));
