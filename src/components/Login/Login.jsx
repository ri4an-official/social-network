import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { login } from "../../redux/auth-reducer";
import LoginForm from "./LoginForm";

// eslint-disable-next-line import/no-anonymous-default-export
export default compose(
    connect((state) => ({ isAuth: state.auth.isAuth }), { login })
)((props) => (
    <>
        <h2>Login</h2>
        {props.isAuth ? (
            <Redirect to="/profile" />
        ) : (
            <LoginForm
                onSubmit={(fd) =>
                    props.login(fd.email, fd.password, fd.rememberMe)
                }
            />
        )}
    </>
));
