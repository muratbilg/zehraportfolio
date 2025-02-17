import { useState } from "react";
import Skills from "./Skills";
import Modal from "react-modal";
import ModalContent from "./modal/ModalContent";
import Image from "next/image";

Modal.setAppElement("#__next");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    //    ABOUT
    <div className="zehra_tm_about" id="about">
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
                Lisans eğitimimi Uludağ Üniversitesi Psikoloji bölümünde 2017
                yılında tamamladım. Mezun olduktan sonra Bilişsel davranışçı
                Terapi, Oyun Terapisi, Emdr ve çeşitli değerlendirme eğitimleri
                alarak psikoterapi uygulama yetkinliği kazandım. 6 yıl boyunca
                çeşitli danışmanlık merkezlerinde, anaokullarında,
                rehabilitasyon merkezlerinde ve gönüllü kuruluşlarda psikolog
                olarak görev yaptım. Yetişkin problemlerinin farklı çeşitleri
                ile, ergenlik sorunlarının aile-okul-bireysel bölümlerinde,
                çocukluk döneminin bilişsel-psikolojik gelişimsel alanlarında
                deneyim edinme fırsatı buldum. Şuan çocuk,ergen ve yetişkinlerle
                yüz yüze ve online psikoterapi uygulamaktayım.
              </p>
            </div>
            <div className="my_skills">
              <h3 className="title">Eğitimlerim</h3>
              <p className="desc"></p>
              <div className="wrapper">
                <div className="dodo_progress">
                  <Skills />
                </div>
              </div>
              {/* <div className="zehra_tm_button">
                <button
                  type="submit"
                  className="color"
                  onClick={toggleModalOne}
                >
                  Daha fazla
                </button>
              </div> */}
            </div>
          </div>
          {/* End leftpart */}

          <div className="rightpart">
            <div className="image">
              <Image src="/img/hero/1.jpg" alt="thumb" fill />

              <div
                className="main"
                style={{
                  backgroundImage: "url(img/hero/1.jpg)",
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
                  <h3>6+ Yıllık</h3>
                  <span>Tecrübe</span>
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
        <div className="zehra_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <Image src="/img/svg/cancel.svg" fill alt="close icon" />
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
