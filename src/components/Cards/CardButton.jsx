import styles from './style.module.css';

export const CardButton = ({children, onClickFunction}) => {
    return <button className={styles.buttons} onClick={onClickFunction}>{children}</button>;
};