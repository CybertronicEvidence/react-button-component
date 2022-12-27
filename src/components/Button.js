import React from 'react'

export default function Button({ name, head, text }) {
    return (
        <div>
            <p>{head}</p>
            <button className={name}>{text}</button>
        </div>
    )
}
