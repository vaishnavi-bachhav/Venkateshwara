import React from 'react';
import { ErrorMessage, useField, Field } from 'formik';

export const TextField = ({ label, ...props }) => {

  const [field, meta] = useField(props);

  return (
    <div className="form-group row">
      <label htmlFor={field.name} className={`col-xl-${props.labelcol} col-form-label`}>{label}{props.isRequired ? <span className="font-weight-bold text-danger"> *</span>
        : null}
      </label>
      <div className={`col-xl-${props.inputcol}`}>
        <Field {...props} {...field} className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid invalid'}`} autoComplete='off' />
        <ErrorMessage component='span' name={field.name} className='invalid-feedback font-weight-bold' />
      </div>
    </div>
  )
}

TextField.defaultProps = {
  isRequired: true,
  labelcol: "5",
  inputcol: "7"
}

export const TextFieldWithIcon = ({ label, ...props }) => {

  const [field, meta] = useField(props);

  return (
    <>
      <div className="form-group">
        <Field {...props} {...field} className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid invalid'}`} autoComplete='off' />
        <i className={props.icon}></i>
        <ErrorMessage component='span' name={field.name} className='font-weight-bold invalid-tooltip' />
      </div>
    </>
  )
}

TextFieldWithIcon.defaultProps = {
  icon: 'fas fa-user text-primary'
}

export const EmailField = ({ label, ...props }) => {

  const [field, meta] = useField(props);

  return (
    <div className="form-group row">
      <label htmlFor={field.name} className={`col-xl-${props.labelcol} col-form-label`}>{label}{props.isRequired ? <span className="font-weight-bold text-danger"> *</span>
        : null}
      </label>
      <div className={`col-xl-${props.inputcol}`}>
        <Field {...props} {...field} className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid invalid'}`} autoComplete='off' />
        <ErrorMessage component='span' name={field.name} className='invalid-feedback font-weight-bold' />
      </div>
    </div>
  )
}

EmailField.defaultProps = {
  isRequired: true,
  labelcol: "5",
  inputcol: "7"
}