import React from 'react'
import { MainLayout, Navbar } from '../../components'
import './home.css'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <Navbar/>
      <MainLayout/>
    </>
  )
}

export default Home