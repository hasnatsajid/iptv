import Head from 'next/head';
import { useTranslations } from 'next-intl';

import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../components/UI/Layout';
import { sendEmail } from '../api';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const initialState = { subject: '', name: '', email: '', message: '' };

export default function Contact() {
  const t = useTranslations();
  const [lang, setLang] = useState('en');
  const [data, setData] = useState(initialState);
  const { locale } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const response = await sendEmail(data);
    console.log('Result : ', response.status);
    if (response.status === 200) {
      Swal.fire('', 'Email Sent!', 'success');
      setData(initialState);
    } else {
      Swal.fire('', 'Service Unavailable!', 'error');
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <Head>
        <title>Contact Us - IPTV Smarters Pro</title>
        <meta
          name="description"
          content="IPTV Smarters App is a fabulous video streaming player that allows your IPTV customers or end-users to stream content like Live TV, VOD, Series, and TV Catchup."
        />
        <link rel="icon" href="/icon.jpg" />
      </Head>

      <Layout lang={locale} setLang={setLang}>
        <div className="pricing" dir={locale === 'he' ? 'rtl' : 'ltr'}>
          <div className="heading">
            <h2>{t('heading')}</h2>
          </div>

          <div className="content wrapper">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="item">
                  <label htmlFor="email">Subject: </label>
                  <input type="text" required name="subject" onChange={handleChange} />
                </div>
                <div className="item">
                  <label htmlFor="name">Name: </label>
                  <input type="text" name="name" required id="" onChange={handleChange} />
                </div>
                <div className="item">
                  <label htmlFor="email">Email: </label>
                  <input type="email" name="email" id="" required onChange={handleChange} />
                </div>
                <div className="item">
                  <label htmlFor="message">Message: </label>
                  <textarea name="message" id="" cols="30" rows="10" required onChange={handleChange}></textarea>
                </div>
                <div className="item">
                  <button type="submit">Send Mail</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        // ...require(`../messages/shared/${locale}.json`),
        ...require(`../messages/contact/${locale}.json`),
      },
    },
  };
}
