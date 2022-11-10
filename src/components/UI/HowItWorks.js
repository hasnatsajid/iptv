import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const HowItWorks = () => {
  const { t, i18n } = useTranslation();

  const [tabs, setTabs] = useState({ tab1: true, tab2: false, tab3: false, tab4: false, tab5: false });

  const tab1toggle = () => {
    setTabs({ tab1: true, tab2: false, tab3: false, tab4: false, tab5: false });
  };

  const tab2toggle = () => {
    setTabs({ tab1: false, tab2: true, tab3: false, tab4: false, tab5: false });
  };

  const tab3toggle = () => {
    setTabs({ tab1: false, tab2: false, tab3: true, tab4: false, tab5: false });
  };

  const tab4toggle = () => {
    setTabs({ tab1: false, tab2: false, tab3: false, tab4: true, tab5: false });
  };

  const tab5toggle = () => {
    setTabs({ tab1: false, tab2: false, tab3: false, tab4: false, tab5: true });
  };

  return (
    <div className="howitworks" id="howitworks">
      <h2>{t('working.title')}</h2>

      <div className="container wrapper">
        <div className="tabs">
          <div className="head">
            <div className={`tab ${tabs.tab1 && 'active'}`} onClick={tab1toggle}>
              {t('working.tabs.1')}
            </div>
            <div className={`tab ${tabs.tab2 && 'active'}`} onClick={tab2toggle}>
              {t('working.tabs.2')}
            </div>
            <div className={`tab ${tabs.tab3 && 'active'}`} onClick={tab3toggle}>
              {t('working.tabs.3')}
            </div>
            <div className={`tab ${tabs.tab4 && 'active'}`} onClick={tab4toggle}>
              {t('working.tabs.4')}
            </div>
            <div className={`tab ${tabs.tab5 && 'active'}`} onClick={tab5toggle}>
              {t('working.tabs.5')}
            </div>
          </div>
          <div className="content">
            <div className="container">
              <div className="description">
                {tabs.tab1 && (
                  <div className="android">
                    <p>
                      <strong>Step 1 : </strong>
                      {t('working.android.step1.1')}{' '}
                      <strong>
                        {t('working.android.step1.2')} (
                        <a target="new" href="https://play.google.com/store/apps/details?id=com.nst.smartersplayer">
                          {t('working.android.step1.3')}
                        </a>
                        )
                      </strong>
                    </p>
                    <p>
                      <strong>Step 2 : </strong>
                      {t('working.android.step2')}
                    </p>
                    <p>
                      <strong>Step 3 : </strong>
                      {t('working.android.step3')}
                    </p>
                  </div>
                )}

                {tabs.tab2 && (
                  <div className="ios">
                    <p>
                      <strong>Step 1 : </strong>
                      {t('working.ios.step1.1')}{' '}
                      <strong>
                        {t('working.ios.step1.2')} (
                        <a target="new" href="https://apps.apple.com/in/app/smarters-player-lite/id1628995509">
                          {t('working.ios.step1.3')}
                        </a>
                        )
                      </strong>
                    </p>
                    <p>
                      <strong>Step 2 : </strong>
                      {t('working.ios.step2')}
                    </p>
                    <p>
                      <strong>Step 3 : </strong>
                      {t('working.ios.step3')}
                    </p>
                  </div>
                )}

                {tabs.tab3 && (
                  <div className="windows">
                    <p>
                      <strong>Step 1 : </strong>
                      {t('working.windows.step1.windows.1')}:{' '}
                      <a target="new" href="https://www.iptvsmarters.com/download?download=windows">
                        Download .exe
                      </a>{' '}
                      {t('working.windows.step1.windows.2')}
                      <strong> IPTV Smarters Pro</strong>
                    </p>

                    <p>
                      {t('working.windows.step1.mac.1')}:{' '}
                      <a target="new" href="https://www.iptvsmarters.com/download?download=mac">
                        Download .dmg
                      </a>{' '}
                      {t('working.windows.step1.mac.2')}
                      <strong> IPTV Smarters Pro</strong>
                    </p>
                    <p>
                      <strong>Step 2 : </strong>
                      {t('working.windows.step2')}
                    </p>
                    <p>
                      <strong>{t('working.windows.message')}</strong>
                    </p>
                  </div>
                )}

                {tabs.tab4 && (
                  <div className="firestick">
                    <p>
                      <strong>Step 1 : </strong>
                      {t('working.firestick.step1.1')} (
                      <a target="new" href="https://www.iptvsmarters.com/smarters.apk">
                        {t('working.firestick.step1.2')}
                      </a>
                      ).
                    </p>
                    <p>
                      <strong>Step 2 : </strong>
                      {t('working.firestick.step2')}
                    </p>
                    <p>
                      <strong>Step 3 : </strong>
                      {t('working.firestick.step3')}
                    </p>
                    <p>
                      <strong>Step 4 : </strong>
                      {t('working.firestick.step4')}
                    </p>
                  </div>
                )}

                {tabs.tab5 && (
                  <div className="samsunglg">
                    <p>
                      <strong>{t('working.samsung.samsung.heading')}</strong>
                    </p>
                    <p>
                      <strong>Step 1 : </strong>
                      {t('working.samsung.samsung.step1.1')} <strong>{t('working.samsung.samsung.step1.2')}</strong> {t('working.samsung.samsung.step1.3')}
                    </p>
                    <p>
                      <strong>Step 2 : </strong>
                      {t('working.samsung.samsung.step2.1')} <strong>{t('working.samsung.samsung.step2.2')}</strong> {t('working.samsung.samsung.step2.3')}
                    </p>
                    <p>
                      <strong>Step 3 : </strong>
                      {t('working.samsung.samsung.step3')}
                    </p>
                    <p>
                      <strong>Note: </strong>
                      {t('working.samsung.samsung.note.1')}
                      <a href="https://www.whmcssmarters.com/smart-tv-app/"> {t('working.samsung.samsung.note.2')}</a>
                    </p>
                    <p>
                      <strong>{t('working.samsung.lg.heading')}</strong>
                    </p>
                    <p>
                      <strong>Step 1 : </strong>
                      {t('working.samsung.lg.step1.1')} <strong>{t('working.samsung.lg.step1.2')}</strong> {t('working.samsung.lg.step1.3')}
                    </p>
                    <p>
                      <strong>Step 2 : </strong>
                      {t('working.samsung.lg.step2.1')} <strong>{t('working.samsung.lg.step2.2')}</strong> {t('working.samsung.lg.step2.3')}
                    </p>
                    <p>
                      <strong>Step 3 : </strong>
                      {t('working.samsung.lg.step3')}
                    </p>
                    <p>
                      <strong>Note: </strong>
                      {t('note')}
                      <a href="https://www.whmcssmarters.com/smart-tv-app/"> {t('working.samsung.lg.note.2')}</a>
                    </p>
                    <p>{t('working.samsung.lg.message')}</p>
                  </div>
                )}

                <div className="note">
                  <strong>{t('working.note.heading')}:</strong> {t('working.note.text')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
