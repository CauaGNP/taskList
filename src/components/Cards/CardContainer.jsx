import styles from './style.module.css';

export const CardContainer = ( {children} ) => {
    return (
        <div className={styles.cardContainer}>
            {children}
        </div>
    )
}

