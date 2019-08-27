import { createBrowserHistory } from 'history'

export default createBrowserHistory({
  /* pass a configuration object here if needed */
  const history = createBrowserHistory();
 
// Get the current location.
const location = history.location;
 
// Listen for changes to the current location.
const unlisten = history.listen((location, action) => {
  // location is an object like window.location
  console.log(action, location.pathname, location.state);
});
 
// Use push, replace, and go to navigate around.
history.push('/viewprofile', { some: 'state' });
})