import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const ltr = { marginRight: '15px' };

const rtl = { marginLeft: '15px' };

const Pro = ({ lang }) => {
  const { t, i18n } = useTranslation();

  const [tabs, setTabs] = useState(true);

  const buttonToggler = () => {
    console.log('toggling...');
    setTabs((prev) => !prev);
  };

  return (
    <div className="pro">
      <h2>{t('pro.title')}</h2>

      <div className="container wrapper">
        <div className="tabs">
          <div className="head">
            <div className={`tab ${tabs && 'active'}`} onClick={buttonToggler}>
              {t('pro.tabs.1')}
            </div>
            <div className={`tab ${!tabs && 'active'}`} onClick={buttonToggler}>
              {t('pro.tabs.2')}
            </div>
          </div>
          <div className="content">
            <div className="container">
              <div className="description">
                <p>
                  <strong>IPTV Smarters </strong>
                  {t('pro.description')}
                </p>

                <div className="versionbox">
                  <div className="icon" style={lang === 'he' ? { marginLeft: '15px' } : { marginRight: '15px' }}>
                    <img src="/images/Verson.png" alt="" />
                  </div>
                  <div className="text">
                    <strong>{t('pro.version')}: </strong>
                    {tabs ? '1.0.4' : '1.0.8'}
                  </div>
                </div>
                <div className="versionbox">
                  <div className="icon" style={lang === 'he' ? { marginLeft: '15px' } : { marginRight: '15px' }}>
                    <img src="/images/Compatibility-1.png" alt="" />
                  </div>

                  <div className="text">
                    <strong>{t('pro.compatibility.heading')}: </strong>
                    {t('pro.compatibility.text')}
                  </div>
                </div>
              </div>
              <div className="image">
                <img src="/images/samsung-tv-2.png" alt="Samsung tv" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pro;
