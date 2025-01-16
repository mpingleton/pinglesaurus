
export default class DownloadLink {
    id?: number
    url: string = ""
    description: string = ""

    parseObject(input: any) {
        this.id = input.id
        this.url = input.url
        this.description = input.description
    }

    objectify(): object {
        return {
            id: this.id,
            url: this.url,
            description: this.description,
        }
    }
}