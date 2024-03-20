
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Liste du calcul des taux cumulés des taxes</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
						<th>Nomenclature</th>
						<th>Libellé</th>
						<th>Code Unité</th>
						<th>PCS</th>
						<th>PS</th>
						<th>PC</th>
						<th>RS</th>
						<th>DD</th>
						<th>RAU</th>
						<th>T.TEL</th>
						<th>ECT</th>
						<th>DA</th>
						<th>AIB</th>
						<th>TVA</th>
						<th className="text-right">Taux Cumulé</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0207350000</td>
                      <td>Dakota Rice</td>
                      <td>10</td>
                      <td>0.1</td>
                      <td>0.2</td>
                      <td>0.3</td>
                      <td>0.4</td>
                      <td>0.5</td>
                      <td>0.6</td>
                      <td>0.7</td>
                      <td>0.8</td>
                      <td>0.9</td>
                      <td>1.1</td>
                      <td>1.2</td>
                      <td className="text-right">147.13 %</td>
                    </tr>
                    <tr>
                      <td>0207350000</td>
                      <td>Dakota Rice</td>
                      <td>10</td>
                      <td>0.1</td>
                      <td>0.2</td>
                      <td>0.3</td>
                      <td>0.4</td>
                      <td>0.5</td>
                      <td>0.6</td>
                      <td>0.7</td>
                      <td>0.8</td>
                      <td>0.9</td>
                      <td>1.1</td>
                      <td>1.2</td>
                      <td className="text-right">147.13 %</td>
                    </tr>
                    <tr>
                      <td>0207350000</td>
                      <td>Dakota Rice</td>
                      <td>10</td>
                      <td>0.1</td>
                      <td>0.2</td>
                      <td>0.3</td>
                      <td>0.4</td>
                      <td>0.5</td>
                      <td>0.6</td>
                      <td>0.7</td>
                      <td>0.8</td>
                      <td>0.9</td>
                      <td>1.1</td>
                      <td>1.2</td>
                      <td className="text-right">147.13 %</td>
                    </tr>
                    <tr>
                      <td>0207350000</td>
                      <td>Dakota Rice</td>
                      <td>10</td>
                      <td>0.1</td>
                      <td>0.2</td>
                      <td>0.3</td>
                      <td>0.4</td>
                      <td>0.5</td>
                      <td>0.6</td>
                      <td>0.7</td>
                      <td>0.8</td>
                      <td>0.9</td>
                      <td>1.1</td>
                      <td>1.2</td>
                      <td className="text-right">147.13 %</td>
                    </tr>
                    <tr>
                      <td>0207350000</td>
                      <td>Dakota Rice</td>
                      <td>10</td>
                      <td>0.1</td>
                      <td>0.2</td>
                      <td>0.3</td>
                      <td>0.4</td>
                      <td>0.5</td>
                      <td>0.6</td>
                      <td>0.7</td>
                      <td>0.8</td>
                      <td>0.9</td>
                      <td>1.1</td>
                      <td>1.2</td>
                      <td className="text-right">147.13 %</td>
                    </tr>
                    <tr>
                      <td>0207350000</td>
                      <td>Dakota Rice</td>
                      <td>10</td>
                      <td>0.1</td>
                      <td>0.2</td>
                      <td>0.3</td>
                      <td>0.4</td>
                      <td>0.5</td>
                      <td>0.6</td>
                      <td>0.7</td>
                      <td>0.8</td>
                      <td>0.9</td>
                      <td>1.1</td>
                      <td>1.2</td>
                      <td className="text-right">147.13 %</td>
                    </tr>
                    <tr>
                      <td>0207350000</td>
                      <td>Dakota Rice</td>
                      <td>10</td>
                      <td>0.1</td>
                      <td>0.2</td>
                      <td>0.3</td>
                      <td>0.4</td>
                      <td>0.5</td>
                      <td>0.6</td>
                      <td>0.7</td>
                      <td>0.8</td>
                      <td>0.9</td>
                      <td>1.1</td>
                      <td>1.2</td>
                      <td className="text-right">147.13 %</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    </>
  );
}

export default Tables;
