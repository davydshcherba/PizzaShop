import './Aside.css'
import {BookOpenText, ChartPie, Mail, Settings, User, Wallet} from "lucide-react";

function Aside() {
    return (
        <aside>

            <a href="/"><BookOpenText color={'#FFFFFF'} size={35}/></a>
            <a href="/profile"><User color={'#B4BCCF'} size={35}/></a>
            <a href="/wallet"><Wallet color={'#B4BCCF'} size={35}/></a>
            <a href="/settings"><Settings color={'#B4BCCF'} size={35}/></a>
            <a href="/mail"><Mail color={'#B4BCCF'} size={35}/></a>
            <a href="/stats"> <ChartPie color={'#B4BCCF'} size={35}/></a>
        </aside>
    )
}

export default Aside
