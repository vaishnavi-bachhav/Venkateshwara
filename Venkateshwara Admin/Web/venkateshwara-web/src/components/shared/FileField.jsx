import React, { useState, useEffect } from 'react'
import { useField, Field, ErrorMessage, useFormikContext } from 'formik';

export const FileField = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    const { setFieldValue } = useFormikContext();
    const [image, setImage] = useState(null);
    const [base64, setBase64] = useState(null);

     return (
        <div className="form-group mb-3">
            <label htmlFor={field.name} className="font-weight-bold">{label} {props.isRequired ? <span className="font-weight-bold text-danger"> *</span>
            : null}</label>
            <div className="input-group">
                <Field {...props} {...field} type="file" accept="image/png, image/gif, image/jpeg" value={undefined} className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid invalid '}`} onChange={(e)  => {if (e.target && e.target.files[0]) {
                     const file = e.target.files[0];
                     setImage(URL.createObjectURL(file));
                 
                     const reader = new FileReader();
                     reader.readAsDataURL(file);
                     reader.onload = () => {
                       setBase64(reader.result);
                     };
                    setFieldValue(field.name, base64 );
                }} }/>
                <ErrorMessage component='span' name={field.name} className='invalid-feedback font-weight-bold' />
            </div>
        </div>
    )
}

FileField.defaultProps = {
    isRequired:true,
    labelcol: "5",
    inputcol: "7"
}
