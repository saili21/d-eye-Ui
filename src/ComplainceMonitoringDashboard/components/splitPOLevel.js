import React from 'react';
import { Col, Row, Button, Table } from 'react-bootstrap';
import '../../assets/css/complianceMonitoringDashboard.css';
import MultiSelect from '../../common/components/MultiselectDropdown';
import Pagination from "react-js-pagination";
// import ReactSpeedometer from "react-d3-speedometer";

const SplitPoLevel = (props) => {
  return (
    <div>
      <Row className="marginTop-20">
        <Col md={12}>
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
        </Col>
        <Col md={12} className="text-center"><code>Last Updated on 16/10/2017 03:30 am</code></Col>
        <Col md={12}>
          <Col md={12}>
            <Button className="pull-right" bsStyle="info">Export Report</Button>
          </Col>
        </Col>
        <Col className="marginTop-20" md={12}>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 position-relative">
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
                  <Col md={12}>
                    <label>Review Period From:</label>
                    <span>SGD 179,000</span>
                  </Col>
                </div>
              </div>
              <div className="over-text-clientDashboard">USD 001</div>
            </form>
          </div>
        </Col>
        <Col className="marginTop-20 paddingLeft-30" md={12} >
          <Table bordered condensed hover>
            <thead>
              <tr>
                <th></th>
                <th>Po No</th>
                <th>Po Date</th>
                <th>PO value(SGD)</th>
                <th>Supplier Name</th>
                <th>Supplier Id</th>
                <th>Approver Name</th>
                <th>Approver ID</th>
                <th>Item Description</th>
                <th>Case ID</th>
                <th>Case Status</th>
                <th>Aggregation Risk Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox" /></td>
                <td>1</td>
                <td>12/01/2017</td>
                <td>100</td>
                <td>Christina</td>
                <td>1</td>
                <td>SIS Pty Ltd</td>
                <td>1</td>
                <td>Software</td>
                <td>1</td>
                <td>In Progress</td>
                <td><a onClick={props.addTab}><u>500</u></a></td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col className="paddingLeft-30" md={6}>
          <Pagination />
        </Col>
        <Col md={6}>
          <Button className="pull-right" bsStyle="success">Create Case Profile</Button>
        </Col>
        {/* <Col md={6} >
          <ReactSpeedometer
            maxValue={500}
            value={473}
            needleColor="red"
            startColor="green"
            segments={5}
          />
        </Col> */}
      </Row>
    </div>
  )
}

export default SplitPoLevel
