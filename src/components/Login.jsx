import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {signInAPI} from '../actions'
import { Navigate } from 'react-router-dom';

const Login = (props) => {
  return (
    <Container>
      {props.user && <Navigate to = '/home'/>}
      <Nav>
        <Link to="/">
          <img src="Images/LinkedIn-Logo.wine.png" alt="" />
        </Link>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="Images\login-hero.svg" alt="" />
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img src="Images\google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.section`
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

  & > a {
    width: 135px;
    height: 34px;
    @media only screen and (max-width: 768px) {
      padding: 0px 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: gray;
  margin-right: 12px;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0.9);
    text-decoration: none;
  }
`;
const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0c64c5;
  color: #0c64c5;
  //* border:0px solid #0C64C5;
  border-radius: 24px;
  transition: all 0.2s ease;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  &:hover {
    background-color: #e0eaf6;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-bottom: 40px;
  padding: 60px 0;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media only screen add (max-width: 786px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #0c64c5;
    font-weight: 200;
    line-height: 70px;
    @media only screen and (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    // z-index: -1;
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;

    @media only screen and (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  vertical-align: meddle;
  z-index: 0;
  transition: all 0.3s ease;
  font-size: 20px;
  color: gray;
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI())
})


export default connect(mapStateToProps, mapDispatchProps)(Login);
