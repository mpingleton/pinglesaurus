import BlogParticle from "./BlogParticle"

export default class BlogQuote extends BlogParticle {
    text: string
    name?: string
    context?: string
    date?: Date

    override clone() {
        const o = new BlogQuote()
        o.text = this.text
        o.name = this.name
        o.context = this.context
        o.date = this.date !== undefined ? new Date(this.date!) : undefined

        return o
    }

    override getType(): string {
        return "QUOTE_PARTICLE"
    }

    override parseObject(input: any) {
        this.text = input.text

        if (input.name !== undefined) {
            this.name = input.name
        }

        if (input.context !== undefined) {
            this.context = input.context
        }

        if (input.date !== undefined) {
            this.date = new Date(input.date)
        }
    }

    override objectify() {
        return {
            type: "QUOTE_PARTICLE",
            name: this.name,
            context: this.context,
            date: this.date.toISOString()
        }
    }
}