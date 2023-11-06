import { useState } from "react";
import HeadCos from "./headCs";
import Sidebar from "./sidebar";

export default function Paket() {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [ganjil, setGanjil] = useState();
    const textArray = ["2 team members", "20GB Cloud storage", "Integration help", "Sketch Files"];
    const paket = ["Standard", "Premium", "Special", "VIP"];
    const price = ["49", "299", "499", "999"]

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleGanjil = () =>{
        setGanjil(ganjil);
    }

    return (
        <>
            <HeadCos sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
            <main>
                <div className="d-flex">
                    <Sidebar sidebarVisible={sidebarVisible} />
                    <div className="packed row">
                    <div className="paket d-flex col-6">
                    {[0,1,2,3].map((index) => (
                        <div key={index} class={`paket1 ${index % 2 === 1 ? 'addpaket' : ''}`}>
                            <h5 class="">{paket[index]} plan</h5>
                            <div class="">
                                <span style={{fontSize: '20px'}}>Rp</span>
                                <span style={{fontSize: '50px'}}>{price[index]}</span>
                                <span class="">.ooo</span>
                            </div>
                            <ul role="list" class="">
                            
                            {[0,1,2,3].map((index) => (

                                <li class="flex">
                                    <svg class="" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={15} fill="#1c64f2" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span class="">{textArray[index]}</span>
                                </li>
                                ))}
                            </ul>
                            <button type="button" class="">Choose plan</button>
                        </div>
                        ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}