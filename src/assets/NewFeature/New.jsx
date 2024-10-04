import React from 'react';
import './../NewFeature/New.css';
import FeatureItem from './New2'; 
import MessageChatCircle from '/src/assets/Features/message-chat-circle.png';
import ZapIcon from '/src/assets/Features/zap.png';
import ChartIcon from '/src/assets/Features/chart-breakout-square.png';
import ContentImage from '/src/assets/NewFeature/Content.png';
 
const New = () => {
    const featuresData = [
        {
          img: MessageChatCircle, 
          title: "Share team inboxes",
          description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
          link : 'Learn more ->'
        },
        {
          img: ZapIcon, 
          title: "Deliver instant answers",
          description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
          link : 'Learn more ->'
        },
        {
          img: ChartIcon, 
          title: "Manage your team with reports",
          description: "Measure what matters with easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
          link : 'Learn more ->'
        },
    ];

    return (
      <> 
        <div className="new-container"> 
          <div className="new-image">
            <img src={ContentImage} alt="New Feature" className="new-img" />
          </div>
        </div>

        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <FeatureItem 
              key={index}
              img={feature.img}    
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          ))}
        </div>
      </>
    );
};

export default New;
