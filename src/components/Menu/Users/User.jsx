import { NavLink } from "react-router-dom";
import s from "./User.module.css";
import { Button } from "react-bootstrap";
import userPhoto from "../../../assets/images/user-img-1.png";

export function User(props) {
    return (
        <div>
            <NavLink to={"/profile/" + props.id}>
                <img className="ava" src={props.photo ?? userPhoto} />
                <h4 className={s.name}>{props.name}</h4>
            </NavLink>
            <span>
                <span>{props.status}</span>{" "}
                {props.followed ? (
                    <button
                        className={s.button + " btn btn-danger"}
                        disabled={props.followingInProgress.some(
                            (id) => props.id === id
                        )}
                        onClick={() => props.unfollow(props.id)}
                    >
                        Unfollow
                    </button>
                ) : (
                    <button
                        className={s.button + " btn btn-success"}
                        disabled={props.followingInProgress.some(
                            (id) => props.id === id
                        )}
                        onClick={() => props.follow(props.id)}
                    >
                        Follow
                    </button>
                )}
            </span>
        </div>
    );
}
