import { useCallback, useEffect, useMemo, useState } from "react"
import { HeadTitle } from "../HeadTitle"
import data from "../../data/me.json"

export const Information = () => {

    const [currentImage, setCurrentImage] = useState(0)

    const changeImage = useCallback(
        (index) => () => {
            setCurrentImage(index)
        },
        []
    )

    useEffect(
        () => {
            const imgs = document.querySelectorAll(".img-item");
            imgs.forEach((img) => {
                img.classList.remove("selected")
            })
            imgs[currentImage].classList.add("selected")
        },
        [currentImage]
    )

    const currentAge = useMemo(
        () => {
            let [date, month, year] = data.info.birthday.split("/")
            year = year-543
            const dateNow = new Date()
            const dateNowYear = dateNow.getFullYear()
            const dateNowMonth = dateNow.getMonth() + 1
            const dateNowDate = dateNow.getDate()
            let age = dateNowYear - year
            if (dateNowMonth < parseInt(month)){
                age--
            }
            else{
                if (dateNowDate < parseInt(date)){
                    age--
                }
            }
            return age
        },
        []
    )

    return (
        <div className="content">
            <HeadTitle text="ประวัติส่วนตัว" />
            <div className="content-info row">
                <div className="col-12 col-lg-6 col-xl">
                    <div className="img-main text-center">
                        <img alt="" src={data.info.image[currentImage]} />
                    </div>
                    <div className="img-items">
                        {
                            data.info.image.map((imgSrc, index) => (
                                <img key={index} className="img-item" alt="" src={imgSrc} onClick={changeImage(index)} />
                            ))
                        }
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-xl info-contents">
                    <div className="info-content">
                        <div className="title-sm">ชื่อ - สกุล</div>
                        <div>{data.info.firstname} {data.info.lastname}</div>
                    </div>
                    <div className="info-content">
                        <div className="title-sm">ชื่อเล่น</div>
                        <div>{data.info.nickname}</div>
                    </div>
                    <div className="info-content">
                        <div className="title-sm">วันเกิด</div>
                        {/* <div>{data.info.birthday}</div> */}
                        <div>7 มิถุนายน 2544</div>
                    </div>
                    <div className="info-content">
                        <div className="title-sm">อายุ</div>
                        <div>{currentAge} <span className="title-sm">ปี</span></div>
                    </div>
                    <div className="info-content">
                        <div className="title-sm">เบอร์โทรศัพท์</div>
                        <div>{data.info.contact.phone}</div>
                    </div>
                    <div className="info-content">
                        <div className="title-sm">อีเมล</div>
                        <div>{data.info.contact.email}</div>
                    </div>
                    <div className="info-content">
                        <div className="title-sm">ที่อยู่</div>
                        <div>{data.info.contact.address.houseNo} หมู่ {data.info.contact.address.moo} ซอย{data.info.contact.address.soi}</div>
                        <div>ถนน{data.info.contact.address.road} ตำบล{data.info.contact.address.subDistrict}</div>
                        <div>อำเภอ{data.info.contact.address.district} จังหวัด{data.info.contact.address.province}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}