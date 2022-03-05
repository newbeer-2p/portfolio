import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const NavbarRight = () => {
    const location = useLocation();
    const [contents, setContents] = useState([])
    const [currentContent, setCurrentContent] = useState(null)

    const changeContent = useCallback(
        (content, index) => () => {
            const top = document.querySelector(`.content-${content}`).offsetTop
            document.querySelector(".contents").scroll(0, top - 115)
            setCurrentContent(index)
        },
        []
    )

    useEffect(
        () => {
            const path = location.pathname
        
            if (path.includes("/me")){
                setContents([["ประวัติส่วนตัว", "info"], ["การศึกษา", "edu"], ["ทักษะ", "skills"]])
            }
            else if (path.includes("/records")){
                setContents([["ด้านเกม", "game"], ["ด้านโมเดล", "model"], ["ด้านเว็บไซต์", "web"]])
            }
            else if (path.includes("/activities")){
                setContents([])
            }

            const nvBarR = document.querySelectorAll(".nvbar-r-item");
            if (nvBarR.length === 0){
                setCurrentContent(0)
                return
            } 
            
            nvBarR.forEach((nvb) => {
                nvb.classList.remove("selected")
            })
            nvBarR[currentContent].classList.add("selected")

        },
        [location, currentContent]
    )

    return (
        <div className="nvbar-r">
            <div className="nvbar-r-title">สารบัญ</div>
            <div className="nvbar-r-items">
                {
                    contents.map((content, index) => (
                        <div key={index} className="nvbar-r-item" onClick={changeContent(content[1], index)}>{content[0]}</div>
                    ))
                }
            </div>
        </div>
    )
}