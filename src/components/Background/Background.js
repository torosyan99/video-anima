import React from 'react'

import './background.css'

function Background({refVideo=null}) {
  return (
    <>
    <video className='background' ref={refVideo}  src='./media/background.mp4' muted/>
    </>
  )
}

export default Background