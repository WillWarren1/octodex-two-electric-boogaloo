import React, { Component } from 'react'
import GithubLogo from '../images/githublogo.png'
class Navbar extends Component {
  render() {
    return (
      <section className="menu-gray">
        <img className="githublogo" src={GithubLogo} alt="github logo" />
        <nav>
          <ul>
            <li>RSS</li>
            <li>FAQ</li>
            <li>Back to GitHub</li>
          </ul>
        </nav>
      </section>
    )
  }
}

export default Navbar
