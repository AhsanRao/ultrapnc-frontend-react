// FaqSection.jsx
import React, { useState, useRef } from "react";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  React.useEffect(() => {
    if (isOpen) {
      const height = contentRef.current.scrollHeight;
      setHeight(`${height}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className={`accordion-item ${isOpen ? "active" : ""}`}>
      <button className="accordion-header" onClick={onClick}>
        <span className="accordion-title">{question}</span>
        <span className="accordion-icon"></span>
      </button>
      <div className="accordion-content" ref={contentRef} style={{ height }}>
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Can I cancel my subscription at anytime?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit 
        amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu 
        erat mattis lorem, lacinia lacinia dui enim at eros.`,
    },
    {
      question: "Can I change my plan later on?",
      answer: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry 
        richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor 
        brunch. Food truck quinoa nesciunt laborum eiusmod.`,
    },
    {
      question: "Do you offer any discounts?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit 
        amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu 
        erat mattis lorem.`,
    },
    {
      question: "Do I get updates for the app?",
      answer: `Yes, you'll receive regular updates and new features as they become available. 
        Our team is constantly working on improvements and enhancements to make your 
        experience better.`,
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-subtitle">FAQ</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-description">
            Find answers to the most common questions about our services and
            features
          </p>
        </div>

        <div className="faq-accordion">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
