import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";

export default reduxForm({ form: "addPost" })((props) => (
    <Form onSubmit={props.handleSubmit}>
        <Field
            name="post"
            placeholder="Enter your post"
            component={({ input, ...props }) => (
                <FormControl
                    aria-describedby="basic-addon1"
                    maxLength="500"
                    {...input}
                    {...props}
                    required
                    as="textarea"
                />
            )}
        />
        <Button variant="success" type="submit">
            Add post
        </Button>
    </Form>
));
