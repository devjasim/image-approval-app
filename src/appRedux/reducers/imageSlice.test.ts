import { imageSLiceReducer } from "./imageSlice";

describe("Image Approved Reducer", () => {
  it("Should return initial state when passed an empty aciton", () => {
    const initialState = {
      approvedList: [],
      rejectedList: [],
    };
    const action = { type: "" };
    const result = imageSLiceReducer(initialState, action);
    expect(result).toEqual({ approvedList: [], rejectedList: [] });
  });
});
