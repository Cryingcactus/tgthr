import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HeroSection from "../components/Hero";

export const SolutionsPageTemplate = ({ sections }) => {
    const {
        heroSection,
        keywordSection,
        titleCopySection,
        descriptiveSection,
        titleSection,
    } = sections;
    return (
        <div style={{ position: "relative" }}>
            <div className="paralax-normal">
                <HeroSection section={heroSection} />
            </div>
        </div>
    );
};

SolutionsPageTemplate.propTypes = {
    sections: PropTypes.object.isRequired,
};

const SolutionsPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    return (
        <Layout>
            <SolutionsPageTemplate sections={frontmatter} />
        </Layout>
    );
};

SolutionsPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default SolutionsPage;

export const SolutionsPageQuery = graphql`
    query SolutionsPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            rawMarkdownBody
            frontmatter {
                heroSection {
                    titleOptions {
                        title
                        highlightTitle
                        textColor
                        highlightColor
                    }
                    backgroundImage {
                        alt
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 90) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
                keywordSection {
                    phrase
                    keyword
                    active {
                        copy
                        values {
                            value
                        }
                    }
                }
                titleCopySection {
                    title
                    copy
                }
                descriptiveSection {
                    title
                    copy
                    items {
                        title
                        copy
                    }
                }
                titleSection {
                    title
                }
            }
        }
    }
`;
