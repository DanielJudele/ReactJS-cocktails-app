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
  constructor(props) {
    super(props)
    this.state = {
      imageSrc: '',
      showDetails: false,
      name: '',
      ingredients: '',
      quantity: ''
    }
  }

  handleFileRead = (e) => {

  }
  handleOnChangeImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({ imageSrc: fileReader.result })
      };

      fileReader.readAsDataURL(e.target.files[0]);
    }
  }
  handleSubmit = (values, {
    props = this.props,
    setSubmitting
  }) => {
    setSubmitting(false);
    this.setState({ showDetails: true, name: values.name, ingredients: values.ingredients, quantity: values.quantity });
    return;
  }

  render() {
    if (this.state.showDetails === true) {
      return (<div className="row">
        <div>
          {this.state.imageSrc ? <img id="fileContent" src={this.state.imageSrc} alt="image" style={{ maxWidth: '300px', maxHeight: '300px' }} /> : null}
          <label style={{ display: "block" }}> Cocktail name: {this.state.name}</label>
          <label style={{ display: "block" }}> Ingredients: {this.state.ingredients}</label>
          <label style={{ display: "block" }}> Quantity: {this.state.quantity}</label>
          <button onClick={() => this.props.history.goBack()} className="button">Hide details</button>
        </div>
      </div>)
    }

    return (
      <Formik
        initialValues={{ name: '', ingredients: '', quantity: '' }}
        validationSchema={addCocktailSchema}
        onSubmit={this.handleSubmit}
        render={formProps => {
          return (
            <Form>
              <div className="row">
                <div className="column">
                  <div className="previewImage">
                    {this.state.imageSrc ? <img id="fileContent" src={this.state.imageSrc} alt="preview image" style={{ width: '100%', height: '100%' }} /> : <div>No image uploaded</div>}
                  </div><input type="file" name="pic" accept="image/*" onChange={(e) => this.handleOnChangeImage(e)}></input>
                </div>
                <div className="column">
                  <label htmlFor="name" >
                    Cocktail name
                 </label>
                  <Field
                    type="text"
                    id="name"
                    placeholder="Fill in the name"
                    value={formProps.values.name}
                  />
                  {formProps.errors.name && formProps.touched.name ? (
                    <div class="errorMessage">{formProps.errors.name}</div>
                  ) : null}


                  <label htmlFor="ingredients" >
                    Ingredients
                </label>
                  <Field
                    type="text"
                    component="textarea"
                    id="ingredients"
                    placeholder="Fill in the ingredients"
                    value={formProps.values.ingredients}
                  /> {formProps.errors.ingredients && formProps.touched.ingredients ? (
                    <div class="errorMessage">{formProps.errors.ingredients}</div>
                  ) : null}

                  <label htmlFor="quantity" >
                    Quantity
                </label>
                  <Field
                    type="text"
                    component="textarea"
                    id="quantity"
                    placeholder="Fill in the quantity"
                    value={formProps.values.quantity}
                  />
                  {formProps.errors.quantity && formProps.touched.quantity ? (
                    <div class="errorMessage">{formProps.errors.quantity}</div>
                  ) : null}

                  <button
                    type="submit"
                    className="button"
                    disabled={formProps.isSubmitting}>
                    Create cocktail
               </button>

                </div>
              </div>
            </Form >
          );
        }}
      />);
  }
}

export default withRouter(AddCocktail);