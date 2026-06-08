import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { IoLeaf, IoSunnyOutline } from 'react-icons/io5';

const PlantifyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-white border-bottom py-2 shadow-sm" sticky="top">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2 fw-bold text-success" style={{ fontSize: '1.5rem' }}>
          <div className="d-flex align-items-center justify-content-center bg-success text-white rounded-circle" style={{ width: '36px', height: '36px' }}>
            <IoLeaf size={20} />
          </div>
          <span style={{ color: '#1a251e', fontWeight: 700 }}>Plantify</span>
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="plantify-navbar-nav" />

        {/* Navbar Links & Actions */}
        <Navbar.Collapse id="plantify-navbar-nav">
          <Nav className="mx-auto align-items-center my-2 my-lg-0">
            <Nav.Link href="#home" className="nav-link-custom mx-1 active">Trang chủ</Nav.Link>
            <Nav.Link href="#explore" className="nav-link-custom mx-1">Khám phá</Nav.Link>
            <Nav.Link href="#store" className="nav-link-custom mx-1">Gian hàng</Nav.Link>
            <Nav.Link href="#ai-doctor" className="nav-link-custom mx-1">Bác sĩ AI</Nav.Link>
            <Nav.Link href="#knowledge" className="nav-link-custom mx-1">Đồ thị tri thức</Nav.Link>
            <Nav.Link href="#blog" className="nav-link-custom mx-1">Blog</Nav.Link>
          </Nav>

          <div className="d-flex flex-column flex-lg-row align-items-center gap-3 mt-2 mt-lg-0">
            {/* Theme Toggle Icon */}
            <button 
              className="btn border-0 p-2 text-secondary d-flex align-items-center justify-content-center" 
              style={{ borderRadius: '50%', width: '40px', height: '40px' }}
              aria-label="Toggle dark mode"
            >
              <IoSunnyOutline size={22} />
            </button>

            {/* Ask AI Button */}
            <button className="btn-secondary-custom">
              Hỏi AI
            </button>

            {/* Auth Actions */}
            <Nav.Link href="#login" className="text-secondary fw-semibold px-2">
              Đăng nhập
            </Nav.Link>
            
            <button className="btn-primary-custom">
              Đăng ký
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PlantifyNavbar;
