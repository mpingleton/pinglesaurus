import BlogParticle from "./BlogParticle"
import BlogParagraph from "./BlogParagraph"
import BlogImage from "./BlogImage"
import BlogQuote from "./BlogQuote"

export default class BlogPost {
    id: number
    published: Date
    imageUrl?: string
    title: string
    subtitle?: string
    particles?: BlogParticle[]

    clone() {
        const o = new BlogPost()
        o.id = this.id
        o.published = new Date(this.published)
        o.imageUrl = this.imageUrl
        o.title = this.title
        o.subtitle = this.subtitle
        o.particles = this.particles?.map((p) => p.clone())

        return o
    }

    parseObject(input: any) {
        this.id = input.id
        this.published = new Date(input.published)

        if (input.imageUrl !== undefined) {
            this.imageUrl = input.imageUrl
        }

        this.title = input.title

        if (input.subtitle !== undefined) {
            this.subtitle = input.subtitle
        }

        if (input.particles !== undefined) {
            this.particles = []
            input.particles.forEach((p: any) => {
                if (p.type === "PARAGRAPH_PARTICLE") {
                    const newP = new BlogParagraph()
                    newP.parseObject(p)
                    this.particles.push(newP)
                } else if (p.type === "IMAGE_PARTICLE") {
                    const newP = new BlogImage()
                    newP.parseObject(p)
                    this.particles.push(newP)
                } else if (p.type === "QUOTE_PARTICLE") {
                    const newP = new BlogQuote()
                    newP.parseObject(p)
                    this.particles.push(newP)
                }
            })
        }
    }

    objectify() {
        return {
            id: this.id,
            published: this.published.toISOString(),
            title: this.title,
            subtitle: this.subtitle,
            particles: this.particles?.map((p) => p.objectify())
        }
    }
}