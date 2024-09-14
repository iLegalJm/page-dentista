import aboutimg from '../../assets/images/about.png';
import aboutCardimg from '../../assets/images/about-card.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
          {/* about img */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutimg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] ">
              <img src={aboutCardimg} alt="" />
            </div>
          </div>
          {/* about content */}

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <div className="heading">Orgullosos de ser uno de los mejores del país</div>
            <p className="text__para">
              Durante 5 años, uno de las mejores clinicas dentales del país. Nuestro equipo de dentistas y especialistas están dedicados a la salud y bienestar de nuestros pacientes. Nuestro objetivo es proporcionar la mejor atención dental en un ambiente relajado y cómodo.
            </p>
            <p className="textpara mt-[30px]">
            Nuestro equipo de dentistas y especialistas se compromete a brindar una atención dental excepcional. Nos esforzamos por crear un ambiente acogedor y relajado para asegurar que cada visita sea una experiencia positiva y cómoda para nuestros pacientes.
            </p>
            <Link to="/">
              <button className="btn">Ver más</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
