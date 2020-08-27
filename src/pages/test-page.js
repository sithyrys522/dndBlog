import React from "react"
import Container from "../components/container"
import { Link } from "gatsby"
import Footer from "../layouts/footer"
import Header from "../layouts/header"
import Sidenav from "../layouts/sidenav"
import SideNav from "../layouts/sidenav"

export default function TestPage() {
    return (
        <div>
            <SideNav />
            <Header />
            <Container>
                <p>Hi</p>
                <Link to="/">Home</Link>
            </Container>
            <Footer />
        </div>
        
    )
}