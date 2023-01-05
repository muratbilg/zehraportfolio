import React from "react";
import Social from "../Social";
import ReactTyped from "react-typed";
import Image from "next/image";
import shapeImage from "../../public/img/hero/3.jpg";
import heroImage from "../../public/img/hero/2.jpg";

const heroContent = {
  shapeImage: shapeImage,
  heroImage: heroImage,
  name: "Zehra Güler",
  description: `Bilişsel Davranışçı Terapi, Oyun Terapisi ve Emdr terapi tekniğini kullanarak çocuk, 
  ergen ve yetişkinlerle çalışmaktayım. Kaygı bozuklukları, depresyon, obsesif kompulsif bozukluk, 
  yaşam problemleri, travma ve yas, bağımlılık, ergen aile iş birliği, öfke ve saldırganlık, okul problemleri, 
  kardeş kıskançlığı, tuvalet sorunları, okul reddi, yeme ve uyku problemleri başarılı olduğum alanlardır.`,
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
          <h2
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            className="hello"
          >
            Psikolog {heroContent.name}
          </h2>
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
          <div>
            <div
              className="edina_tm_button"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <a href="#appointment" download className="color">
                Randevu Al
              </a>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;
