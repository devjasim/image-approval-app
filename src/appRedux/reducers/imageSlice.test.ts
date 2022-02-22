import { APPROVED_IMAGE, REJECTE_IMAGE } from "./../actions/actionTypes";
import { imageSLiceReducer } from "./imageSlice";

describe("Image Approved Reducer", () => {
  it("Should return initial state when passed an empty aciton", () => {
    const initialState = {
      approvedList: [],
      rejectedList: [],
    };
    const action = { type: APPROVED_IMAGE };
    const result = imageSLiceReducer(initialState, action.type);
    expect(result).toEqual({ approvedList: [], rejectedList: [] });
  });

  it("Should return receiving payload for approved state", () => {
    const initialState = {
      approvedList: [],
      rejectedList: [],
    };
    const post = { id: "Id", url: "url" };
    const result = imageSLiceReducer(initialState, {
      type: APPROVED_IMAGE,
      payload: post,
    });
    expect(result).toEqual({ approvedList: [post], rejectedList: [] });
  });

  it("Should return receiving payload for rejected state", () => {
    const initialState = {
      approvedList: [],
      rejectedList: [],
    };
    const post = { id: "Id", url: "url" };
    const result = imageSLiceReducer(initialState, {
      type: REJECTE_IMAGE,
      payload: post,
    });
    expect(result).toEqual({ approvedList: [], rejectedList: [post] });
  });
});
