import React from 'react'
import { Typography } from "@material-ui/core";

import Logo from "../../assets/images/logo.png";
import styles from "./Loading.module.css";

const BangumiDataLoading = () => {
    return (
        <div className={styles.loading}>
            <img className={styles.logo} src={Logo} alt="logo" />
            <Typography className={styles.loadingText} variant="h3" align="center">Loading...</Typography>
        </div>
    )
}

export default BangumiDataLoading
