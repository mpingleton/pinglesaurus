
export default class DownloadLink {
    type: string = ""
    url: string = ""
    description: string = ""

    clone() {
        const o = new DownloadLink()
        o.type = this.type
        o.url = this.url
        o.description = this.description

        return o
    }

    parseObject(input: any) {
        this.type = input.type
        this.url = input.url
        this.description = input.description
    }

    objectify(): object {
        return {
            type: this.type,
            url: this.url,
            description: this.description,
        }
    }
}