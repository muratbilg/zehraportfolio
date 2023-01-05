import { useState } from "react";
import Skills from "./Skills";
import Modal from "react-modal";
import ModalContent from "./modal/ModalContent";

Modal.setAppElement("#__next");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    //    ABOUT
    <div className="edina_tm_about" id="about">
      <div className="container">
        <div className="about_title">
          <h3>Hakkımda</h3>
        </div>
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <h3>
                Psikolog <span>Zehra Guler</span>
              </h3>
              <p>
                Bilişsel Davranışçı Terapi, Oyun Terapisi ve Emdr terapi
                tekniğini kullanarak çocuk, ergen ve yetişkinlerle
                çalışmaktayım. Kaygı bozuklukları, depresyon, obsesif kompulsif
                bozukluk, yaşam problemleri, travma ve yas, bağımlılık, ergen
                aile iş birliği, öfke ve saldırganlık, okul problemleri, kardeş
                kıskançlığı, tuvalet sorunları, okul reddi, yeme ve uyku
                problemleri başarılı olduğum alanlardır.
              </p>
            </div>
            <div className="my_skills">
              <h3 className="title">Egitimlerim</h3>
              <p className="desc">
                
              </p>
              <div className="wrapper">
                <div className="dodo_progress">
                  <Skills />
                </div>
              </div>
              <div className="edina_tm_button">
                <button
                  type="submit"
                  className="color"
                  onClick={toggleModalOne}
                >
                  See More
                </button>
              </div>
            </div>
          </div>
          {/* End leftpart */}

          <div className="rightpart">
            <div className="image">
              <img src="img/thumbs/26-35.jpg" alt="thumb" />

              <div
                className="main"
                style={{
                  backgroundImage: "url(img/about/2.jpg)",
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>

              <div
                className="experience"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="info">
                  <h3>6+ Yillik</h3>
                  <span>Tecrube</span>
                </div>
              </div>
            </div>
          </div>
          {/* End righttpart */}
        </div>
      </div>

      {/* Start About Details Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalContent />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  About Details Modal */}
    </div>
    // /ABOUT
  );
};

export default About;
