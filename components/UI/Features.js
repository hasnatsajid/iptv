import { useTranslation } from 'react-i18next';
import { useTranslations } from 'next-intl';

const Features = ({ lang }) => {
  // const { t, i18n } = useTranslation();
  const t = useTranslations();

  return (
    <div id="features" className="features">
      <h2>{t('features.title')}</h2>

      <div className="container wrapper">
        <div className="content">
          <div className="column">
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.1')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.2')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.3')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.4')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.5')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.6')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.7')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.8')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.9')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.10')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.11')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.12')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.13')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.14')}
              </div>
            </div>
          </div>

          <div className="column">
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.15')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.16')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.17')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.18')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.19')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.20')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.21')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.22')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.23')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.24')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.25')}
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src="/images/check-3.png" alt="" />
              </div>
              <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
                {t('features.26')}
              </div>
            </div>
          </div>
        </div>

        <div className="image">
          <img src="/images/dashboad-1024x576-1.jpg" alt="Dashboard" />
        </div>
      </div>
    </div>
  );
};

export default Features;
