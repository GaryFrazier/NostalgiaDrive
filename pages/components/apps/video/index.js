import styles from './video.module.css'
import React, { useState, useEffect } from 'react'
import YouTube, { YouTubePlayer } from 'react-youtube'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForwardStep, faBackwardStep, faHeart, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

import { getVideos } from '../../..//api/videos'

export default function Video() {
    const [isPaused, setIsPaused] = useState(false)
    const [playlist, setPlaylist] = useState("popular")
    const [videos, setVideos] = useState({})
    const [videoIndex, setVideoIndex] = useState(0)
    const [videoElement, setVideoElement] = useState(null)
    const [loading, setLoading] = useState(true)

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
                videoElement.target.loadPlaylist(videos[playlist], videoIndex % videos[playlist].length, 0);
          } catch(e) {
              
          }
          
        }
      }, [playlist, videos, videoElement]);

    const _onReady = (event) => {
        setVideoElement(event);
    }

    const _onPlay = (event) => {
        setVideoIndex(videoIndex + 1)
    }

    const onChangeValue = (event) => {
        setPlaylist(event.target.value)
    }

    return (
        <div className={styles.video}>
            {loading ? <div className={styles.loading}><span>Loading...</span></div>
                : <YouTube
                    videoId={videos && videos["popular"] ? videos["popular"][0] : null}
                    id="ytPlayerVideo"                       // defaults -> ''
                    className={styles.player}                // defaults -> ''
                    opts={{
                        playerVars: {
                            autoplay: 1
                        }
                    }}
                    onReady={_onReady}
                    onPlay={_onPlay}
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

                <button className={styles.playerButton}>
                    <FontAwesomeIcon icon={faBackwardStep} />
                </button>

                <button className={styles.playerButton}>
                    <FontAwesomeIcon icon={faForwardStep} />
                </button>

                <div className={styles.verticalBreak} />

                <button className={styles.playerButton}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </button>

                <button className={styles.playerButton}>
                    <FontAwesomeIcon icon={faThumbsDown} />
                </button>

                <button className={styles.playerButton}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>

                <div className={styles.verticalBreak} />

                <div className={styles.playlistRadioGroup} onChange={onChangeValue}>
                    <input defaultChecked={playlist === "popular"} type="radio" value="popular" name="playlist" /> Popular
                    <input defaultChecked={playlist === "random"} type="radio" value="random" name="playlist" /> Random
                    <input defaultChecked={playlist === "favorites"} type="radio" value="favorites" name="playlist" /> Favorites
                </div>
            </div>
        </div>
    )
}

