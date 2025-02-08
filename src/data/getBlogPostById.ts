import DataContext from "../classes/DataContext"
import BlogPost from "../classes/BlogPost"

export default async function getBlogPostById(ctx: DataContext, id: number) {
    if (!ctx.isInitialized || ctx.blogPosts === undefined) {
        throw 1
    }

    const o = ctx.blogPosts!.filter((d) => id === d.id)
    if (o.length > 1) {
        throw 1
    } else if (o.length < 1) {
        throw 1
    }

    const resObj = await fetch(`/blog/${o[0].id}/object.json`)
    if (resObj.status === 200) {
        const dataObject = await resObj.json()

        const newPost = new BlogPost()
        newPost.parseObject(dataObject)
        return newPost
    }

    throw 1
}