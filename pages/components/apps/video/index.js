import styles from './video.module.css'
import React, { useState, useEffect } from 'react'
import YouTube, { YouTubePlayer } from 'react-youtube'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForwardStep, faBackwardStep, faHeart, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

let videoElement = null;

export default function Video() {
    const [isPaused, setIsPaused] = useState(false);

    const togglePause = () => {
        setIsPaused(!isPaused);
    };

    useEffect(() => {   
        if (videoElement) {
          // Pause and Play video
          if (isPaused) {
            videoElement.target.pauseVideo();
          } else {
            videoElement.target.playVideo();
          }
        }
      }, [isPaused, videoElement]);

    const _onReady = (event) => {
        videoElement = event;
    };

    return (
        <div className={styles.video}>
            <YouTube
                videoId="d3SV2tKr6BY"                // defaults -> ''
                id="ytPlayerVideo"                       // defaults -> ''
                className={styles.player}                // defaults -> ''
                opts={{
                    playerVars: {
                        autoplay: 1
                      }
                }}
                onReady={_onReady}
                /*iframeClassName={string}          // defaults -> ''
                style={object}                    // defaults -> {}
                title={string}                    // defaults -> ''
                loading={string}                  // defaults -> undefined
                onPlay={func}                     // defaults -> noop
                onPause={func}                    // defaults -> noop
                onEnd={func}                      // defaults -> noop
                onError={func}                    // defaults -> noop
                onStateChange={func}              // defaults -> noop
                onPlaybackRateChange={func}       // defaults -> noop
                onPlaybackQualityChange={func}    // defaults -> noop*/
            />
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
            </div>
        </div>
    )
}

