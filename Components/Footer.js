import Image from "next/image";
import Logo from "../public/bull.png"
export default function(){
    return (
        <footer>
            <Image src={Logo} alt="bull"  className="footerImg" />
            <h3>10B supply</h3>
            <a href="#">verifird contract</a>
        </footer>
    )
}