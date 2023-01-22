import React from 'react';
import styles from './SearchButton.module.scss'
import {Link} from "react-router-dom";

const SearchButton = ({children, ...props}) => {
    return (
        <Link {...props} className={[styles.button, props.className].join(' ')}>
            {children}
        </Link>
    );
};

export default SearchButton;