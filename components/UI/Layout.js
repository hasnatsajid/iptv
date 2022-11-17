import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children, lang, setLang }) => {
  return (
    <>
      <Header lang={lang} setLang={setLang} />
      {children}
      <Footer lang={lang} />
    </>
  );
};

export default Layout;
