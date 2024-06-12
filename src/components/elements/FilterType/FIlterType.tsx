import { useEffect, useState } from "react";

import CardManage from "../CardManage/CardManage";
import TYPE from "./constant";
import styles from "./index.module.css";
import { Car, CarsProps } from "../../../types/types";

const FIlterType = ({ cars }: CarsProps) => {
  const [isActive, seIsActive] = useState<string>("All");
  const [datas, setDatas] = useState<Car[]>([]);

  const FilteredCar = () => {
    if (isActive === "All") {
      setDatas(cars);
    } else if (isActive === "Small") {
      const data = cars.filter((car) => car.size === "Small");
      setDatas(data);
    } else if (isActive === "Medium") {
      const data = cars.filter((car) => car.size === "Medium");
      setDatas(data);
    } else if (isActive === "Large") {
      const data = cars.filter((car) => car.size === "Large");
      setDatas(data);
    }
  };

  useEffect(() => {
    FilteredCar();
  }, [isActive, cars]);

  return (
    <>
      <ul className="d-flex gap-3 my-4">
        {TYPE.map((item) => (
          <li
            className={`${
              isActive === item.type
                ? `${styles.active}`
                : `${styles.container}`
            }`}
            key={item.id}
            onClick={() => seIsActive(item.type)}
          >
            {item.type}
          </li>
        ))}
      </ul>

      <div className="d-flex flex-wrap gap-3">
        {datas.map((item, i) => <CardManage car={item} key={i} />).reverse()}
      </div>
    </>
  );
};

export default FIlterType;
