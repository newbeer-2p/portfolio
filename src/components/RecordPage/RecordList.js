import { useEffect, useMemo, useState } from 'react'
import { useRecord } from '../../contexts/RecordContext'
import { HeadTitle } from '../HeadTitle'
import { RecordContent } from './RecordContent'
import { RecordThumbnail } from './RecordThumbnail'

export const RecordList = ( {type} ) => {

    const [records, setRecords] = useState([])
    const { findRecord } = useRecord()

    const headTitle = useMemo(
        () => {
            if (type === "game"){
                return "ผลงานทางด้านเกม"
            }
            else if (type === "model"){
                return "ผลงานทางด้านโมเดล"
            }
            else if (type === "web"){
                return "ผลงานทางด้านเว็บ" 
            }
        },
        [type]
    )

    useEffect(
        () => {
            setRecords(findRecord(type))
        },
        [type, findRecord]
    )

    return (
        <div className={`content-${type}`}>
            <HeadTitle text={headTitle} />
            <div className="rec-thumbnail">
                {
                    records.map((rec, index) => (
                        // <RecordContent key={index} content={rec} />
                        <RecordThumbnail key={index} record={rec} />
                    ))
                }
            </div>
        </div>
    )
}