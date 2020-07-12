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
      <Form fields={FORM_FIELDS} className="Appointment_form" />
      <div className="Appointment_info">
        <h3>Open hours</h3>
        {OPEN_HOURS.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
    </div>
  </div>
);

export default Appointment;
