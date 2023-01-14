import Image from "next/image";
import Logo from "../public/bull.png"
export default function Header(){
    return(
        <header>
           <p>Minting is Now closed</p>
           <div>
                <Image  src={Logo} height={50} width={50}/>
                <span><i className="fa-brands fa-telegram fa-2x"></i><br/>Join Telegram</span>
                <span><i className="fa-brands fa-twitter fa-2x"></i><br/>Join Twitter</span>
                <button>Connect</button>
           </div>
           {/* <input type="color"/> */}
        </header>
    )
}