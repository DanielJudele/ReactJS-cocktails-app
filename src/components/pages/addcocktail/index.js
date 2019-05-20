import React from 'react';
import { withRouter } from 'react-router-dom';
import style from './style.css'
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const addCocktailSchema = Yup.object().shape({
  name: Yup.string().required('The email address is required'),
  ingredients: Yup.string().required('The ingredients are required'),
  quantity: Yup.string().required('The quantity are required'),
})

class AddCocktail extends React.Component {
  handleSubmit = (values, {
    props = this.props,
    setSubmitting
  }) => {

    console.log(values);
    alert('Form Submitted');
    setSubmitting(false);
    return;
  }

  render() {

    return (
      <Formik
        initialValues={{
          name: '',
          ingredients: '',
          quantity: ''
        }}
        validationSchema= {addCocktailSchema}
        onSubmit={this.handleSubmit}
        render={formProps => {
          return (
            <Form>
              <div className="addcocktailimage">
                <input type="file" name="pic" accept="image/*"></input>
              </div>
              <div className="addcocktaildetails">
                <label htmlFor="name" style={{ display: 'inline-flex' }}>
                  Cocktail name
                 </label>
                <Field
                  type="text"
                  id="name"
                  placeholder="Write the name of the cocktail"
                  value={formProps.values.name}
                />
                {formProps.errors.name && formProps.touched.name ? (
                  <div>{formProps.errors.name}</div>
                ) : null}
                <label htmlFor="ingredients" style={{ display: 'inline-flex' }}>
                  Ingredients
                </label>
                <Field
                  type="text"
                  component="textarea"
                  id="ingredients"
                  placeholder="Write the ingredients of the cocktail"
                  value={formProps.values.ingredients}
                /> {formProps.errors.ingredients && formProps.touched.ingredients ? (
                  <div>{formProps.errors.ingredients}</div>
                ) : null}

                <label htmlFor="quantity" style={{ display: 'inline-flex' }}>
                  Quantity
                </label>
                <Field
                  type="text"
                  component="textarea"
                  id="quantity"
                  placeholder="Write more information about quantity"
                  value={formProps.values.quantity}
                />
                {formProps.errors.quantity && formProps.touched.quantity ? (
                  <div>{formProps.errors.quantity}</div>
                ) : null}
                <button
                  type="submit"
                  className="submitButton"
                  disabled={formProps.isSubmitting}>
                  Submit Form
               </button>
              </div>
            </Form >
          );
        }}
      />);
  }
}

export default withRouter(AddCocktail);