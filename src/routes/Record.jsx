import { NavbarLeft } from "../components/NavbarLeft"
import { NavbarRight } from "../components/NavbarRight"
import { RecordList } from "../components/RecordPage/RecordList"

export const RecordPage = () => {
    return (
        <div className="page">
            <NavbarLeft />
            <div className="contents">
                <RecordList type="game" />
                <RecordList type="web" />
                <RecordList type="model" />
                <RecordList type="cinematic" />
            </div>
            <NavbarRight />
        </div>
    )
}