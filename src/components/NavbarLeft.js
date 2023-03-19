import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import data from "../data/me.json"

export const NavbarLeft = () => {

    const location = useLocation();

    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    }

    useEffect(
        () => {
            const path = location.pathname
            const nvBar = document.querySelectorAll(".nvbar-items .nvbar-item") ?? null;
            const nvBar_m = document.querySelectorAll(".nvbar-moblie-items .nvbar-item") ?? null;
            const nvBar_md = document.querySelectorAll(".nvbar-mobile-dot") ?? null;
            if (nvBar === null || nvBar_m === null){
                return
            } 

            if (path.includes("/me")){
                nvBar[0].classList.add("selected")
                nvBar_m[1].classList.add("selected-m")
                nvBar_md[1].classList.add("selected")
            }
            else if (path.includes("/records")){
                nvBar[1].classList.add("selected")
                nvBar_m[2].classList.add("selected-m")
                nvBar_md[2].classList.add("selected")
            }
            else if (path.includes("/activities")){
                nvBar[2].classList.add("selected")
                nvBar_m[3].classList.add("selected-m")
                nvBar_md[3].classList.add("selected")
            }
            else if (path.includes("/transcript")){
                nvBar[3].classList.add("selected")
                nvBar_m[4].classList.add("selected-m")
                nvBar_md[4].classList.add("selected")
            }

            if (show)
            {
                document.querySelector(".nvbar-mobile").style.transform = "translateY(0)";
            }
            else
            {
                document.querySelector(".nvbar-mobile").style.transform = "translateY(-50px)";
            }
        },
        [location, show]
    )

    return (
        <>
            <div className="nvbar">
                <div className="nvbar-head">
                    <Link to="/">
                        <div className="nvbar-img mb-3">
                            <img alt="newbeer" src={data.info.profileImage} width="100%" /> 
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
                    <Link to="/transcript" ><div className="nvbar-item">ผลการเรียน</div></Link>
                </div>
            </div>
            <div className="nvbar-mobile">
                <div className="nvbar-moblie-items">
                    <div>
                        <Link to="/" ><span className="nvbar-item">หน้าแรก</span></Link>
                        <Link to="/me" ><span className="nvbar-item">ข้อมูลส่วนตัว</span></Link>
                        <Link to="/records" ><span className="nvbar-item">ผลงาน</span></Link>
                        <Link to="/activities" ><span className="nvbar-item">กิจกรรม</span></Link>
                        <Link to="/transcript" ><span className="nvbar-item">ผลการเรียน</span></Link>
                    </div>
                </div>
                <div className="nvbar-mobile-dots">
                    <div className="nvbar-mobile-dot"></div>
                    <div className="nvbar-mobile-dot"></div>
                    <div className="nvbar-mobile-dot"></div>
                    <div className="nvbar-mobile-dot"></div>
                    <div className="nvbar-mobile-dot"></div>
                </div>
                <div className="nvbar-mobile-btn" onClick={toggleShow}>
                    <i className="bi bi-list"></i>
                </div>
            </div>
        </>
    )
}