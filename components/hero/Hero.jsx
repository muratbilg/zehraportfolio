import React from "react";
import Social from "../Social";
import ReactTyped from "react-typed";
import Image from "next/image";
import shapeImage from "../../public/img/hero/3.jpg";
import heroImage from "../../public/img/hero/2.jpg";

const heroContent = {
  shapeImage: shapeImage,
  heroImage: heroImage,
  name: "Zehra Guler",
  description: `Bilişsel davranışçı terapi yönelimine duygun danışanlardan sıklıkla ergenler ve yetişkinlerle çalışmaktayım. Sosyal fobi, duygu duru bozuklukları, ilişkilerdeki bozulmalar, OKB, karşıt olma karşıt gelme bozukluğu, kaygı, panik atak, sigara, teknoloji ve hafif düzey kumar bağımlılığının yanı sıra bireysel psikolojik danışmanlık başarılı olduğum alanlardır.`,
};

const Hero = () => {
  return (
    //    HERO
    <div className="edina_tm_hero" id="home">
      <div className="content">
        <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
          <Image src={heroContent.shapeImage} alt="photo" />
        </div>
        <div className="extra">
          <h5
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            className="hello"
          >
            Psikolog {heroContent.name}
          </h5>
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <span className="typer-toper">
              <ReactTyped
                loop
                typeSpeed={250}
                backSpeed={60}
                strings={["EMDR Terapisi", "Oyun Terapisi"]}
                smartBackspace
                shuffle={false}
                backDelay={1}
                fadeOut={false}
                fadeOutDelay={500}
                loopCount={0}
                showCursor
                cursorChar="|"
              />
            </span>
          </h1>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            {heroContent.description}
          </p>

          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Social />
          </div>
          <div
            className="edina_tm_button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <a href="img/sample.pdf" download className="color">
              Randevu Al
            </a>
          </div>
        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;
