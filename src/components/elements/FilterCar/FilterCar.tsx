import { ChangeEvent, useEffect, useState } from "react";
import { IForm } from "./types";
import CardList from "../CardList/CardList";
import api from "../../../api";
import { Car } from "../../../types/types";
import toast from "../../../utils/toast";

const FilterCar: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [carFilter, setCarFilter] = useState<Car[]>([]);
  const [data, setData] = useState<IForm>({});

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getCars = async () => {
    try {
      const { data } = await api.get("/cars");
      setCars(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const available = data.driver === "true" ? true : false;
    const capacity = data.jumlah ? data.jumlah : 0;
    const filteredCar = cars.filter(
      (car) => car.available === available && car.capacity >= +capacity
    );
    setCarFilter(filteredCar);
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <section
      id="filter-car"
      className="container-lg pt-3 pt-lg-0 px-lg-5 position-relative"
      style={{ top: "-150px" }}
    >
      <div className="filter">
        <form
          id="form-cari"
          action=""
          className="rounded shadow-sm p-3 mb-3"
          style={{ backgroundColor: "#fff" }}
          onSubmit={handleOnSubmit}
        >
          <div className="row align-items-end">
            <div className="col-lg-10">
              <div className="row align-items-end body-12-light">
                <div className="col-md-6 col-lg-3">
                  <div className="mb-3 mb-lg-0">
                    <label className="form-label">Tipe Driver</label>
                    <select
                      className="form-select body-12-light"
                      required
                      name="driver"
                      id="driver"
                      onChange={handleOnChange}
                    >
                      <option value="" disabled selected>
                        Pilih Tipe Driver
                      </option>
                      <option value="true">Dengan Sopir</option>
                      <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="mb-3 mb-lg-0">
                    <label className="form-label">Pilih Tanggal</label>
                    <input
                      type="date"
                      name="tanggal"
                      id="tanggal"
                      className="form-control body-12-light"
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="mb-3 mb-lg-0">
                    <label className="form-label">Waktu Jemput/Ambil</label>
                    <select
                      className="form-select body-12-light"
                      id="waktu"
                      name="waktu"
                      onChange={handleOnChange}
                      required
                    >
                      <option value="" disabled selected>
                        Pilih Waktu
                      </option>
                      <option value="8">08.00 WIB</option>
                      <option value="9">09.00 WIB</option>
                      <option value="10">10.00 WIB</option>
                      <option value="11">11.00 WIB</option>
                      <option value="12">12.00 WIB</option>
                      <option value="13">13.00 WIB</option>
                      <option value="14">14.00 WIB</option>
                      <option value="15">15.00 WIB</option>
                      <option value="16">16.00 WIB</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="mb-3 mb-lg-0">
                    <label className="form-label">
                      Jumlah Penumpang (Optional)
                    </label>
                    <div className="d-flex">
                      <input
                        placeholder="Jumlah Penumpang"
                        type="input"
                        name="jumlah"
                        id="jumlah"
                        className="form-control body-12-light position-relative"
                        aria-describedby="jumlah-addon"
                        onChange={handleOnChange}
                      />
                      <img
                        src="./images/svg/fi_users.svg"
                        alt=""
                        className="jumlah-icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <button
                className="btn text-light"
                disabled={!data.driver || !data.tanggal || !data.waktu}
                id="btn-cari"
              >
                Cari Mobil
              </button>
            </div>
          </div>
        </form>
      </div>

      <div id="filtered-car" className="row">
        {carFilter.length !== 0 ? (
          carFilter.map((car, i) => <CardList car={car} key={i} />)
        ) : (
          <div style={{ backgroundColor: "#D00C1A1A" }}>
            <p className="p-3 m-0 text-danger text-center fw-semibold">
              Data tidak ditemukan
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilterCar;
