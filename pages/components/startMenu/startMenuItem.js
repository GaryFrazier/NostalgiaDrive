import styles from './startMenu.module.css'
import Image from 'next/image'

export default function StartMenuItem(props) {
    return (
        <button className={styles.startMenuItem} onClick={props.onClick}>
            <Image
                src={props.img}
                alt={props.text}
                width={30}
                height={30}
            />
            {props.text}
        </button>
    )
}
