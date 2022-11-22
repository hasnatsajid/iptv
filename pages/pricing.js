import Head from 'next/head';
import Layout from '../components/UI/Layout';

import { useRouter } from 'next/router';

import { doPayment } from '../api';
// i18next
import { useTranslations } from 'next-intl';
import React, { Suspense, useRef } from 'react';

// Tawk.to chat
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useState } from 'react';

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <h1>loading...</h1>
  </div>
);

export default function Pricing() {
  const [months, setMonths] = useState(6);
  const t = useTranslations();
  const [lang, setLang] = useState('en');
  const tawkMessengerRef = useRef();

  const router = useRouter();
  const { locale } = router;

  const buyMonthly = async () => {
    const resp = await doPayment({
      amount: '30',
      currency: 'USDT',
      order_id: '12312',
      is_payment_multiple: false,
      url_return: 'https://iptv.hassuu.com/',
      url_callback: 'https://iptv-backend.hassuu.com/payment/webhook',
    });
    const result = resp.data.data.result;
    console.log(result);
    router.push(result.url);
  };

  const buyTrily = async () => {
    const resp = await doPayment({ amount: 25, currency: 'USDT', order_id: '123123' });
    console.log(resp.data.data.result);
  };

  const buyCustom = async () => {
    const resp = await doPayment({ amount: 20, currency: 'USDT', order_id: '123123' });
    console.log(resp);
  };

  return (
    <div className="app">
      <Head>
        <title>Pricing - IPTV Smarters App is a fabulous video streaming player</title>
        <meta
          name="description"
          content="IPTV Smarters App is a fabulous video streaming player that allows your IPTV customers or end-users to stream content like Live TV, VOD, Series, and TV Catchup."
        />
        <link rel="icon" href="/icon.jpg" />
      </Head>

      <Suspense fallback={<Loader />}>
        <div className="app">
          <TawkMessengerReact ref={tawkMessengerRef} propertyId="636b5d9db0d6371309ce1723" widgetId="1ghdmbd3e" />
          <Layout lang={locale} setLang={setLang}>
            <div dir={locale === 'he' ? 'rtl' : 'ltr'}>
              <div className="pricing">
                <div className="wrapper">
                  {/* <button onClick={buyPlan}>Pay $10</button> */}

                  <div className="heading">
                    <h1>{t('heading')}</h1>
                  </div>
                  <div className="plans">
                    <div className="plan">
                      <div className="title">
                        <h2>{t('singly')}</h2>
                      </div>
                      <div className="price">
                        <h1>
                          $30 <span>per month</span>
                        </h1>
                      </div>
                      <div className="valid">
                        <h2>
                          <i>For 1 {t('month')}</i>
                        </h2>
                      </div>
                      <div className="options">
                        <ul>
                          <li>{t('streaming')}</li>
                          <li>{t('recording')}</li>
                          <li>{t('support')}</li>
                        </ul>
                      </div>
                      <div className="buy">
                        <button onClick={buyMonthly}>{t('buynow')}</button>
                      </div>
                    </div>
                    <div className="plan">
                      <div className="title">
                        <h2>{t('triply')}</h2>
                      </div>
                      <div className="price">
                        <h1>
                          $25 <span>per month</span>
                        </h1>
                      </div>
                      <div className="valid">
                        <h2>
                          <i>For 3 {t('months')}</i>
                        </h2>
                      </div>
                      <div className="options">
                        <ul>
                          <li>{t('streaming')}</li>
                          <li>{t('recording')}</li>
                          <li>{t('support')}</li>
                        </ul>
                      </div>
                      <div className="buy">
                        {' '}
                        <button onClick={buyTrily}>{t('buynow')}</button>
                      </div>
                    </div>
                    <div className="plan">
                      <div className="title">
                        <h2>{t('longy')}</h2>
                      </div>
                      <div className="price">
                        <h1>
                          $20 <span>per month</span>
                        </h1>
                      </div>
                      <div className="valid">
                        <h2>
                          <i>
                            For{' '}
                            {/* <select name="" id="" onChange={(e) => setMonths(e.target.value)}>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                            </select>{' '} */}
                            6 {t('months')}
                          </i>
                        </h2>
                      </div>
                      <div className="options">
                        <ul>
                          <li>{t('streaming')}</li>
                          <li>{t('recording')}</li>
                          <li>{t('support')}</li>
                        </ul>
                      </div>
                      <div className="buy">
                        {' '}
                        <button onClick={buyCustom}>{t('buynow')}</button>
                      </div>
                    </div>
                    <div className="plan">
                      <div className="title">
                        <h2>{t('yearly')}</h2>
                      </div>
                      <div className="price">
                        <h1>
                          $20 <span>per month</span>
                        </h1>
                      </div>
                      <div className="valid">
                        <h2>
                          <i>
                            For{' '}
                            {/* <select name="" id="" onChange={(e) => setMonths(e.target.value)}>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                            </select>{' '} */}
                            1 {t('year')}
                          </i>
                        </h2>
                      </div>
                      <div className="options">
                        <ul>
                          <li>{t('streaming')}</li>
                          <li>{t('recording')}</li>
                          <li>{t('support')}</li>
                        </ul>
                      </div>
                      <div className="buy">
                        {' '}
                        <button onClick={buyCustom}>{t('buynow')}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </div>
      </Suspense>
    </div>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../messages/prices/${locale}.json`),
      },
    },
  };
}
