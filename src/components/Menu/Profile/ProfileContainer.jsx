import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
    getProfile,
    getStatus,
    savePhoto,
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
            photo: state.profilePage.photo,
        }),
        { getProfile, getStatus, updateStatus, savePhoto }
    ),
    withRouter
)((props) => {
    useEffect(() => {
        let id = props.match.params.userId || props.authorizedUserID;
        if (!id) props.history.push("/login");
        props.getProfile(id);
        props.getStatus(id);
    }, [props.match.params.userId, props.photo]);
    return <Profile isOwner={!props.match.params.userId} {...props} />;
});
