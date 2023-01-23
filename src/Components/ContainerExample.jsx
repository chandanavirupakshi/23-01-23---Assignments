import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
function ContainerExample() {
  return (
      <div className="show-grid">
    <Container>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
    </div>
  );
}

export default ContainerExample;