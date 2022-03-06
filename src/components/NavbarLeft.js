import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom"

export const NavbarLeft = () => {

    const location = useLocation();

    useEffect(
        () => {
            const path = location.pathname
            const nvBar = document.querySelectorAll(".nvbar-item") ?? null;
            if (nvBar === null){
                return
            } 

            if (path.includes("/me")){
                nvBar[0].classList.add("selected")
            }
            else if (path.includes("/records")){
                nvBar[1].classList.add("selected")
            }
            else if (path.includes("/activities")){
                nvBar[2].classList.add("selected")
            }
        },
        [location]
    )

    return (
        <div className="nvbar">
            <div className="nvbar-head">
                <Link to="/">
                    <div className="nvbar-img mb-3">
                        <img alt="newbeer" src="/img/newbeer_1.png" /> 
                    </div>
                </Link>
                <div className="nvbar-text">
                    พงศกร
                </div>
                <div className="nvbar-text">
                    ประวันนา
                </div>
                <hr />
                <div className="fs-5">
                    แฟ้มสะสมผลงาน
                </div>
            </div>
            <div className="nvbar-items">
                <Link to="/me" ><div className="nvbar-item">ข้อมูลส่วนตัว</div></Link>
                <Link to="/records" ><div className="nvbar-item">ผลงาน</div></Link>
                <Link to="/activities" ><div className="nvbar-item">กิจกรรม</div></Link>
            </div>
        </div>
    )
}