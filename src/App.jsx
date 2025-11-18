import styled, { keyframes } from 'styled-components';
import {
  IoMailOutline,
  IoDocumentTextOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
} from 'react-icons/io5';

export default function App() {
  return (
    <Container>
      <Header>
        <Name>AUDREY KHO</Name>
        <Links>
          <LinkWrapper>
            <a href='mailto:audreyckho@gmail.com' aria-label='Email'>
              <IoMailOutline size={20} />
            </a>
            <Tooltip>Email</Tooltip>
          </LinkWrapper>
          <LinkWrapper>
            <a
              href='https://drive.google.com/file/d/144oWgspBYWexmZz6pBhaR1B9InhXNv7V/view'
              target='_blank'
              rel='noreferrer'
              aria-label='Resume'
            >
              <IoDocumentTextOutline size={20} />
            </a>
            <Tooltip>Resume</Tooltip>
          </LinkWrapper>
        </Links>
      </Header>

      <Section>
        <Content>
          <Bio>
            Audrey is a software engineer based in San Francisco, CA. She is
            passionate about creating memorable experiences on the web.
            <br />
            <br />
            She is currently building AI-powered content generation and A/B
            testing apps for enterprise customers at{' '}
            <a href='https://www.adobe.com/' target='_blank' rel='noreferrer'>
              Adobe
            </a>
            .
            <br />
            <br />
            Outside of work, she enjoys making pottery and looking for new pastries to
            try in the city.
          </Bio>
        </Content>
      </Section>

      <Footer>
        <p>&copy; {new Date().getFullYear()} AUDREY KHO</p>
        <FooterLinks>
          <a
            href='https://www.linkedin.com/in/audrey-kho/'
            target='_blank'
            rel='noreferrer'
            aria-label='LinkedIn'
          >
            <IoLogoLinkedin size={18} />
          </a>
          <a
            href='https://github.com/audrey-kho'
            target='_blank'
            rel='noreferrer'
            aria-label='GitHub'
          >
            <IoLogoGithub size={18} />
          </a>
          <a
            href='https://www.instagram.com/_audreykho/'
            target='_blank'
            rel='noreferrer'
            aria-label='Instagram'
          >
            <IoLogoInstagram size={18} />
          </a>
        </FooterLinks>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  max-width: 920px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6rem;
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0);
    backdrop-filter: blur(2.5px);
    z-index: 999;
    margin: -4rem -2rem 6rem -2rem;
    padding: 1.5rem 2rem;
  }
`;

const Name = styled.h1`
  font-family: 'DM Mono', monospace;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 2px;
  margin: 0;
`;

const slideDown = keyframes`
  0% {
    transform: translateX(-50%) translateY(-8px);
    opacity: 0;
  }
  100% {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Tooltip = styled.span`
  position: absolute;
  bottom: -32px;
  left: 50%;
  background: rgba(255, 255, 255, 0.7);
  color: #3a3430;
  padding: 6px 12px;
  border-radius: 6px;
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 1000;
  transform: translateX(-50%) translateY(0);
  transition: opacity 0.2s, visibility 0.2s;

  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid rgba(255, 255, 255, 0.7);
  }
`;

const LinkWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: rgba(255, 255, 255, 0.7);
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }

  &:hover ${Tooltip} {
    opacity: 1;
    visibility: visible;
    animation: ${slideDown} 0.3s ease-out;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;
  display: flex;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Bio = styled.p`
  font-family: 'Hanken Grotesk', sans-serif;
  font-size: 24px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;

  a {
    background-image: linear-gradient(to left,rgba(255, 255, 255, 0.35),rgba(255, 255, 255, 0.35));
    background-repeat: repeat-x;
    background-position: 0 90%;
    background-size: 1px 1px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const Footer = styled.footer`
  margin-top: 24rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.35);
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    margin-top: 8rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color:rgba(255, 255, 255, 0.35);
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
