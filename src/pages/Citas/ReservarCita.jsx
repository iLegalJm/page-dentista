import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { es } from 'date-fns/locale';
import DatePicker from 'react-datepicker'
import Select from 'react-select'
import 'react-datepicker/dist/react-datepicker.css'
import useFetch from '../../hooks/useFetch'
import jsPDF from 'jspdf';
import Swal from 'sweetalert2';

const formValidator = yup.object().shape({
    motivo: yup.string().required('El motivo es requerido'),
    doctor: yup.object().required('Debe seleccionar un doctor'),
    fecha: yup.date().required('Debe seleccionar fecha y hora'),
    dni: yup.string().matches(/^\d{8}$/, 'El DNI debe tener 8 dígitos').required('El DNI es requerido'),
})

export default function ReservarCita() {

    const { data: doctors } = useFetch("http://localhost:8080/doctor/v1/api");

    const formattedDoctors = doctors?.map(doctor => ({
        value: doctor.id,
        label: `${doctor.persona.nombre} ${doctor.persona.apellidos}`
    }));

    const { register, control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formValidator)
    })

    const onSubmit = (data) => {
        const formattedDate = data.fecha.toISOString().split('.')[0];

        fetch("http://localhost:8080/cita/v2/api", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                motivo: data.motivo,
                doctor: data.doctor.value,
                fecha: formattedDate,
                dni: data.dni
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);

                Swal.fire({
                    title: 'Cita agendada',
                    text: 'La cita se agendó correctamente',
                    icon: 'success',
                    confirmButtonText: 'Descargar Ticket'
                }).then(() => {
                    // Generar el PDF
                    const doc = new jsPDF({
                        orientation: 'portrait',
                        unit: 'mm',
                        format: [80, 120]
                    });

                    doc.setFontSize(16);
                    doc.text('Clínica Sonrisas', 40, 10, null, null, 'center');
                    doc.setFontSize(12);
                    doc.text('Ticket de Cita', 40, 20, null, null, 'center');
                    doc.setFontSize(10);

                    const pageWidth = 80;
                    const centerX = pageWidth / 2;

                    doc.text(`Serie: ${data.serie}`, centerX, 30, null, null, 'center');
                    doc.text(`Número: ${data.numero}`, centerX, 40, null, null, 'center');

                    doc.text(`Motivo: ${data.motivo}`, 10, 50);
                    doc.text(`Doctor: José Cueva`, 10, 60);
                    const formattedDate = new Date(data.fecha).toLocaleString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true
                    });
                    doc.text(`Fecha: ${formattedDate}`, 10, 70);
                    doc.text(`DNI: ${data.paciente.persona.dni}`, 10, 80);

                    doc.setFontSize(10);
                    doc.text('Para validar su cita, acercarse antes .', centerX, 100, null, null, 'center');
                    // salto de linea
                    doc.text('de 15 minutos a la hora de su cita', centerX, 105, null, null, 'center');
                    doc.text(' por caja para cancelar.', centerX, 110, null, null, 'center');

                    doc.save('ticket.pdf');
                });
            })
            .catch((error) => {
                console.error('Error:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Ocurrió un error al agendar la cita',
                    icon: 'error',
                    confirmButtonText: 'Cerrar'
                });
            });

    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Agendar Cita</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="motivo" className="block text-sm font-medium text-gray-700">Motivo de la cita</label>
                    <input
                        {...register('motivo')}
                        id="motivo"
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.motivo && <p className="mt-1 text-sm text-red-600">{errors.motivo.message}</p>}
                </div>

                <div>
                    <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">Doctor</label>
                    <Controller
                        name="doctor"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={formattedDoctors}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        )}
                    />
                    {errors.doctor && <p className="mt-1 text-sm text-red-600">{errors.doctor.message}</p>}
                </div>

                <div>
                    <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha y hora de la cita</label>
                    <Controller
                        name="fecha"
                        control={control}
                        render={({ field }) => (
                            <DatePicker
                                {...field}
                                selected={field.value}
                                onChange={(date) => field.onChange(date)}
                                showTimeSelect
                                dateFormat="Pp"
                                minDate={new Date()}
                                minTime={new Date(new Date().setHours(8, 0, 0, 0))}
                                maxTime={new Date(new Date().setHours(18, 0, 0, 0))}
                                filterDate={(date) => date.getDay() !== 0}
                                locale={es}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        )}
                    />
                    {errors.fecha && <p className="mt-1 text-sm text-red-600">{errors.fecha.message}</p>}
                </div>

                <div>
                    <label htmlFor="dni" className="block text-sm font-medium text-gray-700">DNI del paciente</label>
                    <input
                        {...register('dni')}
                        id="dni"
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                    {errors.dni && <p className="mt-1 text-sm text-red-600">{errors.dni.message}</p>}
                </div>

                <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Agendar Cita
                    </button>
                </div>
            </form>
        </div>
    )
}