import { NavLink } from "react-router-dom";
import s from "./Menu.module.css";

function MenuItem(props) {
    return (
        <div className={s.item}>
            <NavLink to={"/" + props.href} activeClassName={s.active}>
                <h4>{props.content}</h4>
            </NavLink>
        </div>
    );
}

export function Menu() {
    return (
        <nav className={s.nav}>
            <MenuItem href="profile" content="Profile"></MenuItem>
            <MenuItem href="news" content="News"></MenuItem>
            <MenuItem href="dialogs" content="Dialogs"></MenuItem>
            <MenuItem href="music" content="Music"></MenuItem>
            <MenuItem href="users" content="Find Users"></MenuItem>
            <MenuItem href="settings" content="Settings"></MenuItem>
        </nav>
    );
}
