const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

module.exports = {
  Query: {
    books: (obj, args, context) => {
      // console.log(context.data);
      return books;
    }
  },
};
