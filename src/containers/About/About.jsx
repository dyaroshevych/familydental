import React from "react";

import Article from "../../components/Article/Article";

import clinicJpg from "../../assets/img/about/clinic.jpg";
import doctor1Jpg from "../../assets/img/about/doctor-1.jpg";
import doctor2Jpg from "../../assets/img/about/doctor-2.jpg";
import "./About.scss";

const ABOUT_CONTENT = [
  {
    heading: "About our Clinic",
    content:
      "Our clinic is located at Northern parts of Minesotta. Keeping our clinic hygiene at all times is very important to us. We have a whole staff  to keep our clinic and all our equipments sparking. Because we want to ensure that no germ or bacteria from one person passes onto another.",
    img: [clinicJpg],
    reversed: true,
  },
  {
    heading: "John Doe",
    subheading: "Proffesional Dentist",
    additionalInfo: "15 years of Experience",
    content:
      "Hi, I am John Doe. I have been a medical student for 5 years then graduated college. I started this career when I was of the age 26. Since then I have done thousands of surgeries, scailing etcetera. My goal with my career is to make people care about themselves and their health more than they do.",
    img: [doctor1Jpg, doctor2Jpg],
  },
];

const About = () => (
  <div className="About">
    {ABOUT_CONTENT.map((article, idx) => (
      <Article {...article} key={idx} borderColor="green" />
    ))}
  </div>
);

export default About;
