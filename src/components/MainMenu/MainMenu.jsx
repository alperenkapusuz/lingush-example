import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import turtle from "../../images/mainmenu/turtle2.png";
import g1 from "../../images/whyLingush/g1.png";
import g2 from "../../images/whyLingush/g2.png";
import g3 from "../../images/whyLingush/g3.png";
import g4 from "../../images/whyLingush/g4.png";
import g5 from "../../images/whyLingush/g5.png";
import g6 from "../../images/whyLingush/g6.png";
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
      <hr/>
      {/* Neden lingush */}
      <Container className="mainmenu-why-lingush">
        <Carousel className="mainmenu-carousel" fade variant="dark">
          <Carousel.Item>
            <img src={g1} alt="First slide" />
            <Carousel.Caption>
              <h3>REKABETÇİ OLALIM</h3>
              <p>
                Nerede durduğunuzu öğrenin, sınavı en çok alan üç kişi arasında
                yer alın
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={g2} alt="Second slide" />

            <Carousel.Caption>
              <h3>AR İLE GÜÇLENDİRİLMİŞ ETKİLEŞİMLER</h3>
              <p>
                AR, çocuklarınız yeni kelimeler öğrenirken evde aktif
                kalmalarını sağlayacak
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={g3} alt="Third slide" />

            <Carousel.Caption>
              <h3>REKABETÇİ ORTAM</h3>
              <p>
                Çocuğunuzun haftalık ilerlemesini, raporlarını ve analizlerini
                alacaksınız
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={g4} alt="First slide" />
            <Carousel.Caption>
              <h3>EN İYİ HAFIZA OYUNU</h3>
              <p>Birden çok seviyeli hafıza oyunuyla hafızanızı güçlendirin</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={g5} alt="First slide" />
            <Carousel.Caption>
              <h3>YILLIK ABONELİKLE PREMİUM'A GİT</h3>
              <p>
                Lingush'un sunduğu tüm üstün özellikleri sadece yıllık $ 100
                abonelikle alın
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={g5} alt="First slide" />
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
      {/* lingush uygulamasi  */}
      <div className="mainmenu-lingush-app"></div>
      {/* Satin alin  */}
      <div className="mainmenu-buy"></div>
      {/* Footer  */}
      <div className="mainmenu-footer"></div>
    </section>
  );
}

export default MainMenu;
