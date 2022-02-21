import { ImageProp } from "../../models";

export const setApprovedImage = (param: ImageProp) => {
  return {
    type: "SET_APPROVED_IMAGE",
    payload: {
      id: param.id,
      url: param.url,
    },
  };
};

export const setRejectedImage = (param: ImageProp) => {
  return {
    type: "SET_REJECTED_IMAGE",
    payload: {
      id: param.id,
      url: param.url,
    },
  };
};
