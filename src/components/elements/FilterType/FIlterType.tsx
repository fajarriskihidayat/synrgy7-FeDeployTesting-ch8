import { useEffect, useState } from "react";

import CardManage from "../CardManage/CardManage";
import TYPE from "./constant";
import styles from "./index.module.css";
import { Car } from "../../../types/types";
import { useCar } from "../../../context/CarContext";

const FIlterType = () => {
  const { cars } = useCar();
  const [isActive, seIsActive] = useState<string>("All");
  const [datas, setDatas] = useState<Car[]>([]);

  const FilteredCar = () => {
    if (isActive === "All") {
      setDatas(cars);
    } else if (isActive === "Small") {
      const data = cars.filter((car) => car.size === "small");
      setDatas(data);
    } else if (isActive === "Medium") {
      const data = cars.filter((car) => car.size === "medium");
      setDatas(data);
    } else if (isActive === "Large") {
      const data = cars.filter((car) => car.size === "large");
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
        {datas.length === 0 ? (
          <div style={{ backgroundColor: "#FCFFCC", width: "100%" }}>
            <p className="p-3 m-0 text-warning text-center fw-semibold">
              Data mobil masih kosong
            </p>
          </div>
        ) : (
          datas.map((item, i) => <CardManage car={item} key={i} />).reverse()
        )}
      </div>
    </>
  );
};

export default FIlterType;
