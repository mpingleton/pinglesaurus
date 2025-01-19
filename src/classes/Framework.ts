
export default class Framework {
    id: number
    name: string

    parseObject(input: any) {
        this.id = input.id
        this.name = input.name
    }

    objectify() {
        return {
            id: this.id,
            name: this.name
        }
    }
}