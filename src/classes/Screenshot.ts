
export default class Screenshot {
    imageUrl: string = ""
    description: string = ""

    clone() {
        const o = new Screenshot()
        o.imageUrl = this.imageUrl
        o.description = this.description

        return o
    }

    parseObject(input: any) {
        this.imageUrl = input.imageUrl
        this.description = input.description
    }

    objectify(): object {
        return {
            imageUrl: this.imageUrl,
            description: this.description
        }
    }
}