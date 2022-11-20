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

const buyPlan = async () => {
  doPayment();
  // var data = {
  //   order_id: '123123',
  //   currency: 'USDT',
  //   amount: '12',
  // };
  // const mysign = MD5(
  //   btoa(JSON.stringify(data)) +
  //     '4KgkyCwCTItsIXmEnX1BPyaYuqv2oTD6CXSwwmKypxwQT5aUA8jhurpKBt9xyspKPxr41nGOzZ3m6AGZgVhQTLIjMCNWREkI3oijRTkG8XD25caMc2YXHKq4xJhewzE7'
  // ).toString();
  // console.log('MD5 : ', mysign);
  // const res = await fetch('https://api.cryptomus.com/v1/payment', {
  //   method: 'post',
  //   headers: {
  //     merchant: '88678e43-8060-427f-926c-d337853ee43e',
  //     sign: mysign,
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //   },
  //   body: {
  //     amount: '12',
  //     currency: 'USD',
  //     order_id: '12345',
  //     url_return: '/',
  //     url_callback: '/',
  //   },
  // });
  // const result = await res.json();
  // console.log('Cryptomus : ', result);
};

export default function Pricing() {
  const t = useTranslations();
  const [lang, setLang] = useState('en');
  const tawkMessengerRef = useRef();

  const { locale } = useRouter();

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
              <div className="wrapper">
                <button onClick={buyPlan}>Pay $10</button>
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
