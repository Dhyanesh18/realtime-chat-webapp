import Navbar from "../components/Navbar";
import backgroundImage from "../assets/image.jpg";

const Homepage = () => {
    return (
        <div className="relative h-screen w-screen">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            {/* Navbar: absolute on top */}
            <Navbar />
        </div>
    );
}

export default Homepage;