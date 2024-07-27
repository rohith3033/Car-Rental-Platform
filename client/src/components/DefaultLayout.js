import React from "react";
import { Menu, Dropdown, Button, Space , Row , Col } from "antd";
import {Link} from 'react-router-dom'

function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('user'))
  const menu = (
    <Menu>
        <Menu.Item>
        <a
         
          href="/"
        >
          Home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          
          href="/userbookings"
        >
          Bookings
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
         
          href="/admin"
        >
          Admin
        </a>
      </Menu.Item>
      <Menu.Item onClick={()=>{
          localStorage.removeItem('user');
          window.location.href='/login'
      }}>
          <li style={{color:'orangered'}}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header bs1">
          <Row gutter={16} justify='center'>
              <Col lg={20} sm={24} xs={24}>
              <div className="d-flex justify-content-between">
             <h1 ><b><Link to='/' style={{color:'orangered'}}>Rent Cars</Link></b></h1>

          <Dropdown overlay={menu} placement="bottomCenter">
            <Button>{user.username}</Button>
          </Dropdown>
        </div>
              </Col>
          </Row>
        
      </div>
      <div className="content">{props.children}</div>

      <div className="footer text-center">
      <hr />
          <h3>FAQ's</h3>
          <b><p>Q1 : How to book a car?</p></b>
          
          <p>Ans : click on book now </p>

          <br></br>
          <b><p>Q2 : how to go to Homepage?</p></b>
          
          <p>Ans : Click on Rent Cars  </p>
          <br></br>

          <h3>Contact us</h3>
           <p>Contact us at +918367463968</p>

           <p>Reach out to us at <a>dhanunjaig5@gmail.com</a> </p>

          
      </div>
    </div>
  );
}

export default DefaultLayout;
