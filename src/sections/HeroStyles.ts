import styled from "styled-components"

export const Section = styled.section`
  min-height: calc(100vh - ${({ theme }) => theme.layout.navbarHeight});

  padding: 96px 28px;

  background: ${({ theme }) => theme.colors.background};

  overflow: hidden;
`

export const Container = styled.div`
  position: relative;

  max-width: ${({ theme }) => theme.layout.maxWidth};
  min-height: 620px;

  margin: 0 auto;
  padding: 0 64px;

  display: flex;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 44px;

  background: rgba(255, 255, 255, 0.36);
  box-shadow: 0 32px 90px rgba(120, 185, 236, 0.08);

  overflow: hidden;
`

export const Content = styled.div`
  position: relative;
  z-index: 2;

  width: 54%;
  max-width: 720px;
`

export const Greeting = styled.p`
  margin: 0 0 24px;

  font-size: 20px;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const Title = styled.h1`
  margin: 0;

  font-size: 66px;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.05em;

  color: ${({ theme }) => theme.colors.text};
`

export const Description = styled.p`
  max-width: 620px;

  margin: 32px 0 0;

  font-size: 18px;
  line-height: 1.8;

  color: ${({ theme }) => theme.colors.textMuted};
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;

  margin-top: 40px;
`

export const PrimaryButton = styled.button`
  padding: 16px 26px;

  border: none;
  border-radius: ${({ theme }) => theme.radius.button};

  background: ${({ theme }) => theme.colors.text};
  color: white;

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.primary};
  }
`

export const SecondaryButton = styled.button`
  padding: 16px 26px;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.button};

  background: rgba(255, 255, 255, 0.68);
  color: ${({ theme }) => theme.colors.text};

  font-size: 15px;
  font-weight: 500;

  cursor: pointer;

  backdrop-filter: blur(16px);

  transition: 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`

export const Visual = styled.div`
  position: absolute;
  top: 0;
  right: -32px;
  z-index: 1;

  width: 60%;
  height: 100%;

  pointer-events: none;

  &::before {
    content: "";

    position: absolute;
    inset: 0;
    z-index: 2;

    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.background} 0%,
      rgba(247, 251, 255, 0.78) 12%,
      rgba(247, 251, 255, 0.28) 30%,
      rgba(247, 251, 255, 0) 52%
    );
  }
`

export const PhotoCard = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
  height: 100%;
`

export const PhotoPlaceholder = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: 50% 35%;

  display: block;

  filter: saturate(0.92) brightness(1.04);
`