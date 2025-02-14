
export default class Framework {
    id: number
    name: string

    clone() {
        const o = new Framework()
        o.id = this.id
        o.name = this.name

        return o
    }

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