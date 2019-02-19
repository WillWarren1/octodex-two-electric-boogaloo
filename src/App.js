import React, { Component } from 'react'
import Justicetocat from './components/Justicetocat'
import Surfcat from './components/Surfcat'
import Murikamicat from './components/Murakamicat'
import Vinylcat from './components/Vinylcat'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main>
          <Justicetocat name="Justicetocat" />
          <Surfcat name="Surftocat" />
          <Murikamicat name="Murikamicat" />
          <Vinylcat name="Vinyltocat" />
        </main>
        <Footer />
      </>
    )
  }
}

export default App
