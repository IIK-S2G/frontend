import {base_url, ctfd_token} from "@parent/secret.json"

const getChallenge = async(id: number): Promise<FullChallengeProps | null> => {
    const url = `${base_url}challenges`

    const res = await fetch(url, {
            headers: {
                'Authorization': `Token ${ctfd_token}`,
                'Content-Type': 'application/json'
            },
            next: { revalidate: 60 }
    })

    if (!res.ok) return null
    return (await res.json()).data
}

export default getChallenge