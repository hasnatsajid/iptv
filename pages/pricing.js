import Head from 'next/head';
import Layout from '../components/UI/Layout';
import { useState } from 'react';

import { useRouter } from 'next/router';

import { doPayment } from '../api';
// i18next
import { useTranslations } from 'next-intl';
import React, { Suspense, useEffect, useRef } from 'react';
import Modal from '../components/UI/Modal';
import { fetchPostJSON } from '../utils/api-helpers';
import getStripe from '../utils/get-stripejs';

// Tawk.to chat
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import Image from 'next/image';

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <h1>loading...</h1>
  </div>
);

export default function Pricing() {
  const [user, setUser] = useState();
  const [amount, setAmount] = useState();
  const [plan, setPlan] = useState('');
  const t = useTranslations();
  const [lang, setLang] = useState('en');
  const tawkMessengerRef = useRef();
  const [pay, setPay] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    const storage = localStorage.getItem('profile');
    const lng = localStorage.getItem('i18nextLng');
    setLang(lng);
    setUser(JSON.parse(storage));
  }, []);

  useEffect(() => {
    const localLang = localStorage.getItem('i18nextLng');
    if (localLang) {
      setLang(localLang);
    } else {
      localStorage.setItem('i18nextLng', 'en');
    }
  }, []);

  const buyStripePlan = async (amount, plan, e) => {
    e.preventDefault();
    if (!user) {
      router.push(`/${lang}/auth`);
      return;
    }
    const email = user.result.email;

    const response = await fetchPostJSON('/api/checkout_sessions', {
      amount: amount,
    });

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
    // setLoading(false);
  };

  const buyCryptomusPlan = async (amount, plan, e) => {
    e.preventDefault();
    if (!user) {
      router.push(`/${lang}/auth`);
      return;
    }
    const email = user.result.email;

    const resp = await doPayment({
      amount: `${amount}`,
      currency: 'USDT',
      email,
      plan,
      is_payment_multiple: false,
      url_return: 'https://iptv.hassuu.com/',
      url_callback: 'https://iptv-backend.hassuu.com/payment/webhook',
    });
    const result = resp.data.data.result;
    console.log(result);
    router.push(result.url);
  };

  const buyMonthly = async () => {
    if (!user) {
      router.push(`/${lang}/auth`);
      return;
    }
    const email = user.result.email;

    const resp = await doPayment({
      amount: '30',
      currency: 'USDT',
      email,
      plan: 'monthly',
      is_payment_multiple: false,
      url_return: 'https://iptv.hassuu.com/',
      url_callback: 'https://iptv-backend.hassuu.com/payment/webhook',
    });
    const result = resp.data.data.result;
    console.log(result);
    router.push(result.url);
  };

  const buyTrily = async () => {
    if (!user) {
      router.push(`/${lang}/auth`);
      return;
    }
    const email = user.result.email;

    const resp = await doPayment({
      amount: '75',
      currency: 'USDT',
      email,
      plan: 'tri-monthly',
      is_payment_multiple: false,
      url_return: 'https://iptv.hassuu.com/',
      url_callback: 'https://iptv-backend.hassuu.com/payment/webhook',
    });

    const result = resp.data.data.result;
    router.push(result.url);
  };

  const buyHexa = async () => {
    if (!user) {
      router.push(`/${lang}/auth`);
      return;
    }
    const email = user.result.email;

    const resp = await doPayment({
      amount: '120',
      currency: 'USDT',
      email,
      plan: 'hexa-monthly',
      is_payment_multiple: false,
      url_return: 'https://iptv.hassuu.com/',
      url_callback: 'https://iptv-backend.hassuu.com/payment/webhook',
    });

    const result = resp.data.data.result;
    router.push(result.url);
  };

  const buyYearly = async () => {
    if (!user) {
      console.log(lang);
      router.push(`/${lang}/auth`);
      return;
    }
    const email = user.result.email;

    const resp = await doPayment({
      amount: '240',
      currency: 'USDT',
      email,
      plan: 'yearly',
      is_payment_multiple: false,
      url_return: 'https://iptv.hassuu.com/',
      url_callback: 'https://iptv-backend.hassuu.com/payment/webhook',
    });
    const result = resp.data.data.result;
    router.push(result.url);
  };

  const handleDonate = async (e) => {
    e.preventDefault();
    // setLoading(true);
    // Create a Checkout Session.
    const response = await fetchPostJSON('/api/checkout_sessions', {
      amount: 30,
    });

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
    // setLoading(false);
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const selectPlan = async (amount, plan, e) => {
    setShowModal(true);
    setAmount(amount);
    setPlan(plan);
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

      {showModal && (
        <Modal toggleFilter={toggleModal} heading="Select payment method">
          <div className="methods">
            <a href="/" onClick={(e) => buyCryptomusPlan(amount, plan, e)}>
              <img src="/images/cryptomus.svg" alt="Cryptomus payment method" />
            </a>
            <a href="/" onClick={(e) => buyStripePlan(amount, plan, e)}>
              <img src="/images/stripe.svg" alt="Stripe visa mastercard payment method" />
            </a>
          </div>
        </Modal>
      )}
      <Suspense fallback={<Loader />}>
        <div className="app">
          <TawkMessengerReact ref={tawkMessengerRef} propertyId="636b5d9db0d6371309ce1723" widgetId="1ghdmbd3e" />
          <Layout lang={locale} setLang={setLang}>
            <div dir={locale === 'he' ? 'rtl' : 'ltr'}>
              <div className="pricing">
                <div className="wrapper">
                  <div className="heading">
                    <h1>{t('heading')}</h1>
                  </div>

                  <div className="plans">
                    <div className="plan">
                      {/* <button onClick={() => setShowModal(true)}>toggle modal</button>
                      <button onClick={(e) => buyStripePlan(30, 'monthly', e)}>Buy plan</button> */}
                      {/* <form onSubmit={handleDonate}>
                        <button type="submit">Donate $30</button>
                      </form> */}
                      <div className="title">
                        <h2>{t('singly')}</h2>
                      </div>
                      <div className="price">
                        <h1>
                          $30 <span>{t('permonth')}</span>
                        </h1>
                      </div>
                      <div className="valid">
                        <h2>
                          <i>
                            {t('for')} 1 {t('month')}
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
                        <button onClick={(e) => selectPlan(30, 'monthly', e)}>{t('buynow')}</button>
                      </div>
                    </div>
                    <div className="plan">
                      <div className="title">
                        <h2>{t('triply')}</h2>
                      </div>
                      <div className="price">
                        <h1>
                          $25 <span>{t('permonth')}</span>
                        </h1>
                      </div>
                      <div className="valid">
                        <h2>
                          <i>
                            {t('for')} 3 {t('months')}
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
                        <button onClick={(e) => selectPlan(75, 'tri-monthly', e)}>{t('buynow')}</button>
                      </div>
                    </div>
                    <div className="plan">
                      <div className="title">
                        <h2>{t('longy')}</h2>
                      </div>
                      <div className="price">
                        <h1>
                          $20 <span>{t('permonth')}</span>
                        </h1>
                      </div>
                      <div className="valid">
                        <h2>
                          <i>
                            {t('for')} 6 {t('months')}
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
                        <button onClick={(e) => selectPlan(120, 'hexa-monthly', e)}>{t('buynow')}</button>
                      </div>
                    </div>
                    <div className="plan">
                      <div className="title">
                        <h2>{t('yearly')}</h2>
                      </div>
                      <div className="price">
                        <h1>
                          $20 <span>{t('permonth')}</span>
                        </h1>
                      </div>
                      <div className="valid">
                        <h2>
                          <i>
                            {t('for')} 1 {t('year')}
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
                        <button onClick={(e) => selectPlan(240, 'yearly', e)}>{t('buynow')}</button>
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
