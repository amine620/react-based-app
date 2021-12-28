import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Link to={'/products'} >products</Link>
                <Link to={'/form'} >form</Link>
            </nav>
        </div>
    )
}
