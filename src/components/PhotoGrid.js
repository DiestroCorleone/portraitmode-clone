import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export default function PhotoGrid(props) {
  return (
    <Container fluid>
      <Row className="p-3">
        <Col lg={4} xs={12}>
          <Image src="img/feat-1.jpg" className="rounded" fluid />
        </Col>
        <Col lg={4} xs={12}>
          <Image src="img/feat-2.jpg" className="rounded" fluid />
        </Col>
        <Col lg={4} xs={12}>
          <Image src="img/feat-3.jpg" className="rounded" fluid />
        </Col>
      </Row>
      <Row className="p-3">
        <Col lg={4} xs={12}>
          <Image src="img/feat-4.jpg" className="rounded" fluid />
        </Col>
        <Col lg={4} xs={12}>
          <Image src="img/feat-5.jpg" className="rounded" fluid />
        </Col>
        <Col lg={4} xs={12}>
          <Image src="img/feat-6.jpg" className="rounded" fluid />
        </Col>
      </Row>
      <Row className="p-3">
        <Col lg={4} xs={12}>
          <Image src="img/feat-7.jpg" className="rounded" fluid />
        </Col>
        <Col lg={4} xs={12}>
          <Image src="img/feat-8.jpg" className="rounded" fluid />
        </Col>
        <Col lg={4} xs={12}>
          <Image src="img/feat-9.jpg" className="rounded" fluid />
        </Col>
      </Row>
    </Container>
  );
}
