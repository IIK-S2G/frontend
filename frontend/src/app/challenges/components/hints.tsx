import Link from 'next/link';
import React from 'react';
import en from '../text/en.json'

/**
 * Attachments for events
 * @param {HintProps[]} files  Array of file links
 * @returns                 Attachment download buttons
 */
const Hints = ({hints}: {hints: HintProps[]}) => {

    const api = "https://s2gctf.ncr.ntnu.no"

    return (
        <div className="bottom-12 w-full">
            {hints.map((hint) => {
                return(
                    <div className={`grid items-center bg-[#482D81] h-[35px] rounded-lg w-full mb-3`}>
                        <Link className="text-center text-sm" href={`${api+hint}`}>{en.hint_start + hint.cost + en.hint_end}</Link>
                    </div>
                )
            })}
        </div>
    ) 
}

export default Hints