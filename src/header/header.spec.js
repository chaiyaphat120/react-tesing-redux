import { shallow } from "enzyme"
import React from "react"
import Header from "./index"
import { findByTestAttr } from "../../Utils/index"

const setup = (props = {}) => {
    const component = shallow(<Header {...props} />)
    return component
}

describe("Header Component", () => {
    //refactor ค่านี้จะถูกแทนทุกครั้งที่ it() ที่บรรทัดบนสุด
    let component
    beforeEach(() => {
        component = setup()
    })

    it(" should render without errors", () => {
        const wrapper = findByTestAttr(component, "headerComponent")
        expect(wrapper.length).toBe(1)
    })

    it(" should render a logo", () => {
        const logo = findByTestAttr(component, "logoIMG")
        expect(logo.length).toBe(1)
    })
})
