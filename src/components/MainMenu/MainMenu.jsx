import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import turtle from "../../images/mainmenu/turtle2.png";
import g1 from "../../images/whyLingush/g1.png";
import g2 from "../../images/whyLingush/g2.png";
import g3 from "../../images/whyLingush/g3.png";
import g4 from "../../images/whyLingush/g4.png";
import g5 from "../../images/whyLingush/g5.png";
import g6 from "../../images/whyLingush/g6.png";
import frame1 from "../../images/lingush-app/Frame1.png"
import dowloadNow from "../../images/lingush-app/download-now.png"
import appStoreImg from "../../images/lingush-app/appstore.png"
import playStoreImg from "../../images/lingush-app/googleplay.png"
import "./MainMenu.css";

function MainMenu() {
  return (
    <section className="mainmenu-page">
      {/*  Hosgeldiniz  */}
      <Container className="mainmenu-welcome">
        <Row>
          <Col className="welcome-div-img">
            <img className="welcome-img" src={turtle} alt="turtle" />
          </Col>
          <Col className="welcome-p">
            Çocuğunuza etkileşimli bir ortam sağlayarak yeni kelimeleri
            eğlenceli ve etkili bir şekilde öğretmenin yolu
          </Col>
        </Row>
      </Container>
      <hr />
      {/* Neden lingush */}
      <Container className="mainmenu-why-lingush">
        <Carousel className="mainmenu-carousel" fade variant="dark">
          <Carousel.Item>
            <img src={g1} alt="slide1" />
            <Carousel.Caption>
              <h3>REKABETÇİ OLALIM</h3>
              <p>
                Nerede durduğunuzu öğrenin, sınavı en çok alan üç kişi arasında
                yer alın
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={g2} alt="slide2" />

            <Carousel.Caption>
              <h3>AR İLE GÜÇLENDİRİLMİŞ ETKİLEŞİMLER</h3>
              <p>
                AR, çocuklarınız yeni kelimeler öğrenirken evde aktif
                kalmalarını sağlayacak
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={g3} alt="slide3" />

            <Carousel.Caption>
              <h3>REKABETÇİ ORTAM</h3>
              <p>
                Çocuğunuzun haftalık ilerlemesini, raporlarını ve analizlerini
                alacaksınız
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={g4} alt="slide4" />
            <Carousel.Caption>
              <h3>EN İYİ HAFIZA OYUNU</h3>
              <p>Birden çok seviyeli hafıza oyunuyla hafızanızı güçlendirin</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={g5} alt="slide5" />
            <Carousel.Caption>
              <h3>YILLIK ABONELİKLE PREMİUM'A GİT</h3>
              <p>
                Lingush'un sunduğu tüm üstün özellikleri sadece yıllık $ 100
                abonelikle alın
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={g6} alt="slide6" />
            <Carousel.Caption>
              <h3>İNTERAKTİF OYUNLAR</h3>
              <p>
                Çocuklarınızla oynayın, Çocuklarınızla evde Nesneleri Gizle ve
                Bul oynamayı seveceksiniz
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <hr />
      {/* lingush uygulamasi  */}
      <Container className="mainmenu-lingush-app">
        <Row>
          <Col sm className="mainmenu-lingush-app-col1">
            <img src={frame1} alt="frame1" style={{width:"270px"}} />
          </Col>
          <Col sm className="mainmenu-lingush-app-col2">
            <h3>LINGUSH MOBİL UYGULAMASI</h3>
            <p>Lingush deneyiminize ister akıllı telefon ister tablet yoluyla hemen başlayabilirsiniz!</p>
            <div className="mainmenu-lingush-app-col2-div1">
              <div>
                <img src={dowloadNow} alt="dowload-now" style={{width:"140px", marginLeft:"50px", marginTop:"50px"}}/>
              </div>
              <div className="mainmenu-lingush-app-col2-div2">
                <button className="link-button"> <img style={{width:"23px"}} src={appStoreImg} alt="app-store" /> App Store</button>
                <button className="link-button"> <img style={{width:"23px"}} src={playStoreImg} alt="play-store" /> Play Store</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Satin alin  */}
      <div className="mainmenu-buy"></div>
      {/* Footer  */}
      <div className="mainmenu-footer"></div>
    </section>
  );
}

export default MainMenu;
