import React from 'react'

const InputCustom = (props) => {
    const { type, val, onCh, onBlr, name } = props
    return (
        <div className='form-group'>
            <input type={type}
                name={name}
                value={val}
                onChange={onCh}
                onBlur={onBlr} placeholder={`${name} ...`} className='form-control' />
        </div>
    )
}

export default InputCustom