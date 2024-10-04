import React from 'react';
import './../Home/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'; // Import the icon

// Import images
import companyLogo1 from '/Users/prathik/Desktop/ zysk/prathik/src/assets/Home/Logomark-2.png';
import companyLogo2 from '/Users/prathik/Desktop/ zysk/prathik/src/assets/Home/Logomark-3.png';
import companyLogo3 from '/Users/prathik/Desktop/ zysk/prathik/src/assets/Home/Logomark-3.png';
import companyLogo4 from '/Users/prathik/Desktop/ zysk/prathik/src/assets/Home/Logomark-4.png';
import companyLogo5 from '/Users/prathik/Desktop/ zysk/prathik/src/assets/Home/Logomark-5.png';
import companyLogo6 from '/Users/prathik/Desktop/ zysk/prathik/src/assets/Home/Logomark-6.png';
import statsImage from '/Users/prathik/Desktop/ zysk/prathik/src/assets/Home/Container.png';  

const Home = () => {
  const companies = [
    { name: 'Boltshift', logo: companyLogo1 },
    { name: 'Lightbox', logo: companyLogo2 },
    { name: 'FeatherDev', logo: companyLogo3 },
    { name: 'Spherule', logo: companyLogo4 },
    { name: 'GlobalBank', logo: companyLogo5 },
    { name: 'Nietzsche', logo: companyLogo6 },
  ];

  return (
    <section className="analytics-section">
      <h1 className="heading">Beautiful analytics to grow smarter</h1>
      <p className="subheading">
        Powerful, self-serve product and growth analytics to help you convert, engage, <br />
        and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="buttons-container">
        <button className="demo-btn">
          <FontAwesomeIcon icon={faCirclePlay} className='demo-play' /> Demo   
        </button>
        <button className="signup-btn">Sign up</button>
      </div>
      <div className="stats">
        <img src={statsImage} alt="statsimg" className="stats-img" />
      </div>
 
      <div className="company-logos-section">
        <p className="company-logos-heading">Join 4,000+ companies already growing</p>
        <div className="company-logos">
          {companies.map((company, index) => (
            <div className="company-logo" key={index}>
              <img src={company.logo} alt={company.name} />
              <p>{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
