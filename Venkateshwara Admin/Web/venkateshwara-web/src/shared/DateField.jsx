import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { DatePicker } from '@progress/kendo-react-dateinputs';

export const DateField = ({ label, min,...props }) => {

  const [field, meta] = useField(props);

  return (
    <>
      <div className="form-group row">
        <label htmlFor={field.name} className={`col-xl-${props.labelcol} col-form-label`}>{label}
        </label>
        <div className={`col-xl-${props.inputcol}`}>
          <DatePicker min={min} className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid invalid'}`} {...field} autoComplete='off' format='dd-MM-yyyy'/>
          <ErrorMessage component='span' name={field.name} className='invalid-feedback font-weight-bold' />
        </div>
      </div>
    </>
  )
}

DateField.defaultProps = {
  labelcol: "5",
  inputcol: "7"
}