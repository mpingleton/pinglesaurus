
export default class SoftwareProjectVersion {
    versStr: string
    releaseDate?: Date
    changes: string

    clone() {
        const o = new SoftwareProjectVersion()
        o.versStr = this.versStr
        o.releaseDate = this.releaseDate === undefined ? undefined : new Date(o.releaseDate!)
        o.changes = this.changes

        return o
    }

    parseObject(input: any) {
        this.versStr = input.versStr
        this.releaseDate = new Date(input.releaseDate)
        this.changes = input.changes
    }

    objectify() {
        return {
            versStr: this.versStr,
            releaseDate: this.releaseDate.toJSON(),
            changes: this.changes
        }
    }
}