// src/WebDesignTipsPage.js
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../assets/css/tailwind.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

// Dummy data
const data = {
    title: "10 Tips for Effective Web Design That Converts",
    introduction: "<p>In <strong><em>today's digital age</em></strong>, having an aesthetically pleasing website isn't enough. It's crucial to design a <strong>website that not only attracts visitors but also converts them into customers</strong>. In this post, we'll share ten essential tips for effective web design that drives conversions.</p>",
    subheading1: "1. Understand Your Audience",
    content1: "<p>To <strong>design a website</strong> that converts, you must first understand <strong>your target audience</strong>...</p>",
    subheading2: "2. Keep it Simple",
    content2: "<p>A <strong>clean, uncluttered design</strong> helps visitors focus on <strong>what's important</strong>...</p>",
    bulletPoints: "<ol><li><strong>Use plenty of white space</strong></li><li><strong>Stick to a minimal color palette</strong></li><li><strong>Use easy-to-read fonts</strong></li></ol>",
    subheading3: "3. Optimize for Mobile",
    content3: "<p>With the increasing number of <strong>mobile users</strong>, it's essential that your <strong>website is mobile-friendly</strong>...</p>",
    subheading4: "4. Optimize for Mobile",
    content4: "<p>With the increasing number of <strong>mobile users</strong>, it's essential that your <strong>website is mobile-friendly</strong>...</p>",
    subheading5: "5. Optimize for Mobile",
    content5: "<p>With the increasing number of <strong>mobile users</strong>, it's essential that your <strong>website is mobile-friendly</strong>...</p>",
    subheading6: "6. Optimize for Mobile",
    content6: "<p>With the increasing number of <strong>mobile users</strong>, it's essential that your <strong>website is mobile-friendly</strong>...</p>",
    subheading7: "7. Optimize for Mobile",
    content7: "<p>With the increasing number of <strong>mobile users</strong>, it's essential that your <strong>website is mobile-friendly</strong>...</p>",
    subheading8: "8. Optimize for Mobile",
    content8: "<p>With the increasing number of <strong>mobile users</strong>, it's essential that your <strong>website is mobile-friendly</strong>...</p>",
    subheading9: "9. Optimize for Mobile",
    content9: "<p>With the increasing number of <strong>mobile users</strong>, it's essential that your <strong>website is mobile-friendly</strong>...</p>",
    subheading10: "10. Optimize for Mobile",
    content10: "<p>With the increasing number of <strong>mobile users</strong>, it's essential that your <strong>website is mobile-friendly</strong>...</p>",
   
    conclusion: "<p>Implementing these web design tips can <strong>significantly improve</strong> your site's conversion rates. Remember, <strong>a successful website is not just about looks but also about functionality and user experience</strong>. Start applying these tips today to see a noticeable difference.</p>",
    cta: "Ready to transform your website? Contact us today for a free consultation!",
    metaDescription: "<p><strong>Learn 10 essential tips</strong> for effective web design that boosts <em><u>conversions</u></em>. Discover how to create a user-friendly, mobile-optimized website that turns visitors into customers.</p>",
    authorBio: "<p><strong><em>John Doe</em></strong><em> is a seasoned web designer with </em><strong><em>over 10 years of experience in creating user-friendly and conversion-focused websites</em></strong><em>. Follow him on </em><a href=\"#\" rel=\"noopener noreferrer\" target=\"_blank\"><em>Twitter</em></a><em> and </em><a href=\"#\" rel=\"noopener noreferrer\" target=\"_blank\"><em>LinkedIn</em></a><em>.</em></p>",
    image: {}
};

const BlogPage = () => {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate fetching data
        setTimeout(() => {
            setContent(data);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{content.title}</title>
                <meta name="description" content={content.metaDescription.replace(/<[^>]+>/g, '')} />
                <meta name="keywords" content="web design, conversions, user-friendly, mobile-optimized, tips" />
                <meta name="author" content="John Doe" />
            </Helmet>
            <Navbar />
            <main>

            <section className="blogsection">
                <div className="container">
                    <header>
                        <h1>{content.title}</h1>
                    </header>
                    <div className="content">
                        <div className="introduction" dangerouslySetInnerHTML={{ __html: content.introduction }} />
                        <div className="tip">
                            <h2>{content.subheading1}</h2>
                            <div dangerouslySetInnerHTML={{ __html: content.content1 }} />
                        </div>
                        <div className="tip">
                            <h2>{content.subheading2}</h2>
                            <div dangerouslySetInnerHTML={{ __html: content.content2 }} />
                            <div dangerouslySetInnerHTML={{ __html: content.bulletPoints }} />
                        </div>
                        <div className="tip">
                            <h2>{content.subheading3}</h2>
                            <div dangerouslySetInnerHTML={{ __html: content.content3 }} />
                        </div>
                        <div className="tip">
                            <h2>{content.subheading4}</h2>
                            <div dangerouslySetInnerHTML={{ __html: content.content4 }} />
                        </div> 
                        <div className="tip">
                            <h2>{content.subheading5}</h2>
                            <div dangerouslySetInnerHTML={{ __html: content.content5 }} />
                        </div>
                        <div className="tip">
                            <h2>{content.subheading6}</h2>
                            <div dangerouslySetInnerHTML={{ __html: content.content6 }} />
                        </div>
                        <div className="tip">
                            <h2>{content.subheading7}</h2>
                            <div dangerouslySetInnerHTML={{ __html: content.content7 }} />
                        </div>
                        <div className="tip">
                            <h2>{content.subheading8}</h2>
                            <div dangerouslySetInnerHTML={{ __html: content.content8 }} />
                        </div>
                        <div className="tip">
                            <h2>{content.subheading9}</h2>
                            <div dangerouslySetInnerHTML={{ __html: content.content9 }} />
                        </div>
                        <div className="tip">
                            <h2>{content.subheading10}</h2>
                            <div dangerouslySetInnerHTML={{ __html: content.content10 }} />
                        </div>
                        <div className="conclusion" dangerouslySetInnerHTML={{ __html: content.conclusion }} />
                        <div className="cta">{content.cta}</div>
                        <div className="author-bio" dangerouslySetInnerHTML={{ __html: content.authorBio }} />
                    </div>
                </div>
            </section>
            </main>
            <Footer />
            <Switcher />
        </>
    );
};

export default BlogPage;
