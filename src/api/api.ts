import axios from "axios";

const _API_URL = `http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/`;

export const getData = () => axios.get(`${_API_URL}DAMKBAoDBwoDBAkOBAYFCw.csv`);
