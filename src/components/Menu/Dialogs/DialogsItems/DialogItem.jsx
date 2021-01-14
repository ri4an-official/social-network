import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

export function DialogItem(props) {
    return (
        <div className={s.item + " " + s.active}>
            <img className="ava" src={props.ava} alt="Error" />
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </div>
    );
}
