import React from 'react';

/**
 * Removes HTML formatting from a string, for example unicodes etc
 * @param {string} string   String to cleanup
 * @returns                 Clean string
 */
const FormatDescription = ({string}: {string: string}) => {

    const diffreg = /(- \*\*Difficulty:\*\*)/;
    const flagreg = /(- \*\*Flag format:\*\*)/;
    const exflagreg = /(- \*\*Example flag:\*\*)/;

    const splitString = string.split(diffreg)
    const flag = splitString[2].split(flagreg)
    const exflag = flag[2].split(exflagreg)
    const description = splitString[0].trim()

    const fontSize = () => {
        let fontSizeString = ''
        if (description.length < 300) fontSizeString = 'text-lg'
        if (description.length > 450) fontSizeString = 'text-sm'
        if (description.length > 550) fontSizeString = 'text-xs'
        return fontSizeString
    }

    return (
        <div className="mx-2">
            <p className={`${fontSize()}`}>{description}</p>
            <div className='flex mt-2'>
                <p className={`${fontSize()} font-bold mr-2`}>Difficulty:</p>
                <p className={`${fontSize()}`}>{flag[0]}</p>
            </div>
            <div className='flex'>
                <p className={`${fontSize()} font-bold mr-2`}>Flag format:</p>
                <p className={`${fontSize()}`}>{exflag[0]}</p>
            </div>
            <div className='flex'>
                <p className={`${fontSize()} font-bold mr-2`}>Example flag:</p>
                <p className={`${fontSize()}`}>{exflag[2]}</p>
            </div>
        </div>
    )
}

export const FlagFormat = (string: string) => {
    const diffreg = /(- \*\*Difficulty:\*\*)/;
    const flagreg = /(- \*\*Flag format:\*\*)/;
    const exflagreg = /(- \*\*Example flag:\*\*)/;

    const splitString = string.split(diffreg)
    const flag = splitString[2].split(flagreg)
    const exflag = flag[2].split(exflagreg)
    
    return exflag[0]
}

export default FormatDescription