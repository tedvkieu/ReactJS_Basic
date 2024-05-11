import axios from '../utils/axiosCustomize';

const postCreateNewUser = (email, password, username, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return axios.post('api/v1/participant', data); // da lay duong link local ben file instance
};

const getAllUsers = () => {
    return axios.get('api/v1/participant/all');
};

export { postCreateNewUser, getAllUsers };
