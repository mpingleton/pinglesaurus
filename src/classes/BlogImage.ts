import BlogParticle from "./BlogParticle"

export default class BlogImage extends BlogParticle {
    url: string
    caption?: string

    override clone() {
        const o = new BlogImage()
        o.url = this.url
        o.caption = this.caption

        return o
    }

    override getType(): string {
        return "IMAGE_PARTICLE"
    }

    override parseObject(input: any) {
        this.url = input.url

        if (input.caption !== undefined) {
            this.caption = input.caption
        }
    }

    override objectify() {
        return {
            type: "IMAGE_PARTICLE",
            url: this.url,
            caption: this.caption
        }
    }
}