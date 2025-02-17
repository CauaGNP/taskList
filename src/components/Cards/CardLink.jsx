import { Link } from "react-router-dom";
import styles from './style.module.css';

export const CardLink = ( {id, children} ) => {
    return <Link className={styles.buttons} to={`/editTask/${id}`}>{children}</Link>
};