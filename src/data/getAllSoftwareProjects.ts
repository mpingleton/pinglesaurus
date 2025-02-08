import DataContext from "../classes/DataContext"
import SoftwareProject from "../classes/SoftwareProject"

import getLanguageById from "./getLanguageById"
import getPlatformById from "./getPlatformById"
import getFrameworkById from "./getFrameworkById"

export default async function getAllSoftwareProjects(ctx: DataContext): Promise<SoftwareProject[]> {
    if (!ctx.isInitialized || ctx.software === undefined) {
        throw 1
    }

    return ctx.software!.map((d) => d.clone())
}