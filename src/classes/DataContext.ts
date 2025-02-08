import Language from "./Language"
import Platform from "./Platform"
import Framework from "./Framework"
import SoftwareProject from "./SoftwareProject"
import BlogPost from "./BlogPost"

export default class DataContext {
    isInitialized: boolean = false
    languages?: Language[]
    platforms?: Platform[]
    frameworks?: Framework[]
    software?: SoftwareProject[]
    blogPosts?: BlogPost[]
}