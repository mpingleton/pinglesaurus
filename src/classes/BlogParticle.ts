
export default class BlogParticle {

    clone() {
        return new BlogParticle()
    }

    getType(): string {
        return "BASE_PARTICLE"
    }

    parseObject(input: any) {
    }

    objectify() {
        return {}
    }
}