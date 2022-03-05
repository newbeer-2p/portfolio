import { ActivityList } from "../components/ActivityPage/ActivityList"
import { NavbarLeft } from "../components/NavbarLeft"
import { NavbarRight } from "../components/NavbarRight"

export const ActivityPage = () => {
    return (
        <div className="page">
            <NavbarLeft />
            <div className="contents">
                <ActivityList />
            </div>
            <NavbarRight />
        </div>
    )
}