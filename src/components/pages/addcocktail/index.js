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
  constructor(props){
    super(props)
     this.state = {
        imageSrc: ''
     }
  }
  
  handleFileRead=(e)=>{
    
  }
  handleOnChangeImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let fileReader= new FileReader();    
      fileReader.onloadend = ()=>{        
        this.setState({imageSrc: fileReader.result})
      };

      fileReader.readAsDataURL(e.target.files[0]);
    }
  }
  handleSubmit = (values, {
    props = this.props,
    setSubmitting
  }) => {

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
        validationSchema={addCocktailSchema}
        onSubmit={this.handleSubmit}
        render={formProps => {
          return (
            <Form>

              <div className="addcocktailimage">
                {this.state.imageSrc ? <img id="fileContent" src={this.state.imageSrc} alt="preview image" style={{ maxWidth: '200px', maxHeight:'200px' }} />: null }
                <input type="file" name="pic" accept="image/*" onChange={(e) => this.handleOnChangeImage(e)}></input>
              </div>
              <div className="addcocktaildetails">
                <label htmlFor="name" style={{ display: 'inline-flex' }}>
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
                <label htmlFor="ingredients" style={{ display: 'inline-flex' }}>
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

                <label htmlFor="quantity" style={{ display: 'inline-flex' }}>
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
                  className="submitButton"
                  disabled={formProps.isSubmitting}>
                  Create cocktail
               </button>
              </div>
            </Form >
          );
        }}
      />);
  }
}

export default withRouter(AddCocktail);