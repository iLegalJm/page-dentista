import { Link } from 'react-router-dom';
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import featureImg from '../assets/images/feature-img.png';
import videoIcon from '../assets/images/video-icon.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import faqImg from '../assets/images/faq-img.png';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About';
import FaqList from '../components/Faq/FaqList';
import Testimonial from '../components/Testimonial/Testimonial';

const Home = () => {
  return (
    <>
      {/* hero section start */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Ayudamos a nuestros pacientes a tener una sonrisa saludable y duradera.
                </h1>
                <p className="text__para">
                  Bienvenido a nuestra clínica dental. Ofrecemos servicios de alta calidad para el cuidado de tu salud bucal. Nuestro equipo de expertos está aquí para brindarte la mejor atención.
                </p>
                <br />
                <button>
                  <Link to="/citas/reservar" className="btn">Solicitar una cita</Link>
                </button>
              </div>
              {/* hero counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    5+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-10px]"></span>
                  <p className="text__para">Años de experiencia</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    2+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-10px]"></span>
                  <p className="text__para">Clínicas</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-10px]"></span>
                  <p className="text__para">Satisfacción del cliente</p>
                </div>
              </div>
            </div>
            {/* hero content */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end*/}

      {/* Service section */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Proporcionando los mejores servicios médicos
            </h2>
            <p className="text__para text-center">
              Atención de primera para todos. Nuestro sistema de salud dental ofrece atención experta inigualable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Encuentra un doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Atención de primera clase para todos. Nuestro sistema de salud ofrece atención médica experta inigualable.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Encuentra una ubicación
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Nos ubicamos en diferentes lugares de la ciudad para brindarte la mejor atención médica.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Reservar cita
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Reserva tu cita con nuestros médicos expertos y obtén la mejor atención para el cuidado de tus dientes.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service section end*/}

      <About />

      {/* feature section */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row ">
            {/* feature content */}
            <div className="xl:w-[670px] ">
              <h2 className="heading ">
                Recibe tratamiento dental <br /> en cualquier momento.
              </h2>

              <ul className="pt-4">
                <li className="text__para">
                  1. Programa la cita directamente
                </li>
                <li className="text__para">
                  2. Busca la hora y el dia perfecto para tu cita.
                </li>
                <li className="text__para">
                  3. Recibe un recordatorio de tu cita.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Ver más</button>
              </Link>
            </div>
            {/* featuer img */}

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4  lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px]  lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>
                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h1 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Wayne Collins
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature section */}

      {/* faq */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="faq-img" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Preguntas más frecuentes de nuestros queridos pacientes
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* faq */}

      {/* testimonial */}
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Lo que dicen nuestros pacientes</h2>
          <p className="text__para text-center">
            Nuestros pacientes están muy satisfechos con nuestros servicios. Echa un vistazo a lo que dicen sobre nosotros.
          </p>
        </div>
        <Testimonial />
      </div>
      {/* testimonial */}
    </>
  );
};

export default Home;
