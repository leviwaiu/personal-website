import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import styles from '../styles/home.module.css'
import React from "react";

export default function Home() {
    return (
        <Layout currentPage={"Home"}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1 className={styles.title}>
                Hi, I'm Vincent Leong.
            </h1>
            <p>
                I'm Vincent Leong, a MEng Computer Science student currently studying in University College London.
                The world has demonstrated how the personal computer is able to change my life from my early childhood, and
                I believe that with the future promising us with more fascinating and incredible advancements, we would be
                able to use the rocks that we taught to think to further better our lives.
            </p>
            <p>
                I am very interested in the Natural Language Processing branch of Machine Learning, and I hope to use
                advancements to bridge the communication gap between humans and machine. While I mainly use Python and Java
                there is nothing stopping me from learning more, and I frequently pick up new skills to code in more adventurous waters.
            </p>
            <p>
                During the times when I am not sitting in front of a computer coding, I like to study calligraphy and maps.
                I also like reading books in all the languages I can understand, as well as some that I don't. Recently
                I also happened to pick up on keyboards recently, and have spent probably too much time and money on it
                to be considered reasonable by any normal person.
            </p>
        </Layout>
    )
}
