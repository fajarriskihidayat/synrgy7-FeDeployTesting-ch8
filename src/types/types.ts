export interface Car {
  id?: string;
  plate?: string;
  manufacture?: string;
  model?: string;
  image: string;
  rentPerDay?: number;
  capacity: number;
  description?: string;
  availableAt?: Date;
  transmission?: Transmission | "";
  available?: boolean;
  type?: string;
  year?: number;
  size?: Size | "";
  updatedAt?: string;
  options?: string[];
  specs?: string[];
}

export enum Size {
  Large = "Large",
  Medium = "Medium",
  Small = "Small",
}

export enum Transmission {
  Automanual = "Automanual",
  Automatic = "Automatic",
  Cvt = "CVT",
  Manual = "Manual",
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
