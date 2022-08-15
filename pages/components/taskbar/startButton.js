import styles from './taskbar.module.css'
import React, { useState } from 'react';
import Image from 'next/image'
import DiskDrive from '../../../public/diskDrive.png'
import StartMenu from '../startMenu'

export default function StartButton() {
    const [startMenuOpen, setStartMenuOpen] = useState(false);

    return (
        <div>
            { startMenuOpen && <StartMenu onSelect={() => setStartMenuOpen(false)}/> }
            <button className={styles.startButton} onClick={() => setStartMenuOpen(!startMenuOpen)}>
                <Image
                    src={DiskDrive}
                    alt="Nostalgia Drive Logo"
                    width={20}
                    height={20}
                />
                <span>Nostalgia Drive</span>
            </button>
        </div>
    )
}
