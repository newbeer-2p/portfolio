import data from "../../data/activities.json"
import { HeadTitle } from "../HeadTitle"
import { ActivityContent } from "./ActivityContent"

export const ActivityList = () => {
    return (
        <div className="content-acts">
            <HeadTitle text="กิจกรรม" />
            {
                data.map((act, index) => (
                    <ActivityContent key={index} act={act} />
                ))
            }
        </div>
    )
}