import React from 'react'

const ChildSampleComponent = ({ message, updateMessage }) => {

    const handleChange = (event) => {
        updateMessage(event.target.value)
    }

    return (
        <div>
            ChildSampleComponent
            <p>{message}</p>
            <input type='text' value={message} onChange={handleChange} />
        </div>
    )
}

export default ChildSampleComponent