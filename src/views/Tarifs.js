
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// reactstrap components
import {
  UncontrolledAlert,
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

function Tarifs() {
  const notificationAlert = React.useRef();
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Paper Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  };
  return (
    <>
      <div className="content">
        <NotificationAlert ref={notificationAlert} />
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Enregistrer un tarif</CardTitle>
              </CardHeader>
              <CardBody>
			  	<Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Nomenclature</label>
                        <Input
                          defaultValue="0102210000"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    
                    <Col className="pl-1" md="7">
                      <FormGroup>
                        <label>
                          Libellé
                        </label>
                        <Input placeholder="Autres" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>PC</label>
                        <Input
                          defaultValue="0.1"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
					  	<label>PCS</label>
                        <Input
                          defaultValue="0.1"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
					<Col className="pl-1" md="4">
                      <FormGroup>
					  	<label>PS</label>
                        <Input
                          defaultValue="0.1"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>RS</label>
                        <Input
                          defaultValue="0.1"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
					  	<label>RAU</label>
                        <Input
                          defaultValue="0.1"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
					<Col className="pl-1" md="4">
                      <FormGroup>
					  	<label>TST</label>
                        <Input
                          defaultValue="0.1"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>DD</label>
                        <Input
                          defaultValue="0.1"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="3">
                      <FormGroup>
					  	<label>TVA</label>
                        <Input
                          defaultValue="0.1"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
					<Col className="pl-1" md="3">
                      <FormGroup>
					  	<label>DD sh2022</label>
                        <Input
                          defaultValue="10"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
					<Col className="pl-1" md="3">
                      <FormGroup>
					  	<label>Code unité</label>
                        <Input
                          defaultValue="kg"
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
                        Enregistrer
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

export default Tarifs;
