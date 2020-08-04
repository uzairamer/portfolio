import React from "react";

import "./contact.css";
import InputField, { TextArea } from "../input-field/input-field.component";
import Button from "../button/button.component";
import ContactItem from "../contact-item/contact-item.component";
import { FaMapMarked, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { subject, message } = this.state;

    return (
      <section id="contact" className="bg-grey-darker pt-20 pb-20">
        <div className="w-4/5 mx-auto">
          <div className="hero-tagline-border inline-block"></div>
          <h2 className="text-white mt-6 text-3xl font-semibold tracking-wider">
            Contact Me
          </h2>
          <h4 className="text-white mt-4 text-xl tracking-wider mb-12">
            Get In Touch
          </h4>
          <div className="grid xl:grid-cols-3 xl:gap-8 grid-cols-1 gap-0">
            <div className="xl:col-span-2 contact-box-shadow bg-grey-darker px-6 py-8">
              <InputField
                className="mb-8"
                inputType="text"
                placeholder="Name"
                name="name"
                onChange={this.handleChange}
              />
              <InputField
                className="mb-8"
                inputType="email"
                placeholder="Email"
                name="email"
                onChange={this.handleChange}
              />
              <InputField
                className="mb-8"
                inputType="text"
                placeholder="Subject"
                name="subject"
                onChange={this.handleChange}
              />
              <TextArea
                className="mb-8"
                inputType="text"
                placeholder="Your Message"
                name="message"
                onChange={this.handleChange}
              />
              <Button
                text="Open Email Client"
                className="w-56"
                href={`mailto:m.uzair.amer@gmail.com?subject=${subject}&body=${message}`}
              />
            </div>
            <div className="xl:col-span-1 flex flex-col justify-between w-full mt-8 xl:mt-0">
              <ContactItem description="Lahore, Pakistan">
                <FaMapMarked className="bg-yellow-700 text-white text-4xl py-2 px-2 rounded-full" />
              </ContactItem>
              <ContactItem description="m.uzair.amer@gmail.com">
                <FaEnvelope className="bg-yellow-700 text-white text-4xl py-2 px-2 rounded-full" />
              </ContactItem>
              <ContactItem description="+92-324-5550324">
                <FaPhone className="bg-yellow-700 text-white text-4xl py-2 px-2 rounded-full" />
              </ContactItem>
              <ContactItem description="https://uzairamer.github.io">
                <FaGlobe className="bg-yellow-700 text-white text-4xl py-2 px-2 rounded-full" />
              </ContactItem>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
