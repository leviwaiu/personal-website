import Layout from "../components/layout";
import Head from "next/head";

import style_cv from "../styles/CV.module.css"

export default function Cv(){
    return (
        <Layout currentPage={"CV/Resume"}>
            <Head>
                <title>Curriculum Vitae - leviwaiu</title>
            </Head>
            <h1>Leong, Vincent Wai U</h1>
            <p>Below is my CV, which is a more concise description of my work. A downloadable pdf version of the
                CV is also available.</p>
            <div className={style_cv.cv}>
                <h1 className={style_cv.mainHead}>Education</h1>
                <div className={style_cv.cvItem}>
                    <h2>University College London</h2>
                    <h4>MEng Computer Science, Sep 2018 - Jun 2022</h4>
                    <ul>
                        <li>Grades are on track to achieve First Class honours.</li>
                        <li>Modules: Object Oriented Programming, Logic and Databases, Algorithms, Software Engineering,
                            Computer Architecuture and Concurrency, Networked Systems and more.
                        </li>
                    </ul>
                </div>
                <div className={style_cv.cvItem}>
                    <h2>Macau Anglican College</h2>
                    <h4>Cambridge International Education A-Levels, Sep 2003 - Jun 2018</h4>
                    <ul>
                        <li>A-Levels of A* in Mathematics, Physics and Chinese; A in Chemistry and IT; B in Further
                            Mathematics and English</li>
                        <li>10 IGCSEs obtained including Biology, Business Studies and Advanced Mathematics, with a
                            total of 7A* and 3 A grades.</li>
                    </ul>
                </div>
                <h1 className={style_cv.mainHead}>Job Experience</h1>
                <div className={style_cv.cvItem}>
                    <h2>D&C Consulting Limited, Macau</h2>
                    <h4>Developer Intern, Jul 2020 - Sep 2020</h4>
                    <ul>
                        <li>Experienced working with large scale enterprise projects for a government department and the
                            necessary redundancies. Went through the process of agile development and test-based
                            development.</li>
                        <li>Exposure and experience in developing complex Backend API in Java for Web applications
                            required to be deployed in production using multiple dependent frameworks.</li>
                    </ul>
                </div>
                <div className={style_cv.cvItem}>
                    <h2>University College London</h2>
                    <h4>Research Intern, Jul 2019 - Sep 2019</h4>
                    <ul>
                        <li>Insight on research methodology and current state-of-the-art algorithms detailed within published
                            research papers. This allows for an understanding of current capabilities, challenges and future of NLP.</li>
                        <li>Investigated methods to improve learning of Word Embeddings in Natural Language Processing,
                            allowing for words and its context to be learned more quickly without losing precision and accuracy.</li>
                    </ul>
                </div>
                <h1 className={style_cv.mainHead}>Project & Other Experience</h1>
                <div className={style_cv.cvItem}>
                    <h2>CarefulAI: Speech-To-Text Application</h2>
                    <ul>
                        <li> Programming an accessible interface for a command only API that could be run on multiple
                            platforms through the use of Electron.</li>
                        <li>Familiarised with principles and process of user-focused design to enable best possible
                            experience for the end user of application, including sketch drafting and GUI testing.</li>
                    </ul>
                </div>
                <div className={style_cv.cvItem}>
                    <h2>UCL Technology Society</h2>
                    <h4>Treasurer, Sep 2019 - Mar 2020</h4>
                    <ul>
                        <li>Gained the ability to organise sizable operations, to keep things running and to tackle
                        management problems which can come in unexpected timing.</li>
                        <li>Through planning events, had gained ability to plan ahead and to balance aspirational goals
                        and objectives with current operational limitations and challenges to allow the best result.</li>
                    </ul>
                </div>
                <div className={style_cv.cvItem}>
                    <h2>GOSH: Patient Lookup</h2>
                    <ul>
                        <li>Managing the viewing and editing of large amounts of patient data with various functions
                        such as search, listing, and editing of the list. Included SQL functionality to connect to a
                        database.</li>
                    </ul>
                </div>
                <h1 className={style_cv.mainHead}>Skills</h1>
                    <ul>
                        <li>Languages: Python, JavaScript, Haskell, C, SQL, Java, Latex</li>
                        <li>Technologies: AWS, Azure, Node.js, React, Electron, Flask, Docker, Git, Various API</li>
                        <li>Operating Systems: Windows and Linux</li>
                    </ul>
            </div>
        </Layout>
    );
}