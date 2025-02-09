
export default class Update {
    id: number
    timestamp: Date
    headline: string
    text: string

    clone() {
        const o = new Update()
        o.id = this.id
        o.timestamp = new Date(this.timestamp)
        o.headline = this.headline
        o.text = this.text

        return o
    }

    parseObject(input: any) {
        this.id = input.id
        this.timestamp = new Date(input.timestamp)
        this.headline = input.headline
        this.text = input.text
    }

    objectify() {
        return {
            id: this.id,
            timestamp: this.timestamp.toISOString(),
            headline: this.headline,
            text: this.text,
        }
    }
}