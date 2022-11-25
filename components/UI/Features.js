import { useTranslations } from 'next-intl';

const Features = ({ lang }) => {
  const t = useTranslations();

  const column1 = [
    t('features.1'),
    t('features.2'),
    t('features.3'),
    t('features.4'),
    t('features.5'),
    t('features.6'),
    t('features.7'),
    t('features.8'),
    t('features.9'),
    t('features.10'),
    t('features.11'),
    t('features.12'),
    t('features.13'),
    t('features.14'),
  ];

  const column2 = [
    t('features.15'),
    t('features.16'),
    t('features.17'),
    t('features.18'),
    t('features.19'),
    t('features.20'),
    t('features.21'),
    t('features.22'),
    t('features.23'),
    t('features.24'),
    t('features.25'),
    t('features.26'),
  ];

  const column1content = column1.map((checkItem) => (
    <div className="item" key={checkItem}>
      <div className="icon">
        <img src="/images/check-3.png" alt="" />
      </div>
      <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
        {checkItem}
      </div>
    </div>
  ));

  const column2content = column2.map((checkItem) => (
    <div className="item" key={checkItem}>
      <div className="icon">
        <img src="/images/check-3.png" alt="" />
      </div>
      <div className="text" style={lang === 'he' ? { paddingRight: '15px' } : { paddingLeft: '15px' }}>
        {checkItem}
      </div>
    </div>
  ));

  return (
    <div id="features" className="features">
      <h2>{t('features.title')}</h2>

      <div className="container wrapper">
        <div className="content">
          <div className="column">{column1content}</div>

          <div className="column">{column2content}</div>
        </div>

        <div className="image">
          <img src="/images/dashboad-1024x576-1.jpg" alt="Dashboard" />
        </div>
      </div>
    </div>
  );
};

export default Features;
