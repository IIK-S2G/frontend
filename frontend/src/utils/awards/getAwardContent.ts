import getHintsForChallenge from "../challenges/getHintsForChallenge"

const getAwardContent = async ({ challenges, award }: { challenges: ChallengeProps[], award: AwardProps }): Promise<string> => {
    const challenge = challenges.find(challenge => challenge.name === award.description.slice(9))
  
    if (challenge) {
      const hints = await getHintsForChallenge(challenge.id)
      
      const hint = hints && hints.find(hint => hint.cost === Number(String(award.value).slice(1)))
  
      if (hint) return hint.content
    }
  
    return ''
}

export default getAwardContent