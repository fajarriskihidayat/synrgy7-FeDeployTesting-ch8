export interface Car {
  id: number;
  name: string;
  rentPerDay: number;
  img_url: string;
  size?: Size | number;
  isDeleted: number;
  createdBy: number | null;
  updatedBy: number | null;
  deletedBy: number | null;
  createBy: IBy | null;
  updateBy: IBy | null;
  deleteBy: IBy | null;
  createdAt: string;
  updatedAt: string;
}

export interface IBy {
  id: number;
  name: string;
  email: string;
  role: string;
}

export enum Size {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

export interface CarsProps {
  cars: Car[];
}

export interface CarProps {
  car: Car;
}

export interface User {
  id: number;
  email: string;
  password: string;
  role: string;
}

export interface IJWTDecoded {
  id: number;
  email: string;
  role: string;
  exp: number;
  iat: number;
}

export interface IForm {
  name: string;
  rentPerDay: number;
  size_id: string;
  picture: null;
  img_url?: "";
}
