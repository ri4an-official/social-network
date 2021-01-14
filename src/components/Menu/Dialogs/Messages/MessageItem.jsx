import s from "../DialogsItems/Dialogs.module.css";

export function MessageItem(props) {
    return <div className={s.item}>{props.text}</div>;
}
