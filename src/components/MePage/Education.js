import data from "../../data/me.json"
import { HeadTitle } from "../HeadTitle"

export const Education = () => {
    return (
        <div className="content">
            <HeadTitle text="การศึกษา" />
            <div className="content-edu">
                <div className="content-edu-year">{data.education.bachelorDegree.yearFrom} - {data.education.bachelorDegree.yearTo === "" ? "ปัจจุบัน" : data.education.bachelorDegree.yearTo}</div>
                <div className="">
                    <div>คณะ {data.education.bachelorDegree.faculty} สาขา {data.education.bachelorDegree.department}</div>
                    <div>แขนงวิชา {data.education.bachelorDegree.major}</div>
                    <div>{data.education.bachelorDegree.university}</div>
                </div>
            </div>
            <div className="content-edu">
                <div className="content-edu-year">{data.education["้highSchool"].yearFrom} - {data.education["้highSchool"].yearTo === "" ? "ปัจจุบัน" : data.education["้highSchool"].yearTo}</div>
                <div className="">
                    <div>เอกวิชา {data.education["้highSchool"].major}</div>
                    <div>{data.education["้highSchool"].name}</div>
                </div>
            </div>
        </div>
    )
}