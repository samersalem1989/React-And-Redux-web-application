import React from "react";
import PageHeader from "./common/pageHeader";
import Joi from "joi-browser";
import Form from "./common/form";
import userService from "../services/userService";
import { Redirect } from "react-router-dom";

class Signin extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(6)
      .label("Password")
  };

  doSubmit = async () => {
    const { email, password } = this.state.data;
    try {
      await userService.login(email, password);
      window.location = "/welcome";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({ errors: { email: ex.response.data } });
      }
    }
  };

  render() {
    if (userService.getCurrentUser()) return <Redirect to="/welcome" />;

    return (
      <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
      <div className="col-lg-6">
        <PageHeader titleText="Signin to Real App" />
          <div className="col-12">
            <p>You can signin here with your account!</p>
          </div>
       
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST" id="contactForm" data-sb-form-api-token="API_TOKEN">
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Signin")}
            </form>
          </div>
          </div>
     
    );
  }
}

export default Signin;