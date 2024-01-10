import React from "react";

import Form from "./Form";
import FormMob from "./FormMob";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="home">
      <Form id="home"/>
      <FormMob id="home"/>
      <Services id='services' />
      <About id='about' />
      <Testimonials id='testimonial' />
      <Contact id='contact' />

    </div>
  );
}
