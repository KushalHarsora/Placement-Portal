import { createRequire } from 'module';
const require = createRequire(import.meta.url);const { express } = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { Client } = require('pg');
const db = require('./models');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

const client = new Client({
    host: process.env.HOST,
    port: 5432,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

client.connect();

db.sequlize.sync().then(async (req) => {
    try {
      
        const userCount = await User.count();
  
        if (userCount === 0) {
          
          await User.create({
            email_id: 'test@somaiya.edu',
            password: await bcrypt.hash('test@1234', 10),
          });
  
          console.log('Default user created successfully!');
        }
  
        serverLogger.info(`Connected to database ${req.config.database}`);
        console.log('Connected to PostgresSQL database');
      } catch (error) {
        console.error('Error creating default user: OR User already exists');
      }

      const PORT = 5000;

      app.listen(PORT, () => {
        serverLogger.info(`Server started running at port ${PORT}`);
        console.log(`Server started running at port ${PORT}`);
      });
});