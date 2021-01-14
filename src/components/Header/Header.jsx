import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
export function Header(props) {
    return (
        <header>
            <img
                width="50"
                height="50"
                src="https://w7.pngwing.com/pngs/941/104/png-transparent-computer-icons-social-media-blog-social-media-logo-social-media-desktop-wallpaper.png"
                alt=""
            />
            <h4 className={styles.login}>
                {props.isAuth ? (
                    <span>
                        {props.login} - {" "}
                        <Button variant="danger" onClick={props.logout}>Log out</Button>
                    </span>
                ) : (
                    <NavLink to={"/login"}>Login</NavLink>
                )}
            </h4>
        </header>
    );
}
