import styled from "styled-components";
type BackdropProps = { onClick: () => void };
function Backdrop(props: BackdropProps) {
  return <BackdropWrapper onClick={props.onClick} />;
}
const BackdropWrapper = styled.div`
  position: fixed;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;
export default Backdrop;
