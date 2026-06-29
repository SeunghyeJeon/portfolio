import styled from "styled-components"

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;

  height: ${({ theme }) => theme.layout.navbarHeight};

  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: blur(20px);

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  height: 100%;

  margin: 0 auto;
  padding: 0 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Brand = styled.a`
  text-decoration: none;

  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.04em;

  color: ${({ theme }) => theme.colors.text};

  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.75;
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`

export const Link = styled.a`
  position: relative;

  text-decoration: none;

  color: ${({ theme }) => theme.colors.textMuted};

  font-size: 15px;
  font-weight: 500;

  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  &::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -7px;

    width: 100%;
    height: 2px;

    background: ${({ theme }) => theme.colors.primary};

    border-radius: 999px;

    transform: scaleX(0);
    transform-origin: left;

    transition: transform 0.25s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`