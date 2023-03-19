import data from "../../data/me.json"
import { HeadTitle } from "../HeadTitle"

export const Experiences = () => {
    return (
        <div className="mb-5 content-exp">
            <HeadTitle text={"ประสบการณ์"} />
            {
                data.experiences.map((exp, index) => (
                    <div key={index}>
                        <div className="fw-bold">{exp?.company}</div>
                        <div><span className="title-sm">ตำแหน่ง :</span> {exp?.position}</div>
                        <div><span className="title-sm">ระยะเวลา :</span> {exp?.period_year !== 0 ? `${exp?.period_year} ปี ` : ""}{exp.period_month !== 0 ? `${exp?.period_month} เดือน` : ""}</div>
                        <div><span className="title-sm">รายละเอียดงาน :</span> {exp?.description}</div>
                    </div>
                ))
            }
        </div>
    )
}