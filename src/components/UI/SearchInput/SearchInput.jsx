import React from 'react';
import styles from './SearchInput.module.scss'

const SearchInput = (props) => {
    return (
        <input className={[styles.input, props.className].join(' ')} {...props}/>
    );
};

export default SearchInput;