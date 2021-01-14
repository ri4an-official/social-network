import { Preloader } from "../../common/Preloader/Preloader";
import { PostsContainer } from "./Posts/PostsContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
export const Profile = (props) => (
    <div>
        {!props.profile ? (
            <Preloader />
        ) : (
            <div>
                <ProfileInfo {...props} {...props.profile} />
                <PostsContainer />
            </div>
        )}
    </div>
);
