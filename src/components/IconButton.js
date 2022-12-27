import React from 'react'

export default function IconButton({ name, head, text }) {
    return (
        <div>
            <p>{head}</p>
            <button className={name}><span className='material-icons'>add_shopping_cart</span> Default </button>
        </div>
    )
}