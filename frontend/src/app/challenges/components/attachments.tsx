import Link from 'next/link';
import React from 'react';

/**
 * Attachments for events
 * @param {string[]} files   String to cleanup
 * @returns                 Clean string
 */
const Attachments = ({files}: {files: string[]}) => {

    const api = "https://s2gctf.ncr.ntnu.no/"

    const fileName = (file: string) => {
        const start = file.lastIndexOf("/")+1
        const end = file.indexOf("?")
        return file.slice(start, end)
    }

    return (
        <div className="grid grid-cols-3 absolute bottom-12 w-full">
            {files.map((file) => {
                return(
                    <div className={`grid items-center bg-[#482D81] h-[35px] rounded-lg px-2 mr-3 ${files.length > 3 ? "mb-3" : ""}`}>
                        <Link className="text-center" href={`https://s2gctf.ncr.ntnu.no${file}`}>{fileName(file)}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Attachments