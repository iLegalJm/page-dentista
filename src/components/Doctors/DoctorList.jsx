import useFetch from '../../hooks/useFetch';
import DcotorCard from './DoctorCard';

const DoctorList = () => {

  const { data: doctors, isLoading, error } = useFetch("http://localhost:8080/doctor/v1/api");

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {(doctors || []).map((doctor) => {
        const mappedDoctor = {
          id: doctor.id,
          nombre: `${doctor.persona.nombre} ${doctor.persona.apellidos}`,
          especialidad: doctor.especialidad.nombre,
          avgRating: doctor.avgRating || 0,
          totalRating: doctor.totalRating || 0,
          photo: doctor.photo || 'https://img.freepik.com/vector-gratis/dentista-sosteniendo-instrumentos-sobre-fondo-blanco_1308-94697.jpg?semt=ais_hybrid',
          totalPatients: doctor.totalPatients || 0,
          hospital: 'Ate',
        };
        return <DcotorCard key={doctor.id} doctor={mappedDoctor} />;
      })}
    </div>
  );
};

export default DoctorList;
