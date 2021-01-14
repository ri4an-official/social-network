import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
    getProfile,
    getStatus,
    updateStatus,
} from "../../../redux/profile-reducer";
import { Profile } from "./Profile";
// import { withRedirect } from "./../../common/hocs/withRedirect";

export default compose(
    connect(
        (state) => ({
            profile: state.profilePage.profile,
            status: state.profilePage.status,
            authorizedUserID: state.auth.userId,
            isAuth: state.auth.isAuth,
        }),
        { getProfile, getStatus, updateStatus }
    ),
    withRouter
)((props) => {
    useEffect(() => {
        let id = props.match.params.userId || props.authorizedUserID;
        if (!id) props.history.push("/login");
        props.getProfile(id);
        props.getStatus(id);
    }, []);
    return <Profile {...props} />;
});
