import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BcdForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    radius_mean: "",
    texture_mean: "",
    perimeter_mean: "",
    area_mean: "",
    smoothness_mean: "",
    compactness_mean: "",
    concavity_mean: "",
    concave_points_mean: "",
    symmetry_mean: "",
    fractal_dimension_mean: "",
    radius_se: "",
    texture_se: "",
    perimeter_se: "",
    area_se: "",
    smoothness_se: "",
    compactness_se: "",
    concavity_se: "",
    concave_points_se: "",
    symmetry_se: "",
    fractal_dimension_se: "",
    radius_worst: "",
    texture_worst: "",
    perimeter_worst: "",
    area_worst: "",
    smoothness_worst: "",
    compactness_worst: "",
    concavity_worst: "",
    concave_points_worst: "",
    symmetry_worst: "",
    fractal_dimension_worst: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    navigate("/result", { state: formData });
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit}>
            {step === 1 && (
              <div>
                <Form.Group controlId="radius_mean">
                  <Form.Label>Radius Mean</Form.Label>
                  <Form.Control
                    type="number"
                    name="radius_mean"
                    value={formData.radius_mean}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="texture_mean">
                  <Form.Label>Texture Mean</Form.Label>
                  <Form.Control
                    type="number"
                    name="texture_mean"
                    value={formData.texture_mean}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="perimeter_mean">
                  <Form.Label>Perimeter Mean</Form.Label>
                  <Form.Control
                    type="number"
                    name="perimeter_mean"
                    value={formData.perimeter_mean}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="area_mean">
                  <Form.Label>Area Mean</Form.Label>
                  <Form.Control
                    type="number"
                    name="area_mean"
                    value={formData.area_mean}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="smoothness_mean">
                  <Form.Label>Smoothness Mean</Form.Label>
                  <Form.Control
                    type="number"
                    name="smoothness_mean"
                    value={formData.smoothness_mean}
                    onChange={handleChange}
                  />
                </Form.Group>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="primary"
                    disabled
                    onClick={prevStep}
                    className="px-5 mt-4"
                  >
                    Prev
                  </Button>
                  <Button
                    variant="primary"
                    onClick={nextStep}
                    className="px-5 mt-4"
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
            {step === 2 && (
              <div>
                <Form.Group controlId="compactness_mean">
                  <Form.Label>Compactness Mean</Form.Label>
                  <Form.Control
                    type="number"
                    name="compactness_mean"
                    value={formData.compactness_mean}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="concavity_mean">
                  <Form.Label>Concavity Mean</Form.Label>
                  <Form.Control
                    type="number"
                    name="concavity_mean"
                    value={formData.concavity_mean}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="concave_points_mean">
                  <Form.Label>Concave Points Mean</Form.Label>
                  <Form.Control
                    type="number"
                    name="concave_points_mean"
                    value={formData.concave_points_mean}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="symmetry_mean">
                  <Form.Label>Symmetry Mean</Form.Label>
                  <Form.Control
                    type="number"
                    name="symmetry_mean"
                    value={formData.symmetry_mean}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="fractal_dimension_mean">
                  <Form.Label>Fractal Dimension Mean</Form.Label>
                  <Form.Control
                    type="number"
                    name="fractal_dimension_mean"
                    value={formData.fractal_dimension_mean}
                    onChange={handleChange}
                  />
                </Form.Group>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="primary"
                    onClick={prevStep}
                    className="px-5 mt-4"
                  >
                    Prev
                  </Button>
                  <Button
                    variant="primary"
                    onClick={nextStep}
                    className="px-5 mt-4"
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div>
                <Form.Group controlId="radius_se">
                  <Form.Label>Radius Se</Form.Label>
                  <Form.Control
                    type="number"
                    name="radius_se"
                    value={formData.radius_se}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="texture_se">
                  <Form.Label>Texture Se</Form.Label>
                  <Form.Control
                    type="number"
                    name="texture_se"
                    value={formData.texture_se}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="perimeter_se">
                  <Form.Label>Perimeter Se</Form.Label>
                  <Form.Control
                    type="number"
                    name="perimeter_se"
                    value={formData.perimeter_se}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="area_se">
                  <Form.Label>Area Se</Form.Label>
                  <Form.Control
                    type="number"
                    name="area_se"
                    value={formData.area_se}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="smoothness_se">
                  <Form.Label>Smoothness Se</Form.Label>
                  <Form.Control
                    type="number"
                    name="smoothness_se"
                    value={formData.smoothness_se}
                    onChange={handleChange}
                  />
                </Form.Group>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="primary"
                    onClick={prevStep}
                    className="px-5 mt-4"
                  >
                    Prev
                  </Button>
                  <Button
                    variant="primary"
                    onClick={nextStep}
                    className="px-5 mt-4"
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
            {step === 4 && (
              <div>
                <Form.Group controlId="compactness_se">
                  <Form.Label>Compactness SE</Form.Label>
                  <Form.Control
                    type="number"
                    name="compactness_se"
                    value={formData.compactness_se}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="concavity_se">
                  <Form.Label>Concavity SE</Form.Label>
                  <Form.Control
                    type="number"
                    name="concavity_se"
                    value={formData.concavity_se}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="concave_points_se">
                  <Form.Label>Concave Points SE</Form.Label>
                  <Form.Control
                    type="number"
                    name="concave_points_se"
                    value={formData.concave_points_se}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="symmetry_se">
                  <Form.Label>Symmetry SE</Form.Label>
                  <Form.Control
                    type="number"
                    name="symmetry_se"
                    value={formData.symmetry_se}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="fractal_dimension_se">
                  <Form.Label>Fractal Dimension SE</Form.Label>
                  <Form.Control
                    type="number"
                    name="fractal_dimension_se"
                    value={formData.fractal_dimension_se}
                    onChange={handleChange}
                  />
                </Form.Group>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="primary"
                    onClick={prevStep}
                    className="px-5 mt-4"
                  >
                    Prev
                  </Button>
                  <Button
                    variant="primary"
                    onClick={nextStep}
                    className="px-5 mt-4"
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
            {step === 5 && (
              <div>
                <Form.Group controlId="radius_worst">
                  <Form.Label>Radius Worst</Form.Label>
                  <Form.Control
                    type="number"
                    name="radius_worst"
                    value={formData.radius_worst}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="texture_worst">
                  <Form.Label>Texture Worst</Form.Label>
                  <Form.Control
                    type="number"
                    name="texture_worst"
                    value={formData.texture_worst}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="perimeter_worst">
                  <Form.Label>Perimeter Worst</Form.Label>
                  <Form.Control
                    type="number"
                    name="perimeter_worst"
                    value={formData.perimeter_worst}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="area_worst">
                  <Form.Label>Area Worst</Form.Label>
                  <Form.Control
                    type="number"
                    name="area_worst"
                    value={formData.area_worst}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="smoothness_worst">
                  <Form.Label>Smoothness Worst</Form.Label>
                  <Form.Control
                    type="number"
                    name="smoothness_worst"
                    value={formData.smoothness_worst}
                    onChange={handleChange}
                  />
                </Form.Group>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="primary"
                    onClick={prevStep}
                    className="px-5 mt-4"
                  >
                    Prev
                  </Button>
                  <Button
                    variant="primary"
                    onClick={nextStep}
                    className="px-5 mt-4"
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
            {step === 6 && (
              <div>
                <Form.Group controlId="compactness_worst">
                  <Form.Label>Compactness Worst</Form.Label>
                  <Form.Control
                    type="number"
                    name="compactness_worst"
                    value={formData.compactness_worst}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="concavity_worst">
                  <Form.Label>Concavity Worst</Form.Label>
                  <Form.Control
                    type="number"
                    name="concavity_worst"
                    value={formData.concavity_worst}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="concave_points_worst">
                  <Form.Label>Concave Points Worst</Form.Label>
                  <Form.Control
                    type="number"
                    name="concave_points_worst"
                    value={formData.concave_points_worst}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="symmetry_worst">
                  <Form.Label>Symmetry Worst</Form.Label>
                  <Form.Control
                    type="number"
                    name="symmetry_worst"
                    value={formData.symmetry_worst}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="fractal_dimension_worst">
                  <Form.Label>Fractal Dimension Worst</Form.Label>
                  <Form.Control
                    type="number"
                    name="fractal_dimension_worst"
                    value={formData.fractal_dimension_worst}
                    onChange={handleChange}
                  />
                </Form.Group>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="primary"
                    onClick={prevStep}
                    className="px-5 mt-4"
                  >
                    Prev
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleSubmit}
                    className="px-5 mt-4"
                  >
                    Predict
                  </Button>
                </div>
              </div>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default BcdForm;
