import React, {Component} from 'react';
import {connect} from "react-redux";
import {Formik, Form, Field, ErrorMessage} from 'formik';

import './ListingsForm.css'
import {fetchListings} from "../../store/action";

class ListingsForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          number: ''
        }}
        validate={values => {
          let errors = {};
          if (!values.number) {
            errors.number = 'Required';
          } else if (
            values.number <= 0 || values.number > 10
          ) {
            errors.number = 'Enter number from 1 to 10';
          }
          return errors;
        }}
        onSubmit={(values) => {
          this.props.fetchListings(values.number);
        }}
      >
        {() => (
          <Form className="Form">
            <ErrorMessage
              className="ErrorMessage"
              name="number"
              component="div"
            />
            <Field
              className="Input"
              type="number"
              name="number"
              min="0"
              placeholder="Set number of listings"
            />
            <button
              className="Submit"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchListings: number => dispatch(fetchListings(number))
});

export default connect(null, mapDispatchToProps)(ListingsForm);