import {Card} from 'nhsuk-react-components';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='nhsuk-u-width-two-thirds'>
        <h1 className='nhsuk-heading-xl' data-test-id='heading-one'>
          Strategic Data Collection Service in the cloud (SDCS Cloud)
        </h1>
        <p className='nhsuk-body-l' data-test-id='welcome-text'>
          Welcome, User.
        </p>
        <p className='nhsuk-body-l' data-test-id='main-text'>
          This secure service allows you to submit large volumes of data into DPS, which will then
          ensure it is of the required standard before processing.
        </p>
      </div>
      <div className='nhsuk-grid-row'>
        <div className='nhsuk-grid-column-one-half'>
          <Card clickable data-test-id='submit-card'>
            <Card.Content>
              <Card.Heading>
                <Card.Link
                  href=''
                  onClick={e => {
                    e.preventDefault();
                  }}
                >
                  Submit a File
                </Card.Link>
              </Card.Heading>
              <Card.Description>Upload a new file for a submission</Card.Description>
            </Card.Content>
          </Card>
        </div>
        <div className='nhsuk-grid-column-one-half'>
          <Card clickable data-test-id='submission-history-card'>
            <Card.Content>
              <Card.Heading>
                <Link to='/notification-test/'>Submission History</Link>
              </Card.Heading>
              <Card.Description>View previous submissions</Card.Description>
            </Card.Content>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;
