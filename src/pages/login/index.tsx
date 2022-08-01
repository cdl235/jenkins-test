import React from "react";
import styles from "./index.module.scss";
import { Form, Button, Input, Switch, Stepper } from "antd-mobile";
import { testGet } from "@/api/apiData";
import type { LoginGetType } from "@/api/apiData";

function Login() {
  const submitData = (e: LoginGetType) => {
    console.log(122, e);
    testGet().then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <div className={styles.login}>
        <img
          src={require("@/assets/yay.jpg")}
          alt=""
          className={styles.login_img}
        />
        <Form
          onFinish={(e) => {
            submitData(e);
          }}
          layout="horizontal"
          style={{ fontSize: "12px" }}
          footer={
            <Button block type="submit" color="primary" size="small">
              提交
            </Button>
          }
        >
          <Form.Header>
            <div className={styles.login_head}>❤️❤️❤️❤️恋爱脑APP❤️❤️❤️</div>
          </Form.Header>
          <Form.Item name="uname" label="姓名">
            <Input placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item name="password" label="蜜码">
            <Input placeholder="请输入蜜码" type="password" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
