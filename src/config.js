// I had issues with this but it is now working after I declared it with a const and exported it destructed.
const REACT_APP_API_BASE =
  process.env.REACT_APP_API_BASE || 'http://localhost:8000/';

export { REACT_APP_API_BASE };
