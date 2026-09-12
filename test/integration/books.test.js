require('../../config/config');
const booksService = require('../../src/api/resources/books/books.service');
const Book = require('../../src/api/resources/books/books.model');

beforeEach(async () => {
  await Book.deleteMany({});
});

afterAll(async () => {
  await Book.deleteMany({});
});

describe('getBooks', () => {
  it('should return empty array', async () => {
    const books = await booksService.getBooks();
    expect(books.length).toBe(0);
  });

  it('should return 2 books', async () => {
    // insert data to db
    await Book.insertMany([{ title: 'Book1' }, { title: 'Book2' }]);

    const books = await booksService.getBooks();
    expect(books.length).toBe(2);
    expect(books[0]).toMatchObject({ title: 'Book1' });
    expect(books[1]).toMatchObject({ title: 'Book2' });
  });
});
