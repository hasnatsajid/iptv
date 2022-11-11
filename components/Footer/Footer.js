import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="main-footer">
        <div className="wrapper container">
          <div className="content">
            <div className="image">
              <img src="/images/logo-white.png" alt="footer logo" />
            </div>
            <div className="description">
              <strong>IPTV Smarters Pro </strong>- Best OTT Player
              <br />
              The IPTV Smarters App is a fabulous video streaming player that allows your IPTV customers or end-users to stream content like Live TV, VOD,
              Series, and TV Catchup supplied by you; on their Android & iOS devices, Smart TV, and even on macOS/Windows PC/Laptop.
            </div>
          </div>

          <div className="about">
            <div className="link">
              <Link href="/">About Us</Link>
            </div>
            <div className="link">
              <Link href="/">Terms and Conditions</Link>
            </div>
            <div className="link">
              <Link href="/">Privacy Policy</Link>
            </div>
            <div className="link">
              <Link href="/">Refund Policy and Cancellation</Link>
            </div>
            <div className="link">
              <Link href="/">Copyright Complaint</Link>
            </div>
          </div>

          <div className="support">
            <p>
              <strong>Email : support@iptvsmarters.com</strong>
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
            Designed by{' '}
            <a href="http://hasnatsajid.com" title="Hasnat">
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
