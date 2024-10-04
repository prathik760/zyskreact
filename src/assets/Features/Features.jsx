import React from 'react';
import FeatureItem from './Items';
import '../Features/Features.css';

// Import all images
import inboxImage from '/Users/prathik/Desktop/ zysk/prathik/src/assets/Features/message-chat-circle.png';
import zapImage from '/Users/prathik/Desktop/ zysk/prathik/src/assets/Features/zap.png';
import reportImage from '/Users/prathik/Desktop/ zysk/prathik/src/assets/Features/chart-breakout-square.png';
import connectImage from '/Users/prathik/Desktop/ zysk/prathik/src/assets/Features/Icon-2.png';
import toolsImage from '/Users/prathik/Desktop/ zysk/prathik/src/assets/Features/Icon-3.png';
import differenceImage from '/Users/prathik/Desktop/ zysk/prathik/src/assets/Features/Icon-4.png';

const Features = () => {
  const featuresData = [
    {
      img: inboxImage,
      title: "Share team inboxes",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
      img: zapImage,
      title: "Deliver instant answers",
      description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
    },
    {
      img: reportImage,
      title: "Manage your team with reports",
      description: "Measure what matters with easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks."
    },
    {
      img: connectImage,
      title: "Connect with customers",
      description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
    },
    {
      img: toolsImage,
      title: "Connect the tools you already use",
      description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
    },
    {
      img: differenceImage,
      title: "Our people make the difference",
      description: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
    }
  ];

  return (
    <> 
      <div className='text'>Features</div>
      <div className="features">  
        <section className="main-container">
          <h1 className="title-heading">Analytics that feels like it’s from the future</h1>
          <p className="description">
            Powerful, self-serve product and growth analytics to help you convert, engage, <br />
            and retain more users. Trusted by over 4,000 startups.
          </p>
          
          <div className="features-grid">
            {featuresData.map((feature, index) => (
              <FeatureItem 
                key={index}
                img={feature.img}    
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Features;
