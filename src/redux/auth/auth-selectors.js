const getIsAuthenticated = state => state.auth.token;

const getUsername = state => state.auth.user.name;

// const getUsername = state => state.auth.user.name;

// const authSelectors = {
//   getIsLoggedIn,
//   getUsername,
// };
export default { getIsAuthenticated, getUsername };
