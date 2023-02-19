import { HeadTitle } from "../components/HeadTitle"
import { Education } from "../components/MePage/Education"
import { Experiences } from "../components/MePage/Experiences"
import { Information } from "../components/MePage/Infomation"
import { Skills } from "../components/MePage/Skills"
import { NavbarLeft } from "../components/NavbarLeft"
import { NavbarRight } from "../components/NavbarRight"

export const MePage = () => {

    return (
        <div className="page">
            <NavbarLeft />
            <div className="contents">
                <Information />
                <Experiences />
                <Education />
                <Skills />
                <div className="content-resume">
                    <HeadTitle text="เรซูเม่" />
                    <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1aSpL0JSo_IeJ9ck0dD6Cce3TesoE3wOl/view?usp=sharing">
                    <img src="files/Resume.png" width="100%" alt="resume" /></a>
                </div>
            </div>
            <NavbarRight />
        </div>
    )
}