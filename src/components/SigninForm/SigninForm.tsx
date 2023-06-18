import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';

import ROUTER_PATH from 'constants/RouterPath';
import {
  ERROR_TEXT_REQUIRED,
  LABEL_PASSWORD,
  INPUT_NAME,
  LABEL_EMAIL,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_PASSWORD,
} from './constants';
import './index.scss';

const { ERROR_TEXT_REQUIRED_EMAIL, ERROR_TEXT_REQUIRED_PASSWORD } = ERROR_TEXT_REQUIRED;

function SigninForm({ initialValues, onSubmit }: any) {
  const setField = (setFieldValue: any, setFieldName: any, value: any): any =>
    setFieldValue(setFieldName, value);

  const onChange =
    (setFieldValue: any, setFieldName: any): any =>
    ({ target: { value = '' } }: any) =>
      setField(setFieldValue, setFieldName, value);

  const onValidate = (values: object): {} => {
    const errors = {};

    if (!values[INPUT_NAME.EMAIL]) {
      errors[INPUT_NAME.EMAIL] = ERROR_TEXT_REQUIRED_EMAIL;
    }

    if (!values[INPUT_NAME.PASSWORD]) {
      errors[INPUT_NAME.PASSWORD] = ERROR_TEXT_REQUIRED_PASSWORD;
    }

    return errors;
  };

  const renderForm = ({ setFieldValue, values, errors, touched }: any): any => (
    <div className="form-signin">
      <Form>
        <div className="mb-4">
          <h1 className="h3 mb-1">Create your account</h1>
          <span>to continue</span>
        </div>
        <div className="form-floating">
          <Field
            id="floatingInput"
            name={INPUT_NAME.EMAIL}
            className="form-control mb-2"
            type="email"
            onChange={onChange(setFieldValue, INPUT_NAME.EMAIL)}
            placeholder={PLACEHOLDER_EMAIL}
            value={values?.[INPUT_NAME.EMAIL]}
            required
          />
          {touched[INPUT_NAME.EMAIL] && errors && errors[INPUT_NAME.EMAIL] ? (
            <span className="error-text">{errors[INPUT_NAME.EMAIL]}</span>
          ) : null}
          <label htmlFor="floatingInput">{LABEL_EMAIL}</label>
        </div>
        <div className="form-floating">
          <Field
            id="floatingPassword"
            className="form-control mb-2"
            name={INPUT_NAME.PASSWORD}
            type="password"
            onChange={onChange(setFieldValue, INPUT_NAME.PASSWORD)}
            placeholder={PLACEHOLDER_PASSWORD}
            value={values?.[INPUT_NAME.PASSWORD]}
            required
          />
          {touched[INPUT_NAME.PASSWORD] && errors && errors[INPUT_NAME.PASSWORD] ? (
            <span className="error-text">{errors[INPUT_NAME.PASSWORD]}</span>
          ) : null}
          <label htmlFor="floatingPassword">{LABEL_PASSWORD}</label>
        </div>

        <button className="w-100 btn btn-lg" type="submit">
          Sign in
        </button>
        <div className="c-action">
          <span>Have an account ?</span>
          <Link to={ROUTER_PATH.SIGNUP} className="text-muted">
            Signup
          </Link>
          <Link to={ROUTER_PATH.FORGOT_PASSWORD} className="text-muted">
            Forgot Password
          </Link>
        </div>
      </Form>
    </div>
  );

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={onValidate}
    >
      {renderForm}
    </Formik>
  );
}

export default SigninForm;