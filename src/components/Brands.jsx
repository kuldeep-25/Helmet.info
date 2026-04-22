import Brand from "./Brand";
import '../styles/Brand.css';
function Brands() {
    return (

        <div className="brands-section">

            <h2>Top Helmet Brands</h2>

            <div className="brands">

                
                <Brand
                    imageUrl="AGV.png"
                    title="AGV"
                    link="https://www.agv.com/"
                />
                <Brand
                    imageUrl="AXOR.webp"
                    title="AXOR"
                    link="https://www.axor.com/"
                />
                <Brand
                    imageUrl="LS2.webp"
                    title="LS2"
                    link="https://www.ls2helmets.com/"
                />
                <Brand
                    imageUrl="KYT.png"
                    title="KYT"
                    link="https://www.kytindia.com/"
                />
                <Brand
                    imageUrl="MT.png"
                    title="MT"
                    link="https://mthelmets.com/"
                />
                <Brand
                    imageUrl="Shark.jpg"
                    title="Shark"
                    link="https://www.shark-helmets.com/en"
                />
                <Brand
                    imageUrl="SMK.png"
                    title="SMK"
                    link="https://www.smkhelmets.com/"
                />
                <Brand
                    imageUrl="steelbird.jpg"
                    title="Steelbird"
                    link="https://www.steelbirdhelmet.com/"
                />

            </div>
        </div>

    )
}

export default Brands;