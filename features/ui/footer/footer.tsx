import styled from "styled-components";
import { color, displayFont, textFont, space, breakpoint } from "@styles/theme";

export const Container = styled.button`
  display: flex;
  padding: 18px 32px;
  color: ${color("gray", 400)};
`;
export function Footer() {
  return <Container>Footer</Container>;
}
