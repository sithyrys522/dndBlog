import React from "react"
import Container from "../components/container"
import PostPreview from "../components/post-preview"
import Footer from "../layouts/footer"
import Header from "../layouts/header"
import SideNav from "../layouts/sidenav"
//import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <SideNav />
      <Header />
      <Container>
        <h1>The Blue Knight's Adventures</h1>
        <p>Blah blah blah description of our world blah blah blah</p>

        <PostPreview
          title="Test Post"
          postLink="test-page"
          excerpt="I am a test post"
        />
      </Container>
      <Footer />
    </div>
  )
}
