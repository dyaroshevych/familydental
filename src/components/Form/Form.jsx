import React, { Component } from "react";

import InfoBox from "../InfoBox/InfoBox";
import Button from "../Button/Button";

import "./Form.scss";

const NAME_REGEX = /^[a-z ,.'-]+$/i;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_REGEX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
const BLANK_MESSAGE = {
  type: null,
  text: "",
};

class Form extends Component {
  constructor(props) {
    super(props);

    const fields = {};

    for (let { tag, type, name, label, required } of this.props.fields) {
      fields[name] = { tag, type, label, required, value: "" };
    }

    this.state = {
      fields,
      message: { ...BLANK_MESSAGE },
    };
  }

  handleInputChange = (event, name) => {
    const fields = { ...this.state.fields };

    fields[name].value = event.target.value;

    this.setState({ fields: fields });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    let errorMessage = "";

    if (!NAME_REGEX.test(this.state.fields.firstName.value)) {
      errorMessage = "First name not valid.";
    } else if (!NAME_REGEX.test(this.state.fields.lastName.value)) {
      errorMessage = "Last name not valid.";
    } else if (!EMAIL_REGEX.test(this.state.fields.email.value)) {
      errorMessage = "Email not valid.";
    } else if (!PHONE_REGEX.test(this.state.fields.phone.value)) {
      errorMessage = "Phone number not valid.";
    } else if (!this.state.fields.appointmentReason.value) {
      errorMessage = "State reason for appointment.";
    }

    if (errorMessage) {
      this.setState({ message: { type: "danger", text: errorMessage } });
      setTimeout(() => {
        this.setState({ message: { ...BLANK_MESSAGE } });
      }, 3500);
      return;
    }

    const fields = { ...this.state.fields };

    for (let field of Object.values(fields)) {
      field.value = "";
    }

    this.setState({ fields, message: { type: null, text: "" } });
  };

  render() {
    return (
      <>
        {this.state.message.type && (
          <InfoBox
            type={this.state.message.type}
            message={this.state.message.text}
          />
        )}
        <form className="Form">
          {Object.keys(this.state.fields).map((name) => (
            <div
              className="Form_field"
              key={name}
              data-type={this.state.fields[name].tag}
            >
              <label htmlFor={name} className="Form_label">
                {this.state.fields[name].label}
                {this.state.fields[name].required ? " *" : ""}
              </label>
              {(this.state.fields[name].tag === "input" && (
                <input
                  className="Form_input"
                  type={this.state.fields[name].type}
                  name={name}
                  id={name}
                  value={this.state.fields[name].value}
                  onChange={(e) => this.handleInputChange(e, name)}
                />
              )) || (
                <textarea
                  className="Form_textarea"
                  rows="3"
                  name={name}
                  id={name}
                  value={this.state.fields[name].value}
                  onChange={(e) => this.handleInputChange(e, name)}
                ></textarea>
              )}
            </div>
          ))}
          <Button
            size="sm"
            color="green"
            click={(e) => this.handleFormSubmit(e)}
          >
            Apply
          </Button>
        </form>
      </>
    );
  }
}

export default Form;
