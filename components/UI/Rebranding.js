import { useTranslation } from 'react-i18next';
import { useTranslations } from 'next-intl';

import Link from 'next/link';

const Rebranding = () => {
  // const { t, i18n } = useTranslation();
  const t = useTranslations();

  return (
    <div className="rebranding">
      <h2>{t('rebranding.title')}</h2>

      <div className="container">
        <div className="wrapper">
          {/* <img src="/images/ott-section-bg.jpg" alt="background purple bubbles" /> */}
          <div className="content">
            <div className="inner">
              <h1>{t('rebranding.heading')}</h1>
              <Link className="getnow" href="/">
                {t('rebranding.button')}
              </Link>
              <p>{t('rebranding.delivery')}</p>
            </div>
          </div>

          <div className="image">
            <img src="/images/ps-e1658496031566.png" alt="colourful art" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rebranding;
