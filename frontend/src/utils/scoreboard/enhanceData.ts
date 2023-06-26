import checkEntries from "./checkEntries"

const EnhanceData = (labels: string[], entries: DatasetEntryProps[]) => {
    entries.forEach(entry => checkEntries(labels, entry))
    return {labels, datasets: entries}
}

export default EnhanceData