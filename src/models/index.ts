/**
 * @name Approved and Rejected Image properties
 * @description Approved and rejected image properties creation for define types
 */
export interface ImageProp {
  id: string;
  url: string;
}

/**
 * @name Approved and Reject Image State
 * @description Approved and rejected image state creation for define types
 */
export interface ImageState {
  approvedList: [];
  rejectedList: [];
  thumbnail: {};
}
