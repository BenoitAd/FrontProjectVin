import Navbar from "../components/Navbar"
import { aboutText } from "../utils/Constants"

export default function About() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="text-center py-8 px-10">
                <p>{aboutText}</p>
            </div>
        </div>

    )
}
