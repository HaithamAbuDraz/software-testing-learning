const request = require('supertest');
const mongoose = require('../../config/config');
const server = require('../../app');
const Book = require('../../src/api/resources/books/books.model');

afterEach(async () => {
  await Book.deleteMany({});
});

afterAll(async () => {
  server.close();
  await mongoose.disconnect();
});

describe('getBook', () => {
  it('should return 200 and get book from db', async () => {
    const book = await Book.create({ title: 'MyBook' });
    const res = await request(server).get(`/api/books/${book.id}`);
    expect(res.status).toBe(200);
    expect(res.body.data.book).toMatchObject({ title: 'MyBook' });
  });

  it('should return 404 if book not found', async () => {
    const res = await request(server).get(
      '/api/books/62b10f0171a491a27a1214e6',
    );
    expect(res.status).toBe(404);
    expect(res.body.message).toMatch('not found');
  });

  it('should return 500', async () => {
    const res = await request(server).get('/api/books/1');
    expect(res.status).toBe(500);
  });
});

describe('updateBook', () => {
  it('should return 404 if book not found', async () => {
    const res = await request(server).put(
      '/api/books/62b10f0171a491a27a1214e6',
    );
    expect(res.status).toBe(404);
    expect(res.body.message).toMatch('not found');
  });

  it('should return 200 and update the book', async () => {
    const book = await Book.create({ title: 'MyBook' });

    const res = await request(server).put(`/api/books/${book.id}`).send({
      title: 'My Book Updated',
    });

    expect(res.status).toBe(200);
    expect(res.body.message).toMatch('book updated successfully');
    expect(res.body.data.book).toMatchObject({ title: 'My Book Updated' });
  });
});

describe('deleteBook', () => {
  it('should return 200 and delete the book', async () => {
    const book = await Book.create({ title: 'MyBook' });

    const res = await request(server).delete(`/api/books/${book.id}`);

    expect(res.status).toBe(200);
    expect(res.body.message).toMatch('deleted successfully');
  });
});
