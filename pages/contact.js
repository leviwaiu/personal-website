import Layout from "../components/layout";
import Head from "next/head";

import styles from "../styles/home.module.css";
import React from "react";

export default function Contact(){
    return (
        <Layout currentPage={"Contact"}>
            <Head>
                <title>Contact - leviwaiu</title>
                <script src={'scripts/obfuscate_email.js'} defer/>
            </Head>
            <h1>Contact Me!</h1>
            <p>If you want anything, do not hesitate to contact me through email:</p>
            <code id={"obfuscated_email"} className={styles.code}>contact leviwaiu com</code>
            <p>Feel free to contact me for whatever inquiries or questions. If it is about a specific project, please
            note the project in the title header please. </p>
            <p>In addition, I am available through Github and LinkedIn: </p>
            <a href={'https://github.com/leviwaiu'}>
                <img src={'/github.png'} alt={"Github"} className={styles.navIcon}/> GitHub Username: leviwaiu
            </a>
            <a href={'https://www.linkedin.com/in/vincent-wai-u-leong-977655173/'}>
                <img src={'/linkedin.png'} alt={"LinkedIn"} className={styles.navIcon}/> LinkedIn Profile
            </a>
        </Layout>
    )
}