import axios from 'axios'
const BASE_URL = process.env.NODE_ENV==='production'? "" : '';
const HEADER = {
                  'Access-Control-Allow-Origin':true,
                  'x-access-token': ''
                }

class BaseApiService {
  // Note: you may want to store this info in .env file
  baseUrl = BASE_URL;
  resource;

  constructor(resource) {
    if (!resource) throw new Error("Resource is not provided");
    this.resource = resource;
  }

  getUrl(id = "") {
    return `${this.baseUrl}/${this.resource}/${id}`;
  }

  handleErrors(err) {
    // Note: here you may want to add your errors handling
    console.log({ message: "Errors is handled here", err });
  }
}

class ReadOnlyApiService extends BaseApiService {
  constructor(resource) {
    super(resource);
  }
  async fetch(token='') {
    try {
      HEADER['x-access-token']=token
      const response = await fetch(this.getUrl(), {headers : HEADER});
      return await response.json();
    } catch (err) {
      this.handleErrors(err);
    }
  }
  async get(id, token='') {
    try {
      HEADER['x-access-token']=token
      const response = await axios.get(this.getUrl(id),{headers : HEADER})
      return await response;
    } catch (err) {
      this.handleErrors(err);
    }
  }
}

class ModelApiService extends ReadOnlyApiService {
  constructor(resource) {
    super(resource);
  }
  async post(data = {},token='') {
    try {
      HEADER['x-access-token']=token
      const response = await axios.post(this.getUrl(),data,{ headers : HEADER })
      return response;
    } catch (err) {
      this.handleErrors(err);
    }
  }
  async put(id, data = {}, token='') {
    try {
      HEADER['x-access-token']=token
      const response = await axios.put(this.getUrl(),data,{headers : HEADER})
      return response;
    } catch (err) {
      this.handleErrors(err);
    }
  }
  async delete(id, token='') {
    try {
      HEADER['x-access-token']=token
      const response = await axios.delete(this.getUrl(id),{headers : HEADER})
      return response;
    } catch (err) {
      this.handleErrors(err);
    }
  }
}

export const $api = {
    // student: new StudentApiService(),
};