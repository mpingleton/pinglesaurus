import DataContext from "../classes/DataContext"
import Platform from "../classes/Platform"

export default async function getPlatformById(ctx: DataContext, id: number): Promise<Platform> {
    if (!ctx.isInitialized || ctx.platforms === undefined) {
        throw 1
    }

    const o = ctx.platforms!.filter((d) => id === d.id)
    if (o.length > 1) {
        throw 1
    } else if (o.length < 1) {
        throw 1
    }

    return o[0]
}