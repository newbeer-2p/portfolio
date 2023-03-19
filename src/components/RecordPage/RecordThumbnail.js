import { Link } from "react-router-dom"

export const RecordThumbnail = ({record}) => {
    return (
        <Link to={`/records/${record.type}/${record.name}`} className="rec-thumbnail-item" style={{"--img-bg": `url(${record.poster})`}}>
            <div className="rec-thumbnail-item-title">
                {record.name}
            </div>
        </Link>
    )
}