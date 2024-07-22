import {describe, expect, test} from "@jest/globals"
import Screenshot from "../src/classes/Screenshot"

describe("Screenshot class", () => {
    test("parseObject() method", () => {
        const firstObject = {
            imageUrl: "https://www.pinglesaur.us/images/1.png",
            description: "This is a test image."
        }

        const first = new Screenshot()
        first.parseObject(firstObject)

        expect(first.imageUrl).toBe("https://www.pinglesaur.us/images/1.png")
        expect(first.description).toBe("This is a test image.")
    })

    test("objectify() method", () => {
        const first = new Screenshot()
        first.imageUrl = "https://www.pinglesaur.us/images/1.png"
        first.description = "This is a test image."

        const firstObject: any = first.objectify()

        expect(firstObject.imageUrl).toBe("https://www.pinglesaur.us/images/1.png")
        expect(firstObject.description).toBe("This is a test image.")
    })
})