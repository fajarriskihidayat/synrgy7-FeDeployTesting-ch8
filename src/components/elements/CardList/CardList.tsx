import { Car } from "../FilterCar/types";
import formatRupiah from "../../../utils/formatRupiah";

type CarProps = {
  car: Car;
};

const CardList = ({ car }: CarProps) => {
  return (
    <>
      <div className="col-md-6 col-lg-4 mb-3">
        <div className="card" style={{ border: "1px solid #d6d6d6e3" }}>
          <img
            src={`${car.image}`}
            className="card-img-top card-img-car"
            alt="car"
            style={{ objectFit: "fill", width: "100%", height: "200px" }}
          />
          <div className="card-body p-2">
            <h5 style={{ fontSize: "18px" }}>
              {car.manufacture} / {car.type}
            </h5>
            <h5 className="card-title fw-bold">
              {formatRupiah(car.rentPerDay)} / hari
            </h5>
            <p
              className="card-text body-14-light"
              style={{ minHeight: "96px" }}
            >
              {car.description}
            </p>
          </div>
          <ul className="list-group list-group-flush border-0 body-14-light px-2">
            <li className="list-group-item border-0 px-0">
              <img src="/assets/svg/fi_users.svg" className="me-2" alt="" />
              {` ${car.capacity} Orang`}
            </li>
            <li className="list-group-item border-0 px-0">
              <img src="/assets/svg/Vector.svg" className="me-2" alt="" />
              {` ${car.transmission}`}
            </li>
            <li className="list-group-item border-0 px-0">
              <img src="/assets/svg/fi_calendar.svg" className="me-2" alt="" />
              {`Tahun ${car.year}`}
            </li>
          </ul>
          <div className="p-2">
            <button className="btn btn-success btn-lg d-block w-100 body-14-bold border-0">
              Pilih Mobil
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardList;
