import axios from '../hooks/useAxios';

export const getLinkedAccounts = () => axios.get('/social/accounts');
export const unlinkAccount = (platform) => axios.delete(`/social/unlink/${platform}`);
