import { ImageProp } from "../../models";
import { GET_IMAGE, APPROVED_IMAGE, REJECTE_IMAGE } from "./actionTypes";
import * as api from "../../api";

/**
 * @name fetchImageSlice
 * @description Create for fetch randmom iamge form unspalsh fetchImage api
 * @returns dispatch type and playload of GET_IMAGE
 */
export const fetchImageSlice = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchImage();
    const id = data.id;
    const thumb = data.urls.thumb;
    dispatch({ type: GET_IMAGE, payload: { id: id, url: thumb } });
  } catch (error) {
    console.log("Something went wrong!");
  }
};

/**
 * @name setApprovedImage
 * @description This is get image data and set to the payload of approved image reducer
 * @returns type and playload of APPROVED_IMAGE
 */
export const setApprovedImage = (param: ImageProp) => {
  return {
    type: APPROVED_IMAGE,
    payload: {
      id: param.id,
      url: param.url,
    },
  };
};

/**
 * @name setRejectedImage
 * @description Create for fetch randmom iamge form unspalsh fetchImage api
 * @returns type and playload of REJECT_IMAGE
 */
export const setRejectedImage = (param: ImageProp) => {
  return {
    type: REJECTE_IMAGE,
    payload: {
      id: param.id,
      url: param.url,
    },
  };
};
