import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer(){
return(
    <footer className=" flex  text-gray-400 bg-black justify-evenly h-[70vh] pt-20 pr-20 text-sm ">
        <div className="flex flex-col  gap-40" >
            <div className="flex flex-col  gap-6">
            <div className="text-xl font-bold text-white">Cyber</div>
            <div>We are a residential interior firm located in <br/> Rwanda. Out botique Studio offers more than</div>
            </div>
            <div className="flex gap-6">
            <FaFacebookF/>
            <FaTwitter/>
            <FaTiktok/>
            <FaInstagram/>
            </div>
        </div>
        <div className="flex flex-col gap-6">
            <span className="text-xl font-bold text-white">Bonus Program</span>
            <span>Gift Cards</span>
            <span>Credit and Payment</span>
            <span>Service Contracts</span>
            <span>Non-cash accout</span>
            <span>Payment</span>
        </div>
        <div className="flex flex-col gap-6">
            <span className="text-xl font-bold text-white">Assistence to the Buyer</span>
            <span>Find an order</span>
            <span>Terms of delivery</span>
            <span>Exchange and return of goods</span>
            <span>Gaurantee</span>
            <span>Frequently asked questions</span>
            <span>Terms of use of the site</span>
        </div>
    </footer>
)
}