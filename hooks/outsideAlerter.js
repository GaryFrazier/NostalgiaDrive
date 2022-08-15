import React, { useRef, useEffect } from "react"

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (callback && ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }
    // Bind the event listener
    document.addEventListener("click", handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside)
    }
  }, [ref])
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter(props) {
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, props.handleClickOutside)

  return <div ref={wrapperRef}>{props.children}</div>
}