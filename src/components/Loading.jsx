import Lottie from "lottie-react";
import loadingIcon from "../assets/loading-icon.json"

export const Loading = () => {
  return (<h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><Lottie speed={0.5} animationData={loadingIcon} loop={true} /></h1>)
}