import React from 'react'
import { Link } from 'react-router-dom'
import "./LinkFixed.scss"
function LinkFixed() {
    return (
        <div  className='fixed'>
            <Link>
                <div className='fixed-box'>
                    <span>TRY SINGGING IN</span>
                </div>
            </Link>
        </div>
    )
}

export default LinkFixed