import BlogParticle from "./BlogParticle"
import BlogParagraph from "./BlogParagraph"
import BlogImage from "./BlogImage"
import BlogQuote from "./BlogQuote"

export default class BlogSection {
    title: string
    particles: BlogParticle[]

    clone() {
        const o = new BlogSection()
        o.title = this.title
        o.particles = this.particles.map((d) => d.clone())

        return o
    }

    parseObject(input: any) {
        this.title = input.title
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

    objectify() {
        return {
            title: this.title,
            particles: this.particles.map((d) => d.clone())
        }
    }
}