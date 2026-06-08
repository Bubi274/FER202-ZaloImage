import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { IoArrowBackOutline, IoWaterOutline, IoSunnyOutline, IoThermometerOutline, IoLeaf } from 'react-icons/io5';
import { FiWind } from 'react-icons/fi';
import PlantifyNavbar from './components/PlantifyNavbar';
import InfoCard from './components/InfoCard';
import monsteraImg from './assets/monstera.png';

function App() {
  return (
    <>
      {/* Navbar */}
      <PlantifyNavbar />

      {/* Main Content Area */}
      <Container className="my-5 animate-fade-in">
        {/* Back Button */}
        <div className="mb-4">
          <Button 
            variant="link" 
            className="text-decoration-none text-secondary d-flex align-items-center gap-2 p-0 fs-6 fw-medium hover-opacity"
            style={{ transition: 'opacity 0.2s ease' }}
          >
            <IoArrowBackOutline size={18} />
            Quay lại
          </Button>
        </div>

        {/* Content Layout */}
        <Row className="gy-4 align-items-center">
          {/* Left Column: Plant Image */}
          <Col md={12} lg={6} className="d-flex justify-content-center">
            <div 
              className="position-relative w-100 overflow-hidden shadow-lg" 
              style={{ 
                borderRadius: '24px', 
                maxWidth: '520px', 
                aspectRatio: '1.1/1' 
              }}
            >
              <img 
                src={monsteraImg} 
                alt="Monstera Deliciosa" 
                className="w-100 h-100 object-fit-cover"
                style={{ 
                  transition: 'transform 0.5s ease',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          </Col>

          {/* Right Column: Plant Details & Care Info */}
          <Col md={12} lg={6} className="ps-lg-5">
            {/* Difficulty Badge */}
            <div className="mb-3">
              <span className="badge-custom-green">Dễ</span>
            </div>

            {/* Plant Name Titles */}
            <h1 className="fw-bold m-0" style={{ color: '#1a251e', fontSize: '3rem' }}>
              Monstera Deliciosa
            </h1>
            <p className="text-muted fst-italic mb-3" style={{ fontSize: '1.1rem' }}>
              Monstera deliciosa
            </p>

            {/* Tags */}
            <div className="mb-4">
              <span className="badge-tag">Cây Monstera</span>
              <span className="badge-tag">Trầu Bà Lá Xẻ</span>
            </div>

            {/* Description */}
            <p className="text-secondary lh-lg mb-4" style={{ fontSize: '1.05rem', textAlign: 'justify' }}>
              Monstera Deliciosa là loại cây cảnh nội thất phổ biến với lá xẻ độc đáo. 
              Cây dễ trồng, thích hợp cho người mới bắt đầu và có khả năng thanh lọc không khí tốt.
            </p>

            {/* Care Information Grid */}
            <Row className="g-3">
              <Col xs={12} sm={6}>
                <InfoCard 
                  icon={IoWaterOutline} 
                  label="Tưới nước" 
                  value="7-10 ngày/lần" 
                />
              </Col>
              <Col xs={12} sm={6}>
                <InfoCard 
                  icon={IoSunnyOutline} 
                  label="Ánh sáng" 
                  value="Ánh sáng gián tiếp" 
                />
              </Col>
              <Col xs={12} sm={6}>
                <InfoCard 
                  icon={IoThermometerOutline} 
                  label="Nhiệt độ" 
                  value="21-25°C" 
                />
              </Col>
              <Col xs={12} sm={6}>
                <InfoCard 
                  icon={FiWind} 
                  label="Độ ẩm" 
                  value="60-80%" 
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Floating Sparkle/Leaf Action Button */}
      <div className="floating-btn" aria-label="Quick action">
        <IoLeaf size={24} />
      </div>
    </>
  );
}

export default App;
