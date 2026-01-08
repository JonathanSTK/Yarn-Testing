import _ from 'lodash';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

console.log('Hello from dummy TypeScript repo!');
console.log('Lodash version:', _.VERSION);
console.log('Axios is ready to make HTTP requests');

// Simple example using lodash
const numbers: number[] = [1, 2, 3, 4, 5];
console.log('Sum:', _.sum(numbers));

// Example interface
interface User {
  id: number;
  name: string;
  email: string;
}

const exampleUser: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
};

console.log('Example user:', exampleUser);