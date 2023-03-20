import React from 'react'
import { Footer, Navbar } from '../../components'
import './error.css'
type Props = {}

const Error = (props: Props) => {
  return (
    <>
    <Navbar/>
      <main className='cod__error-page__main' >
        <header className='cod__error-page__header' >
          <h1 className='cod__error-page__title' >The page can’t be found.</h1>
          <div className="cod__error-page-content">
            <p>It looks like nothing was found at this location.</p>
          </div>
        </header>
      </main>
      <Footer/>
    </>
  )
}

export default Error