import { useState } from 'react'

import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Footer from '../components/Footer'
import BookDeta from '../components/BookDeta' // Fixed the name to PascalCase

function BookDetail() {
  return (
    <>
      <Navbar />  
      <BookDeta />
      <Footer />
    </>
  )
}

export default BookDetail;
