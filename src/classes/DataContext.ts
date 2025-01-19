import Language from "./Language"
import Platform from "./Platform"
import Framework from "./Framework"

export default class DataContext {
    isInitialized: boolean = false
    languages?: Language[]
    platforms?: Platform[]
    frameworks?: Framework[]
}