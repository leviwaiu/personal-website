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
                I have to admit that I previously did not bother to upload much of my personal projects to github, with
                the impression that they are too unpolished. With much of those works now lost, I have decided to document
                my further projects starting now. As a result, this page would not be finished for quite a long while.
            </p>
            <h3>Macau Bus API</h3>
            <p>
                The buses from my hometown, Macau, has actually very few resources in the web to make it easier for
                calculations. To improve the situation, I am currently developing an API to access the more basic parts
                of their information. Links and such would be provided later.
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