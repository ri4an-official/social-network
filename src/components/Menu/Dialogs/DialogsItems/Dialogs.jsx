import React from "react";
import { DialogItem } from "./DialogItem";
import s from "./Dialogs.module.css";
import { MessageItem } from "../Messages/MessageItem";
import SendMessageForm from "./SendMessageForm";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
    <>
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogs.map((x) => (
                    <DialogItem key={x.id} {...x.user} />
                ))}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messages.map((x) => (
                    <MessageItem key={x.id} text={x} />
                ))}
                <SendMessageForm
                    onSubmit={(data) => props.sendMessage(data.message)}
                    {...props}
                />
            </div>
        </div>
    </>
);
