import DataContext from "../classes/DataContext"
import SoftwareProject from "../classes/SoftwareProject"

import getLanguageById from "./getLanguageById"
import getPlatformById from "./getPlatformById"
import getFrameworkById from "./getFrameworkById"

export default async function getAllSoftwareProjects(ctx: DataContext): Promise<SoftwareProject[]> {
    if (!ctx.isInitialized || ctx.software === undefined) {
        throw 1
    }

    const softwarePromises = ctx.software!.map(async (d) => {
        const o = d.clone()

        o.languages = await Promise.all(o.languageIds.map((i) => getLanguageById(ctx, i)))
        o.platforms = await Promise.all(o.platformIds.map((i) => getPlatformById(ctx, i)))
        o.frameworks = await Promise.all(o.frameworkIds.map((i) => getFrameworkById(ctx, i)))

        return o
    })


    return await Promise.all(softwarePromises)
}