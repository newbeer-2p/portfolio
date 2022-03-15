import { NavbarLeft } from "../components/NavbarLeft"
import { NavbarRight } from "../components/NavbarRight"
import { Subject } from "../components/TranscriptPage/Subject"
import { TranscriptItem } from "../components/TranscriptPage/TranscriptItem"

export const TranscriptPage = () => {
    return (
        <div className="page">
            <NavbarLeft />
            <div className="contents">
                <TranscriptItem />
                <Subject />
            </div>
            <NavbarRight />
        </div>
    )
}