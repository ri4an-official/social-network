import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export const withRedirect = (Component) =>
    connect((state) => ({ isAuth: state.auth.isAuth }))((props) =>
        !props.isAuth ? <Redirect to="/login" /> : <Component {...props} />
    );
