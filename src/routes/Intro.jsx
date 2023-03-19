import { Link } from "react-router-dom"
import data from "../data/me.json"
// import { ButtonDownload } from "../components/ButtonDownload"
import React, { useEffect } from "react"
import firebase from '../utils/firebase'

export const IntroPage = () => {

    useEffect(() => {
        if (window.location.href.includes("localhost")) return;
        
        const viewerRef = firebase.database().ref('viewers');
        viewerRef.once('value', (snapshot) => {
            const viewers = snapshot.val();
            let date = new Date();
            let nowDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
            let info = {}
            if (viewers && viewers[nowDate]){
                info[nowDate] = viewers[nowDate] + 1;
            }
            else
            {
                info[nowDate] = 1;
            }
            viewerRef.update(info);
        })

    }, [])

    return (
        <div className="intro">
            <div>
                <div className="intro-img">
                    <img alt="newbeer" src={data.info.profileImage} width="100%" height="100%" />
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