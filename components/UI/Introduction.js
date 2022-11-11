import { useTranslation } from 'react-i18next';
import { useTranslations } from 'next-intl';

const Introduction = ({ lang }) => {
  // const { t, i18n } = useTranslation();
  const t = useTranslations();

  return (
    <div className="introduction">
      <div className="container">
        <h2>{t('title')}</h2>
        <div className="description">
          <p>{t('description.part1')}</p>

          <p>{t('description.part2')}</p>

          <div className="devices">
            <div className="column" style={lang === 'he' ? { marginLeft: '8.483%' } : { marginRight: '8.483%' }}>
              <div className="item">
                <div className="icon">
                  <img src="/images/android.png" alt="Android" />
                </div>
                <div className="detail" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                  <span>Android</span> - {t('description.android')}
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <img src="/images/tv.png" alt="tv" />
                </div>
                <div className="detail" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                  <span>iOS</span> - {t('description.ios')}
                </div>
              </div>
            </div>
            <div className="column">
              <div className="item">
                <div className="icon">
                  <img src="/images/apple-1.png" alt="Apple" />
                </div>
                <div className="detail" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                  <span>Smart TVs</span> - {t('description.smart')}
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <img src="/images/window_mac.png" alt="Windows and Mac" />
                </div>
                <div className="detail" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                  <span>Windows/MAC</span> - {t('description.windows')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
