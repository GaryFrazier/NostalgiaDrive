import styles from './submit.module.css'
import { useSession } from "next-auth/react"
import React, { useState, useEffect } from 'react'
import { submit } from '../../../api/videos'

export default function Submit(props) {
    const { data: session } = useSession()
    const [inputUrl, setInputUrl] = useState("")
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [addToFavorites, setAddToFavorites] = useState(false)
    console.log(session)
    if (!session) {
        return (
            <div className={styles.submit}>
                <span>Please log in to submit content</span>
            </div>
        )
    }

    const handleChange = event => {
        setInputUrl(event.target.value)
    }

    const handleAddToFavorites = event => {
        setAddToFavorites(event.target.value)
    }

    const handleClick = async event => {
        event.preventDefault();

        if (/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/.test(inputUrl)) {
            setError(false)
            await submit(inputUrl, addToFavorites);
            setSuccess(true)

        } else {
            setError(true)
            setSuccess(false)
        }
        
    }

    return (
        <div className={styles.submit}>
            <span className={styles.instructions}>Enter a YouTube URL to submit and share your nostalgia with the world!</span>
            <input
                className={styles.urlInput}
                type="text"
                id="inputUrl"
                name="inputUrl"
                onChange={handleChange}
                value={inputUrl}
                autoComplete="off"
            />

            <div>
                <input
                    className={styles.urlInput}
                    type="checkbox"
                    id="addToFavorites"
                    name="addToFavorites"
                    onChange={handleAddToFavorites}
                    value={addToFavorites}
                />
                <span>Add to Favorites?</span>
            </div>

            <button className={styles.submitButton} onClick={handleClick}>Submit</button>
            { error && <span className={styles.errorText}>Please enter a valid YouTube video URL (example: https://www.youtube.com/watch?v=Vfe5g0twoXk)</span> }
            { success && <span className={styles.successText}>Url Submitted!</span> }
        </div>
    )
}
