import styled from "styled-components";
import { color, textFont, space } from "@styles/theme";
import Image from "next/image";
import Link from "next/link";

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 ${space(8)};
  color: ${color("gray", 400)};
  background: ${color("gray", 50)};
`;

const Nav = styled.nav`
  display: flex;
  gap: ${space(8)};
`;
const Anchor = styled.a`
  color: ${color("gray", 500)};
  font-weight: 500;
  text-decoration: none;
`;

const version = "14.5.1";

export function Footer() {
  return (
    <Container>
      <span>
        Version: <span>{version}</span>
      </span>
      <Nav>
        <Link href="#" passHref>
          <Anchor>Docs</Anchor>
        </Link>
        <Link href="#" passHref>
          <Anchor href="#">API</Anchor>
        </Link>
        <Link href="#" passHref>
          <Anchor href="#">Help</Anchor>
        </Link>
        <Link href="#" passHref>
          <Anchor href="#">Community</Anchor>
        </Link>
      </Nav>
      <span>
        <Image src="/icons/logo-small.svg" alt="logo" width="23" height="33" />
      </span>
    </Container>
  );
}
