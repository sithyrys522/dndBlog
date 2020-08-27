import React from "react"
import sidenavStyles from "./sidenav.module.css"
import { Link } from "gatsby"

export default function SideNav() {
    return (
        <div className={sidenavStyles.sidenav}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/test-page">Highlighted Episode</Link></li>
                <li><Link to="/ex-char-1">Character Bio 1</Link></li>
            </ul>
        </div>
    )
}