export class UserApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }


  async getUser() {
    try {
      const response = await fetch(this.getFullUrl('/users'));
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      
      const user = await response.json();

      return posts
    } catch (error) {
      console.error(error);
    }
  }

  getFullUrl(endpoint) {
    // Issue with endpoint
    return `${this.baseUrl}${endpoint}`
  }
}