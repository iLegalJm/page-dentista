import ServiceList from "../components/Services/ServiceList";

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Nuestros Servicios Médicos</h2>
          <p className="text__para text-center">
            {/* elabora un texto  */}
            En <span className="text-primaryColor cursor-pointer">Sonrisas</span> ofrecemos servicios médicos de calidad y asequibles para todos.
          </p>
        </div>
        <ServiceList />
      </div>
    </section>
  )
};

export default Services;
