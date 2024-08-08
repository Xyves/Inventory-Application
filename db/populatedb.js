const { Client } = require("pg");
require("dotenv").config();
const SQL = `
CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    release_date DATE,
    category VARCHAR(100),
    developer VARCHAR(100),
    FOREIGN KEY (developer) REFERENCES developers(name) ON DELETE CASCADE,
    FOREIGN KEY (category) REFERENCES categories(name) ON DELETE CASCADE
);
INSERT INTO games (name, release_date, category, developer) VALUES 
('Apex Legends', '2019-02-04', 'FPS', 'EA');
`;
// CREATE TABLE IF NOT EXISTS developers(id SERIAL PRIMARY KEY, name TEXT NOT NULL);
// INSERT INTO developers(name) VALUES ('EA');

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}
main();
// TBA:

// SELECT * FROM developers;
