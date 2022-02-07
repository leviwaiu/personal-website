import Layout from "../components/layout";
import Head from "next/head";

import style_cv from "../styles/CV.module.css"

export default function Cv(){
    return (
        <Layout currentPage={"CV/Resume"}>
            <Head>
                <title>Curriculum Vitae - leviwaiu</title>
            </Head>
            <h1>Curriculum Vitae</h1>
            <p>A download of my current curriculum vitae is given below. I hope to keep this updated as much as possible,
            but no promises.</p>
            <a href={"/Vincent_Leong.pdf"} className={style_cv.linkButton}>Download Here</a>
        </Layout>
    );
}