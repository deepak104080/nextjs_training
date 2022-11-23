import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

const Layout = (props) => {
  const {children, footerstatus} = props;
  console.log('footerstatus', footerstatus);
  return (
    <>
        {true ? (<div className='container'>
            <Header/>
            <Navbar />
            {children}
            {!footerstatus && (<Footer/>)}
        </div>) : (
          <div className='container'>
            <Header/>
            <Navbar />
            {children}
            {!footerstatus && (<Footer/>)}
          </div>
        )}
    </>
  )
}

export default Layout


// && - if
// ? : - if else