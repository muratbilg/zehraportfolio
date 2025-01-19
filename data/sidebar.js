import { RxCalendar } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { RiMentalHealthLine } from "react-icons/ri";
import { TfiCommentAlt } from "react-icons/tfi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { CgNotes } from "react-icons/cg";

const navItems = [
  {
    icon: <AiOutlineHome />,
    itemName: "Anasayfa",
    itemRoute: "#home",
    activeClass: "active",
  },
  {
    icon: <FiUser />,
    itemName: "Hakkımda",
    itemRoute: "#about",
    activeClass: "",
  },
  {
    icon: <RiMentalHealthLine />,
    itemName: "Çalışma Alanlarım",
    itemRoute: "#service",
    activeClass: "",
  },
  // {
  //   icon: "portfolio",
  //   itemName: "Portfolio",
  //   itemRoute: "#portfolio",
  //   activeClass: "",
  // },
  {
    icon: <TfiCommentAlt />,
    itemName: "Danışan Yorumları",
    itemRoute: "#testimonial",
    activeClass: "",
  },
  {
    icon: <CgNotes />,
    itemName: "Blog",
    itemRoute: "#blog",
    activeClass: "",
  },
  {
    icon: <RxCalendar />,
    itemName: "Randevu Al",
    itemRoute: "#appointment",
    activeClass: "",
  },
  {
    icon: <FiPhoneCall />,
    itemName: "İletişim",
    itemRoute: "#contact",
    activeClass: "",
  },
];

export default navItems;
