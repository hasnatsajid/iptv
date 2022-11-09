import { useTranslation } from 'react-i18next';

const Premium = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="premium">
      <h2>{t('premium.title')}</h2>

      <div className="container">
        <div className="image">
          <img src="/images/check453-2.png" alt="" />
        </div>

        <div className="content">
          <h2>{t('premium.heading')}:</h2>

          <div className="items">
            <div className="item">
              <img src="/images/check-3.png" alt="" />
              <div className="text">{t('premium.items.1')}</div>
            </div>
            <div className="item">
              <img src="/images/check-3.png" alt="" />
              <div className="text">{t('premium.items.2')}</div>
            </div>
            <div className="item">
              <img src="/images/check-3.png" alt="" />
              <div className="text">{t('premium.items.3')}</div>
            </div>
            <div className="item">
              <img src="/images/check-3.png" alt="" />
              <div className="text">{t('premium.items.4')}</div>
            </div>
            <div className="item">
              <img src="/images/check-3.png" alt="" />
              <div className="text">{t('premium.items.5')}</div>
            </div>
          </div>

          <a href="/" className="buynowpremium">
            {t('premium.button')}
          </a>

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
