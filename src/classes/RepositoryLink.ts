
export default class RepositoryLink {
    url: string = ""
    description: string = ""

    clone() {
        const o = new RepositoryLink()
        o.url = this.url
        o.description = this.description

        return o
    }

    parseObject(input: any) {
        this.url = input.url
        this.description = input.description
    }

    objectify(): object {
        return {
            url: this.url,
            description: this.description,
        }
    }
}