import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCheckCircle } from "react-icons/fa"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"

const AboutPage = (props) => {
    const labels = props.data.site.siteMetadata.labels
    const aboutTags = ["react", "nodejs", "html", "css"]
    const tags = {}
    labels.forEach(label => {
        aboutTags.forEach(tag => {
            if (tag === label.tag) {
                tags[tag] = label.name
            }
        })
    })

    return (
        <Layout>
            <SEO title="About" />
            <div className="post-page-main">
                <div className="sidebar px-4 py-2">
                    <Sidebar />
                </div>

                <div className="post-main">
                    <SEO title="About Me" />
                    <div className="mt-3">
                        <h2 className="heading">About</h2>
                        <p><i>This is my blog. There are many like it, but this one is mine.</i></p>
                        <br />
                        <h4>A brief history of (my) time</h4>
                        <ul>
                            <li>I used to run fast in high school. (2:01 for a half mile)</li>
                            <li>I've run 4 marathons and had a 983 day run streak.</li>
                            <li>At age 47, I earned All American status for my age group and ran a 64.8 second 400m.</li>
                            <li>I read at least 2, sometimes 3 books a week.</li>
                            <li>I flunked out of college in 1989.</li>
                            <li>I promptly got a full time job at the college and got free classes, graduating with a degree in Economics in 1993 and then doing a year in grad school.</li>
                            <li>I've failed many more times than I've suceeded. I'm OK with that.</li>
                            <li>I'm mostly self-taught in technology, growing up with a C-64.</li>
                            <li>I've done every IT job imaginable, <a href="https://en.wikipedia.org/wiki/Electronic_Data_Systems">working</a> <a href="https://www.wikiwand.com/en/GMAC_ResCap">at</a> <a href="https://www.aetna.com/">three</a> Fortune 100 companies for 15 years.</li>
                            <li>My personal blog on mobile technology was bought in 2008 where <a href="https://research.gigaom.com/author/kevintofel/">I wrote 9,744 blog posts.</a></li>
                            <li><a href="https://zatznotfunny.com/2012-08/kevin-tofel-inspires-apple-to-build-7-ipad/">I inspired Apple to make the iPad mini.</a></li>
                            <li>I worked with the Android and Chrome teams at Google from early 2016 to mid-2017.</li>
                            <li>At age 47, I took CS classes at the local community college for fun and to mentor my peers.</li>
                            <li>Now at age 53, I study JavaScript development <a href="https://www.launchschool.com>at Launch School">at Launch School</a>.</li>                                                                                           
                            <li>I love to learn. I love helping others learn even more.</li>
                            <li>I have a <em>lot</em> more to learn.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query aboutQuery {
        site {
            siteMetadata {
                labels {
                    tag
                    tech 
                    name 
                    size 
                    color
                }
            }
        }
    }
`

export default AboutPage

