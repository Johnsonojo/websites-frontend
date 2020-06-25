import React, { Component } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";

class WebsiteForm extends Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div>
          <div>{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} placeholder={label} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="siteName"
            component={this.renderInput}
            label="Enter Name"
          />
          <Field
            name="siteUrl"
            component={this.renderInput}
            label="Enter Url"
          />
          <Field
            name="siteImage"
            component={this.renderInput}
            label="Enter Image"
          />
          <Field
            name="category"
            component={this.renderInput}
            label="Enter Category"
          />
          {/* <FieldArray
            name="tags"
            component={this.renderInput}
            label="Enter Tags"
          /> */}

          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.siteName) {
    errors.siteName = "A name is required";
  }
  if (!formValues.siteUrl) {
    errors.siteUrl = "A siteUrl is required";
  }
  if (!formValues.siteImage) {
    errors.siteImage = "A siteImage is required";
  }
  if (!formValues.category) {
    errors.category = "A category is required";
  }
  // if (!formValues.tags) {
  //   errors.tags = "Tags are required";
  // }

  return errors;
};

export default reduxForm({ form: "websiteFieldArrays", validate })(WebsiteForm);
