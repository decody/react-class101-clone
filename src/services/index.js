import axios from 'axios';

const port = '4000';

const instance = axios.create({
    baseURL: `http://localhost:${port}`
});

const getMyClass = async () => {
    return instance.get('/myclass');
};

const getMdClass = () => {
    return instance.get('/md-class');
};

const getTopTenClass = () => {
    return instance.get('/top10-class');
};

const getLastestList = () => {
    return instance.get('/lastest-class');
};

export {
    getMyClass,
    getMdClass,
    getTopTenClass,
    getLastestList,
};