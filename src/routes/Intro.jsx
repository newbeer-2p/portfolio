import { Link } from "react-router-dom"
import data from "../data/me.json"
// import { ButtonDownload } from "../components/ButtonDownload"

export const IntroPage = () => {
    return (
        <div className="intro">
            <div>
                <div className="intro-img">
                    <img alt="newbeer" src="img/newbeer_1.png" width="100%" height="100%" />
                </div>
                <div className="intro-text">
                    <div className="intro-name">{data.info.firstname}</div>
                    <div className="intro-name">{data.info.lastname}</div>
                    <div className="intro-eng-name">Pongsakorn Prawanna</div>
                    <div className="intro-description">" {data.info.description} "</div>
                    <Link to="/me">
                        <button className="btn btn-lg intro-btn">เข้าสู่เว็บไซต์ <i className="bi bi-chevron-double-right"></i></button>
                    </Link>
                </div>
            </div>
            {/* <div className="dl-port text-end">
                <ButtonDownload path="/files/Pongsakorn_Prawanna_Portfolio.pdf" fileName="Pongsakorn_Prawanna_Portfolio" text="ดาวน์โหลดแฟ้มสะสมผลงาน" />
            </div> */}
        </div>
    )
}