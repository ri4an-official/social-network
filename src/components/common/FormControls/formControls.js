import styles from "./formControl.module.css";
import React from "react";
import { Form } from "react-bootstrap";

export const FormControl = ({ input, meta, ...props }) => (
    <div
        className={`${styles.formControl} 
            ${meta.error && meta.touched ? styles.error : ""}`}
    >
        {React.createElement(props.element, { ...input, ...props })}
        {meta.error && meta.touched ? <span>{meta.error}</span> : ""}
    </div>
);

export const TextArea = (props) => (
    <FormControl {...props} element="textarea" />
);
export const Input = ({ input, meta, ...props }) => (
    <Form.Control {...input} {...props} />
);
