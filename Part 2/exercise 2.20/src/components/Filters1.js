import React from 'react'

const Filters1 = ({ onChange, value }) => {
    return (
        <div>
            filter shown with <input onChange={onChange} value={value}></input>
        </div>
    )
}

export default Filters1