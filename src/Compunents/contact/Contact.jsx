import React from "react";
import Section from "../shared/section/Section";
import "./style.scss"
import ContactInfo from "./contact-info/ContactInfo";
import Form from "./form/Form";


function Contact() {
  return (
    <Section
      id="contact"
      title="Any Question? Feel Free to Contact"
      backgroung="light"
    >
        <div className="contact-content-wrapper">
            <ContactInfo/>
            <Form/>
        </div>
    </Section>
  );
}

export default Contact;
