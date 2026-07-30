import { useState } from "react";
import "./App.css";

function App() {
  const initialData = {
    Amount_in_rupees: "",
    location: "",
    Carpet_Area: "",
    Status: "",
    Floor: "",
    Transaction: "",
    Furnishing: "",
    facing: "",
    overlooking: "",
    Bathroom: "",
    Balcony: "",
    Car_Parking: "",
    Ownership: "",
    Super_Area: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const predictPrice = async () => {
    try {
      setError("");

      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          Object.fromEntries(
            Object.entries(formData).map(([key, value]) => [
              key,
              Number(value),
            ])
          )
        ),
      });

      const data = await response.json();

      setResult(data.predicted_price);

    } catch (err) {
      setError("Something went wrong. Check the server.");
    }
  };


  const resetForm = () => {
    setFormData(initialData);
    setResult("");
    setError("");
  };


  const labels = {
    Amount_in_rupees: "Amount",
    location: "Location",
    Carpet_Area: "Carpet Area",
    Status: "Status",
    Floor: "Floor",
    Transaction: "Transaction",
    Furnishing: "Furnishing",
    facing: "Facing",
    overlooking: "Overlooking",
    Bathroom: "Bathroom",
    Balcony: "Balcony",
    Car_Parking: "Car Parking",
    Ownership: "Ownership",
    Super_Area: "Super Area",
  };


  return (
    <div className="container">

      <h1>House Price Prediction</h1>

      <div className="form-grid">
        {Object.keys(formData).map((field) => (
          <input
            key={field}
            type="number"
            name={field}
            placeholder={labels[field]}
            value={formData[field]}
            onChange={handleChange}
          />
        ))}
      </div>


      <button onClick={predictPrice}>
        Predict Price
      </button>


      <button onClick={resetForm} className="reset">
        Reset
      </button>


      {result && (
        <div className="result">
          <h2>Estimated House Price</h2>
          <p>{result}</p>
        </div>
      )}


      {error && (
        <div className="error">
          {error}
        </div>
      )}

    </div>
  );
}

export default App;