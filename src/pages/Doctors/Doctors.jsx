import DoctorList from "../../components/Doctors/DoctorList";

const Doctors = () => {
  return (
    // {/* doctors */ }
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Nuestros Grandes Dentistas</h2>
          <p className="text__para text-center">
            Nuestro equipo de dentistas y especialistas se compromete a brindar una atención dental excepcional.
          </p>
        </div>
        <DoctorList />
      </div>
    </section>
  );
  // {/* doctors */ };
};

export default Doctors;
