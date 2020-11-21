import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import {getSortedThoughts} from "../lib/thoughts";
import thought_style from "../styles/thought.module.css"

export async function getStaticProps() {
    const allThoughtsData = getSortedThoughts()
    return {
        props: {
            allThoughtsData
        }
    }
}

export default function Thoughts({allThoughtsData}){
    return (
        <Layout currentPage={"Thoughts"}>
            <Head>
                <title>Thoughts of leviwaiu - leviwaiu</title>
            </Head>
            <h1>Thoughts from My Mind</h1>
            <p>These are my current thoughts that originated from my mind. Updated irregularly.</p>
            <hr />
            {allThoughtsData.map(({id, date, title}) => (
                    <Link href={`/thoughts/${id}`}>
                        <div className={thought_style.thoughtTitle}>
                            <h3>{title}</h3>
                            <small>{date}</small>
                            <br />
                        </div>
                    </Link>
            ))}
        </Layout>
    )
}