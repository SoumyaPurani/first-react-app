import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form className="Form">

          <Form.Group controlId="FormBasicText">
            <Form.Text>
              Sign Up Form
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name   </Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name   </Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address   </Form.Label>
            <Form.Control type="email" placeholder="Enter Email Address" />
          </Form.Group>

          <Form.Group controlId="formBasicDOB">
            <Form.Label>Date of Birth   </Form.Label>
            <Form.Control type="date" placeholder="Enter DOB" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password    </Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Gender    </Form.Label>
            <Form.Select>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </header>
    </div>
  );
}

export default App;
