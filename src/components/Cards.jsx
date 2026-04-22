import Card from "./Card";
import "../styles/Card.css"
function Cards() {
    return (
        <div className="cards">

            <Card
                title="Open Face"
                description="Lightweight helmet with open-face design for comfort and visibility."
                imageUrl="open face.webp"
                link="/open-face"
            />
            <Card
                title="Full Face"
                description="Maximum coverage helmet designed for high-impact protection."
                imageUrl="full-face.webp"
                link="/full-face"
            />
            <Card
                title="Flip Up Full Face"
                description="Full-face safety with a flip-up design for easy access."
                imageUrl="flip-up-full-face.avif"
                link="/flip-up-full-face"
            />
            <Card
                title="Off Road Full Face"
                description="Off-road helmet offering superior protection and airflow for tough rides."
                imageUrl="off-road-full-face.webp"
                link="/off-road-full-face"
            />

        </div>
    )
}

export default Cards;