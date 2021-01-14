import { connect } from "react-redux";
import { addPost } from "../../../../redux/profile-reducer";
import Posts from "./Posts";

export const PostsContainer = connect(
    (state) => ({
        profilePage: state.profilePage,
    }),
    {
        addPost,
    }
)(Posts);
