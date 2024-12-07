import React, { useState } from 'react';
import './Payments.css'; // Import the CSS file
import Chatbot from './Chatbot'; // Import the Chatbot component

const Payments = ({isDarkMode}) => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [faqVisible, setFaqVisible] = useState(null);

    const plans = [
        { name: 'Personal Plan', price: '$10/month', description: 'Ideal for individuals. Access to all courses.' },
        { name: 'Team Plan', price: '$50/month', description: 'For small teams. Up to 5 members.' },
        { name: 'Enterprise Plan', price: '$200/month', description: 'Custom solutions for larger organizations.' }
    ];

    const learnerExperience = [
        'High-quality course content',
        '24/7 Access to courses',
        'Expert instructors',
        'Community and discussion forums',
        'Certificates of completion'
    ];

    const faqs = [
        { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, PayPal, and bank transfers.' },
        { question: 'Can I cancel my subscription anytime?', answer: 'Yes, you can cancel your subscription at any time in your account settings.' },
        { question: 'Do you offer refunds?', answer: 'Refunds are available within the first 14 days of purchase if you are not satisfied.' },
        { question: 'Is there a trial period?', answer: 'Yes, we offer a 7-day free trial for new users.' },
        { question: 'How can I contact support?', answer: 'You can contact support via the contact page or email us directly.' },
        { question: 'What if I forget my password?', answer: 'You can reset your password using the link on the login page.' }
    ];

    const handlePlanSelection = (plan) => setSelectedPlan(plan);
    const handlePayment = () => alert(`Proceeding to payment for ${selectedPlan.name}`);
    const toggleFAQ = (index) => setFaqVisible(faqVisible === index ? null : index);

    return (
        <div className="payment-page" style={{color:"black"}} >
            <div className="payment-container">
                <h1 className="main-heading">Payment Plans</h1>
                <h2 className="section-heading">Select a Payment Plan</h2>
                <div className="plans-container">
                    {plans.map((plan, index) => (
                        <div key={index} className={`plan ${selectedPlan?.name === plan.name ? 'selected' : ''}`} onClick={() => handlePlanSelection(plan)}>
                            <h3 className="plan-name">{plan.name}</h3>
                            <p className="price">{plan.price}</p>
                            <p className="description">{plan.description}</p>
                        </div>
                    ))}
                </div>
                {selectedPlan && (
                    <button className="proceed-button" onClick={handlePayment}>
                        PROCCED PAYMENT
                    </button>
                )}

                <h2 className="section-heading">Learner Experience</h2>
                <ul className="learner-experience-list">
                    {learnerExperience.map((item, index) => (
                        <li key={index}>
                            <span className="tick-mark">✔</span>
                            <span className="experience-text">{item}</span>
                        </li>
                    ))}
                </ul>

                <h2 className="section-heading">Frequently Asked Questions</h2>
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <div className="faq-header" onClick={() => toggleFAQ(index)}>
                                <h3 className="faq-question">{faq.question}</h3>
                                <span className={`arrow ${faqVisible === index ? 'open' : ''}`}>▼</span>
                            </div>
                            {faqVisible === index && <p className="faq-answer">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>

            <footer className="footer">
                <div className="footer-content">
                    <p>© 2024 Your Company Name. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/terms-of-service">Terms of Service</a>
                    </div>
                    <Chatbot /> {/* Include the Chatbot here */}
                </div>
            </footer>
        </div>
    );
};

export default Payments;
