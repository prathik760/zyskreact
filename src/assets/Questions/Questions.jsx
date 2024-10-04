import React, { useState } from 'react';
import './../Questions/Questions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPlusSquare, faSquareMinus} from '@fortawesome/free-regular-svg-icons';  

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    { question: 'Can I change my plan later?', answer: '' },
    { question: 'What is your cancellation policy?', answer: '' },
    { question: 'Can other info be added to an invoice?', answer: '' },
    { question: 'How does billing work?', answer: '' },
    { question: 'How do I change my account email?', answer: '' },
  ];

  return (
    <div className="faq">
      <h2>Frequently asked questions</h2>
      <p>Everything you need to know about the product and billing.</p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              <h3>{faq.question}</h3>
              <span>{openQuestion === index ? <FontAwesomeIcon icon={faSquareMinus} className='demo-play' /> :  <FontAwesomeIcon icon={faPlusSquare} />}</span>
            </div>
            {openQuestion === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
