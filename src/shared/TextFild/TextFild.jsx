import React, { useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { ErrorMessage, useField } from 'formik';
import css from './textFild.module.css';

const TextField = ({ label, customClassErrorMSg = '', ...props }) => {
  const id = useMemo(() => nanoid(), []);
  const [field, meta] = useField(props);
  return (
    <>
      {label && <label htmlFor={field.name}>{label}</label>}
      <input
        className={`${css.label} ${meta.touched && meta.error && 'is invalid'}`}
        {...field}
        {...props}
        autoComplete="off"
        id={id}
      ></input>
      <ErrorMessage
        component="div"
        name={field.name}
        className={
          customClassErrorMSg
            ? `${css.error} ${customClassErrorMSg}`
            : css.error
        }
      />
    </>
  );
};

export default TextField;
