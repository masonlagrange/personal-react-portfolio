import React from "react";
import '../styles/Footer.css'

const styles = {
    img: {
        width: '60px',
        padding: '0 10px'
    },
}

function Footer() {
    return(
        <footer className="footer">
            <div className="img-wrap">
                <a href="https://github.com/masonlagrange"><img style={styles.img} src={require("../images/github-logo.png")} alt="github logo"/></a>
                <a href="https://www.linkedin.com/in/mason-lagrange-363345272/"><img style={styles.img} src={require("../images/linkedin-logo.png")} alt="linkedin logo"/></a>
                <a href="https://stackoverflow.com/users/21889455/masonlagrange"><img style={styles.img} src={require("../images/stackoverflow-logo.png")} alt="stackoverflow logo"/></a>
            </div>
        </footer>
    )
}

export default Footer