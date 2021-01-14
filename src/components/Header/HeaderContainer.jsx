import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import { compose } from "redux";

export default compose(
    connect(
        (state) => ({
            isAuth: state.auth.isAuth,
            login: state.auth.login,
        }),
        { logout }
    )
)(
    class extends React.Component {
        render = () => <Header {...this.props} />;
    }
);
