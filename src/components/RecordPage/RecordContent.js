import { useMemo } from "react"

export const RecordContent = ( {content} ) => {

    const languagesDiv = useMemo(
        () => {
            if (content.languages.length !== 0) {
                return (
                    <div>
                        <span className="rec-content-title">ภาษาและเทคโนโลยี : </span>
                        <span>{content.languages.join(", ")}</span> 
                    </div>
                )
            }
        },
        [content]
    )

    const demo = useMemo(
        () => {
            if (content.demo.includes("youtu.be")){
                const urls = content.demo.split("/");
                const url = urls[urls.length-1];
                return (
                    <>
                        <div className="rec-content-title">Demo :</div>
                        <div className="text-center mb-5">
                            <iframe width="720" height="480" src={`https://www.youtube.com/embed/${url}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </>
                )
            }
            else {
                return (
                    <>
                        <div className="rec-content-title">Demo :</div>
                        <div className="text-center mb-5">
                            <video controls>
                                <source src={content.demo} type="video/mp4" />
                            </video>
                        </div>
                    </>
                )
            }
        },
        [content]
    )

    const link = useMemo(
        () => {
            if (content.link){
                return (
                    <div>
                        <span className="rec-content-title">Link : </span>
                        <a href={content.link} target="_blank" rel="noreferrer">{content.link}</a> 
                    </div>
                )
            }
        },
        [content]
    )

    return (
        <div className="content-rec-item">
            <div className="rec-title">
                <div className="rec-title-head">{content.name}</div>
                <div className="rec-title-sm">ชั้นปีที่ {content.year} ปีการศึกษา {content.schoolYear}</div>
                <div className="rec-title-sm">วิชา {content.subjects.join(" & ")}</div>
            </div>
            <div className="rec-img">
                <img alt={content.name} src={content.poster} />
            </div>
            <div className="rec-content">
                <div className="rec-content-title">คำอธิบาย :</div>
                <div>&emsp;&emsp;{content.description}</div> 
                {languagesDiv}
                <div>
                    <span className="rec-content-title">ซอฟแวร์ : </span>
                    <span>{content.softwares.join(", ")}</span> 
                </div>
                <div>
                    <span className="rec-content-title">โปรเจค : </span>
                    <span>{content.project ? "กลุ่ม" : "เดี่ยว"}</span> 
                </div>
                <div>
                    <span className="rec-content-title">หน้าที่หลัก : </span>
                    <span>{content.mainRoles.join(", ")}</span> 
                </div>
                {link}
                {content.github !== "" ? <div><span className="rec-content-title">GitHub : </span><a href={`${content.github}`} target="_blank" rel="noreferrer">{content.github}</a></div> : ""}
                {content.demo !== "" ? demo : ""}
            </div>
        </div>
    )
}