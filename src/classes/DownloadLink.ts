
export default class DownloadLink {
    url: string = ""
    description: string = ""

    clone() {
        const o = new DownloadLink()
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