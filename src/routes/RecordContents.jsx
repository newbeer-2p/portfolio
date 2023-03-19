import { useParams } from "react-router-dom"
import { NavbarLeft } from "../components/NavbarLeft"
import { NavbarRight } from "../components/NavbarRight"
import { RecordContent } from "../components/RecordPage/RecordContent"
import data from '../data/records.json'

export const RecordContentPage = () => {
    const { name } = useParams()

    return (
        <div className="page">
            <NavbarLeft />
            <div className="contents">
                <RecordContent content={data.find((rec) => (rec.name === name))} />
            </div>
            <NavbarRight />
        </div>
    )
}