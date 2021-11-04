import React from 'react'
import Select from './Select'
import Days from './Days';
import styles from "./container.module.css";

const Container = () => {
    return (
        <div className={styles.weatherContainer}>
            <Select/>
            <Days/>
        </div>
    )
}

export default Container
