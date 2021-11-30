import React from "react";
import styled from "styled-components";

const AdminPage = () => {
  return (
    <AdminPageWrapper>
      <Heading>welcome to admin page</Heading>
    </AdminPageWrapper>
  );
};
const AdminPageWrapper = styled.div`
min-height=100vh`;
const Heading = styled.div`
  font-size: 20px;
`;
export default AdminPage;
