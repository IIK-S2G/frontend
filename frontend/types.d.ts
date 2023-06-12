type ThemeState = {
    theme: number
}

type ChallengeResponse = {
    success: boolean,
    data: string[]
}

type ChallengeProps = {
    id: number,
    type: string,
    name: string,
    value: number,
    solves: number,
    solved_by_me: boolean,
    category: string,
    tags: TagProps[],
    template: string,
    script: string
}

type TagProps = {
    value: string
}