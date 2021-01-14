// import { useState } from "react";
// import styles from "./../../../components/Menu/Users/User.module.css";
// function range(start, end) {
//     var pages = [];
//     for (var i = start; i <= end; i++) {
//         pages.push(i);
//     }
//     return pages;
// }
// // eslint-disable-next-line import/no-anonymous-default-export
// export default (props) => {
//     let [portionNumber, setPortionNumber] = useState(1);
//     let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
//     let rightPortionPageNumber = portionNumber * props.portionSize;
//     let pages = range(1, Math.ceil(props.totalCount / props.pageSize));
//     return (
//         <div className={styles.paginator}>
//             {portionNumber > 1 && (
//                 <button onClick={() => setPortionNumber(portionNumber - 1)}>
//                     PREV
//                 </button>
//             )}
//             {pages
//                 .filter(
//                     (p) =>
//                         p >= leftPortionPageNumber &&
//                         p <= rightPortionPageNumber
//                 )
//                 .map((p) => (
//                     <span
//                         className={
//                             styles.page + p === props.currentPage &&
//                             styles.selectedPage
//                         }
//                         onClick={() => props.onPageChange(p)}
//                     >
//                         {p}
//                     </span>
//                 ))}
//             {portionCount > portionNumber && (
//                 <button onClick={() => setPortionNumber(portionNumber + 1)}>
//                     NEXT
//                 </button>
//             )}
//         </div>
//     );
// };
