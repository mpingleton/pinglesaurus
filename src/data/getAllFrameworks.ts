import DataContext from "../classes/DataContext"
import Framework from "../classes/Framework"

export default async function getAllFrameworks(ctx: DataContext): Promise<Framework[]> {
    if (!ctx.isInitialized || ctx.frameworks === undefined) {
        throw 1
    }

    return ctx.frameworks!.map((d) => d.clone())
}