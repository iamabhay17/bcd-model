from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import pickle
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "https://bcd-model.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# load the model
model = pickle.load(open("cancer_detection.sav", "rb"))

class CancerData(BaseModel):
    radius_mean: float
    texture_mean: float
    perimeter_mean: float
    area_mean: float
    smoothness_mean: float
    compactness_mean: float
    concavity_mean: float
    concave_points_mean: float
    symmetry_mean: float
    fractal_dimension_mean: float
    radius_se: float
    texture_se: float
    perimeter_se: float
    area_se: float
    smoothness_se: float
    compactness_se: float
    concavity_se: float
    concave_points_se: float
    symmetry_se: float
    fractal_dimension_se: float
    radius_worst: float
    texture_worst: float
    perimeter_worst: float
    area_worst: float
    smoothness_worst: float
    compactness_worst: float
    concavity_worst: float
    concave_points_worst: float
    symmetry_worst: float
    fractal_dimension_worst: float

@app.post('/predict')
def predict(data: CancerData):
    data_dict = data.dict()
    # convert dict_values to list and then to numpy array
    input_data = np.array(list(data_dict.values())).astype(np.float64)
    # reshape the numpy array as we are predicting for one datapoint
    input_data_reshaped = input_data.reshape(1,-1)
    prediction = model.predict(input_data_reshaped)
    if (prediction[0] == 0):
        return {'prediction': 'Malignant'}
    else:
        return {'prediction': 'Benign'}
