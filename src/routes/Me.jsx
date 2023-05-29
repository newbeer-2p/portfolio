import { HeadTitle } from "../components/HeadTitle"
import { Education } from "../components/MePage/Education"
import { Experiences } from "../components/MePage/Experiences"
import { Information } from "../components/MePage/Infomation"
import { Resume } from "../components/MePage/Resume"
import { Skills } from "../components/MePage/Skills"
import { NavbarLeft } from "../components/NavbarLeft"
import { NavbarRight } from "../components/NavbarRight"

export const MePage = () => {

    return (
        <div className="page">
            <NavbarLeft />
            <div className="contents">
                {/* <Resume /> */}
                <Information />
                <Experiences />
                <Education />
                <Skills />
            </div>
            <NavbarRight />
        </div>
    )
}