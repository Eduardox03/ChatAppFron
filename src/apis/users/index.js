import api from '.../../axios';   

const obtenerDatos = async () => {
  try {
    const response = await api.get('/CreateUsers');
    console.log(response.data);
  } catch (error) {
    console.error('Error al obtener los datos', error);
  }
};
 export default obtenerDatos;