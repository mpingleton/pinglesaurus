import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Home from "../pages/home/Home"
import SoftwareProjects from "../pages/software/SoftwareProjects"
import Prints from "../pages/prints/Prints"
import Gallery from "../pages/gallery/Gallery"
import Blog from "../pages/blog/Blog"
import Updates from "../pages/updates/Updates"
import Contact from "../pages/contact/Contact"
import Privacy from "../pages/privacy/Privacy"

import DataContext from "../classes/DataContext"
import initDataContext from "../data/initDataContext"

export default function DynamicPageRouter(props: { onPageId?: string }) {
    const navigate = useNavigate()

    const [ctx, setCtx] = useState<DataContext>(new DataContext())
    const [pageId, setPageId] = useState<string>(props.onPageId ? props.onPageId : "home")

    useEffect(() => {
        if (!ctx.isInitialized) {
            initDataContext()
                .then((d) => setCtx(d))
                .catch((err) => console.log(err))
        }
    }, [ctx])

    function navFunc(toUrl: string) {
        if (toUrl === "/") {
            setPageId("home")
        } else if (toUrl === "/3dprinting") {
            setPageId("3dprinting")
        } else if (toUrl === "/software") {
            setPageId("software")
        } else if (toUrl === "/blog") {
            setPageId("blog")
        } else if (toUrl === "/gallery") {
            setPageId("gallery")
        } else if (toUrl === "/updates") {
            setPageId("updates")
        } else if (toUrl === "/contact") {
            setPageId("contact")
        } else if (toUrl === "/privacy") {
            setPageId("privacy")
        } else {
            navigate(toUrl)
        }
    }

    if (pageId === "home") {
        return (<Home ctx={ctx} navFunc={navFunc} />)
    } else if (pageId === "3dprinting") {
        return (<Prints ctx={ctx} navFunc={navFunc} />)
    } else if (pageId === "software") {
        return (<SoftwareProjects ctx={ctx} navFunc={navFunc} />)
    } else if (pageId === "blog") {
        return (<Blog ctx={ctx} navFunc={navFunc} />)
    } else if (pageId === "gallery") {
        return (<Gallery ctx={ctx} navFunc={navFunc} />)
    } else if (pageId === "updates") {
        return (<Updates ctx={ctx} navFunc={navFunc} />)
    } else if (pageId === "contact") {
        return (<Contact ctx={ctx} navFunc={navFunc} />)
    } else if (pageId === "privacy") {
        return (<Privacy navFunc={navFunc} />)
    }

    return null
}