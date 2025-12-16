import { useState } from 'react'

import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Add_form from '../components/Add_form'

function Add() {
  return (
    <>
      <Navbar />  
      <Add_form />   
      <Footer />
    </>
  )
}
export default Add
