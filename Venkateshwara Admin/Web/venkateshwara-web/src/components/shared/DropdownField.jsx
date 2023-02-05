import React from 'react';
import { ErrorMessage, useField, Field } from 'formik';

export const DropdownField = (props) => {

  const { label, name, options, labelcol, inputcol, ...rest } = props;
  const [, meta] = useField(props);

  return (
    <div className="form-group mb-3">
      <label htmlFor={name} className="font-weight-bold">{label} {props.isRequired ? <span className="font-weight-bold text-danger"> *</span>
      : null}
      </label>
        <Field as='select' name={name} {...rest} className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid invalid '}`} autoComplete='off'>
        <option value="">{props.defaultOption}</option>
          {options.map((option, index) => {
            return (
              <option key={index} value={option.id}>
                {option.name}
              </option>
            )
          })}
        </Field>
        <ErrorMessage component='span' name={name} className='invalid-feedback font-weight-bold' />
    </div>
  )
}

DropdownField.defaultProps = {
  isRequired : true
}