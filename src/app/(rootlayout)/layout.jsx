import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/navber'
import React from 'react'

function layout({children}) {
  return (
    <div>
      <Navbar />

        {children}
          <Footer />
    </div>
  )
}

export default layout