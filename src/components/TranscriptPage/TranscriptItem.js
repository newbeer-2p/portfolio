import { ButtonDownload } from "../ButtonDownload"
import { HeadTitle } from "../HeadTitle"
import data from "../../data/transcipt.json"

export const TranscriptItem = () => {
    return (
        <div className="content-trans">
            <HeadTitle text="ใบร่างผลการเรียน" />
            {/* <ButtonDownload path="/files/transcript.png" fileName="Pongsakorn_Transcript" /> */}
            <img alt="" src={data.img} width="100%" />
            <div className="mt-3 text-end">เกรดเฉลี่ยปัจจุบัน : {data.gpa}</div>
        </div>
    )
}