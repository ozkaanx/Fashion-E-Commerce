import React from 'react'
import loadingscreen from '../images/loadingscreen.gif'
import '../../style.scss'

const LoadingScreen = () => {
    return (
        <div className="screen-loading">
            <img src={loadingscreen} alt="">
            </img>
        </div>
        
    )
}

export default LoadingScreen
