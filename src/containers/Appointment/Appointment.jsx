import React from "react";

import Form from "../../components/Form/Form";

import "./Appointment.scss";

const FORM_FIELDS = [
  {
    tag: "input",
    type: "text",
    label: "First Name",
    name: "firstName",
    required: true,
  },
  {
    tag: "input",
    type: "text",
    label: "Last Name",
    name: "lastName",
    required: true,
  },
  {
    tag: "input",
    type: "email",
    label: "Email Adress",
    name: "email",
    required: true,
  },
  {
    tag: "input",
    type: "text",
    label: "Phone Number",
    name: "phone",
    required: true,
  },
  {
    tag: "input",
    type: "text",
    label: "Reason for Appointment",
    name: "appointmentReason",
    required: true,
  },
  {
    tag: "textarea",
    label: "Additional Info about your tooth",
    name: "notes",
  },
];
const OPEN_HOURS = [
  "Monday -  8AM to 9PM",
  "Tuesday -  8AM to 9PM",
  "Wednesday -  8AM to 9PM",
  "Thursday -  8AM to 9PM",
];
const LOCATION = "25th Sullen street, Georgia, Atlanta";

const Appointment = () => (
  <div className="Appointment">
    <h2>Set up appointment</h2>
    <div className="Appointment_content">
      <div className="Appointment_form">
        <Form fields={FORM_FIELDS} className="Appointment_form" />
        <p className="Appointment_reminder">
          We are going to let you know the appointment time usually after 1 to 2
          hours
        </p>
      </div>
      <div className="Appointment_info">
        <h3>Open hours</h3>
        {OPEN_HOURS.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
        <h3>Location</h3>
        <p>{LOCATION}</p>
        <h3>Dr. John Doe</h3>
        <p>
          <b>Phone:</b>
        </p>
        <ul>
          <li>
            <a href="tel:555 555 555" className="Appointment_link">
              555 555 555
            </a>
          </li>
          <li>
            <a href="tel:666 666 666" className="Appointment_link">
              666 666 666
            </a>
          </li>
          <li>
            <a href="tel:777 777 777" className="Appointment_link">
              777 777 777
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Appointment;
