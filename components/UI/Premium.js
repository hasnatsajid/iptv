import { useTranslation } from 'react-i18next';
import { useTranslations } from 'next-intl';

const Premium = ({ lang }) => {
  // const { t, i18n } = useTranslation();
  const t = useTranslations();

  const premiumItems = [t('premium.items.1'), t('premium.items.2'), t('premium.items.3'), t('premium.items.4'), t('premium.items.5')];

  const premiumContent = premiumItems.map((item) => (
    <div className="item" key={item}>
      <img src="/images/check-3.png" alt="" />
      <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
        {item}
      </div>
    </div>
  ));

  return (
    <div className="premium">
      <h2>{t('premium.title')}</h2>

      <div className="container">
        <div className="image">
          <img src="/images/check453-2.png" alt="" />
        </div>

        <div className="content">
          <h2 style={lang === 'he' ? { textAlign: 'right', width: '80%', margin: 'auto' } : { textAlign: 'left' }}>{t('premium.heading')}:</h2>

          <div className="items">{premiumContent}</div>

          <div className="buynow">
            <a href="http://webtv.iptvsmarters.com/" className="buynowpremium">
              {t('premium.button')}
            </a>
          </div>

          <div className="note">
            <span>
              <strong className="danger">{t('note')}: </strong>
            </span>
            : <strong>{t('premium.note.ios.heading')} </strong>: {t('premium.note.ios.text')}
            <br />
            <strong>{t('premium.note.smart.heading')} </strong>: {t('premium.note.smart.text')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
