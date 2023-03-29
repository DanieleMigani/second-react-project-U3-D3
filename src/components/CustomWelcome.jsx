import React from 'react';


function CustomWelcome( Jumbotron, Container) {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Benvenuti nel nostro shop online!</h1>
        <p>
          Qui troverete tutto ciò di cui avete bisogno per la vostra casa e il vostro giardino.
        </p>
      </Container>
    </Jumbotron>
  );
}

export default CustomWelcome;