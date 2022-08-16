import styles from './appIcon.module.css'
import Image from 'next/image'

export default function AppIcon(props) {

    return (
        <div className={styles.appIcon}>
            <button className={styles.appIconButton} onClick={props.onClick}>
                <Image
                    src={props.img}
                    alt={props.text}
                    width={30}
                    height={30}
                />
                <span className={styles.appIconButtonText}>{props.text}</span>
            </button>

        </div>
    )
}
