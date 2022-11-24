import { useState, useEffect, Suspense } from 'react';
// import { GoogleLogin } from 'react-google-login';

// import Logo from '../public/images/logos/logo-flat.png';
// import google from '../public/svgs/google.svg';
// import fb from '../public/svgs/fb.svg';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { signin, signup } from '../actions/auth';

import Swal from 'sweetalert2';
import Head from 'next/head';

// import 'sweetalert2/src/sweetalert2.scss';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <h1>loading...</h1>
  </div>
);

export default function Auth() {
  const t = useTranslations();
  const router = useRouter();
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState(initialState);

  const { locale } = router;

  const switchMode = () => {
    setIsSignup((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      signup(form, router, locale);
    } else {
      signin(form, router, locale);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      //   dispatch({ type: AUTH, data: { result, token } });
      console.log(result, token);

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => console.log('Google Sign In was unsuccessful. Try again later');

  return (
    <>
      <Head>
        <title>{!isSignup ? 'Login' : 'Register'} - IPTV Smarters App is a fabulous video streaming player</title>
        <meta
          name="description"
          content="IPTV Smarters App is a fabulous video streaming player that allows your IPTV customers or end-users to stream content like Live TV, VOD, Series, and TV Catchup."
        />
        <link rel="icon" href="/icon.jpg" />
      </Head>

      <Suspense fallback={<Loader />}>
        <div className="auth" dir={locale === 'he' ? 'rtl' : 'ltr'}>
          <div className="wrapper">
            <div className="brand">{/* <Image src={Logo} /> */}</div>
            <div className="component">{isSignup ? `${t('signup')}` : `${t('login')}`}</div>

            {/* Inputs */}
            <form onSubmit={handleSubmit}>
              {isSignup ? (
                <>
                  <div className="auth-input">
                    <input type="text" name="firstName" required placeholder={`${t('firstName')} *`} onChange={handleChange} />
                  </div>
                  <div className="auth-input">
                    <input type="text" name="lastName" required placeholder={`${t('lastName')} *`} onChange={handleChange} />
                  </div>
                  <div className="auth-input">
                    <input type="email" name="email" required placeholder={`${t('email')} *`} onChange={handleChange} />
                  </div>
                  <div className="auth-input">
                    <input type="password" name="password" required placeholder={`${t('password')} *`} onChange={handleChange} />
                  </div>
                  <div className="auth-input">
                    <input type="password" name="confirmPassword" required placeholder={`${t('confirmPassword')} *`} onChange={handleChange} />
                  </div>
                </>
              ) : (
                <>
                  <div className="auth-input">
                    <input type="email" name="email" required placeholder={`${t('email')} *`} onChange={handleChange} />
                  </div>
                  <div className="auth-input">
                    <input type="password" name="password" required placeholder={`${t('password')} *`} onChange={handleChange} />
                  </div>
                </>
              )}

              <div className="providers">
                <div className="google">
                  <button type="submit">
                    <div>
                      {/* <Image src={google} /> */}
                      <p>{!isSignup ? `${t('login')}` : `${t('register')}`}</p>
                    </div>
                  </button>
                </div>

                {/* <GoogleLogin
              clientId="564033717568-bu2nr1l9h31bhk9bff4pqbenvvoju3oq.apps.googleusercontent.com"
              render={(renderProps) => (
                <div className="google">
                  <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <div>
                      <Image src={google} />
                      <p>Continue with Google</p>
                    </div>
                  </button>
                </div>
              )}
              onSuccess={googleSuccess}
              onFailure={googleError}
              cookiePolicy="single_host_origin"
            /> */}

                {/* <div className="facebook">
              <button>
                <div>
                  <Image src={fb} />
                  <p>Continue with Facebook</p>
                </div>
              </button>
            </div> */}
              </div>
            </form>

            <div className="signup">
              <div>
                <span>{isSignup ? `${t('already')}` : `${t('noaccount')}`}</span>
                <button onClick={switchMode}>
                  <h3>{isSignup ? `${t('signin')}` : `${t('registernow')}`}</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        // ...require(`../messages/shared/${locale}.json`),
        ...require(`../messages/login/${locale}.json`),
      },
    },
  };
}
