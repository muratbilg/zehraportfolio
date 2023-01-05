import React from "react";
/*Lisans Uludag Universitesi - Psikoloji (2017) 
                Sertifika I. Düzey
                EMDR Eğitimi(2022) 
                Sertifika Bilişsel-Davranışçı Oyun Terapisi
                (2022) Eğitim Bilişsel Davranışçı Terapi Eğitimi (2018) Eğitim
                Madde, Sigara, Alkol Bağımlılığı ile Çalışma Eğitimi (2017) */
const skillsContent = [
  {
    name: "Lisans Uludag Universitesi - Psikoloji (2017) ",
    skillPercent: "100",
  },
  {
    name: "Sertifika I. Düzey EMDR Eğitimi(2022) ",
    skillPercent: "100",
  },
  {
    name: "Sertifika Bilişsel-Davranışçı Oyun Terapisi(2022)",
    skillPercent: "100",
  },
  {
    name: "Eğitim Bilişsel Davranışçı Terapi Eğitimi (2018)",
    skillPercent: "100",
  },
  {
    name: "Eğitim Madde, Sigara, Alkol Bağımlılığı ile Çalışma Eğitimi (2017)",
    skillPercent: "100",
  },
  {
    name: "Mindfullness",
    skillPercent: "100",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
