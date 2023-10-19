import {useNavigate} from 'react-router-dom';
import {Button, Checkboxes, Fieldset} from 'nhsuk-react-components';

function NotificationSettings() {
  const navigate = useNavigate();

  function saveSettings(e: React.MouseEvent) {
    e.preventDefault();
    navigate('/notification-test/');
  }

  return (
    <div className='nhsuk-u-width-two-thirds'>
      <h1 className='nhsuk-heading-l' data-test-id='heading-one'>
        SDCS Cloud Notification Management
      </h1>
      <p className='nhsuk-body' data-test-id='welcome-text'>
        Select the notification you want to receive to your registered email account
      </p>
      <Fieldset aria-describedby='notification--hint'>
        <Fieldset.Legend>
          <h5>Notify me when:</h5>
        </Fieldset.Legend>
        <Checkboxes id='notification' name='notification'>
          <Checkboxes.Box value='submission_window_open'>
            A collection submission window is open
          </Checkboxes.Box>
          <Checkboxes.Box value='submission_window_close'>
            A collection submission window is due to close
          </Checkboxes.Box>
          <Checkboxes.Box value='submission_processed'>
            The submission file has been processed
          </Checkboxes.Box>
          <Checkboxes.Box value='submission_summary_ready'>
            The submission summary extract is now available for download
          </Checkboxes.Box>
          <Checkboxes.Box value='post_deadline_ready'>
            The post-deadline submission extract is ready for request
          </Checkboxes.Box>
          <Checkboxes.Box value='extract_can_be_downloaded'>
            A requested submission extract is available for download
          </Checkboxes.Box>
        </Checkboxes>
      </Fieldset>

      <Fieldset aria-describedby='notification-mid-window--hint'>
        <Fieldset.Legend>
          <h5>Notifications that apply to the Maternity Data Service Collection only</h5>
        </Fieldset.Legend>
        <Checkboxes id='notification-mid-window' name='notification-mid-window'>
          <Checkboxes.Box value='mid_window_close'>
            Provisional processing deadline for submission extracts is due
          </Checkboxes.Box>
          <Checkboxes.Box value='mid_window_ready'>
            Provisional processing submission extracts are ready for request
          </Checkboxes.Box>
        </Checkboxes>
      </Fieldset>

      <Button onClick={saveSettings}>Save</Button>
    </div>
  );
}

export default NotificationSettings;
