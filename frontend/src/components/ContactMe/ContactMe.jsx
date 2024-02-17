import ContactForm from "./ContactForm/ContactForm";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
            <ContactInfoCard iconUrl="src/assets/email.png" text="cetin.taha14@gmail.com" />
            <ContactInfoCard iconUrl="src/assets/github.png" text="https://github.com/cetin14" />
        </div>
        <div style={{ flex: 1 }}>
            <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
