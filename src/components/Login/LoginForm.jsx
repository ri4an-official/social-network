import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators";
import { Input } from "../common/FormControls/formControls";
import styles from "./../common/FormControls/formControl.module.css";
export default reduxForm({ form: "login" })((props) => (
    <Form onSubmit={props.handleSubmit}>
        <FormGroup>
            <FormLabel>Email</FormLabel>
            <Field
                name="email"
                component={({ input, ...props }) => (
                    <FormControl
                        aria-describedby="basic-addon1"
                        required
                        {...input}
                        {...props}
                    />
                )}
                placeholder="Enter Email"
                type="email"
            />
        </FormGroup>
        <FormGroup>
            <FormLabel>Password</FormLabel>
            <Field
                name="password"
                component={({ input, ...props }) => (
                    <FormControl required {...input} {...props} />
                )}
                type="password"
                placeholder="Enter Password"
            />
        </FormGroup>
        {/* <FormGroup>
            <FormLabel>remember me?</FormLabel>
            <Field
                component={({ input, ...props }) => (
                    <Form.Check {...input} {...props} />
                )}
                name="rememberMe"
                type="checkbox"
            />
        </FormGroup> */}

        {props.error && (
            <div className={styles.formSummaryError}>{props.error}</div>
        )}
        <Button type="submit" variant="dark">
            Login
        </Button>
    </Form>
));
