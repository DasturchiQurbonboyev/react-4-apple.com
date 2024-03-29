import { React, memo } from 'react'
import "./Hero.css"
function Hero() {
    return (
        <div style={{ background: "#F5F5F7" }}>
            <div className='hero'>
                <h1>MacBook Air</h1>
                <p>Lorem, ipsum dolor.</p>
                <div>
                    <button className='btn__learn btn'>Learn more</button> <button className='btn__buy btn'>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default memo(Hero)