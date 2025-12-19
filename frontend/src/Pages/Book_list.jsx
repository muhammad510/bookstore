import { useState } from 'react'

import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Booklist from '../components/Book_list'

function Book_list() {
  return (
    <>
      <Navbar />  
      <Booklist />   
      <Footer />
    </>
  )
}
export default Book_list
