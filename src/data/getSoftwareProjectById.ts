import DataContext from "../classes/DataContext"
import SoftwareProject from "../classes/SoftwareProject"

import getLanguageById from "./getLanguageById"
import getPlatformById from "./getPlatformById"
import getFrameworkById from "./getFrameworkById"

export default async function getSoftwareProjectById(ctx: DataContext, id: number) {
    if (!ctx.isInitialized || ctx.software === undefined) {
        throw 1
    }

    const o = ctx.software!.filter((d) => id === d.id)
    if (o.length > 1) {
        throw 1
    } else if (o.length < 1) {
        throw 1
    }

    const resObj = await fetch(`/software/${o[0].id}/object.json`)
    if (resObj.status === 200) {
        const dataObject = await resObj.json()

        const newProj = new SoftwareProject()
        newProj.parseObject(dataObject)

        newProj.languages = await Promise.all(newProj.languageIds.map((i) => getLanguageById(ctx, i)))
        newProj.platforms = await Promise.all(newProj.platformIds.map((i) => getPlatformById(ctx, i)))
        newProj.frameworks = await Promise.all(newProj.frameworkIds.map((i) => getFrameworkById(ctx, i)))

        return newProj
    }

    throw 1
}