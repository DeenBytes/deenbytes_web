import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className="h-['calc(100vh - 80px)']">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout