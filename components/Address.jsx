import Image from "next/image";

const Address = () => {
  const addressContent = [
    {
      id: 1,
      iconImg: "/img/address/phone.jpg",
      name: "Telefon",
      info: (
        <>
          <li>
            <a href="Tel: +452 666 386">+452 666 386</a>
          </li>
          <li>
            <a href="Tel: +465 562 226">+465 562 226</a>
          </li>
        </>
      ),
      animDelay: "0",
    },
    {
      id: 2,
      iconImg: "/img/address/email.jpg",
      name: "Email",
      info: (
        <>
          <li>
            <a href="mailto:ib-themes21@gmail.com">support@gmail.com</a>
          </li>
          <li>
            <a href="mailto:ib-themes21@gmail.com">example@support.com</a>
          </li>
        </>
      ),
      animDelay: "100",
    },
    {
      id: 3,
      iconImg: "/img/address/location.jpg",
      name: "Adres",
      info: (
        <>
          <li>
            <p>
              Envato 121 King St,
              <br />
              Bursa
            </p>
          </li>
        </>
      ),
      animDelay: "200",
    },
  ];

  return (
    <ul className="wrapper">
      {addressContent.map((item) => (
        <li
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={item.animDelay}
          key={item.id}
        >
          <div className="list_inner">
            <div className="icon">
              <Image src={item.iconImg} width="10" height="10" alt="icon" />
            </div>
            {/* End icon */}
            <div className="content">
              <h3>{item.name}</h3>
              <ul>{item.info}</ul>
            </div>
            {/* End .content */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Address;
