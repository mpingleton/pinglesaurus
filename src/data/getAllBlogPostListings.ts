import DataContext from "../classes/DataContext"

export default async function getAllBlogPostListings(ctx: DataContext) {
    if (!ctx.isInitialized || ctx.frameworks === undefined) {
        throw 1
    }

    return ctx.blogPosts!.map((d) => d.clone())
}