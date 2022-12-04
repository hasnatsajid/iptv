import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

const Footer = ({ lang }) => {
  const t = useTranslations();
  const router = useRouter();
  const { locale } = router;

  return (
    <footer>
      <div className="main-footer" dir={locale === 'he' ? 'rtl' : 'ltr'}>
        <div className="wrapper container">
          <div className="content">
            <div className="image">
              <img src="/images/logo-white.png" alt="footer logo" />
            </div>
            <div className="description">
              <strong>IPTV Smarters Pro </strong>- {t('footer.bestott')}
              <br />
              {t('footer.details')}
            </div>
          </div>

          <div className="about" style={lang === 'he' ? { paddingRight: '3rem' } : { paddingLeft: '3rem' }}>
            <div className="link">
              <Link href={`/${lang}/about`}>{t('footer.aboutus')}</Link>
            </div>
            <div className="link">
              <Link href={`/${lang}/terms-and-conditions`}>{t('footer.tos')}</Link>
            </div>
            <div className="link">
              <Link href={`/${lang}/privacy-policy`}>{t('footer.privacy')}</Link>
            </div>
            <div className="link">
              <Link href={`/${lang}/refund-policy-cancellation`}>{t('footer.refundpolicy')}</Link>
            </div>
            <div className="link">
              <Link href={`/${lang}/refund-policy-cancellation`}>{t('footer.copyright')}</Link>
            </div>
          </div>

          <div className="support">
            <p>
              <strong>{t('footer.email')} : kobi.iptv@gmail.com</strong>
            </p>
            <div className="icons">
              <a href="https://play.google.com/store/apps/details?id=com.nst.smartersplayer" className="icon">
                <img src="/images/play.png" alt="Playstore app" />
              </a>
              <a href="https://www.iptvsmarters.com/download?download=mac" className="icon">
                <img src="/images/ios.png" alt="IOS app" />
              </a>
              <a href="https://www.iptvsmarters.com/download?download=windows" className="icon">
                <img src="/images/window.png" alt="Windows app" />
              </a>
              <a href="https://apps.apple.com/in/app/smarters-player-lite/id1628995509" className="icon">
                <img src="/images/apple.png" alt="Apple store app" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container wrapper">
          <div className="footer-info">
            {t('footer.designedby')}{' '}
            <a href="http://hasnatsajid.com" target="new" title="Hasnat">
              Hasnat Sajid
            </a>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/ipetvsmarters" target="new">
              <img src="/images/facebook.svg" alt="facebook" />
            </a>
            <a href="https://twitter.com/hasy965/" target="new">
              <img src="/images/twitter.svg" alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
