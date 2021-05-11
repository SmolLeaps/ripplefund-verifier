import React, { FC } from "react";
// import { useAuthentication } from "./Authentication";
import { Card } from "react-bootstrap";
import "./Dashboard.css";
import CredentialTable from './CredentialTable';
const Dashboard: FC = () => {
  // const { sdk } = useAuthentication();
  // const did = sdk!.did;
  return (
    <div className="Home">
      <Card>
        <Card.Header as="h5">
          List of Authorized Startups 
        </Card.Header>
        <Card.Body children={<div><p>Entities with a checkmark under 'Validated' have received authorization from MAS or SFA to conduct a crowdfunding campaign on RippleFund.</p><CredentialTable /></div>} />
      </Card>
    </div>
  );
};
export default Dashboard;