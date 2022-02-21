const initialState = {
  approvedList: [],
  rejectedList: [],
};

const imageSliceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_APPROVED_IMAGE":
      const { id, url } = action.payload;
      return {
        ...state,
        approvedList: [
          ...state.approvedList,
          {
            id: id,
            url: url,
          },
        ],
      };
    case "SET_REJECTED_IMAGE":
      return {
        ...state,
        rejectedList: [...state.rejectedList, action.payload],
      };
    default:
      return state;
  }
};

export default imageSliceReducer;
