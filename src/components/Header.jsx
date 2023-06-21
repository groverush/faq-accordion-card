import { useEffect, useState } from "react"
import boxImage from "../assets/images/illustration-box-desktop.svg"
import shadowMob from "../assets/images/bg-pattern-mobile.svg"
import illustrationWomanMob from "../assets/images/illustration-woman-online-mobile.svg"
import illustrationWomanDesk from "../assets/images/illustration-woman-online-desktop.svg"
const Header = () => {
  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 1024px)")

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])
  return (
    <header
      className="flex flex-col justify-center items-center relative w-full h-[20%] lg:w-[40%] lg:h-full lg:bg-header-pattern 
    lg:bg-cover lg:bg-right-top"
    >
      {isMobile ? (
        <img
          className="absolute w-[75%] top-[-120px]"
          src={illustrationWomanMob}
          alt="illustration-woman-online"
        />
      ) : (
        <img
          className="absolute top-14 left-[-50px]"
          src={illustrationWomanDesk}
          alt="illustration-womna-online"
        />
      )}
      {isMobile ? (
        <img
          className="absolute w-[75%] top-0"
          src={shadowMob}
          alt="shandow-image"
        />
      ) : (
        <img
          className="absolute top-32 left-[-98px] hover:left-[-112px]"
          src={boxImage}
          alt="illustration-box"
        />
      )}
    </header>
  )
}
export default Header
