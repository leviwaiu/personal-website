import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home.module.css"


export const siteTitle = "Vincent Leong - leviwaiu"

export default function Layout({children, currentPage, allSubPages}) {
    return <div className={styles.container}>
        <Head>
            <link rel={"apple-touch-icon"} sizes={"180x180"} href={"/favicon/apple-touch-icon.png"} />
            <link rel={"icon"} type={"image/png"} sizes={"32x32"} href={"/favicon/favicon-32x32.png"} />
            <link rel={"manifest"} href={"/favicon/site.webmanifest"} />

            <meta name={"description"} content={"Vincent Leong's Personal Website"} />
            <meta property="og:image" content={'https://og-image.now.sh/${encodeURI(siteTitle0}/png?theme=' +
            'light&md=0&fontsize=75px&images=https'} />
            <meta name={"og:title"} content={siteTitle} />
            <meta name={"twitter:card"} content={"summary_large_image"} />
        </Head>
        <main className={styles.main}>
            <div className={styles.navigation}>
                <h1>leviwaiu.</h1>

                <div className={styles.navIconRow}>
                    <a href={'https://github.com/leviwaiu'}>
                        <img src={'/github.png'} alt={"Github"} className={styles.navIcon}/>
                    </a>
                    <a href={'https://www.linkedin.com/in/vincent-wai-u-leong-977655173/'}>
                        <img src={'/linkedin.png'} alt={"LinkedIn"} className={styles.navIcon}/>
                    </a>
                </div>

                <Link href={'/'}><div className={currentPage === "Home" ? styles.navSelected:styles.navItem}>
                    <a>Home</a>
                </div></Link>
                <Link href={'/projects'}><div className={currentPage === "Projects" ? styles.navSelected:styles.navItem}>
                    <a>Projects</a>
                </div></Link>
                <Link href={'/thoughts'}><div className={currentPage === "Thoughts" ? styles.navSelected:styles.navItem}>
                    <a>Thoughts</a>
                </div></Link>
                <Link href={'/cv'}><div className={currentPage === "CV/Resume" ? styles.navSelected:styles.navItem}>
                    <a>CV/Resume</a>
                </div></Link>
                <Link href={'/contact'}><div className={currentPage === "Contact" ? styles.navSelected:styles.navItem}>
                    <a>Contact</a>
                </div></Link>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </main>
        <footer className={styles.footer}>
            <p>2020 Vincent Leong</p>
        </footer>
    </div>
}