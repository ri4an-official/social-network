import preloaderYellow from "./../../../assets/images/preloader-yellow.svg";
import preloaderWhite from "./../../../assets/images/preloader-white.svg";
import styles from "./Preloader.module.css";
export const Preloader = (props) => (
    <div>
        <img className={styles.preloader} src={preloaderYellow} alt="Error" />
    </div>
);
export const PreloaderWhite = (props) => (
    <div>
        <img className={styles.preloader} src={preloaderWhite} alt="Error" />
    </div>
);
