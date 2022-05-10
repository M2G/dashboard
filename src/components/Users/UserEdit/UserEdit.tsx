import { Field, Formik, Form } from 'formik';
import {
  PLACEHOLDER_FIRST_NAME,
  PLACEHOLDER_LAST_NAME,
  PLACEHOLDER_EMAIL,
  INPUT_NAME,
  ERROR_TEXT_REQUIRED,
  LABEL_FIRST_NAME,
  LABEL_LAST_NAME,
  LABEL_EMAIL,
} from './constants';

const {
 ERROR_TEXT_REQUIRED_FIRST_NAME,
  ERROR_TEXT_REQUIRED_LAST_NAME,
  ERROR_TEXT_REQUIRED_EMAIL,
} = ERROR_TEXT_REQUIRED;

function UserEdit({ onSubmit, initialValues }: any): any {
  const setField = (setFieldValue: any, setFieldName: any, value: any): any =>
    setFieldValue(setFieldName, value);

  const onChange = (setFieldValue: any, setFieldName: any): any =>
    ({ target: { value = '' } }: any) =>
      setField(setFieldValue, setFieldName, value);

  const onValidate = (values: object): {} => {
    const errors = {};

    if (!values[INPUT_NAME.FIRST_NAME]) {
      errors[INPUT_NAME.FIRST_NAME] = ERROR_TEXT_REQUIRED_FIRST_NAME;
    }

    if (!values[INPUT_NAME.LAST_NAME]) {
      errors[INPUT_NAME.LAST_NAME] = ERROR_TEXT_REQUIRED_LAST_NAME;
    }

    if (!values[INPUT_NAME.EMAIL]) {
      errors[INPUT_NAME.EMAIL] = ERROR_TEXT_REQUIRED_EMAIL;
    }

    return errors;
  };

  const handleSubmit = (values: object) => onSubmit(values);

  const renderForm = ({
                        setFieldValue, values, errors, touched,
                      }: any): any => {
    console.log('renderForm values', values);

    return <Form className="mt-5">
      <div className="form-floating mb-3">
        <Field
          id="floatingFirstname"
          name={INPUT_NAME.FIRST_NAME}
          className="form-control mb-2"
          type="text"
          onChange={onChange(setFieldValue, INPUT_NAME.FIRST_NAME)}
          placeholder={PLACEHOLDER_FIRST_NAME}
          value={values[INPUT_NAME.FIRST_NAME]}
          required
        />
        {touched[INPUT_NAME.FIRST_NAME] && errors && errors[INPUT_NAME.FIRST_NAME] ? (
          <span className="error-text">{errors[INPUT_NAME.FIRST_NAME]}</span>
        ) : null}
        <label htmlFor="floatingFirstname">{LABEL_FIRST_NAME}</label>
      </div>
      <div className="form-floating mb-3">
        <Field
          id="floatingPassword"
          className="form-control mb-2"
          name={INPUT_NAME.LAST_NAME}
          type="text"
          onChange={onChange(setFieldValue, INPUT_NAME.LAST_NAME)}
          placeholder={PLACEHOLDER_LAST_NAME}
          value={values[INPUT_NAME.LAST_NAME]}
          required
        />
        {touched[INPUT_NAME.LAST_NAME]
        && errors
        && errors[INPUT_NAME.LAST_NAME] ? (
          <span className="error-text">{errors[INPUT_NAME.LAST_NAME]}</span>
        ) : null}
        <label htmlFor="floatingLastname">{LABEL_LAST_NAME}</label>
      </div>
      <div className="form-floating mb-3">
        <Field
          id="floatingEmail"
          className="form-control mb-2"
          name={INPUT_NAME.EMAIL}
          type="text"
          onChange={onChange(setFieldValue, INPUT_NAME.EMAIL)}
          placeholder={PLACEHOLDER_EMAIL}
          value={values[INPUT_NAME.EMAIL]}
          required
        />
        {touched[INPUT_NAME.EMAIL]
        && errors
        && errors[INPUT_NAME.EMAIL] ? (
          <span className="error-text">{errors[INPUT_NAME.EMAIL]}</span>
        ) : null}
        <label htmlFor="floatingEmail">{LABEL_EMAIL}</label>
      </div>
      <button className="btn btn-primary" type="submit">
        Search
      </button>
    </Form>;
  };

  return <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={onValidate}
    >
      {renderForm}
    </Formik>;
}

export default UserEdit;
