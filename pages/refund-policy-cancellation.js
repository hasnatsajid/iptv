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
        <title>Refund Policy and Cancellation - IPTV Smarters Pro</title>
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
              <p>{t('1')}</p>
              <p>
                <strong>{t('2')}</strong>
              </p>
              <p>– {t('3')}</p>
              <p>– {t('4')}</p>
              <p>– {t('5')}</p>
              <p>
                <strong>{t('6')}</strong>
              </p>
              <p>{t('7')}</p>
              <p>
                <strong>{t('8')}</strong>
                <br />
                {t('9')}
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
        ...require(`../messages/refund-policy-cancellation/${locale}.json`),
      },
    },
  };
}
