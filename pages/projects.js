import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function Projects(){
    return (
        <Layout currentPage={"Projects"}>
            <Head>
                <title>Projects - leviwaiu</title>
            </Head>
            <h1>Personal Projects</h1>
            <p>
                Some descriptions of the work that I have done to improve my case that I am not a totally incompetent
                programmer. Some links are even included for extra brownie points.
            </p>
            <h3>Tippy: CLI Anilist Manager</h3>
            <p>
                Written due to wanting a terminal interface that mimics the functionality (somewhat) than taiga. Current
                work in progress (though progress is being generous due to coursework). Currently able to view and edit
                your current list.
            </p>
            <h3>KORTED: Kind of Real Time Event Detection</h3>
            <p>
                As part of a research project during my penultimate year as a undergraduate student, I have contributed
                towards the development of a Event Detection programme that is used to look at events based on tweets and
                texts on social media. Notable that it uses completely synthesized data and is therefore very configurable.
            </p>
            <h3>Word2Vec Experimentation</h3>
            <p>
                A small experimentation with word2vec to see if we could speed up some of the learning that was done to
                get word embeddings through some of the spaced learning techniques that are already done for normal human
                learning. This was achieved by modifying the word2vec source code provided by Mikolov.
            </p>
            Github Link:<Link href={"https://github.com/leviwaiu/word2vec"}>https://github.com/leviwaiu/word2vec</Link>
            <h3>Discord Bot Version 1: Isla</h3>
            <p>
                I generally dislike how bloated the general use server bots available in discord was. So I had created a
                very simple and basic discord bot containing basically all of the desired features I wanted. It has been
                sitting there partially unfinised for a while, but I do wish to pick it back up one day.
            </p>
            Github Link:<Link href={"https://github.com/leviwaiu/Isla-Discord"}>https://github.com/leviwaiu/Isla-Discord</Link>
        </Layout>
    )
}