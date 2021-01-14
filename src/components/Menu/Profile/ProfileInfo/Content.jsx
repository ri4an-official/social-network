import s from "./Content.module.css";
export function Content(props) {
    return (
        <div>
            <h2>{props.content}</h2>
            <img
                className={s.main_img}
                src="https://f3.upet.com/S_Y25G9zJJ2q_2.jpg"
                alt=""
            />
        </div>
    );
}
