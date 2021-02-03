import preloaderYellow from "./../../../assets/images/preloader-yellow.svg";
import preloaderWhite from "./../../../assets/images/preloader-white.svg";
import styles from "./Preloader.module.css";
export const Preloader = (props) => (
    <div style={{ justifyContent: "center", display: "flex" }}>
        <img
            className={styles.preloader}
            src={
                !props.type || props.type === "yellow"
                    ? preloaderYellow
                    : preloaderWhite
            }
            alt="Error"
        />
    </div>
);
// export const PreloaderWhite = () => (
//     <div>
//         <img className={styles.preloader} src={preloaderWhite} alt="Error" />
//     </div>
// );
