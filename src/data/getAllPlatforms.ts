import DataContext from "../classes/DataContext"
import Platform from "../classes/Platform"

export default async function getAllPlatforms(ctx: DataContext): Promise<Platform[]> {
    if (!ctx.isInitialized || ctx.platforms === undefined) {
        throw 1
    }

    return ctx.platforms!.map((d) => d.clone())
}