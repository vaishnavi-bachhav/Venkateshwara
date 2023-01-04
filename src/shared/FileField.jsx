import React from 'react';
import { useField, Field, ErrorMessage, useFormikContext } from 'formik';

export const FileField = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    const { setFieldValue } = useFormikContext();
    
     return (
        <div className="form-group row">
            <label htmlFor={field.name} className={`col-xl-${props.labelcol} col-form-label`}>{label} {props.isRequired ? <span className="font-weight-bold text-danger"> *</span>
            : null}</label>
            <div className={`col-xl-${props.inputcol}`}>
                <div className="input-group">
                    <Field {...props} {...field} type="file" accept="image/png, image/gif, image/jpeg" value={undefined} className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid invalid '}`} onChange={(e)  => {if (e.target && e.target.files[0]) {
                        setFieldValue(field.name, e.target.files[0] );
                    }} }/>
                    <ErrorMessage component='span' name={field.name} className='invalid-feedback font-weight-bold' />
                </div>
            </div>
        </div>
    )
}

FileField.defaultProps = {
    isRequired:true,
    labelcol: "5",
    inputcol: "7"
}
