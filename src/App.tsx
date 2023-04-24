import React from "react";
import "./App.css";

type Types = {
  key:number,
  product:string,
  price:number,
}

const services =  [
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

function Fieldset({key, product} : Types) {
  return (
    <div className="col">
    <fieldset className="card">
    <legend className="card-header text-center">{product}</legend>
    <p className="card-body">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="year"/>
        <label className="form-check-label" htmlFor="year">2015
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="year"/>
        <label className="form-check-label" htmlFor="year">2016
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="year"/>
        <label className="form-check-label" htmlFor="year">2017
        </label>
      </div>
    </p>
  </fieldset>
  </div>
  )
}

function App() {
  return (
    <>
    <form className="container">
      <div className="row">
        <h1>Wybierz interesujące Cię opcje</h1>
        {services.map((elem,index) => (
          <Fieldset
          key={elem.key}
          product={elem.product}
          price={elem.price}
          />
        ))}
        </div>
      </form>
    </>
  );
}

export default App;
