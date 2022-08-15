import styles from './taskbar.module.css'
import React, { useState } from 'react';
import Image from 'next/image'
import DiskDrive from '../../../public/diskDrive.png'
import StartMenu from '../startMenu'
import OutsideAlerter from '../../../hooks/outsideAlerter'

export default function StartButton(props) {
    const [startMenuOpen, setStartMenuOpen] = useState(false);

    return (
        <div>
            <OutsideAlerter handleClickOutside={() => setStartMenuOpen(false)}>
                { startMenuOpen && <StartMenu {...props} onSelect={() => setStartMenuOpen(false)}/> }
                <button className={styles.startButton} onClick={() => startMenuOpen ? null : setStartMenuOpen(true)}>
                    <Image
                        src={DiskDrive}
                        alt="Nostalgia Drive Logo"
                        width={20}
                        height={20}
                    />
                    <span>Nostalgia Drive</span>
                </button>
            </OutsideAlerter>
        </div>
    )
}
