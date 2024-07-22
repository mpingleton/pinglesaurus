import {describe, expect, test} from "@jest/globals"
import DownloadLink from "../src/classes/DownloadLink"

describe("DownloadLink class", () => {
    test("parseObject() method", () => {
        const firstObject = {
            url: "https://www.pinglesaur.us/download",
            description: "This is a test link."
        }

        const first = new DownloadLink()
        first.parseObject(firstObject)

        expect(first.url).toBe("https://www.pinglesaur.us/download")
        expect(first.description).toBe("This is a test link.")
    })

    test("objectify() method", () => {
        const first = new DownloadLink()
        first.url = "https://www.pinglesaur.us/download"
        first.description = "This is a test link."

        const firstObject: any = first.objectify()

        expect(firstObject.url).toBe("https://www.pinglesaur.us/download")
        expect(firstObject.description).toBe("This is a test link.")
    })
})