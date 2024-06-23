const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());

const client = new MongoClient('mongodb+srv://admin:admin@cluster0.q2zogdl.mongodb.net/?retryWrites=true&w=majority');
client.connect();
const db = client.db('Subhiksha');
const col = db.collection('Registration');
const studentcol=db.collection('Students');
const eventcol=db.collection('Events');


app.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await col.findOne({ username });
      if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      res.status(200).json(user);
  
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
  app.post('/register', async (req, res) => {
    try {
      const { username, email, phoneNumber, password, role } = req.body;
      const existingUser = await col.findOne({ username });
      if (existingUser) {
        return res.status(409).json({ error: 'Username already exists' });
      }
      await col.insertOne({ username, email, phoneNumber, password, role });
      res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

  
  app.post('/students',async (req, res) => {
    try {
      const { name, age, gender, disability, parentName, contactNumber, address, email } = req.body;
  
      if (!name || !age || !gender || !disability || !parentName || !contactNumber || !address) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
  
      const studentData = {
        name,
        age: parseInt(age),
        gender,
        disability,
        parentName,
        contactNumber,
        address,
        email: email || null,
        disabilityCertificate: req.file ? req.file.filename : null 
      };
  
      const result = await studentcol.insertOne(studentData);
      res.status(201).json({ message: 'Student registered successfully', studentId: result.insertedId });
    } catch (error) {
      console.error('Error registering student:', error);
      res.status(500).json({ message: 'Failed to register student' });
    }
  });

  
  app.get('/students', async (req, res) => {
    try {
      const students = await studentcol.find().toArray();
      if (students.length === 0) {
        return res.status(404).json({ message: 'No students found' });
      }
      res.status(200).json(students);
    } catch (error) {
      console.error('Error fetching students:', error);
      res.status(500).json({ message: 'Failed to fetch students' });
    }
  });

  app.post('/visits', async (req, res) => {
    try {
      const { organizationName, email, city, phoneNumber, visitDate } = req.body;
  
      if (!organizationName || !email || !city || !phoneNumber || !visitDate) {
        return res.status(400).json({ message: 'All fields are required' });
      }
        const newVisit = {
        organizationName,
        email,
        city,
        phoneNumber,
        visitDate,
        createdAt: new Date()
      };
  
      const result = await eventcol.insertOne(newVisit);
  
      if (result.acknowledged) {
        res.status(201).json({ message: 'Visit scheduled successfully' });
      } else {
        res.status(500).json({ message: 'Failed to schedule visit' });
      }
    } catch (error) {
      console.error('Error scheduling visit:', error);
      res.status(500).json({ message: 'An error occurred while scheduling the visit' });
    }
  });

  app.get('/visits', async (req, res) => {
    try {
      const visits = await eventcol.find().toArray();
      res.status(200).json(visits);
    } catch (error) {
      console.error('Error fetching visits:', error);
      res.status(500).json({ message: 'An error occurred while fetching visits' });
    }
  });
  
  app.listen(8081, () => {
    console.log('Server Running on port 8081');
  });
  