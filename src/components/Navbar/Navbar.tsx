import { Link } from 'react-router-dom';
import { Field, Formik, Form } from 'formik';

const INPUT_NAME = {
  SEARCH: 'search',
};

const INITIAL_VALUES = {
  [INPUT_NAME.SEARCH]: '',
};

const PLACEHOLDER_SEARCH = 'Search';

function Navbar({ onSubmit }: any) {
  const setField = (setFieldValue: any, setFieldName: any, value: any): any =>
    setFieldValue(setFieldName, value);

  const onChange = (setFieldValue: any, setFieldName: any): any =>
    ({ target: { value = '' } }: any) =>
      setField(setFieldValue, setFieldName, value);

  const handleSubmit = (values: object) => onSubmit(values);

  const renderForm = ({
    setFieldValue,
    values,
  }: // eslint-disable-next-line
  any): any => {
    console.log('SEARCH SEARCH SEARCH', values);
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
            </ul>
            <Form className="d-flex">
              <Field
                id="floatingInput"
                name={INPUT_NAME.SEARCH}
                className="form-control me-2"
                type="search"
                aria-label="Search"
                onChange={onChange(setFieldValue, INPUT_NAME.SEARCH)}
                placeholder={PLACEHOLDER_SEARCH}
                value={values[INPUT_NAME.SEARCH]}
              />
              <button className="btn btn-light" type="submit">
                Search
              </button>
            </Form>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <Formik
      enableReinitialize
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
    >
      {renderForm}
    </Formik>
  );
}

export default Navbar;
