import DataContext from "../classes/DataContext"
import Framework from "../classes/Framework"

export default async function getFrameworkById(ctx: DataContext, id: number): Promise<Framework> {
    if (!ctx.isInitialized || ctx.frameworks === undefined) {
        throw 1
    }

    const o = ctx.frameworks!.filter((d) => id === d.id)
    if (o.length > 1) {
        throw 1
    } else if (o.length < 1) {
        throw 1
    }

    return o[0]
}