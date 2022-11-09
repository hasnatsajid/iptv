import { Link } from 'react-router-dom';
import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const menuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLang = (e) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng);
  };

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
            <a href="/">
              <img src="/images/logo.png" alt="Iptv smarters" />
            </a>
          </div>

          <div className="nav-items">
            <div className="nav-item">
              <a href="/">{t('Home')}</a>
            </div>
            <div className="nav-item">
              <a href="#download">{t('Download')}</a>
            </div>
            <div className="nav-item">
              <a href="#features">{t('Features')}</a>
            </div>
            <div className="nav-item">
              <a href="#features">{t('HowItWorks')}</a>
            </div>
            <div className="nav-item">
              <a href="#features">{t('Screenshots')}</a>
            </div>
            <div className="nav-item">
              <a href="#features">{t('Blog')}</a>
            </div>
            <div className="nav-item">
              <a href="#features">{t('ContactUs')}</a>
            </div>
            <div className="nav-item">
              <a href="#features">{t('MyAccount')}</a>
            </div>
            <div className="nav-item">
              <div className="langs">
                <select name="" id="" onChange={toggleLang}>
                  <option value="en">en</option>
                  <option value="es">es</option>
                  <option value="he">he</option>
                  <option value="de">de</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}

        <div className="mobile-menu container">
          <div className="logo">
            <a href="/">
              <img src="/images/logo.png" alt="Iptv smarters" />
            </a>
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
          <div className={`nav-items ${!isMenuOpen && 'hide'}`}>
            <div className="nav-item">
              <a href="/">{t('Home')}</a>
            </div>
            <div className="nav-item">
              <a href="#download">{t('Download')}</a>
            </div>
            <div className="nav-item">
              <a href="#features">{t('Features')}</a>
            </div>
            <div className="nav-item">
              <a href="#features">{t('HowItWorks')}</a>
            </div>
            <div className="nav-item">
              <a href="#features">{t('Screenshots')}</a>
            </div>
            <div className="nav-item">
              <a href="#features">{t('Blog')}</a>
            </div>
            <div className="nav-item">
              <a href="#features">{t('ContactUs')}</a>
            </div>
            <div className="nav-item">
              <a href="#features">{t('MyAccount')}</a>
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
