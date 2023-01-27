import React from 'react'
import MovieNavbar from '../components/Navbar/Movie.Component'
import Footer from '../Footer/Footer.Component'

const MovieLayoutHoc = 
(Component)=>
({...props})=>{
    return(
        <div>
            <MovieNavbar />
            <Component {...props} />
            <Footer />
        </div>
    )
}

export default MovieLayoutHoc