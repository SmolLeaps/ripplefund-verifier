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
          List of Authorized Resellers
        </Card.Header>
        <Card.Body children={<div><p>Resellers with a checkmark under 'Validated' have received authorization from respective pharmaceutical facilities to resell their drugs. They are now authorized to sell their products on Pharma's League.</p><CredentialTable /></div>} />
      </Card>
    </div>
  );
};
export default Dashboard;