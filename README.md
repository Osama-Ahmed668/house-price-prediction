# 🏠 House Price Prediction

A Machine Learning web application that predicts house prices based on different property features.

The project uses a trained Machine Learning regression model integrated with a FastAPI backend and React frontend to provide real-time house price predictions.

---

# 🚀 Features

- Predict house prices using Machine Learning.
- FastAPI REST API for prediction.
- React.js frontend interface.
- User-friendly prediction form.
- Real-time prediction through API requests.
- Machine Learning model deployment using Joblib.
- Data preprocessing and feature engineering pipeline.

---

# 🛠️ Technologies Used

## Backend
- Python
- FastAPI
- Pandas
- Scikit-learn
- Joblib
- Uvicorn

## Frontend
- React.js
- Vite
- CSS

## Machine Learning
- Data preprocessing
- Feature engineering
- Regression models
- Model evaluation
- Model deployment

---

# 📊 Dataset

The project uses the House Price dataset from Kaggle:

Dataset Link:

https://www.kaggle.com/datasets/juhibhojani/house-price

The dataset contains real estate listings from India with features such as:

- Location
- Carpet Area
- Super Area
- Bathroom
- Balcony
- Furnishing
- Transaction
- Ownership
- Facing

The raw dataset is not included in this repository because of its large size.

Download the dataset from Kaggle and place it inside:

```
notebooks/data/
```

---

# 🏗️ System Architecture

```
            React Frontend
                  |
                  |
                  v
            FastAPI Backend
                  |
                  |
                  v
      Machine Learning Pipeline
                  |
                  |
                  v
         House Price Prediction
```

---

# 📂 Project Structure

```
house-price-prediction/

│
├── backend/
│   └── app/
│       ├── main.py
│       ├── prediction.py
│       └── schemas/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│
├── models/
│   └── house_price.pkl
│
├── notebooks/
│   └── model_training.ipynb
│
├── screenshots/
│   ├── frontend.png
│   └── backend.png
│
└── README.md
```

---

# ⚙️ Installation & Running

## 1. Clone Repository

```bash
git clone https://github.com/Osama-Ahmed668/house-price-prediction.git
```

---

# 🔹 Backend Setup

Go to backend folder:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv .venv
```

Activate environment:

Windows:

```bash
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run FastAPI server:

```bash
uvicorn app.main:app --reload
```

Backend will run on:

```
http://127.0.0.1:8000
```

API Documentation:

```
http://127.0.0.1:8000/docs
```

---

# 🔹 Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Run React application:

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

# 📌 API Reference

## Health Check

GET:

```
/health
```

Response:

```json
{
  "status": "ok"
}
```

---

## Predict House Price

POST:

```
/predict
```

Example Request:

```json
{
  "location": "Mumbai",
  "carpet_area_sqft": 1000,
  "floor_num": 5,
  "bathroom": 2,
  "balcony": 1,
  "furnishing": "Furnished",
  "transaction": "New Property",
  "ownership": "Freehold",
  "facing": "East"
}
```

Example Response:

```json
{
  "predicted_price": 6755.82
}
```

---

# 🔗 API Example using Curl

```bash
curl -X POST "http://127.0.0.1:8000/predict" \
-H "Content-Type: application/json" \
-d '{"location":"Mumbai","carpet_area_sqft":1000,"floor_num":5,"bathroom":2,"balcony":1,"furnishing":"Furnished","transaction":"New Property","ownership":"Freehold","facing":"East"}'
```

---

# 📈 Model Performance

The models were evaluated using the test dataset.

| Model | MAE | RMSE | R² Score |
|------|------|------|---------|
| Random Forest | 1,018,075 | 4,076,377 | 0.908613 |
| Gradient Boosting | 2,463,330 | 4,982,486 | 0.863470 |
| Linear Regression | 4,414,958 | 8,287,687 | 0.622252 |

### Model Selection

Random Forest was selected as the final model because it achieved the highest R² score and the lowest error values compared to the other regression models.

The final trained model was exported as:

```
models/house_price.pkl
```

---

# 📸 Screenshots

## Frontend Interface

![Frontend Screenshot](screenshots/frontend.png)

## Backend API

![Backend Screenshot](screenshots/backend.png)

---

# 👨‍💻 Author

**Osama Ahmed**

Machine Learning & Web Development Project