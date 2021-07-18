import Head from "next/head"

import Layout from '../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>About me</title>
            <meta name="description" content="Generic Page" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About me</h1>
                    </header>
                    <span className="image main"><img src="/static/images/pic11.jpg" alt="" /></span>
                    <p>The first thing about me is that I love to code, Ever since I wrote my first code ,I have been hooked into it. I started my career with Bachelors in Electronics and Instrumentation Engineering where I learned many programming languages related to automation such as PLC programming, C/C++, SCADA, DCS and HMI(Human machine interface) but where I find my real groove on was when I joined Accenture as a Software Developer.
										It is there where I was trained in different programming languages such as Java, Python, Oracle Sql, HTLM, CSS, JavaScript and PL-Sql and was lucky enough to work with amazing clients. I had a great experience working with my colleagues on the latest frontier of technology which led me to pursue Higher education.<br />
										My colleagues know me as a highly creative engineer who can always be trusted to come up with a new approach to solve a given problem<br />
										The level of technological advancement in the field of computing is unprecedented and has ignited a spark within me. Currently pursuing Cloud Computing for Big Data course in Lambton College Toronto. Despite learning plethora of information from the course , I still have more to learn. That is why I am studying for online certification program and looking for internship opportunities.

									     I’m truly passionate about my work and always eager to connect with other in the field. While I enjoy all aspects of my job, I think my favorite stage of a project is working with the client or business to understand their business objectives.<br />
										 </p>
										 My specialties include quickly learning new skills and programming languages, problem solving, responsive design principles, website optimization and methods of organizing code.


									I am known to be a quick learner and to have a leadership's mindset. I am an effective talker, and I can perform multiple tasks simultaneously. In my performance evaluations, my manager very often reports that he appreciates my professional competence and sense of accomplishment.<br />

									
									<p>With such an experience under my wing, I am making every effort to make a change in my career. I am waiting to do that in an establishment like yours which seeks to enhance the ecosystem, and that is something I'm genuinely enthusiastic about.</p>
                </div>
            </section>
        </div>
    </Layout>
)
