import Head from 'next/head';

import { useRouter } from 'next/router';

// i18next
import { useTranslations } from 'next-intl';
import { Suspense, useRef } from 'react';

// Tawk.to chat
// import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useState } from 'react';
import Layout from '../components/UI/Layout';

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <h1>loading...</h1>
  </div>
);

export default function About() {
  const t = useTranslations();
  const [lang, setLang] = useState('en');
  const tawkMessengerRef = useRef();

  const { locale } = useRouter();

  return (
    <div className="app">
      <Head>
        <title>About Us - IPTV Smarters Pro</title>
        <meta
          name="description"
          content="IPTV Smarters App is a fabulous video streaming player that allows your IPTV customers or end-users to stream content like Live TV, VOD, Series, and TV Catchup."
        />
        <link rel="icon" href="/icon.jpg" />
      </Head>

      <Suspense fallback={<Loader />}>
        <Layout lang={locale} setLang={setLang}>
          <div className="about" dir={locale === 'he' ? 'rtl' : 'ltr'}>
            <div className="heading">
              <h2>{t('heading')}</h2>
            </div>

            <div className="content wrapper">
              <p>
                <strong>{t('1')}</strong>
              </p>

              <ul>
                <li aria-level="1">{t('2.1')}</li>
                <li aria-level="1">{t('2.2')}</li>
                <li aria-level="1">{t('2.3')}</li>
                <li aria-level="1">{t('2.4')}</li>
              </ul>

              <p>
                <strong>{t('3')}</strong>
              </p>
              <ul>
                <li aria-level="1">
                  {t('4.1')}{' '}
                  <a href="mailto:kobi.iptv@gmail.com">
                    <span style={{ textDecoration: 'underline' }}>
                      <span style={{ color: '#339966', textDecoration: 'underline' }}>kobi.iptv@gmail.com</span>
                    </span>
                  </a>
                </li>
                <li aria-level="1">{t('4.2')}</li>
                <li aria-level="1">{t('4.3')}</li>
                <li aria-level="1">{t('4.4')}</li>
              </ul>

              <p>
                {t('5')}{' '}
                <a href="mailto:kobi.iptv@gmail.com">
                  <span style={{ textDecoration: 'underline' }}>
                    <span style={{ color: '#339966', textDecoration: 'underline' }}>kobi.iptv@gmail.com</span>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </Layout>
      </Suspense>
    </div>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        // ...require(`../messages/shared/${locale}.json`),
        ...require(`../messages/copyright-complaint/${locale}.json`),
      },
    },
  };
}
