# 🏠 House Price Prediction

A Machine Learning web application that predicts house prices based on different property features.

The project uses a trained Machine Learning model integrated with a FastAPI backend and React frontend.

---

## 🚀 Features

- Predict house prices using Machine Learning.
- FastAPI REST API for prediction.
- React.js frontend interface.
- User-friendly prediction form.
- Machine Learning model integration using Joblib.
- Real-time prediction through API requests.

---

## 🛠️ Technologies Used

### Backend
- Python
- FastAPI
- Pandas
- Scikit-learn
- Joblib
- Uvicorn

### Frontend
- React.js
- Vite
- CSS

### Machine Learning
- Data preprocessing
- Feature engineering
- Regression model training
- Model deployment

---

## 📂 Project Structure

```text
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

```text
http://127.0.0.1:8000
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

```text
http://localhost:5173
```

---

# 📌 API Endpoint

## Predict House Price

### Request

```http
POST /predict
```

Example JSON:

```json
{
  "Amount_in_rupees": 5000000,
  "location": 1,
  "Carpet_Area": 1000,
  "Status": 1,
  "Floor": 5,
  "Transaction": 1,
  "Furnishing": 1,
  "facing": 1,
  "overlooking": 1,
  "Bathroom": 2,
  "Balcony": 1,
  "Car_Parking": 1,
  "Ownership": 1,
  "Super_Area": 1200
}
```

Response:

```json
{
  "predicted_price": 6755.82
}
```

---

# 📸 Screenshot

## 📸 Screenshots

### Frontend Interface

![Frontend Screenshot](screenshots/frontend.png)

### Backend API

![Backend Screenshot](screenshots/backend.png)
---

# 👨‍💻 Author

**Osama Ahmed**

Machine Learning & Web Development Project