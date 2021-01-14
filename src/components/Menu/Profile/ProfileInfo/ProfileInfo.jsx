import { Avatar } from "../../../common/Avatar.jsx";
import { Content } from "./Content.jsx";
import Status from "./Status.jsx";
import style from "./Profile.module.css";

export function ProfileInfo(props) {
    return (
        <div>
            <span>
                <Avatar className={style.profileAva} src={props.photos.small} />
                <Status
                    updateStatus={props.updateStatus}
                    status={props.status ?? "No status"}
                />
                <h2 className="">{props.fullName ?? "No full name"}</h2>
            </span>
            <Content content="Main Content" />
        </div>
    );
}
