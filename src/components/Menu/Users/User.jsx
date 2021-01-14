import { NavLink } from "react-router-dom";
import s from "./User.module.css";
import { Avatar } from "../../common/Avatar";
import { Button } from "react-bootstrap";

export function User(props) {
    return (
        <div>
            <NavLink to={"/profile/" + props.id}>
                <Avatar className="ava" src={props.photos.small} />
                <h4 className={s.name}>{props.name}</h4>
            </NavLink>
            <span>
                <span>{props.status}</span>{" "}
                {props.followed ? (
                    <Button
                        className={s.button}
                        variant="danger"
                        disabled={props.followingInProgress.some(
                            (id) => props.id === id
                        )}
                        onClick={() => props.unfollow(props.id)}
                    >
                        Unfollow
                    </Button>
                ) : (
                    <Button
                        className={s.button}
                        variant="success"
                        disabled={props.followingInProgress.some(
                            (id) => props.id === id
                        )}
                        onClick={() => props.follow(props.id)}
                    >
                        Follow
                    </Button>
                )}
            </span>
        </div>
    );
}
