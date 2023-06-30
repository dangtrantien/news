'use strict';

class User {
  // Public fields
  // pageSize;
  // category;

  // Private field
  #arrOfArr = [];

  constructor(firstName, lastName, username, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;

    // Protected property
    // this.arrOfArr = [];
  }

  async newsAPI(country, category, pageSize, apiKey) {
    try {
      const news = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`
      );

      if (!news.ok) throw new Error('Problem getting data');

      const response = await news.json();
      console.log(response);

      const data = response.articles;

      // Lọc data có author = null
      const arr = [...data].filter((val) => val.author !== null);

      // Data theo pageSize
      for (let i = 0; i < arr.length; i += pageSize)
        this.#arrOfArr.push(arr.slice(i, i + pageSize));

      console.log(this.#arrOfArr);

      return this.#arrOfArr;
    } catch (err) {
      alert(`💥💥💥 ${err.message}`);
    }
  }

  async searchAPI(query, pageSize, apiKey) {
    try {
      const search = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
      );

      if (!search.ok) throw new Error('Problem getting data');

      const response = await search.json();
      console.log(response);

      const data = response.articles;

      // Lọc data có author = null
      const arr = [...data].filter((val) => val.author !== null);

      // Data theo pageSize
      for (let i = 0; i < arr.length; i += pageSize)
        this.#arrOfArr.push(arr.slice(i, i + pageSize));

      console.log(this.#arrOfArr);

      return this.#arrOfArr;
    } catch (err) {
      alert(`💥💥💥 ${err.message}`);
    }
  }
}
