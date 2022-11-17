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

export default function TOS() {
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
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Suspense fallback={<Loader />}>
        <Layout lang={locale} setLang={setLang}>
          <div className="about" dir={locale === 'he' ? 'rtl' : 'ltr'}>
            <div className="heading">
              <h2>{t('heading')}</h2>
            </div>

            <div className="content wrapper">
              <h2>{t('h1.title')}</h2>
              <p>{t('h1.1')}</p>
              <p>{t('h1.2')}</p>
              <p>{t('h1.3')}</p>
              <p>{t('h1.4')}</p>
              <p>{t('h1.5')}</p>

              <h2>{t('h2.title')}</h2>
              <p>{t('h2.1')}</p>
              <p>{t('h2.2')}</p>
              <p>{t('h2.3')}</p>
              <p>{t('h2.4')}</p>
              <p>{t('h2.5')}</p>

              <h2>{t('h3.title')}</h2>
              <p>{t('h3.1')}</p>
              <p>{t('h3.2')}</p>

              <h2>{t('h4')}</h2>
              <h3>{t('h5.title')}</h3>
              <p>
                {t('h5.1')}
                <br />
                {t('h5.2')}
              </p>

              <h3>{t('h6.title')}</h3>
              <p>{t('h6.1')}</p>
              <p>{t('h6.2')}</p>

              <ol>
                <li aria-level="1">{t('h6.ol.1')}</li>
                <li aria-level="1">{t('h6.ol.2')}</li>
                <li aria-level="1">{t('h6.ol.3')}</li>
                <li aria-level="1">{t('h6.ol.4')}</li>
                <li aria-level="1">{t('h6.ol.5')}</li>
                <li aria-level="1">{t('h6.ol.6')}</li>
                <li aria-level="1">{t('h6.ol.7')}</li>
              </ol>

              <h3>{t('h7.title')}</h3>
              <p>{t('h7.1')}</p>
              <p>
                <b>{t('h7.2')}</b>
              </p>
              <p>{t('h7.3')}</p>
              <p>{t('h7.4')}</p>

              <h3>{t('h8.title')}</h3>

              <ol>
                <li aria-level="3">{t('h8.1')}</li>
                <li aria-level="3">{t('h8.2')}</li>
                <li aria-level="3">{t('h8.3')}</li>
                <li aria-level="3">{t('h8.4')}</li>
                <li aria-level="3">{t('h8.5')}</li>
                <li aria-level="3">{t('h8.6')}</li>
                <li aria-level="3">{t('h8.7')}</li>
                <li aria-level="3">{t('h8.8')}</li>
                <li aria-level="3">{t('h8.9')}</li>
              </ol>

              <h3>{t('h9.title')}</h3>
              <p>{t('h9.1')}</p>

              <h3>{t('h10.title')}</h3>

              <ol>
                <li aria-level="2">{t('h10.1')}</li>
                <li aria-level="2">{t('h10.2')}</li>
                <li aria-level="2">{t('h10.3')}</li>
              </ol>

              <h3>{t('h11.title')}</h3>
              <p>{t('h11.1')}</p>
              <p>
                <b>{t('h11.2')}</b>
              </p>

              <ol>
                <li aria-level="2">{t('h11.ol.1')}</li>
                <li aria-level="2">{t('h11.ol.2')}</li>
                <li aria-level="2">{t('h11.ol.3')}</li>
                <li aria-level="2">{t('h11.ol.4')}</li>
                <li aria-level="2">{t('h11.ol.5')}</li>
                <li aria-level="2">{t('h11.ol.6')}</li>
                <li aria-level="2">{t('h11.ol.7')}</li>
                <li aria-level="2">{t('h11.ol.8')}</li>
                <li aria-level="2">{t('h11.ol.9')}</li>
                <li aria-level="2">{t('h11.ol.10')}</li>
                <li aria-level="2">{t('h11.ol.11')}</li>
                <li aria-level="2">{t('h11.ol.12')}</li>
              </ol>

              <p>{t('h11.3')}</p>

              <ul>
                <li aria-level="1">{t('h11.ul.1')}</li>
                <li aria-level="1">{t('h11.ul.2')}</li>
                <li aria-level="1">{t('h11.ul.3')}</li>
                <li aria-level="1">{t('h11.ul.4')}</li>
                <li aria-level="1">{t('h11.ul.5')}</li>
                <li aria-level="1">{t('h11.ul.6')}</li>
                <li aria-level="1">{t('h11.ul.7')}</li>
                <li aria-level="1">{t('h11.ul.8')}</li>
                <li aria-level="1">{t('h11.ul.9')}</li>
                <li aria-level="1">{t('h11.ul.10')}</li>
                <li aria-level="1">{t('h11.ul.11')}</li>
                <li aria-level="1">{t('h11.ul.12')}</li>
                <li aria-level="1">&nbsp;{t('h11.ul.13')}</li>
              </ul>

              <p>{t('h11.4')}</p>

              <h3>{t('h12.title')}</h3>
              <p>
                {t('h12.1')} (
                <a href="http://www.iptvsmarters.com/copyright-complaint">
                  <span style={{ color: '#339966' }}>www.iptvsmarters.com/copyright-complaint</span>
                </a>
                ). {t('h12.2')}&nbsp;info@prodigylegal.com&nbsp;. {t('h12.3')}{' '}
                <span style={{ color: '#339966' }}>
                  <a style={{ color: '#339966' }} href="http://www.iptvsmarters.com/copyright-complaint">
                    www.iptvsmarters.com/copyright-complaint
                  </a>
                </span>
                .
              </p>

              <p>{t('h12.4')}</p>

              <h3>{t('h13.title')}</h3>
              <p>{t('h13.1')}</p>

              <ol>
                <li aria-level="2">{t('h13.ol.1')}</li>
                <li aria-level="2">{t('h13.ol.2')}</li>
                <li aria-level="2">{t('h13.ol.3')}</li>
                <li aria-level="2">{t('h13.ol.4')}</li>
              </ol>

              <h3>{t('h14.title')}</h3>
              <p>{t('h14.1')}</p>

              <h3>{t('h15.title')}</h3>
              <p>{t('h15.1')}</p>

              <p>{t('h15.2')}</p>

              <h3>{t('h16.title')}</h3>
              <p>{t('h16.1')}</p>
              <p>{t('h16.2')}</p>

              <h3>{t('h17.title')}</h3>
              <p>{t('h17.1')}</p>
              <p>{t('h17.2')}</p>

              <h3>{t('h18.title')}</h3>
              <ol>
                <li aria-level="2">{t('h18.ol.1')}</li>
                <li aria-level="2">{t('h18.ol.2')}</li>
                <li aria-level="2">{t('h18.ol.3')}</li>
                <li aria-level="2">{t('h18.ol.4')}</li>
              </ol>

              <p>{t('h18.1')}</p>
              <p>{t('h18.2')}</p>
              <p>{t('h18.3')}</p>
              <p>{t('h18.4')}</p>

              <h3>{t('h19.title')}</h3>
              <p>{t('h19.1')}</p>
              <p>{t('h19.2')}</p>

              <h3>{t('h20.title')}</h3>
              <p>{t('h20.1')}</p>

              <h3>{t('h21.title')}</h3>
              <ol>
                <li aria-level="2">{t('h21.1')}</li>
                <li aria-level="2">{t('h21.2')}</li>
                <li aria-level="2">{t('h21.3')}</li>
              </ol>

              <h3>{t('h22.title')}</h3>
              <p>{t('h22.1')}</p>

              <h3>{t('h23.title')}</h3>
              <p>{t('h23.1')}</p>

              <h3>{t('h24.title')}</h3>
              <p>{t('h24.1')}</p>

              <h3>{t('h25.title')}</h3>
              <p>{t('h25.1')}</p>

              <h3>{t('h26.title')}</h3>
              <p>{t('h26.1')}</p>

              <h3>{t('h27.title')}</h3>
              <ol>
                <li aria-level="2">{t('h27.1')}</li>
                <li aria-level="2">{t('h27.2')}</li>
                <li aria-level="2">{t('h27.3')}</li>
                <li aria-level="2">{t('h27.4')}</li>
                <li aria-level="2">{t('h27.5')}</li>
              </ol>

              <h3>{t('h28.title')}</h3>
              <p>{t('h28.1')}</p>
              <p>
                {t('h28.2')}&nbsp;info@IPTVSmarters.com&nbsp;. {t('h28.2')}
                <br />
                {t('h28.3')}
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
        ...require(`../messages/terms-and-conditions/${locale}.json`),
      },
    },
  };
}
