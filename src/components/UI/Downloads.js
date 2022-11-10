import { useTranslation } from 'react-i18next';

const Downloads = () => {
  const { t, i18n } = useTranslation();

  const copyDownloadUrl = () => {
    navigator.clipboard.writeText('https://www.iptvsmarters.com/smarters.apk');
  };

  return (
    <div className="downloads" id="downloads">
      <h2>{t('downloads.title')}</h2>

      <div className="container">
        <div className="content">
          <div className="clipboard">
            <p>
              <span style={{ color: '#000000' }}>
                <strong>
                  <span style={{ color: '#a4304d' }}>{t('downloads.url')}</span>:{' '}
                  <span style={{ color: '#333333' }}>https://www.iptvsmarters.com/smarters.apk</span>
                </strong>
              </span>
              <button className="copybtn" onClick={copyDownloadUrl}>
                <img src="https://www.iptvsmarters.com/wp-content/uploads/2022/08/copy.png" alt="copy png" />
              </button>
            </p>
          </div>

          <div className="links">
            <div className="link">
              <a href="https://www.iptvsmarters.com/download?download=android">
                <img src="/images/apk-300x68.png" alt="" />
              </a>
            </div>
            <div className="link">
              <a href="https://play.google.com/store/apps/details?id=com.nst.smartersplayer">
                <img src="/images/googlestore-300x68.png" alt="" />
              </a>
            </div>
            <div className="link">
              <a href="https://apps.apple.com/in/app/smarters-player-lite/id1628995509">
                <img src="/images/IOS-300x68.png" alt="" />
              </a>
            </div>
            <div className="link">
              <a href="https://www.iptvsmarters.com/download?download=mac">
                <img src="/images/MAC-300x68.png" alt="" />
              </a>
            </div>
            <div className="link">
              <a href="https://www.iptvsmarters.com/download?download=windows_app">
                <img src="/images/window-300x68.png" alt="" />
              </a>
            </div>
            <div className="link">
              <a href="http://webtv.iptvsmarters.com/">
                <img src="/images/web-300x68.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="image">
          <img src="/images/download55.png" alt="Downloads" />
        </div>
      </div>
    </div>
  );
};

export default Downloads;
