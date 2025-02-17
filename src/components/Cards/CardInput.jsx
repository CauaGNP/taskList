import styles from './style.module.css';

export const CardInput = ( {checked, value} ) => {
    return (
        <div className={styles.checkedTask}>
        <p>Concluida: </p>
        <input type="checkbox" value={value} checked={checked} />
        </div>
    );
};
