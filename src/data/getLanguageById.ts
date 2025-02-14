import DataContext from "../classes/DataContext"
import Language from "../classes/Language"

export default async function getLanguageById(ctx: DataContext, id: number): Promise<Language> {
    if (!ctx.isInitialized || ctx.languages === undefined) {
        throw 1
    }

    const o = ctx.languages!.filter((d) => id === d.id)
    if (o.length > 1) {
        throw 1
    } else if (o.length < 1) {
        throw 1
    }

    return o[0]
}