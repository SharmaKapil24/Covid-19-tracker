import React from "react";
import { Component } from "react";
import styles from "./footer.module.css";

class Footer extends Component{
    render(){
        return(
            <div className={styles.footer} >
                <p className={styles.text}>Copyright © 2020 COVID-19. KAPIL SHARMA #StaySafe</p>
            </div>
        )
    }
}

export default Footer;