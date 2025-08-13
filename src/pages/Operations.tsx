import { Form, Button, Row, Col } from "react-bootstrap";
import "./Operations.scss";
import { useState } from "react";

const Operations = () => {
    const [showAmount, setShowAmount] = useState(false);

    return (
        <div className="operations-container">
            <div className="header-row">
                <h4 className="title">Bill Inquiry and Payment</h4>
            </div>

            <Row className="forms-row">
                {/* Bill Inquiry Form */}
                <Col md={6}>
                    <div className="form-card inquiry-card">
                        <h5>SADAD Bill Inquiry</h5>
                        <p>Enter biller details to inquire about outstanding payments.</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="billerId">
                                <Form.Label>Biller ID</Form.Label>
                                <Form.Control type="text" placeholder="Enter Biller ID" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="billerAccount">
                                <Form.Label>Biller Account</Form.Label>
                                <Form.Control type="text" placeholder="Enter Biller Account" />
                            </Form.Group>

                            <div className="text-end">
                                <Button variant="primary" className="submit-btn" onClick={() => setShowAmount(true)}>
                                    Submit Inquiry
                                </Button>
                            </div>

                            {showAmount && (<div className="amount-info">
                                <p>
                                    Amount to be Paid: <strong>1,300.00 SAR</strong>
                                </p>
                                <p>Reference Number: REF: 1237891345</p>
                            </div>)}

                        </Form>
                    </div>
                </Col>

                {/* Payment Form */}
                <Col md={6}>
                    <div className="form-card payment-card">
                        <h5>SADAD Payment</h5>
                        <p>Process your bill payments securely and efficiently.</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="disbursementAmount">
                                <Form.Label>Disbursement Amount</Form.Label>
                                <Form.Control type="text" placeholder="Enter Disbursement Amount" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="paymentReferenceNumber">
                                <Form.Label>Payment Reference Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter Payment Reference Number" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="billerId">
                                <Form.Label>Biller ID</Form.Label>
                                <Form.Control type="text" placeholder="Enter Biller Id" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="billerAccount">
                                <Form.Label>Billing Account</Form.Label>
                                <Form.Control type="text" placeholder="Enter Biller Account" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="billingAmount">
                                <Form.Label>Billing Amount</Form.Label>
                                <Form.Control type="text" placeholder="Enter Billing Amount" />
                            </Form.Group>

                            <div className="form-actions">
                                <Button variant="secondary" className="save-btn">Save</Button>
                                <Button variant="primary" className="submit-btn">Submit</Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Operations;
