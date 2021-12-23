
import React from 'react'
import PropTypes from 'prop-types'


function Button({color,text,onClick}) {


    return (
        <div>
            <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>

        </div>
    )
}

Button.defaultProps={
    color: 'info',
    text:'Merhaba Cınım'
}

Button.propTypes={

    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button





