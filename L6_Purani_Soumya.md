<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->

# Activity / Lab / Assignment / Project Title

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

* *Date Created*: 17 Mar 2024 
* *Last Modification Date*: 18 Mar 2024
* *Lab URL*: <http://example.com/>
* *Git URL*: https://git.cs.dal.ca/purani/csci-3172.git

## Authors

**[Optional]** If what is being submitted is an individual Lab or Assignment, you may simply include your name and email address. Otherwise list the members of your group.

* [Soumya Purani](sm841586@dal.ca) 


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds
**

## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implement, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

### App.JS

*Lines 9 - 58*

```
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

```

The code above was created by adapting the code in [React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/overview) as shown below: 

```
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;

```

- <!---How---> The code in [NAME](link) was implemented by...
It was a basic fields for email and password
- <!---Why---> [NAME](link)'s Code was used because...
To learn implementing a form in react
- <!---How---> [NAME](link)'s Code was modified by...
I created my own signup form using the knowledge and changing the code a bit


## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
