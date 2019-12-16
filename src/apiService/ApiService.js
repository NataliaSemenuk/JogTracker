export default class apiService {
    _apiBase ='https://jogtracker.herokuapp.com/api';
    _tokenBase ='Bearer';
    async getResourse(requestSettings = {}, url) {
        const res = await fetch(`${this._apiBase}${url}`, requestSettings);
        
        if(!res.ok) {
            throw new Error(`${res.status}`);
        }
        return await res.json();
    }
    async getToken() {
        const requestSettings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                uuid: 'hello',
            })
        } 
        return await this.getResourse(requestSettings, '/v1/auth/uuidLogin');
    }
    async getCurrentUser(token) {
        const requestSettings = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this._tokenBase} ${token}`,
            },
        }
        
        return await this.getResourse(requestSettings, '/v1/auth/user');
    }
    async getJogs(token) {
        const requestSettings = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }
        
        return await this.getResourse(requestSettings, '/v1/data/sync');
    }
    async postJog(token, newJog) {
        const requestSettings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(newJog),
        } 
        return await this.getResourse(requestSettings, '/v1/data/jog');
    }

    async putJog(token, newJog) {
        const requestSettings = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(newJog),
        } 
        return await this.getResourse(requestSettings, '/v1/data/jog');
    }
}