import Lottie from "lottie-react";
import loadingIcon from "../assets/loading-icon.json"

export const Loading = () => {
  return (<h1 style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }}><Lottie speed={0.5} animationData={loadingIcon} loop={true} /></h1>)
}