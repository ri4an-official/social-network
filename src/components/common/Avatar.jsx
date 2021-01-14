import userPhoto from "../../assets/images/user-img-1.png";
export const Avatar = (props) => (
    <span>
        <img
            className={props.className}
            src={props.src ?? userPhoto}
            alt="Not Found"
        />
    </span>
);
