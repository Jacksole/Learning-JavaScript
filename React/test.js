function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Le Aundre',
    lastName: 'Jackson'
  };
  
  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
  
  ReactDOM.render(
    element,
    document.getElementById('root')
  );