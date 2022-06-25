import React from "react";
import turtle from "../../images/mainmenu/turtle2.png";
import "./MainMenu.css";

function MainMenu() {
  return (
    <div>
      {/*  Hosgeldiniz  */}
      <div className="mainmenu-welcome">
        <div className="welcome-p">
            Çocuğunuza etkileşimli bir ortam sağlayarak yeni kelimeleri
            eğlenceli ve etkili bir şekilde öğretmenin yolu
        </div>
        <div className="welcome-div-img">
          <img className="welcome-img" src={turtle} alt="turtle" />
        </div>
      </div>
      {/* Neden lingush */}
      <div className="mainmenu-why-lingush"></div>
       {/* lingush uygulamasi  */}
      <div className="mainmenu-lingush-app"></div>
      {/* Satin alin  */}
      <div className="mainmenu-buy"></div>
      {/* Footer  */}
      <div className="mainmenu-footer"></div>
    </div>
  );
}

export default MainMenu;
