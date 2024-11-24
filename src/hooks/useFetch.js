import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // console.log('Iniciando la solicitud a la API...');
            try {
                const response = await fetch(url);
                console.log('Respuesta de la API:', response);
                
                if (!response.ok) {
                    throw new Error('Ha ocurrido un error al obtener los datos de la API');
                }
                
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;