type LineProps = {
    color?: string,
    height: number,
    width: number
}

export default function Line({color, height, width}: LineProps) {
    return <div style={{backgroundColor: color ? color: "#555", height: height, width: width}}/>
}