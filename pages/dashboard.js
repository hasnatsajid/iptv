import Head from 'next/head';
import Layout from '../components/UI/Layout';

import { useRouter } from 'next/router';

import { doPayment } from '../api';
// i18next
import { useTranslations } from 'next-intl';
import React, { Suspense, useEffect, useRef } from 'react';

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

export default function Dashboard() {
  const [user, setUser] = useState();
  const [months, setMonths] = useState(6);
  const t = useTranslations();
  const [lang, setLang] = useState('en');
  const tawkMessengerRef = useRef();

  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    const storage = localStorage.getItem('profile');
    const lng = localStorage.getItem('i18nextLng');
    setLang(lng);
    setUser(JSON.parse(storage));
  }, []);

  return (
    <div className="app">
      <Head>
        <title>Dashboard - IPTV Smarters App is a fabulous video streaming player</title>
        <meta
          name="description"
          content="IPTV Smarters App is a fabulous video streaming player that allows your IPTV customers or end-users to stream content like Live TV, VOD, Series, and TV Catchup."
        />
        <link rel="icon" href="/icon.jpg" />
      </Head>

      <Suspense fallback={<Loader />}>
        <div className="app">
          <Layout lang={locale} setLang={setLang}>
            <div dir={locale === 'he' ? 'rtl' : 'ltr'}>
              <div className="dashboard">
                <div className="wrapper">
                  <div className="heading"></div>
                  <h2 style={{ textTransform: 'capitalize' }}>
                    Subscription status:
                    <span className={user?.result?.payment_status === 'active' ? 'green' : 'red'}>{user?.result?.payment_status}</span>
                  </h2>
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
        ...require(`../messages/dashboard/${locale}.json`),
      },
    },
  };
}
