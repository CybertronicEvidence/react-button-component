import React from 'react'

export default function ButtonIcon({ name, head, text }) {
    return (
        <div>
            <p>{head}</p>
            <button className={name}>Default <span className='material-icons'>add_shopping_cart</span></button>
        </div>
    )
}