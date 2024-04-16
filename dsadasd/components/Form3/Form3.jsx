import { Formik, Form } from 'formik';
import FormButton from '../FormButton/FormButton';
import './Form3.scss';
import FormTitle from '../FormTitle/FormTitle';

export default function Form3({ prevStep, nextStep, data }) {

  return (
    <div className="Form3">

      <FormTitle prevStep={prevStep} editable={true} />

      <div className="form-values">
        <div className="form-section">
          {Object.entries(data).slice(0, 4).map(([key, value]) => (
            <div key={key} className="form-entry">
              <p className="form-key">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
              <h3 className="form-value">{value}</h3>
            </div>
          ))}
        </div>
        <div className="form-section">
          {Object.entries(data).slice(4, 8).map(([key, value]) => (
            <div key={key} className="form-entry form-entry-second">
              <p className="form-key">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
              <h3 className="form-value">{value}</h3>
            </div>
          ))}
        </div>
      </div>

      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={{}}
        onSubmit={(values) => {
          nextStep(values);
        }}
      >
        <Form>
          <FormButton>Continue</FormButton>
        </Form>
      </Formik>

    </div>
  )
}
