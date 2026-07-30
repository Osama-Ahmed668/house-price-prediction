from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.prediction import predict_price
from app.schemas.prediction import PredictionRequest, PredictionResponse

app = FastAPI(title="House Price Prediction API")

# السماح للـ Frontend بالاتصال
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# اختبار أن الـ API شغال
@app.get("/")
def home():
    return {"message": "House Price Prediction API is Running"}

# توقع سعر المنزل
@app.post("/predict", response_model=PredictionResponse)
def predict(request: PredictionRequest):
    try:
        result = predict_price(request.model_dump())
        return PredictionResponse(predicted_price=result)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))