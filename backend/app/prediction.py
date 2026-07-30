import joblib
import pandas as pd
import os

MODEL_PATH = os.path.join(
    os.path.dirname(__file__),
    "..",
    "..",
    "models",
"house_price_model.pkl")

model = joblib.load(MODEL_PATH)


def predict_price(data: dict):
    df = pd.DataFrame([{
        "Amount(in rupees)": data["Amount_in_rupees"],
        "location": data["location"],
        "Carpet Area": data["Carpet_Area"],
        "Status": data["Status"],
        "Floor": data["Floor"],
        "Transaction": data["Transaction"],
        "Furnishing": data["Furnishing"],
        "facing": data["facing"],
        "overlooking": data["overlooking"],
        "Bathroom": data["Bathroom"],
        "Balcony": data["Balcony"],
        "Car Parking": data["Car_Parking"],
        "Ownership": data["Ownership"],
        "Super Area": data["Super_Area"]
    }])

    prediction = model.predict(df)

    return float(prediction[0])