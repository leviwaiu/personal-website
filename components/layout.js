import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css"


export const siteTitle = "Vincent Leong - leviwaiu"


export default function Layout({children, currentSubPage, allSubPages}) {
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
                <Link href={'/'}><div className={styles.navItem}>
                    <a>Home</a>
                </div></Link>
                <Link href={'/projects'}><div className={styles.navItem}>
                    <a>Projects</a>
                </div></Link>
                <Link href={'/thoughts'}><div className={styles.navItem}>
                    <a>Thoughts</a>
                </div></Link>
                <Link href={'/cv'}><div className={styles.navItem}>
                    <a>CV/Resume</a>
                </div></Link>
                <Link href={'/contact'}><div className={styles.navItem}>
                    <a>Contact</a>
                </div></Link>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </main>
        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            </a>
        </footer>
    </div>
}