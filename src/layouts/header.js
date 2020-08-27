import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import headerStyles from "./header.module.css"

export default function Header() {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )
    return (
        <div className={headerStyles.header}>
            <p>{data.site.siteMetadata.title}</p>
        </div>
    )
}