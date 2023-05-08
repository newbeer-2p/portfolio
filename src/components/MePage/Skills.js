import data from "../../data/me.json"
import { HeadTitle } from "../HeadTitle"

export const Skills = () => {
    return (
        <div className="content">
            <HeadTitle text="ทักษะ" />
            <div className="content-skills row">
                <div className="content-skill col-12 col-xl-6">
                    <div className="title-sm">ภาษาโปรแกรม</div>
                    {
                        data.skill.programmings.map((pro, index) => (
                            <div key={index}>
                                <div  className="skill">
                                    <div>{pro.name}</div>
                                    <div>{pro.level}</div>
                                </div>
                                <div className="skill-detail">&emsp;&emsp;{pro.detail}</div>
                            </div>
                        ))
                    }
                    <div className="skill-other">
                        <span className="title-sm">ภาษาอื่น ๆ : </span> 
                        <span>{data.skill.otherProgrammings.join(", ")}</span>
                    </div>
                </div>
                <div className="content-skill col-12 col-xl-6">
                    <div className="title-sm">โปรแกรมและเครื่องมืออื่น ๆ</div>
                    {
                        data.skill.programs.map((pro, index) => (
                            <div key={index}>
                                <div  className="skill">
                                    <div>{pro.name}</div>
                                    <div>{pro.level}</div>
                                </div>
                                <div className="skill-detail">&emsp;&emsp;{pro.detail}</div>
                            </div>
                        ))
                    } 
                    <div className="skill-other">
                    <span className="title-sm">โปรแกรมอื่น ๆ : </span> 
                    <span>{data.skill.otherPrograms.join(", ")}</span>
                </div>
                </div>
            </div>
        </div>
    )
}