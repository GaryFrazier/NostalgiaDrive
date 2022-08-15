import styles from './taskbar.module.css'
import Image from 'next/image'
import DiskDrive from '../../../public/diskDrive.png'

export default function StartButton() {
    return (
        <div className={styles.startButton}>
            <Image
                src={DiskDrive}
                alt="Nostalgia Drive Logo"
                width={20}
                height={20}
            />
            <span>Nostalgia Drive</span>
        </div>
    )
}