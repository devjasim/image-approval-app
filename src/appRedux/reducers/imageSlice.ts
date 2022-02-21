import {
  GET_IMAGE,
  APPROVED_IMAGE,
  REJECTE_IMAGE,
} from "../actions/actionTypes";

// Approved List and Rejected List state
const initialState = {
  approvedList: [],
  rejectedList: [],
};

// Get Image Random image state
const getState = {
  thumbnail: undefined,
};

/**
 * @name imageSLiceReducer
 * @description Image slice reducer set approvedImagelist either rejectImagelist depends one which action calls
 * @param state
 * @param action
 * @returns When Action Type APPROVED return return approved image list with new item
 */
export const imageSLiceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case APPROVED_IMAGE:
      return {
        ...state,
        approvedList: [...state.approvedList, action.payload],
      };
    case REJECTE_IMAGE:
      return {
        ...state,
        rejectedList: [...state.rejectedList, action.payload],
      };
    default:
      return state;
  }
};

/**
 * @name getImageReducer
 * @description get image reducer call for load random image and set thumbnail iamge to the state
 * @param state
 * @param action
 * @returns return thumbnail with new playload data
 */
export const getImageReducer = (state = getState, action: any) => {
  switch (action.type) {
    case GET_IMAGE:
      const { id, url } = action.payload;
      return {
        ...state,
        thumbnail: {
          id,
          url,
        },
      };
    default:
      return state;
  }
};
