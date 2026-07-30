from pydantic import BaseModel


class PredictionRequest(BaseModel):
    Amount_in_rupees: int
    location: int
    Carpet_Area: int
    Status: int
    Floor: int
    Transaction: int
    Furnishing: int
    facing: int
    overlooking: int
    Bathroom: int
    Balcony: int
    Car_Parking: int
    Ownership: int
    Super_Area: int


class PredictionResponse(BaseModel):
    predicted_price: float