import React from 'react'

const Home = () => {
    const imgStyle={
        heigth:"70%",
        width:"70%"
    }
    return (
        <div className="container d-flex flex-column justify-content-center">
            <div className="d-flex flex-column align-items-center my-5">
                <span>Welcome !!!</span>
                <h3>Shri Vithal Education & Research Institute's</h3>
                <h1>COLLEGE OF ENGINEERING PANDHARPUR</h1>
            </div>
            <div className="d-flex align-items-center justify-content-center">
            <img src="/images/college.jpeg" className="img-fluid " style={imgStyle}alt="Responsive image"></img>
            </div>
        </div>
    )
}

export default Home
