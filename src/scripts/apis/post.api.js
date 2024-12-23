export class PostApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getPosts() {
    try {
      const response = await fetch(this.getFullUrl('/posts'));

      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      
      const posts = await response.json();

      return posts
    } catch (error) {
      console.error(error);
    }
  }

  async getPostById(id) {
    try {
      if (!id) {
        throw new Error("Id is Required");
      }


      const response = await fetch(this.getFullUrl(`/posts/${id}`));
      
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      
      const post = await response.json();

      return post
    } catch (error) {
      console.error(error);
    }
  }

  async create(post) {
    try {
      const response = await fetch(this.getFullUrl('/posts'), {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const result = await response.json();

      return result;

    } catch (error) {
      console.error(error);
    }
  }

  async update(id, post) {
    try {
      
      const response = await fetch(this.getFullUrl(`/posts/${id}`), {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const result = await response.json();

      return result;

    } catch (error) {
      console.error(error);
    }
  }

  async delete(id) {
    try {
      
      const response = await fetch(this.getFullUrl(`/posts/${id}`), {
        method: "DELETE"
      });

      return response;

    } catch (error) {
      console.error(error);
    }
  }

  getFullUrl(endpoint) {
    return `${this.baseUrl}${endpoint}`
  }
}