import styled from "styled-components";

const Login = (props) => {

    return (
        <Container>
            <Nav>
                <a href="/" alt="">
                    <img src="/images/login-logo.svg" alt="" />
                </a>
                <div>
                    <Join>Join Now</Join>
                    <SignIn>Sign in</SignIn>
                </div>
            </Nav>
        </Container>
    )
};

const Container = styled.div`
    padding: 0px;

`;

const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;

    & > a{
        width: 135px;
        height: 34px;
        @media (max-width: 768px) {
            padding: 0 5px;
        }
    }


`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
box-shadow: inset 0 0 0 1px #0a66ca;
color: #0a66ca;
border-radius: 24px;
transition-duration: 167mx;
font-size: 16px;


`;

export default Login;
