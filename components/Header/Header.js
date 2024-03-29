import Image from 'next/image';
import logo from '../../public/images/logo.png';
import engFlag from '../../public/images/flags/us.svg';
import espFlag from '../../public/images/flags/es.svg';
import gerFlag from '../../public/images/flags/de.svg';
import hebFlag from '../../public/images/flags/he.svg';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
// import { useTranslation } from 'react-i18next';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';
import decode from 'jwt-decode';

const Header = ({ lang, setLang }) => {
  const [user, setUser] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { t, i18n } = useTranslation();
  const t = useTranslations();
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    const storage = localStorage.getItem('profile');
    setUser(JSON.parse(storage));
  }, []);

  const menuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLang = (lng) => {
    localStorage.setItem('i18nextLng', lng);
    // router.push(`../${lng}`);
    // i18n.changeLanguage(lng);
    setLang(lng);
  };

  const toggleMenuItem = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleItem = (e) => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const lng = localStorage.getItem('i18nextLng');
    setLang(lng);
  }, []);

  const logout = () => {
    localStorage.removeItem('profile');

    router.push(`/${locale}/auth`);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      // console.log(decodedToken);

      // if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  }, [user]);

  return (
    <header>
      <div className="top-header">
        <Marquee pauseOnHover speed={50}>
          <div className="marquee-content">
            Smarters Pro Lite version has been launched for iOS devices -{' '}
            <a href="https://apps.apple.com/in/app/smarters-player-lite/id1628995509">Smarters Player Lite </a>&nbsp;&nbsp;&nbsp;Free Premium Version for
            Android - No need to buy Premium version for Android Devices anymore. &nbsp;&nbsp;&nbsp;New Version of IPTV Smarters Pro for LG TV has been released
            out today!
          </div>
        </Marquee>
      </div>

      <div className="main-header">
        {/* Desktop menu */}
        <div className="container desktop">
          <div className="logo">
            <Link href="/">
              <Image src={logo} alt="Iptv smarters" />
            </Link>
          </div>

          <div className="nav-items">
            <div className="nav-item">
              <Link href="/">{t('Home')}</Link>
            </div>
            <div className="nav-item">
              <a href="#downloads">{t('Download')}</a>
            </div>
            <div className="nav-item">
              <a href="#features">{t('Features')}</a>
            </div>
            <div className="nav-item">
              <a href="#howitworks">{t('HowItWorks')}</a>
            </div>
            <div className="nav-item">
              <a href="#screenshots">{t('Screenshots')}</a>
            </div>
            <div className="nav-item">
              <a href={`/${lang}/pricing`}>{t('Pricing')}</a>
            </div>
            <div className="nav-item">
              <a href={`/${lang}/contact`}>{t('ContactUs')}</a>
            </div>
            {user && (
              <div className="nav-item">
                <Link href="/dashboard">{t('MyAccount')}</Link>
              </div>
            )}
            <div className="nav-item login">
              {user?.result ? (
                <Link href={`/${lang}/auth`} onClick={logout}>
                  {t('logout')}
                </Link>
              ) : (
                <Link href={`/${lang}/auth`}>{t('login')}</Link>
              )}{' '}
            </div>
            <div className="nav-item">
              <div className="langs">
                <a href="/en" onClick={() => toggleLang('en')}>
                  <Image src={engFlag} alt="english" width={20} height={20} />
                </a>
                <a href="/es" onClick={() => toggleLang('es')}>
                  <Image src={espFlag} alt="spanish" width={20} />
                </a>
                <a href="/he" onClick={() => toggleLang('he')}>
                  <Image src={hebFlag} alt="hebrew" width={20} height={20} />
                </a>
                <a href="/de" onClick={() => toggleLang('de')}>
                  <Image src={gerFlag} alt="german" width={20} />
                </a>
                {/* <select name="" id="" value={lang} onChange={toggleLang}>
                  <option value="en">en</option>
                  <option value="es">es</option>
                  <option value="he">he</option>
                  <option value="de">de</option>
                </select> */}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}

        <div className="mobile-menu container">
          <div className="logo">
            <Link href="/">
              <img src="/images/logo.png" alt="Iptv smarters" />
            </Link>
          </div>
          <div className="menu-icon" onClick={menuToggler}>
            {/* {<MenuIcon />} */}
            <img src="/images/menu.svg" alt="Menu icon" />
          </div>
        </div>
        <div className={`overlay ${isMenuOpen && 'open'} `}>
          {isMenuOpen && (
            <div className="mobile-menu">
              <div className="logo">
                <img src="/images/logo.png" alt="" />
                {/* <div className="logo-title">Coinomon</div> */}
              </div>
              <div className="menu-icon" onClick={menuToggler}>
                <img src="/images/close.svg" alt="close icon" />
              </div>
            </div>
          )}
          <div className={`nav-items ${!isMenuOpen && 'hide'}`} style={{ textAlign: lang === 'he' ? 'right' : 'left' }}>
            <div className="nav-item">
              <Link href="/" onClick={toggleMenuItem}>
                {t('Home')}
              </Link>
            </div>
            <div className="nav-item">
              <a href="#downloads" onClick={toggleItem}>
                {t('Download')}
              </a>
            </div>
            <div className="nav-item">
              <a href="#features" onClick={toggleItem}>
                {t('Features')}
              </a>
            </div>
            <div className="nav-item">
              <a href="#howitworks" onClick={toggleItem}>
                {t('HowItWorks')}
              </a>
            </div>
            <div className="nav-item">
              <a href="#screenshots" onClick={toggleItem}>
                {t('Screenshots')}
              </a>
            </div>
            <div className="nav-item">
              <a href={`/${lang}/pricing`}>{t('Pricing')}</a>
            </div>
            <div className="nav-item">
              <a href={`/${lang}/contact`}>{t('ContactUs')}</a>
            </div>
            <div className="nav-item login">
              {/* <a href={`/${lang}/auth`}>{t('MyAccount')}</a> */}
              {user?.result ? (
                <Link href={`/${lang}/auth`} onClick={logout}>
                  {t('logout')}
                </Link>
              ) : (
                <Link href={`/${lang}/auth`}>{t('login')}</Link>
              )}{' '}
            </div>
            <div className="nav-item">
              {/* <div className="langs">
                <select name="" id="" value={lang} onChange={toggleLang}>
                  <option value="en">en</option>
                  <option value="es">es</option>
                  <option value="he">he</option>
                  <option value="de">de</option>
                </select>
              </div> */}
              <div className="langs">
                <a href="/en">
                  <Image src={engFlag} alt="english" width={20} height={20} />
                </a>
                <a href="/es">
                  <Image src={espFlag} alt="spanish" width={20} />
                </a>
                <a href="/he">
                  <Image src={hebFlag} alt="hebrew" width={20} height={20} />
                </a>
                <a href="/de">
                  <Image src={gerFlag} alt="german" width={20} />
                </a>
                {/* <select name="" id="" value={lang} onChange={toggleLang}>
                  <option value="en">en</option>
                  <option value="es">es</option>
                  <option value="he">he</option>
                  <option value="de">de</option>
                </select> */}
              </div>
            </div>
          </div>
          <div className={`social-icons ${!isMenuOpen && 'hide'}`}>
            {/* <a href="https://web.facebook.com/groups/1042692876675171">
              <img src="/images/android.png" alt="" />
            </a> */}
            {/* <Link href="https://www.instagram.com/coinomon">
              <InstagramIcon />
            </Link>
            <Link href="https://discord.gg/PspF2cnF">
              <DiscordIcon />
            </Link>
            <Link href="https://t.me/coinomonofficial">
              <TelegramIcom />
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
