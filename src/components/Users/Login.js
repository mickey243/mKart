import React, { useState } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  FormGroup,
  Form,
  Label,
  Input,
} from "reactstrap";
import BaseUi from "../BaseUi/BaseUi";
import "./Login.css";
import UserInfoJson from "../../redux/UserInfoJson";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../../redux/AuthSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("123456");

  const loginHandler = (e) => {
    e.preventDefault();
    const result = UserInfoJson.find((item) => item.email === email);
    dispatch(
      authAction.logIn({
        id: result.id,
        fname: result.fname,
        lname: result.lname,
        email: result.email,
        password: result.password,
        admin: result.admin,
      })
    );
    navigate("/", { replace: true });
  };
  return (
    <BaseUi>
      <Row>
        <Col sm="6" md="12" className="login__card_col">
          <Card body className="login__card ">
            <Form>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Email
                </Label>
                <Col sm={10}>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword" sm={2}>
                  Password
                </Label>
                <Col sm={10}>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password placeholder"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Col>
              </FormGroup>
            </Form>
            <Button color="primary" onClick={loginHandler}>
              Login
            </Button>
          </Card>
        </Col>
      </Row>
    </BaseUi>
  );
};

export default Login;
