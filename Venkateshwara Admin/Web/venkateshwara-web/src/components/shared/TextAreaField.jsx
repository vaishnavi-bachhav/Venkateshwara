import React from 'react';
import { ErrorMessage, useField, Field } from 'formik';

export const TextAreaField = ({ label, ...props }) => {

  const [field, meta] = useField(props);

  return (
    <>
      <div className="form-group mb-2">
        <label htmlFor={field.name} className="font-weight-bold">
        {label}{props.isRequired ? <span className="font-weight-bold text-danger"> *</span>
      : null}
        </label>
          <Field as='textarea' className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid invalid '}`} {...field} {...props} autoComplete="off"/>
          <ErrorMessage component='span' name={field.name} className='invalid-feedback font-weight-bold' />
      </div>
    </>
  )
}

TextAreaField.defaultProps = {
  isRequired:true,
  labelcol: "5",
  inputcol: "7"
}