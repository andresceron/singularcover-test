// export interface ICustomResponse {
//   data: IItem;
//   metadata: IMetaData;
// }

export interface ILoginResponse {
  data: IAuthDataResponse;
  metadata: any;
}

export interface IAuthDataResponse {
  auth: any;
  user: any;
}

export interface ICustomResponse {
  data: any;
  metadata: any;
}
