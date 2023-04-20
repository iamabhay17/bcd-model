# API of ml model

from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import json
import numpy as np


app=FastAPI()

# class for model input

class model_input(BaseModel) :
    mean_radius : float
    mean_texture : float
    mean_perimeter : float
    mean_area : float
    mean_smoothness : float
    mean_compactness : float
    mean_concavity   : float
    mean_concave_points    : float 
    mean_symmetry          : float 
    mean_fractal_dimension : float 
    radius_error         : float   
    texture_error        : float  
    perimeter_error      : float
    area_error         : float
    smoothness_error       : float
    compactness_error      : float
    concavity_error        : float
    concave_points_error    : float 
    symmetry_error        : float
    fractal_dimension_error : float
    worst_radius       : float
    worst_texture       : float
    worst_perimeter     : float
    worst_area      : float
    worst_smoothness   : float
    worst_compactness   : float
    worst_concavity   : float
    worst_concave_points  : float
    worst_symmetry : float
    worst_fractal_dimension  : float

#loading the saved model

model=pickle.load(open('cancer_detection.sav','rb'))

#making requests

@app.post('/predict')
def diabetes_pred(input_param:model_input):
    input_data=input_param.json()
    input_dictionary=json.loads(input_data)
    
    mr=input_dictionary['mean_radius']
    mt=input_dictionary['mean_texture']
    mp=input_dictionary['mean_perimeter']
    ma=input_dictionary['mean_area']
    ms=input_dictionary['mean_smoothness']
    m_compact=input_dictionary['mean_compactness']
    m_concavity=input_dictionary['mean_concavity']
    m_concavity_points=input_dictionary['mean_concave_points']
    m_symmetry=input_dictionary['mean_symmetry']
    mfd=input_dictionary['mean_fractal_dimension']
    re=input_dictionary['radius_error']
    te=input_dictionary['texture_error']
    pe=input_dictionary['perimeter_error']
    ae=input_dictionary['area_error']
    se=input_dictionary['smoothness_error']
    compact_e=input_dictionary['compactness_error']
    concavity_e=input_dictionary['concavity_error']
    concave_points_e=input_dictionary['concave_points_error']
    symmetry_e=input_dictionary['symmetry_error']
    fde=input_dictionary['fractal_dimension_error']
    wr=input_dictionary['worst_radius']
    wt=input_dictionary['worst_texture']
    wp=input_dictionary['worst_perimeter']
    wa=input_dictionary['worst_area']
    ws=input_dictionary['worst_smoothness']
    w_compact=input_dictionary['worst_compactness']
    w_concativity=input_dictionary['worst_concavity']
    w_concave_points=input_dictionary['']
    w_symmetry=input_dictionary['worst_symmetry']
    w_fractal_dimension=input_dictionary['worst_fractal_dimension']
    
    
    # creating imput list
    input_list=[mr,mt,mp,ma,ms,m_compact,m_concavity,m_concavity_points,m_symmetry,mfd,re,te,pe,ae,se,compact_e,concavity_e,concave_points_e,symmetry_e,fde,wr,wt,wp,wa,ws,w_compact,w_concativity,w_concave_points,w_symmetry,w_fractal_dimension]
    
    # predict 
    predict=model.predict([input_list])
    
    label=np.argmax(predict)
    return label