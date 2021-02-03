import React, { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => setStatus(props.status), [props.status]);

    return (
        <>
            {!editMode && (
                <span onClick={() => setEditMode(true)}>{props.status}</span>
            )}
            {editMode && (
                <span>
                    <FormControl
                        autoFocus={true}
                        onBlur={() => {
                            setEditMode(false);
                            props.updateStatus(status);
                        }}
                        value={status}
                        onChange={(e) => setStatus(e.currentTarget.value)}
                    />
                </span>
            )}
        </>
    );
};
