import BlogParticle from "./BlogParticle"

export default class BlogParagraph extends BlogParticle {
    text: string

    override clone() {
        const o = new BlogParagraph()
        o.text = this.text

        return o
    }

    override getType(): string {
        return "PARAGRAPH_PARTICLE"
    }

    override parseObject(input: any) {
        this.text = input.text
    }

    override objectify() {
        return {
            type: "PARAGRAPH_PARTICLE",
            text: this.text
        }
    }
}