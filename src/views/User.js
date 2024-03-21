
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Table,
} from "reactstrap";

function User() {
  return (
    <>
      <div className="content">
        <Row className="justify-content-center">
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Calcul de taux cumulé</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row className="align-items-center justify-content-between">
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Nomenclature</label>
                        <Input
                          defaultValue="1516200000"
                          placeholder="Nomenclature"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="5">
						<FormGroup>
							<label>Libellé</label>
							<Input
              					disabled
								type="text"
							/>
						</FormGroup>
                    </Col>
                    <Col className="pl-1" md="3">
						<Button
							className="btn-round"
							color="primary"
							type="submit"
						>
							Rechercher
						</Button>
                    </Col>
                  </Row>
				
                  <Row className="align-items-center justify-content-between">
						<Col className="pr-1" md="4">
							<FormGroup>
								<label>Taux cumulé</label>
								<Input
									disabled
									defaultValue="0.5"
									type="text"
								/>
							</FormGroup>
						</Col>

						<Col className="px-1" md="5">
							<FormGroup>
								<label>Simuler une valeur</label>
								<Input
								placeholder="Entrer une valeur"
								type="text"
								/>
							</FormGroup>
						</Col>

						<Col className="pl-1" md="3">
							<Button
								className="btn-round"
								color="primary"
								type="submit"
							>
								Calculer
							</Button>
						</Col>
					</Row>

				</Form>
				<Form>
					<Row className="align-items-center justify-content-between">
						<Col className="pr-1" md="4">
							
						</Col>
						<Col className="px-1" md="3">
							
						</Col>
						<Col className="pl-1" md="4">
							<FormGroup>
								<label>Total DT</label>
								<Input
									defaultValue="0.5"
									disabled
									type="text"
								/>
							</FormGroup>
						</Col>
					</Row>
					
				</Form>
				<Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Libellé</th>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th className="text-right">Valeur</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PC</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td className="text-right">36,738</td>
                    </tr>
                    <tr>
                      <td>PS</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td className="text-right">23,789</td>
                    </tr>
                    <tr>
                      <td>PCS</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td className="text-right">56,142</td>
                    </tr>
                    <tr>
                      <td>RS</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td className="text-right">38,735</td>
                    </tr>
                    <tr>
                      <td>RAU</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td className="text-right">63,542</td>
                    </tr>
                    <tr>
                      <td>DD</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td className="text-right">78,615</td>
                    </tr>
                    <tr>
                      <td>DA</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td className="text-right">98,615</td>
                    </tr>
					<tr>
                      <td>TST</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td className="text-right">98,615</td>
                    </tr>
					<tr>
                      <td>TVA</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td className="text-right">98,615</td>
                    </tr>
                  </tbody>
				</Table>
				<Form className="d-flex justify-content-center">
					<Row>
						<Col className="pr-1 pt-4" md="12">
							
								<FormGroup>
									<label>Total taux</label>
									<Input
									disabled
									defaultValue="1516200000"
									placeholder="Nomenclature"
									type="text"
									/>
								</FormGroup>
							
						</Col>
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

export default User;
