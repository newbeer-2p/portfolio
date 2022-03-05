import { Education } from "../components/MePage/Education"
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
                <Education />
                <Skills />
            </div>
            <NavbarRight />
        </div>
    )
}