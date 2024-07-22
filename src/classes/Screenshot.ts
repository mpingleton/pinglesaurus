
export default class Screenshot {
    id?: number
    imageUrl: string = ""
    description: string = ""

    parseObject(input: any) {
        this.id = input.id
        this.imageUrl = input.imageUrl
        this.description = input.description
    }

    objectify(): object {
        return {
            id: this.id,
            imageUrl: this.imageUrl,
            description: this.description
        }
    }
}