import React from 'react';
import { Row, Col, Container } from 'reactstrap';

Footer.protoTypes = {};

function Footer() {
  return (
    <Container>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <Row>
          <Col xs="12" className="col-md">
            <img className="mb-2" src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
            <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
          </Col>
          <Col xs="6" className="col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="!#">Cool stuff</a></li>
              <li><a className="text-muted" href="!#">Random feature</a></li>
              <li><a className="text-muted" href="!#">Team feature</a></li>
              <li><a className="text-muted" href="!#">Stuff for developers</a></li>
              <li><a className="text-muted" href="!#">Another one</a></li>
              <li><a className="text-muted" href="!#">Last time</a></li>
            </ul>
          </Col>
          <Col xs="6" className="col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="!#">Resource</a></li>
              <li><a className="text-muted" href="!#">Resource name</a></li>
              <li><a className="text-muted" href="!#">Another resource</a></li>
              <li><a className="text-muted" href="!#">Final resource</a></li>
            </ul>
          </Col>
          <Col xs="6" className="col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="!#">Team</a></li>
              <li><a className="text-muted" href="!#">Locations</a></li>
              <li><a className="text-muted" href="!#">Privacy</a></li>
              <li><a className="text-muted" href="!#">Terms</a></li>
            </ul>
          </Col>
        </Row>
      </footer>
    </Container>
  )
}

export default Footer;