import React from 'react';

import './contact.css';

interface ContactProps {
  address1: string;
  phone1: string;
  content2: string;
  content5: string;
  content4: string;
  content3: string;
  email1: string;
  content1: string;
  heading1: string;
}

const Contact = () => {
  const props = {
    address1: '123 Nightlife Ave, Ski Town, USA',
    phone1: '+1 (555) 123-4567',
    content2: 'We are here to assist you with any inquiries you may have.',
    content5: 'We look forward to hearing from you!',
    content4:
      'Join our newsletter to stay informed about the hottest spots in town.',
    content3: 'Follow us on social media for the latest updates and events.',
    email1: 'info@nightlifeskiresort.com',
    content1:
      'Have a question or want to learn more about our nightlife listings? Reach out to us!',
    heading1: 'Contact Us',
  };
  return (
    <div className="contact-contact20 thq-section-padding">
      <div className="contact-max-width thq-section-max-width">
        <div className="contact-section-title">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="contact-text2 thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-content1">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact-contact-info">
              <div className="contact-content2">
                <h3 className="contact-text3 thq-heading-3">Email</h3>
                <p className="contact-text4 thq-body-large">{props.content3}</p>
              </div>
              <span className="contact-email thq-body-small">
                {props.email1}
              </span>
            </div>
          </div>
          <div className="contact-content3">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact-contact-info1">
              <div className="contact-content4">
                <h3 className="contact-text5 thq-heading-3">Phone</h3>
                <p className="contact-text6 thq-body-large">{props.content4}</p>
              </div>
              <span className="contact-phone thq-body-small">
                {props.phone1}
              </span>
            </div>
          </div>
          <div className="contact-content5">
            <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact-contact-info2">
              <div className="contact-content6">
                <h3 className="contact-text7 thq-heading-3">Office</h3>
                <p className="contact-text8 thq-body-large">{props.content5}</p>
              </div>
              <span className="contact-address thq-body-small">
                {props.address1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
