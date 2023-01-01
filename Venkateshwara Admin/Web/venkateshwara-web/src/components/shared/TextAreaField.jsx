import React from 'react';
import { ErrorMessage, useField, Field } from 'formik';

export const TextAreaField = ({ label, ...props }) => {

  const [field, meta] = useField(props);

  return (
    <>
      <div className="form-group row">
        <label htmlFor={field.name} className={`col-xl-${props.labelcol} col-form-label`}>
        {label}{props.isRequired ? <span className="font-weight-bold text-danger"> *</span>
      : null}
        </label>
        <div className={`col-xl-${props.inputcol}`}>
          <Field as='textarea' className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid invalid '}`} {...field} {...props} autoComplete="off"/>
          <ErrorMessage component='span' name={field.name} className='invalid-feedback font-weight-bold' />
        </div>
      </div>
    </>
  )
}

TextAreaField.defaultProps = {
  isRequired:true,
  labelcol: "5",
  inputcol: "7"
}