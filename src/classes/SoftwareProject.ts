import Language from "./Language"
import Platform from "./Platform"
import Framework from "./Framework"
import Screenshot from "./Screenshot"
import DownloadLink from "./DownloadLink"
import RepositoryLink from "./RepositoryLink"
import SoftwareProjectVersion from "./SoftwareProjectVersion"

export default class SoftwareProject {
    id: number
    name: string
    iconUrl: string
    shortDesc: string
    fullDesc: string
    versionHistory?: SoftwareProjectVersion[]
    downloads: DownloadLink[]
    repositories: RepositoryLink[]
    screenshots?: Screenshot[]
    languageIds: number[]
    platformIds: number[]
    frameworkIds: number[]
    languages?: Language[]
    platforms?: Platform[]
    frameworks?: Framework[]

    clone() {
        const o = new SoftwareProject()
        o.id = this.id
        o.name = this.name
        o.iconUrl = this.iconUrl
        o.shortDesc = this.shortDesc
        o.fullDesc = this.fullDesc
        o.versionHistory = this.versionHistory?.map((d) => d.clone())
        o.downloads = this.downloads.map((d) => d.clone())
        o.repositories = this.repositories.map((d) => d.clone())
        o.screenshots = this.screenshots?.map((d) => d.clone())
        o.languageIds = this.languageIds
        o.platformIds = this.platformIds
        o.frameworkIds = this.frameworkIds
        o.languages = this.languages?.map((d) => d.clone())
        o.platforms = this.platforms?.map((d) => d.clone())
        o.frameworks = this.frameworks?.map((d) => d.clone())

        return o
    }

    parseObject(input: any) {
        this.id = input.id
        this.name = input.name
        this.iconUrl = input.iconUrl
        this.shortDesc = input.shortDesc
        this.fullDesc = input.fullDesc

        if (input.versionHistory !== undefined) {
            this.versionHistory = input.versionHistory.map((i: object) => {
                const o = new SoftwareProjectVersion()
                o.parseObject(i)
                return o
            })
        }

        this.downloads = input.downloads.map((i: object) => {
            const o = new DownloadLink()
            o.parseObject(i)
            return o
        })

        this.repositories = input.repositories.map((i: object) => {
            const o = new RepositoryLink()
            o.parseObject(i)
            return o
        })

        if (input.screenshots !== undefined) {
            this.screenshots = input.screenshots.map((i: object) => {
                const o = new Screenshot()
                o.parseObject(i)
                return o
            })
        }

        this.languageIds = input.languageIds
        this.platformIds = input.platformIds
        this.frameworkIds = input.frameworkIds
    }

    objectify() {
        return {
            id: this.id,
            name: this.name,
            iconUrl: this.iconUrl,
            shortDesc: this.shortDesc,
            fullDesc: this.fullDesc,
            versionHistory: this.versionHistory?.map((i) => i.objectify()),
            downloads: this.downloads.map((i) => i.objectify()),
            repositories: this.repositories.map((i) => i.objectify()),
            screenshots: this.screenshots?.map((i) => i.objectify()),
            languageIds: this.languageIds,
            platformIds: this.platformIds,
            frameworkIds: this.frameworkIds
        }
    }
}