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
                <div className="content-resume mb-4">
                    <HeadTitle text="เรซูเม่" />
                    <a target="_blank" rel="noreferrer" href="/files/Pongsakorn_Resume.png">
                    <img alt="Resume" src="/files/Pongsakorn_Resume.png" width="100%" /></a>
                </div>
                <Information />
                <Experiences />
                <Education />
                <Skills />
            </div>
            <NavbarRight />
        </div>
    )
}