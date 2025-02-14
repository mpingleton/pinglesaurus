import DataContext from "../classes/DataContext"
import Update from "../classes/Update"

export default async function getAllUpdates(ctx: DataContext): Promise<Update[]> {
    if (!ctx.isInitialized || ctx.updates === undefined) {
        throw 1
    }

    return ctx.updates!.map((d) => d.clone())
}