type ThemeState = {
    theme: number
}

type ChallengeResponse = {
    success: boolean
    data: string[]
}

type ChallengeProps = {
    id: number
    type: string
    name: string
    value: number
    solves: number
    solved_by_me: boolean
    category: string
    tags: TagProps[]
    template: string
    script: string
}

type TagProps = {
    value: string
}

type UserProps = {
    id: number
    oauth_id: number | null
    name: string
    password: string
    email: string
    type: string
    secret: string
    website: string | null
    affiliation: string | null
    country: string | null
    bracket: string | null
    fields: Array
    hidden: boolean
    banned: boolean
    verified: boolean
    team_id: number | null
    created: string
}

type NotificationProps = {
    id: number
    user: number | null
    user_id: number | null
    team: number | null
    team_id: number | null
    title: string
    content: string
    date: string
    html: string
}

type ProfileProps = {
    email: string
    country: string
    name: string
    team_id: number | null
    website: string | null
    id: number
    oauth_id: number | null
    affiliation: string | null
    fields: []
    bracket: null
    place: string | null
    score: number | null
}

type SolvesProps = {
    challenge_id: number
    ip: string
    user: SelfProps
    date: string
    provided: string
    challenge: SolvedChallengeProps
    type: string
    id: number 
    team: number | null
}

type SelfProps = {
    name: string
    id: number
}

type SolvedChallengeProps = {
    name: string
    id: number
    value: number
    category: string
}