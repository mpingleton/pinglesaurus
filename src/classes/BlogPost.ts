import BlogSection from "./BlogSection"

export default class BlogPost {
    id: number
    published: Date
    imageUrl?: string
    title: string
    subtitle?: string
    sections?: BlogSection[]

    clone() {
        const o = new BlogPost()
        o.id = this.id
        o.published = new Date(this.published)
        o.imageUrl = this.imageUrl
        o.title = this.title
        o.subtitle = this.subtitle
        o.sections = this.sections?.map((p) => p.clone())

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

        if (input.sections !== undefined) {
            this.sections = input.sections.map((p) => {
                const s = new BlogSection()
                s.parseObject(p)
                return s
            })
        }
    }

    objectify() {
        return {
            id: this.id,
            published: this.published.toISOString(),
            title: this.title,
            subtitle: this.subtitle,
            sections: this.sections?.map((p) => p.objectify())
        }
    }
}