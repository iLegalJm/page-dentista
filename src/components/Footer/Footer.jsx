import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { RiLinkedinFill } from 'react-icons/ri';
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from 'react-icons/ai';

const socialLinks = [
  // {
  //   path: '',
  //   // icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  // },
  {
    path: '',
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  // {
  //   path: '',
  //   icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  // },
  {
    path: '',
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: '/home',
    display: 'Inicio',
  },
  {
    path: '/contact',
    display: 'Contacto',
  },
  {
    path: '/services',
    display: 'Servicios',
  },
  // {
  //   path: '/',
  //   display: 'Blog',
  // },
];

const quickLinks02 = [
  {
    path: '/find a doctor',
    display: 'Buscar doctor',
  },
  {
    path: '/',
    display: 'Solicitar una Cita',
  },
  {
    path: '/',
    display: 'Buscar una clínica',
  },
  {
    path: '/',
    display: 'Obtener una Opinión',
  },
];

const quickLinks03 = [
  {
    path: '/',
    display: 'Donar',
  },
  {
    path: '/contact',
    display: 'Contacto',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            {/* <img src={Logo} alt="Logo-img" /> */}
            <h2 className="text-[20px] leading-[30px] font-[700] text-headingColor">
              GRUPO 7
            </h2>
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright © {year} desarrollado por GRUPO 7, todos los derechos reservados.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#1811AE] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Enlaces Rápidos
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li
                  key={index}
                  className="mb-4 leading-7 font-[400] text-textColor"
                >
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quiero:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li
                  key={index}
                  className="mb-4 leading-7 font-[400] text-textColor"
                >
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li
                  key={index}
                  className="mb-4 leading-7 font-[400] text-textColor"
                >
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
