
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Form,
  Input,
  FormGroup,
} from "reactstrap";

function Connexion() {
  return (
    <>
      <div className="content justify-content-center align-items-center vh-100 mt-5">
        <Row>
          <Col className="ml-auto mr-auto" md="4">
            <Card className="card-upgrade">
              <CardHeader className="text-center mt-3">
                <CardTitle tag="h4">Se connecter</CardTitle>
              </CardHeader>
              <CardBody>
			  	<Form>
                  	<Row>
						<Col className="pr-1" md="12">
						<FormGroup>
							<label>Username</label>
							<Input
							placeholder="admin"
							type="text"
							/>
						</FormGroup>
						</Col>
                    
                  	</Row>
				  	<Row>
						<Col className="pr-1" md="12">
							<FormGroup>
								<label>Mot de passe</label>
								<Input
								placeholder="1234"
								type="text"
								/>
							</FormGroup>
						</Col>
                    
                  	</Row>
                  
                	<Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Connexion
                      </Button>
                    </div>
                  </Row>
            	</Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Connexion;
