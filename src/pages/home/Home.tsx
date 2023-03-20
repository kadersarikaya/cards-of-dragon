import React from 'react'
import { MainLayout, Navbar, Footer } from '../../components'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Navbar />
      <MainLayout/>
      <Footer />
    </>
  )
}

export default Home