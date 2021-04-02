import { types } from "../../actions/types"
import postReducers from "./reducer"

describe("Post Reducer", () => {
    it("Should return default state", () => {
        const newState = postReducers(undefined, {})
        expect(newState).toEqual([])
    })

    it("Should return state if receiving type", () => {
        const posts = [
            { title: "Test 1" },
            { title: "Test 2" },
            { title: "Test 3" },
        ]

        const newState = postReducers(undefined, {
            type: types.GET_POST,
            payload: posts,
        })
        expect(newState).toEqual(posts)
    })
})
