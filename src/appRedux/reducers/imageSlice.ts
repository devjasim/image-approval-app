import {
  GET_IMAGE,
  APPROVED_IMAGE,
  REJECTE_IMAGE,
} from "../actions/actionTypes";

const initialState = {
  approvedList: [],
  rejectedList: [],
};

const getState = {
  thumbnail: undefined,
};

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
