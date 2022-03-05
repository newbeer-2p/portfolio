export const ActivityContent = ({act}) => {
    return (
        <div className="content-act-item">
            <div className="act-title">{act.name}</div>
            <div className="act-img-items">
                {
                    act.imgs.map((img, index) => (
                        <div key={index} className="act-img-item">
                            <img alt="" src={img} />
                        </div>
                    ))
                }    
            </div>
        </div>
    )
}