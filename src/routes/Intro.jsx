import { Link } from "react-router-dom"

export const IntroPage = () => {
    return (
        <div className="intro">
            <div>
                <div className="intro-img">
                    <img alt="newbeer" src="img/newbeer_1.png" width="100%" height="100%" />
                </div>
                <div className="intro-text">
                    <div className="intro-name">พงศกร</div>
                    <div className="intro-name">ประวันนา</div>
                    <div className="intro-eng-name">Pongsakorn Prawanna</div>
                    <Link to="/me">
                        <button className="btn btn-lg intro-btn">เข้าสู่เว็บไซต์ <i className="bi bi-chevron-double-right"></i></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}