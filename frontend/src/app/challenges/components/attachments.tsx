import Link from 'next/link';
import React from 'react';

/**
 * Attachments for events
 * @param {string[]} files  Array of file links
 * @returns                 Attachment download buttons
 */
const Attachments = ({files}: {files: string[]}) => {

    if (!files.length) return <div/>

    const api = "https://s2gctf.ncr.ntnu.no/"

    const fileName = (file: string) => {
        const start = file.lastIndexOf("/")+1
        const end = file.indexOf("?")
        return file.slice(start, end)
    }

    return (
        <div className="grid grid-cols-3 bottom-12 w-full">
            {files.map((file) => {
                return(
                    <div className={`grid items-center bg-[#482D81] h-[35px] rounded-lg px-2 mr-3 mb-2`}>
                        <Link className="text-center" href={`${api+file}`}>{fileName(file)}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Attachments