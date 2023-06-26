import checkLabel from "./checkLabel"

const checkEntries = (labels: string[], entries: DatasetEntryProps) => {
    labels.forEach(label => checkLabel(entries.labels, label, entries.data))
}

export default checkEntries