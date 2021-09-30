import React from 'react'
import Card from '../components/Card'

const About = () => {
    return (
        <div className="container">
            <p className="my-4 border border-secondary p-3">Shri Vithal Education & Research Institute (SVERI) is a charitable educational trust located in Gopalpur, Pandharpur, Maharashtra, India. SVERI has established Engineering College at Pandharpur with approval from All India the Engineering College. SVERI also offers B. Pharmacy and D. Pharmacy courses Diploma in engineering (Polytechnic).</p>
            <h1>Department in SVERI</h1>
            <div className="container flex justify-content-center align-items-center row row-cols-auto ">

                <Card title="Computer Science" icon="card-1" discription="Some quick example text to build on the card title and make up the bulk of the card's content." className="col" />

                <Card title="Mechanical Engineering " icon="card-2" discription="Some quick example text to build on the card title and make up the bulk of the card's content." className="col" />

                <Card title="Electronics Engineering" icon="card-3" discription="Some quick example text to build on the card title and make up the bulk of the card's content." className="col" />

                <Card title="Civil Engineering" icon="card-4" discription="Some quick example text to build on the card title and make up the bulk of the card's content." className="col" />

                <Card title="Pharmacy" icon="card-3" discription="Some quick example text to build on the card title and make up the bulk of the card's content." className="col" />

                <Card title="M.B.A " icon="card-5" discription="Some quick example text to build on the card title and make up the bulk of the card's content." className="col" />
            </div>
        </div>
    )
}

export default About
