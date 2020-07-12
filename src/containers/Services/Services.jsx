import React from "react";

import Article from "../../components/Article/Article";

import rootCanalingJpg from "../../assets/img/services/root-canaling.jpg";
import scailingJpg from "../../assets/img/services/scailing.jpg";
import "./Services.scss";

const SERVICES_CONTENT = [
  {
    heading: "Root Canaling",
    content:
      "A root canal is a treatment used to repair and save a tooth that is badly decayed or becomes infected. During a root canal procedure, the nerve and pulp are removed and the inside of the tooth is cleaned and sealed. Without treatment, the tissue surrounding the tooth will become infected and abscesses may form.",
    price: "$300 per tooth",
    img: [rootCanalingJpg],
  },
  {
    heading: "Scailing",
    content:
      "Scaling is when your dentist removes all the plaque and tartar (hardened plaque) above and below the gumline, making sure to clean all the way down to the bottom of the pocket. Your dentist will then begin root planing, smoothing out your teeth roots to help your gums reattach to your teeth.",
    price: "$100 per tooth",
    img: [scailingJpg],
  },
];

const Services = () => {
  return (
    <div className="Services">
      {SERVICES_CONTENT.map((service, idx) => (
        <Article {...service} withLine key={idx} />
      ))}
    </div>
  );
};

export default Services;
