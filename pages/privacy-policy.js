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

export default function Privacy() {
  const t = useTranslations();
  const [lang, setLang] = useState('en');
  const tawkMessengerRef = useRef();

  const { locale } = useRouter();

  return (
    <div className="privacy">
      <Head>
        <title>Privacy Policy - IPTV Smarters Pro</title>
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
            <div className="content wrapper">
              <h2>{t('h1.title')}</h2>
              <p>
                {t('h1.1')}
                <br />
                {t('h1.2')}
                <br />
                {t('h1.3')}
              </p>

              <h2>{t('h2.title')}</h2>
              <p>
                {t('h2.1')}&nbsp;{t('h2.2')}&nbsp;({t('h2.3')}).
              </p>
              <p>{t('h2.4')}</p>
              <p>{t('h2.5')}</p>

              <ul>
                <li>{t('h2.6')}</li>
                <li>{t('h2.7')}</li>
              </ul>

              <p>
                {t('h2.8')}&nbsp;{t('h2.9')}&nbsp;{t('h2.10')}
              </p>

              <h2>{t('h3.title')}</h2>
              <p>
                {t('h3.1')}
                <br />
                {t('h3.2')}
              </p>

              <table className=" alignleft" style={{ height: '36px', borderColor: '#545454', width: '715px' }} cellpadding="10">
                <tbody>
                  <tr>
                    <td style={{ width: '241.95px' }}>{t('h3.table.1')}</td>
                    <td style={{ width: '455.05px' }}>{t('h3.table.2')}</td>
                  </tr>
                  <tr>
                    <td style={{ width: '241.95px' }}>{t('h3.table.user')}</td>
                    <td style={{ width: '455.05px' }}>
                      {t('h3.table.3')}
                      <p></p>
                      <p>{t('h3.table.4')}</p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h2>{t('h4.title')}</h2>
              <p>{t('h4.1')}</p>

              <table className=" alignleft" style={{ height: '301px', borderColor: '#363636', width: '100%' }} cellpadding="10">
                <tbody>
                  <tr>
                    <td style={{ width: '216px' }}>{t('h4.table.1')}</td>
                    <td style={{ width: '216px' }}>{t('h4.table.2')}</td>
                    <td style={{ width: '216px' }}>{t('h4.table.3')}</td>
                  </tr>
                  <tr>
                    <td style={{ width: '216px' }}>{t('h4.table.4')}</td>
                    <td style={{ width: '216px' }}>
                      <ul>
                        <li>{t('h4.table.performance')}</li>
                        <li>{t('h4.table.interest')}</li>
                      </ul>
                    </td>
                    <td style={{ width: '216px' }}>
                      <ul>
                        <li>{t('h4.table.userData')}</li>
                        <li>{t('h4.table.usageData')}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '216px' }}>{t('h4.table.5')}</td>
                    <td style={{ width: '216px' }}>
                      <ul>
                        <li>{t('h4.table.interest')}</li>
                        <li>{t('h4.table.consent')}</li>
                      </ul>
                    </td>
                    <td style={{ width: '216px' }}>
                      <ul>
                        <li>{t('h4.table.userData')}</li>
                        <li>{t('h4.table.usageData')}</li>
                        <li>{t('h4.table.voiceData')}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '216px' }}>{t('h4.table.6')}</td>
                    <td style={{ width: '216px' }}>
                      <ul>
                        <li>{t('h4.table.interest')}</li>
                        <li>{t('h4.table.consent')}</li>
                      </ul>
                    </td>
                    <td style={{ width: '216px' }}>
                      <ul>
                        <li>{t('h4.table.userData')}</li>
                        <li>{t('h4.table.usageData')}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '216px' }}>{t('h4.table.7')}</td>
                    <td style={{ width: '216px' }}>
                      <ul>
                        <li>{t('h4.table.legal')}</li>
                        <li>{t('h4.table.interest')}</li>
                      </ul>
                    </td>
                    <td style={{ width: '216px' }}>
                      <ul>
                        <li>{t('h4.table.userData')}</li>
                        <li>{t('h4.table.usageData')}</li>
                        <li>{t('h4.table.payment')}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '216px' }}>{t('h4.table.8')}</td>
                    <td style={{ width: '216px' }}>{t('h4.table.interest')}</td>
                    <td style={{ width: '216px' }}>
                      <ul>
                        <li>{t('h4.table.userData')}</li>
                        <li>{t('h4.table.usageData')}</li>
                        <li>{t('h4.table.payment')}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '216px' }}>{t('h4.table.9')}</td>
                    <td style={{ width: '216px' }}>{t('h4.table.interest')}</td>
                    <td style={{ width: '216px' }}>
                      <ul>
                        <li>{t('h4.table.userData')}</li>
                        <li>{t('h4.table.usageData')}</li>
                        <li>{t('h4.table.payment')}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '216px' }}>{t('h4.table.10')}</td>
                    <td style={{ width: '216px' }}>{t('h4.table.interest')}</td>
                    <td style={{ width: '216px' }}>
                      <ul>
                        <li>{t('h4.table.userData')}</li>
                        <li>{t('h4.table.usageData')}</li>
                        <li>{t('h4.table.payment')}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '216px' }}>{t('h4.table.11')}</td>
                    <td style={{ width: '216px' }}>
                      <ul>
                        <li>{t('h4.table.performance')}</li>
                        <li>{t('h4.table.legal')}</li>
                      </ul>
                    </td>
                    <td style={{ width: '216px' }}>
                      <ul>
                        <li>{t('h4.table.userData')}</li>
                        <li>{t('h4.table.payment')}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: '216px' }}>{t('h4.table.12')}</td>
                    <td style={{ width: '216px' }}>
                      <ul>
                        <li>{t('h4.table.performance')}</li>
                        <li>{t('h4.table.legal')}</li>
                        <li>{t('h4.table.interest')}</li>
                      </ul>
                    </td>
                    <td style={{ width: '216px' }}>
                      <ul>
                        <li>{t('h4.table.userData')}</li>
                        <li>{t('h4.table.usageData')}</li>
                        <li>{t('h4.table.payment')}</li>
                        <li>{t('h4.table.plan')}</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p>
                {t('h4.table.13')}&nbsp;{t('h4.table.14')}&nbsp;{t('h4.table.15')}
              </p>

              <h2>{t('h5.title')}</h2>
              <p>{t('h5.1')}</p>

              <h2>{t('h6.title')}</h2>
              <p>{t('h6.1')}</p>

              <ul>
                <li>{t('h6.2')}</li>
                <li>{t('h6.3')}</li>
              </ul>

              <p>{t('h6.4')}</p>

              <table style={{ height: '158px', borderColor: '#3b3b3b', width: '100%' }} cellpadding="10">
                <tbody>
                  <tr>
                    <td style={{ width: '330.5px' }}>{t('h6.5')}</td>
                    <td style={{ width: '330.5px' }}>{t('h6.6')}</td>
                  </tr>
                  <tr>
                    <td style={{ width: '330.5px' }}>{t('h6.7')}</td>
                    <td style={{ width: '330.5px' }}>{t('h6.8')}</td>
                  </tr>
                  <tr>
                    <td style={{ width: '330.5px' }}>{t('h6.9')}</td>
                    <td style={{ width: '330.5px' }}>{t('h6.10')}</td>
                  </tr>
                  <tr>
                    <td style={{ width: '330.5px' }}>{t('h6.11')}</td>
                    <td style={{ width: '330.5px' }}>{t('h6.12')}</td>
                  </tr>
                  <tr>
                    <td style={{ width: '330.5px' }}>{t('h6.13')}</td>
                    <td style={{ width: '330.5px' }}>{t('h6.14')}</td>
                  </tr>
                </tbody>
              </table>

              <h2>{t('h7.title')}</h2>
              <p>
                {t('h7.1')}
                <br />
                {t('h7.2')}
              </p>

              <ul>
                <li>{t('h7.3')}</li>
                <li>{t('h7.4')}</li>
                <li>{t('h7.5')}</li>
              </ul>

              <h2>{t('h8.title')}</h2>
              <p>{t('h8.1')}</p>

              <h2>{t('h9.title')}</h2>
              <p>{t('h9.1')}</p>

              <h2>{t('h10.title')}</h2>
              <p>
                {t('h10.1')}
                <br />
                {t('h10.2')}
              </p>

              <h2>{t('h11.title')}</h2>
              <p>
                {t('h11.1')}
                <br />
                {t('h11.2')}
                <br />
                {t('h11.3')}&nbsp;<a href="http://www.iptvsmarters.com/contact-us/">{t('h11.4')}</a> {t('h11.5')}
                <br />
                {t('h11.6')}
              </p>

              <h2>{t('h12.title')}</h2>
              <p>
                {t('h12.1')}
                <br />
                {t('h12.2')}
                <br />
                {t('h12.3')}
                <br />
                {t('h12.4')}
                <br />
                {t('h12.5')}
              </p>

              <h2>{t('h13.title')}</h2>
              <p>
                {t('h13.1')} &amp; {t('h13.2')}
              </p>

              <h2>{t('h14.title')}</h2>
              <p>
                {t('h14.1')}
                <br />
                {t('h14.2')}
                <br />
                {t('h14.3')}
              </p>

              <h2>{t('h15.title')}</h2>
              <p>
                {t('h15.1')}&nbsp;
                <a href="http://www.iptvsmarters.com/contact-us/">{t('h15.2')} </a>
                {t('h15.3')} <a href="mailto:kobi.iptv@gmail.com">kobi.iptv@gmail</a>.com, {t('h15.4')}
              </p>
              <p>{t('h15.5')}</p>
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
        ...require(`../messages/privacy-policy/${locale}.json`),
      },
    },
  };
}
