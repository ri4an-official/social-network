import React, { memo } from "react";
import AddPostForm from "./AddPostForm";
import Post from "./Post";
import s from "./Posts.module.css";

export default memo(
    (props) => (
        <>
            <h2>Posts</h2>
            <AddPostForm
                onSubmit={(formData) => props.addPost(formData.post)}
                {...props}
            />
            <div className={s.posts}>
                {props.profilePage.posts.map((x) => (
                    <Post key={x.id} {...x} />
                ))}
            </div>
        </>
    ),
    (np, ns) => np.profilePage.posts === ns.profilePage.posts
);
