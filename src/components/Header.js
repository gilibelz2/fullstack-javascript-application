/**
 * Created by Gili Belz on 02/03/2017.
 */
import React from 'react'

const color= Math.random() > 0.5 ? 'green' : 'red';

const Header = ( {message}) => {
    return (
        <h2 className="Header text-center" style={{color}}>
            {/*Hello React Components!!*/}
            {message}
        </h2>
    );
};

Header.propTypes= {
    message: React.PropTypes.string //assert string and is required- not needed when there is a defaultProps
};

export default Header;