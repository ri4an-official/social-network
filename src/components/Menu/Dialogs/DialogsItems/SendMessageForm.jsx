import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
export default reduxForm({ form: "sendMessage" })((props) => (
    <Form onSubmit={props.handleSubmit}>
        <Field
            name="message"
            component={({ meta, input, ...props }) => (
                <FormControl
                    aria-describedby="basic-addon1"
                    crossOrigin
                    as="textarea"
                    {...input}
                    {...props}
                    required
                    maxLength="50"
                />
            )}
            placeholder="Enter your message"
        />
        <Button type="submit" variant="success">
            Send
        </Button>
    </Form>
));
