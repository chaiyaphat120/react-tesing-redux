import { shallow } from "enzyme"
import Headline from "./index"

import { findByTestAttr } from "../../Utils/index"

const setup = (props = {}) => {
    const component = shallow(<Headline {...props} />)
    return component
}

describe("Headline Component", () => {
    describe("Have props", () => {
        let wrapper
        beforeEach(() => {
            const props = {
                header: "Test",
                desc: "Test Desc",
            }
            wrapper = setup(props)
        })
        it("Should render without errors", () => {
            const component = findByTestAttr(wrapper, "HeadlineComponent")
            expect(component.length).toBe(1)
        })

        it("Should render a H1", () => {
            const h1 = findByTestAttr(wrapper, "header")
            expect(h1.length).toBe(1)
        })

        it("Should render a desc", () => {
            const desc = findByTestAttr(wrapper, "desc")
            expect(desc.length).toBe(1)
        })
    })

    describe("Have No props", () => {
        let wrapper
        beforeEach(() => {
            wrapper = setup()
        })
        it("Should not render", () => {
            const component = findByTestAttr(wrapper, "HeadlineComponent")
            expect(component.length).toBe(0)
        })
    })
})
