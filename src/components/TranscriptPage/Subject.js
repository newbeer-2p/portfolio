import data from "../../data/transcipt.json"
import { HeadTitle } from "../HeadTitle"
import { SubjectItem } from "./SubjectItem"

export const Subject = () => {
    return (
        <div className="mt-5 content-subjects">
            <HeadTitle text="วิชาที่ชื่นชอบ" />
            {
                data.suggestGrade.map((s, index) => (
                    <SubjectItem key={index} subject={s} />
                ))
            }
        </div>
    )
}