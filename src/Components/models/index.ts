import { ImageState } from "../../models";

interface ThumbState {
  thumbnail: undefined;
}

/**
 * @name Redux States
 * @description Redux state creation for defin tpyes when add in store.
 */
export interface AllState {
  list: ImageState;
  thumb: ThumbState;
}
