import React from "react";
import Pagination from "react-js-pagination";
import { User } from "./User";
// import s from "./User.module.css";

export const Users = (props) => (
    <div>
        <Pagination
            activePage={props.currentPage}
            itemsCountPerPage={props.pageSize}
            totalItemsCount={props.totalCount}
            pageRangeDisplayed={5}
            onChange={props.onPageChange} 
        />

        {props.users.map((u) => (
            <User key={u.id} {...props} {...u} />
        ))}
    </div>
);
