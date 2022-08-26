import Layout from '../../components/layout'
import {getAllThoughtId, getThoughtData} from "../../lib/thoughts";
import Head from 'next/head';
import Link from "next/link";
import React from "react";

export async function getStaticPaths() {
    const paths = getAllThoughtId()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const thoughtData = await getThoughtData(params.id)
    return {
        props: {
            thoughtData
        }
    }
}

export default function Thought({thoughtData}) {
    return (
        <Layout>
            <Head>
                <title>{thoughtData.title}</title>
            </Head>
            <Link href={"/thoughts"}> ← Return to Thoughts</Link>
            <article>
                <h1>{thoughtData.title}</h1>
                {thoughtData.date}
                <div dangerouslySetInnerHTML={{__html: thoughtData.content}} />
            </article>
        </Layout>
    )
}