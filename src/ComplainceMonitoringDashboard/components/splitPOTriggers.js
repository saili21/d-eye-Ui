import React from 'react';
import { Col, Row, Button, Table, Panel } from 'react-bootstrap';
import '../../assets/css/complianceMonitoringDashboard.css';
import ReactSpeedometer from "react-d3-speedometer";

const SplitPoTriggers = (props) => {
  return (
    <div>
      <Row className="marginTop-20">
        <Col md={8} >
          <Row>
            <Col md={12} >
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 position-relative">
                <form>
                  <div className="form-group">
                    <div className="split-po-section">
                      <Col md={12}>
                        <label>Company Name:</label>
                        <span>Synerzip Ltd</span>
                      </Col>
                      <Col md={12}>
                        <label>Primary Contact:</label>
                        <span>Willson Hill</span>
                      </Col>
                      <Col md={12}>
                        <label>Selected Cycle:</label>
                        <span>P2p</span>
                      </Col>
                      <Col md={12}>
                        <label>Review Period From:</label>
                        <span>1/10/2017 - 30/10/2017</span>
                      </Col>
                    </div>
                  </div>
                  <div className="over-text-clientDashboard">USD 001</div>
                </form>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 position-relative marginTop-20">
                <form>
                  <div className="form-group">
                    <div className="split-po-section">
                      <Col md={12}>
                        <label>Requestor ID:</label>
                        <span>REQ 001</span>
                      </Col>
                      <Col md={12}>
                        <label>Requestor Name:</label>
                        <span>Willson Hill</span>
                      </Col>
                      <Col md={12}>
                        <label>Transaction Value:</label>
                        <span>P2p</span>
                      </Col>
                    </div>
                  </div>
                  <div className="over-text-clientDashboard">Requestor 1</div>
                </form>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 position-relative marginTop-20">
                <form>
                  <div className="form-group">
                    <div className="split-po-section">
                      <Col md={12}>
                        <label>PO No:</label>
                        <span>PO 126</span> &nbsp;&nbsp;
                    <label>Supplier Name:</label>
                        <span>ABC</span>  &nbsp;&nbsp;
                    <label>Approver ID:</label>
                        <span>App 003</span>
                      </Col>

                      <Col md={12}>
                        <label>PO Date:</label>
                        <span>15/04/2017</span>  &nbsp;&nbsp;
                    <label>Supplier ID:</label>
                        <span>P2p</span>  &nbsp;&nbsp;
                    <label>Item Description:</label>
                        <span>ABCD</span>
                      </Col>
                      <Col md={12}>
                        <label>PO Value:</label>
                        <span>15.000 SGD</span>  &nbsp;&nbsp;
                    <label>Approver Name:</label>
                        <span>Janet</span>
                      </Col>
                    </div>
                  </div>
                  <div className="over-text-clientDashboard">Transaction Information</div>
                </form>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <div className="col-md-12">
                <Panel>
                  <Panel.Heading><h3> Overall Risk Score : 450 </h3></Panel.Heading>
                  <Panel.Body>
                    <Row>
                      <Col className="text-center marginBottom-30" md={6}>
                        <label> <b>Rule Based Control </b></label>
                        <ReactSpeedometer
                          height={185}
                          maxValue={500}
                          value={200}
                          needleColor="black"
                          startColor="#f4d041"
                          endColor="#f4d041"
                          segments={5}
                        />
                        <a> View More Details </a>
                      </Col>
                      <Col className="text-center marginBottom-30" md={6}>
                        <label> <b>Network Analysis </b></label>
                        <ReactSpeedometer
                          height={185}
                          maxValue={500}
                          value={350}
                          needleColor="black"
                          startColor="#f9de0c"
                          endColor="#f9de0c"
                          segments={5}
                        />
                        <a> View More Details </a>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="text-center marginBottom-30" md={6}>
                        <label><b> Text Analytics</b> </label>
                        <ReactSpeedometer
                          height={185}
                          maxValue={500}
                          value={473}
                          needleColor="black"
                          startColor="red"
                          endColor="red"
                          segments={5}
                        />
                        <a> View More Details </a>
                      </Col>
                      <Col className="text-center marginBottom-30" md={6}>
                        <label><b> Anamoly Detection</b> </label>
                        <ReactSpeedometer
                          height={185}
                          maxValue={500}
                          value={100}
                          needleColor="black"
                          startColor="#c1f90c"
                          endColor="#c1f90c"
                          segments={5}
                        />
                        <a> View More Details </a>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="text-center marginBottom-30" md={6}>
                        <label><b> Predective Analytics</b> </label>
                        <ReactSpeedometer
                          height={185}
                          maxValue={500}
                          value={160}
                          needleColor="black"
                          startColor="#f9860c"
                          endColor="#f9860c"
                          segments={5}
                        />
                        <a> View More Details </a>
                      </Col>
                    </Row>
                  </Panel.Body>
                </Panel>
              </div>;
            </Col>
          </Row>
        </Col>
        <Col md={4} >
          <Col className="text-center marginBottom-30" md={12}>
            <h4>Rule Based control: <span className="red-box">120</span></h4>
          </Col>
          <Col className="marginBottom-30" md={12}>
            <u>Trigger 1</u>
            <div>
              Lorem ipsum has become the industry standard for design mockups and prototypes. By adding a little bit of Latin to a mockup, you’re able to show clients a more complete version of your design without actually having to invest time and effort drafting copy.
            </div>
            <div className="marginTop-10">
              <span className="red-box">40</span>
            </div>
          </Col>
          <Col className="marginBottom-30" md={12}>
            <u>Trigger 2</u>
            <div>
              Lorem ipsum has become the industry standard for design mockups and prototypes. By adding a little bit of Latin to a mockup, you’re able to show clients a more complete version of your design without actually having to invest time and effort drafting copy.
            </div>
            <div className="marginTop-10">
              <span className="red-box">40</span>
            </div>
          </Col>
          <Col md={12}>
            <u>Trigger 3</u>
            <div>
              Lorem ipsum has become the industry standard for design mockups and prototypes. By adding a little bit of Latin to a mockup, you’re able to show clients a more complete version of your design without actually having to invest time and effort drafting copy.
            </div>
            <div className="marginTop-10">
              <span className="red-box">40</span>
            </div>
          </Col>
          <Col className="marginTop-20" md={12}>
            <a onClick={props.backToLevelOneDashboard}> <u> {'<<'} Back to Level 1 Dashboard </u></a>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default SplitPoTriggers
