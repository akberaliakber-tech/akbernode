import request from 'supertest';
import {app,  pool } from './app.js';
import { Item } from './models/Item.js';

// We mock the 'pg' module so it doesn't attempt a real connection
jest.mock('pg', () => {
  const mPool = {
    query: jest.fn(),
    end: jest.fn(),
  };
  return { Pool: jest.fn(() => mPool) };
});

describe('GET /', () => {
  
  afterEach(() => {
    jest.clearAllMocks(); // Resets the mock state between tests
  });

  it('should render the index page with data from PostgreSQL', async () => {
    // Arrange: Setup the fake database result
    const mockData = {
      rows: [
        { title: 'Senior Software Engineer' },
        { title: 'Solution Architect' }
      ]
    };
    (pool.query as jest.Mock).mockResolvedValueOnce(mockData);

    // Act: Simulate the browser request
    const response = await request(app).get('/');

    // Assert: Check if the response is correct
    expect(response.status).toBe(200);
    expect(pool.query).toHaveBeenCalledWith('SELECT title FROM jobs');
    // Check if the HTML output contains one of our fake titles
    expect(response.text).toContain('Senior Software Engineer');
  });

  it('should display the Default Item when the database is empty', async () => {
    (pool.query as jest.Mock).mockResolvedValueOnce({ rows: [] });

    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.text).toContain('Default Item');
  });

  it('should return 500 if the database query fails', async () => {
    (pool.query as jest.Mock).mockRejectedValueOnce(new Error('DB Connection Failed'));

    const response = await request(app).get('/');

    expect(response.status).toBe(500);
    expect(response.text).toBe('Database Error');
  });
});