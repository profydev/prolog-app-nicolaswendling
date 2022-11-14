import styled from "styled-components";
import { color, breakpoint, space } from "@styles/theme";
import Image from "next/image";
import Link from "next/link";
import { version } from "../../../package.json";

const Container = styled.footer`
  color: ${color("gray", 400)};
  background: ${color("gray", 50)};
  text-align: center;
  padding: ${space(6)};
  @media (min-width: ${breakpoint("desktop")}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 ${space(6)};
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: ${space(6)};
  margin: auto auto ${space(6)};
  @media (min-width: ${breakpoint("desktop")}) {
    order: 1;
    flex-grow: 1;
  }
`;
const Anchor = styled.a`
  color: ${color("gray", 500)};
  font-weight: 500;
  text-decoration: none;
`;

const Version = styled.span`
  display: block;
  margin: ${space(6)} auto auto;
  @media (min-width: ${breakpoint("desktop")}) {
    order: 0;
  }
`;

const ImageWrapper = styled.div`
  @media (min-width: ${breakpoint("desktop")}) {
    order: 2;
  }
`;

export function Footer() {
  return (
    <Container id="footer">
      <Nav id="footer-nav">
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
      <ImageWrapper>
        <Image
          id="footer-logo"
          src="/icons/logo-small.svg"
          alt="logo"
          width="23"
          height="33"
        />
      </ImageWrapper>
      <Version id="version">
        Version: <span>{version}</span>
      </Version>
    </Container>
  );
}
