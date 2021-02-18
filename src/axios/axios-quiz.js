import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-b2210-default-rtdb.firebaseio.com/'
});