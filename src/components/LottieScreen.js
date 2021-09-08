import React from 'react'
import Lottie from 'react-lottie';
const LottieScreen = ({ animation }) => {

  const animationData = require(`../assets/${animation}.json`);
  console.log(animationData)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="h-screen w-screen bg-gray-dark">
      <Lottie options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  )
}

export default LottieScreen
