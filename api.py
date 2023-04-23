from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np
from sklearn.preprocessing import StandardScaler

app = FastAPI()

class CancerInput(BaseModel):
    mean_radius: float
    mean_texture: float
    mean_perimeter: float
    mean_area: float
    mean_smoothness: float
    mean_compactness: float
    mean_concavity: float
    mean_concave_points: float
    mean_symmetry: float
    mean_fractal_dimension: float
    radius_error: float
    texture_error: float
    perimeter_error: float
    area_error: float
    smoothness_error: float
    compactness_error: float
    concavity_error: float
    concave_points_error: float
    symmetry_error: float
    fractal_dimension_error: float
    worst_radius: float
    worst_texture: float
    worst_perimeter: float
    worst_area: float
    worst_smoothness: float
    worst_compactness: float
    worst_concavity: float
    worst_concave_points: float
    worst_symmetry: float
    worst_fractal_dimension: float

@app.post("/predict")
def predict(cancer_input: CancerInput):
    # Load the trained model
    model = pickle.load(open("cancer_detection.sav", "rb"))

    # Scale the input data
    input_data = np.array([[cancer_input.mean_radius, cancer_input.mean_texture, cancer_input.mean_perimeter, cancer_input.mean_area,
                            cancer_input.mean_smoothness, cancer_input.mean_compactness, cancer_input.mean_concavity, cancer_input.mean_concave_points,
                            cancer_input.mean_symmetry, cancer_input.mean_fractal_dimension, cancer_input.radius_error, cancer_input.texture_error,
                            cancer_input.perimeter_error, cancer_input.area_error, cancer_input.smoothness_error, cancer_input.compactness_error,
                            cancer_input.concavity_error, cancer_input.concave_points_error, cancer_input.symmetry_error, cancer_input.fractal_dimension_error,
                            cancer_input.worst_radius, cancer_input.worst_texture, cancer_input.worst_perimeter, cancer_input.worst_area,
                            cancer_input.worst_smoothness, cancer_input.worst_compactness, cancer_input.worst_concavity, cancer_input.worst_concave_points,
                            cancer_input.worst_symmetry, cancer_input.worst_fractal_dimension]])
    scaler = StandardScaler()
    input_data = scaler.fit_transform(input_data)

    # Make the prediction
    prediction = model.predict(input_data)

    # Return the prediction as a JSON object
    return {"prediction": int(prediction[0])}
