import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Car } from "../types/types";
import api from "../api/api";

type CarProps = {
  children: ReactNode;
};

type CarContextType = {
  cars: Car[];
  fetchCars: () => Promise<void>;
};

const CarContext = createContext<CarContextType | null>(null);

const CarProvider = ({ children }: CarProps) => {
  const [cars, setCars] = useState<Car[]>([]);

  const fetchCars = async () => {
    try {
      const { data } = await api.get("/cars");
      setCars(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <CarContext.Provider value={{ cars, fetchCars }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;

export const useCar = () => {
  const context = useContext(CarContext);
  if (!context) throw new Error("useCar must be used within an CarProvider");
  return context;
};
