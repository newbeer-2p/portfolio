import { useCallback } from "react"

export const ButtonDownload = ({path, fileName, text="ดาวน์โหลด"}) => {
    const download = useCallback(
        () => {
            const a = document.createElement("a");
            a.href = path;
            a.setAttribute("download", fileName);
            a.click();
        },
        [path, fileName]
    )

    return (
        <div className="mb-3 text-end">
            <button className="bton" onClick={download}>{text}</button>
        </div>
    )
}