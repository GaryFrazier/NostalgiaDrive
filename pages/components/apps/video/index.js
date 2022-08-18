import styles from './video.module.css'
import React, { useState, useEffect } from 'react'
import YouTube, { YouTubePlayer } from 'react-youtube'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForwardStep, faBackwardStep, faHeart, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { useSession } from "next-auth/react"
import { getVideos } from '../../..//api/videos'

export default function Video() {
    const [isPaused, setIsPaused] = useState(false)
    const [playlist, setPlaylist] = useState("popular")
    const [videos, setVideos] = useState({})
    const [videoIndex, setVideoIndex] = useState(0)
    const [videoElement, setVideoElement] = useState(null)
    const [loading, setLoading] = useState(true)
    const { data: session } = useSession()

    const togglePause = () => {
        setIsPaused(!isPaused);
    }

    useEffect(() => { 
        async function fetchData() {
            let vids = await getVideos()
            setVideos(vids)
            setLoading(false)
          }
          fetchData();
    }, [])

    useEffect(() => {   
        if (videoElement) {
          // Pause and Play video
          try {
            if (isPaused) {
                videoElement.target.pauseVideo();
              } else {
                videoElement.target.playVideo();
              }
          } catch(e) {
              
          }
          
        }
      }, [isPaused, videoElement]);

      useEffect(() => {   
        if (videoElement && videos && videos[playlist]) {
          try {
                videoElement.target.loadPlaylist(videos[playlist].map(x => x.id), videos[playlist].length % videoIndex , 0);
          } catch(e) {
              
          }
          
        }
      }, [playlist, videos, videoElement]);

    const _onReady = (event) => {
        setVideoElement(event);
    }

    const _onEnd = (event) => {
        setVideoIndex(videoIndex + 1)
    }

    const onChangeValue = (event) => {
        setVideoIndex(getRandomInt(videos[event.target.value].length))
        setPlaylist(event.target.value)
    }

    const setPreviousVideo = (event) => {
        if (videoIndex === 0) return

        setVideoIndex(videoIndex - 1)
        videoElement.target.previousVideo()
    }

    const setNextVideo = (event) => {
        if (videoIndex === videos[playlist].length - 1) return

        setVideoIndex(videoIndex + 1)
        videoElement.target.nextVideo()
    }

    const likeVideo = (event) => {
        
    }

    const dislikeVideo = (event) => {
        
    }

    const favoriteVideo = (event) => {
        
    }
    
    let video = videos && videos[playlist] ? videos[playlist][videoIndex % videos[playlist].length] : {}

    return (
        <div className={styles.video}>
            {loading ? <div className={styles.loading}><span>Loading...</span></div>
                : <YouTube
                    videoId={videos && videos["popular"] ? videos["popular"][0].id : null}
                    id="ytPlayerVideo"                       // defaults -> ''
                    className={styles.player}                // defaults -> ''
                    opts={{
                        playerVars: {
                            autoplay: 1
                        }
                    }}
                    onReady={_onReady}
                    onEnd={_onEnd}
                    /*iframeClassName={string}          // defaults -> ''
                    style={object}                    // defaults -> {}
                    title={string}                    // defaults -> ''
                    loading={string}                  // defaults -> undefined
                    onPause={func}                    // defaults -> noop
                    onEnd={func}                      // defaults -> noop
                    onError={func}                    // defaults -> noop
                    onStateChange={func}              // defaults -> noop
                    onPlaybackRateChange={func}       // defaults -> noop
                    onPlaybackQualityChange={func}    // defaults -> noop*/
                />
                }
                
            <div className={styles.bottomBar}>
                <button onClick={togglePause} className={styles.playerButton}>
                    <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
                </button>

                <button onClick={setPreviousVideo} className={styles.playerButton}>
                    <FontAwesomeIcon icon={faBackwardStep} />
                </button>

                <button onClick={setNextVideo} className={styles.playerButton}>
                    <FontAwesomeIcon icon={faForwardStep} />
                </button>

                <div className={styles.verticalBreak} />

                <button onClick={likeVideo} className={`${styles.playerButton} ${video?.liked && video?.liked === 1 ? styles.highlightedButton : ''}`}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </button>

                <button onClick={dislikeVideo} className={`${styles.playerButton} ${video?.liked && video?.liked === -1 ? styles.highlightedButton : ''}`}>
                    <FontAwesomeIcon icon={faThumbsDown} />
                </button>

                { session && (
                    <button onClick={favoriteVideo} className={styles.playerButton} className={`${styles.playerButton} ${video?.liked && video?.favorite ? styles.highlightedButton : ''}`}>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                )}

                <div className={styles.verticalBreak} />

                <div className={styles.playlistRadioGroup} onChange={onChangeValue}>
                    <input defaultChecked={playlist === "popular"} type="radio" value="popular" name="playlist" /> Popular
                    <input defaultChecked={playlist === "random"} type="radio" value="random" name="playlist" /> Random
                    { session && (
                        <><input defaultChecked={playlist === "favorites"} type="radio" value="favorites" name="playlist" /> Favorites</>
                    )}
                    { !session && (
                        <span className={styles.favoritesText}>Log in to save favorites!</span>
                    )}
                </div>
            </div>
        </div>
    )
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}