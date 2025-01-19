import DataContext from "../classes/DataContext"
import Language from "../classes/Language"

export default async function getAllLanguages(ctx: DataContext): Promise<Language[]> {
    if (!ctx.isInitialized || ctx.languages === undefined) {
        throw 1
    }

    return ctx.languages!
}