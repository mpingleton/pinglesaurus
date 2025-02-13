import React, { useState, useEffect } from "react"

import AutomaticLayout from "../../common/layouts/AutomaticLayout"

import BodyText from "../../common/components/atomic/BodyText"
import Panel from "../../common/components/atomic/Panel"
import VStack from "../../common/components/atomic/VStack"
import HStack from "../../common/components/atomic/HStack"
import VDivider from "../../common/components/atomic/VDivider"

import BlogPostPanelButton from "./components/BlogPostPanelButton"
import BlogPostDisplay from "./layouts/BlogPostDisplay"

import DataContext from "../../classes/DataContext"
import BlogPost from "../../classes/BlogPost"

import getBlogPostById from "../../data/getBlogPostById"
import getAllBlogPostListings from "../../data/getAllBlogPostListings"

export default function Blog(props: {
    ctx: DataContext,
    navFunc: (toUrl: string) => void
}) {

    const [posts, setPosts] = useState<BlogPost[] | undefined>(undefined)
    const [indexSelected, setIndexSelected] = useState<number | undefined>(undefined)
    const [objectSelected, setObjectSelected] = useState<BlogPost | undefined>(undefined)

    useEffect(() => {
        if (props.ctx.isInitialized) {
            getAllBlogPostListings(props.ctx)
                .then((d) => setPosts(d))
                .catch((err) => console.log(err))
        }
    }, [props.ctx])

    useEffect(() => {
        if (indexSelected === undefined) {
            setObjectSelected(undefined)
        } else {
            getBlogPostById(props.ctx, posts[indexSelected].id)
                .then((d) => setObjectSelected(d))
                .catch((err) => console.log(err))
        }
    }, [indexSelected])

    if (!props.ctx.isInitialized || posts === undefined) {
        return (<AutomaticLayout loading navId="blog" title="Blog" navFunc={props.navFunc} />)
    }

    const postList = posts.map((d, i) => (
        <BlogPostPanelButton
            data={d}
            onClicc={() => setIndexSelected(i)}
        />
    ))

    const desktopLayout = (
        <HStack>
            <VStack padding="0px" width="400px">{postList}</VStack>
            <VDivider />
            {objectSelected === undefined ?
                (<HStack padding="0px" width="100%"><Panel>
                    <BodyText centered>Select a blog post on the left</BodyText>
                </Panel></HStack>) :
                (<BlogPostDisplay
                    data={objectSelected!}
                    isMobile={false}
                    onBackClicc={() => setIndexSelected(undefined)}
                />)}
        </HStack>
    )

    const mobileLayout = (
        <HStack>
            {objectSelected === undefined ?
                (<VStack padding="0px" width="100%">{postList}</VStack>) :
                (<BlogPostDisplay
                    data={objectSelected!}
                    isMobile={true}
                    onBackClicc={() => setIndexSelected(undefined)}
                />)}
        </HStack>
    )

    return (
        <AutomaticLayout
            navId="blog"
            title="Blog"
            desktopLayout={desktopLayout}
            mobileLayout={mobileLayout}
            navFunc={props.navFunc}
        />
    )
}