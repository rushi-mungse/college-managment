import React from 'react'

const Card = (props) => {
    const{title,icon,discription}=props
    return (
        <>
            <div className="card m-4" style={{width: "18rem"}}>
                <img src={`/images/${icon}.jpg`} className="card-img-top" alt="cardimg" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discription}</p>
                    <a href="https://coe.sveri.ac.in/aboutSVERI.php" target="_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </>
    )
}

export default Card
