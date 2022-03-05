import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import data from "../data/records.json"

export const RecordContext = createContext()

export const RecordProvider = ({children}) => {
  const [records, setRecords] = useState([]);
  
  const findRecord = useCallback(
    (type) => () => {
      let recs = []
      records.forEach((r) => {
        if (r.type === type) {
          recs.push(r)
        }
      })
      return recs
    },
    [records]
  )

  useEffect(
    () => {
      setRecords(data)
    },
    []
  )

  const value = useMemo(
    () => ({
        records,
        findRecord
    }),
    [records, findRecord]
  )

  return (
    <RecordContext.Provider value={value}>
      {children}
    </RecordContext.Provider>
  )

}

export const useRecord = () => useContext(RecordContext)