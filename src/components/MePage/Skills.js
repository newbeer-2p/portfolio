import data from "../../data/me.json"
import { HeadTitle } from "../HeadTitle"

export const Skills = () => {
    return (
        <div className="content">
            <HeadTitle text="ทักษะ" />
            <div className="content-skills">
                <div className="content-skill">
                    <div className="title-sm">ภาษาโปรแกรม</div>
                    {
                        data.skill.programmings.map((pro, index) => (
                            <div key={index}>
                                <div  className="skill">
                                    <div>{pro.name}</div>
                                    <div>{pro.level}</div>
                                </div>
                                {/* <div className="skillProgress" style={{"--widthProgress" : pro.level}}>
                                    <div></div>
                                </div> */}
                            </div>
                        ))
                    }
                </div>
                <div className="content-skill">
                    <div className="title-sm">โปรแกรม</div>
                    {
                        data.skill.programs.map((pro, index) => (
                            <div key={index}>
                                <div  className="skill">
                                    <div>{pro.name}</div>
                                    <div>{pro.level}</div>
                                </div>
                                {/* <div className="skillProgress" style={{"--widthProgress" : pro.level}}>
                                    <div></div>
                                </div> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}