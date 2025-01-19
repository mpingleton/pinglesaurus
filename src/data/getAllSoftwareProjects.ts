import DataContext from "../classes/DataContext"
import SoftwareProject from "../classes/SoftwareProject"

export default async function getAllSoftwareProjects(ctx: DataContext): Promise<SoftwareProject[]> {
    if (!ctx.isInitialized || ctx.software === undefined) {
        throw 1
    }

    return ctx.software!.map((d) => d.clone())
}