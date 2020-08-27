import React from "react"
import Container from "./container"
import { Link } from "gatsby"


export default function PostPreview(props) {
    return (
        <Container>
            <h3><Link to={props.postLink}>{props.title}</Link></h3>
            <p>{props.excerpt}</p>
        </Container>
    )
}