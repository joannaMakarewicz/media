import React, { useState } from "react";
import { PlusLg } from "react-bootstrap-icons";

import "./App.css";

type TypesOfProduct = {
  key: number;
  product: string;
  price: number;
};

type Year = {
  year:number
}

const services = [
  {
    key: 1,
    product: "internet",
    price: 20,
  },
  {
    key: 2,
    product: "tv",
    price: 20,
  },
  {
    key: 3,
    product: "tel",
    price: 20,
  },
  {
    key: 4,
    product: "dekoder",
    price: 20,
  },
];



function AddingButton({year}: Year) {
  const [agreement, setAgreement] = useState(false);
  const addService = (e: any) => {
    e.preventDefault();
    setAgreement(!agreement);
  };
  console.log(year, agreement)
  return (
    <div className="card-text text-start">
      <button className=" button border-0 bg-transparent" onClick={addService}>
        <PlusLg />
      </button>
      <span className="ps-3">{year}</span>
    </div>
  );
}

function Fieldset({ key, product }: TypesOfProduct) {
  return (
    <div className="col">
      <fieldset className="card">
        <legend className="card-header text-center">{product}</legend>
        <div className="card-body">
          <AddingButton year={2015} />
          <AddingButton year={2016} />
          <AddingButton year={2017} />
        </div>
      </fieldset>
    </div>
  );
}

function Summary() {
  return (
    <div className="container">
      <h2>Zamówione usługi</h2>
    </div>
  );
}

function PriceSummary() {
  return (
    <div className="row">
      <h5>Do zapłaty:</h5>
    </div>
  );
}

function App() {
  return (
    <>
      <form className="container">
        <div className="row">
          <h1 className="mt-5 mb-5">Wybierz interesujące Cię opcje</h1>
          {services.map((elem, index) => (
            <Fieldset
              key={elem.key}
              product={elem.product}
              price={elem.price}
            />
          ))}
        </div>
        <PriceSummary />
      </form>
      <Summary />
    </>
  );
}

export default App;
