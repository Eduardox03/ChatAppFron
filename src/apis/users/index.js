import api from '../../axios';

const AllUsers = async (chatquery) => {
  try {
    const response = await api.get(`/api/Users`);
    return response;
  } catch (error) {
    console.error('Error al obtener los datos', error);
  }
};
export default AllUsers;
