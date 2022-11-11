import { useTranslation } from 'react-i18next';
import { useTranslations } from 'next-intl';

const Terms = ({ lang }) => {
  // const { t, i18n } = useTranslation();
  const t = useTranslations();

  return (
    <div className="terms">
      <h2>{t('terms.title')}</h2>

      <div className="content wrapper">
        <div className="license">
          <h3>{t('terms.license.title')}</h3>

          <div className="description">
            <p>{t('terms.license.items.1')}</p>
            <p>{t('terms.license.items.2')}</p>
            <p>{t('terms.license.items.3')}</p>
            <p>{t('terms.license.items.4')}</p>
            <p>{t('terms.license.items.5')}</p>
            <p>{t('terms.license.items.6')}</p>
            <p>{t('terms.license.items.7')}</p>
          </div>
        </div>
        <div className="disclaimer">
          <h3>{t('terms.disclaimer.title')}</h3>

          <div className="item">
            <div className="image">
              <img src="/images/check-3.png" alt="check icon" />
            </div>

            <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
              {t('terms.disclaimer.items.1')}
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img src="/images/check-3.png" alt="check icon" />
            </div>

            <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
              {t('terms.disclaimer.items.2')}
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img src="/images/check-3.png" alt="check icon" />
            </div>

            <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
              {t('terms.disclaimer.items.3')}
            </div>
          </div>
          <div className="item">
            <div className="image">
              <img src="/images/check-3.png" alt="check icon" />
            </div>

            <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
              {t('terms.disclaimer.items.4')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
