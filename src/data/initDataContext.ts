import DataContext from "../classes/DataContext"
import Language from "../classes/Language"
import Platform from "../classes/Platform"
import Framework from "../classes/Framework"
import SoftwareProject from "../classes/SoftwareProject"

export default async function initDataContext(): Promise<DataContext> {
    let newCtx = new DataContext()

    const resStack = await fetch("/stack.json")
    if (resStack.status === 200) {
        const dataObject = await resStack.json()
        if (dataObject.languages === undefined
            || dataObject.platforms === undefined
            || dataObject.frameworks === undefined) {
            throw 1 // TODO: Need proper error message.
        }

        newCtx.languages = dataObject.languages.map((i: object) => {
            const o = new Language()
            o.parseObject(i)
            return o
        })

        newCtx.platforms = dataObject.platforms.map((i: object) => {
            const o = new Platform()
            o.parseObject(i)
            return o
        })

        newCtx.frameworks = dataObject.frameworks.map((i: object) => {
            const o = new Framework()
            o.parseObject(i)
            return o
        })
    } else {
        throw 1
    }

    const resSoftware = await fetch("/software.json")
    if (resSoftware.status === 200) {
        const dataObject = await resSoftware.json()
        
        newCtx.software = dataObject.map((i: object) => {
            const o = new SoftwareProject()
            o.parseObject(i)
            return o
        })
    } else {
        throw 1
    }

    newCtx.isInitialized = true

    return newCtx
}