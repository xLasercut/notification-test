import {useNavigate} from 'react-router-dom';
import {Button, Checkboxes, Fieldset} from 'nhsuk-react-components';
import {useContext, useState} from 'react';
import {
  NotificationSettingsContext,
  INotificationSettings,
} from '../context/NotificationSettingsContext.tsx';

function NotificationSettings() {
  const navigate = useNavigate();

  const [parentNotificationSettings, setParentNotificationSettings] = useContext(
    NotificationSettingsContext
  );
  const [notificationSettings, setNotificationSettings] = useState<INotificationSettings>(
    parentNotificationSettings
  );

  function saveSettings(e: React.MouseEvent) {
    e.preventDefault();
    setParentNotificationSettings(notificationSettings);
    navigate('/notification-test/');
  }

  const NORMAL_NOTIFICATIONS: {[key: string]: string} = {
    submissionWindowOpen: 'A collection submission window is open',
    submissionWindowClose: 'A collection submission window is due to close',
    submissionProcessed: 'The submission file has been processed',
    submissionSummaryReady: 'The submission summary extract is now available for download',
    postDeadlineReady: 'The post-deadline submission extract is ready for request',
    extractCanBeDownloaded: 'A requested submission extract is available for download',
  };

  const MSDS_NOTIFICATIONS: {[key: string]: string} = {
    midWindowClose: 'Provisional processing deadline for submission extracts is due',
    midWindowReady: 'Provisional processing submission extracts are ready for request',
  };

  const notifications = Object.keys(NORMAL_NOTIFICATIONS).map(key => {
    function updateFilter() {
      const updatedSettings = {...notificationSettings};
      updatedSettings[key] = !updatedSettings[key];
      setNotificationSettings(updatedSettings);
    }

    return (
      <Checkboxes.Box key={key} checked={notificationSettings[key]} onChange={updateFilter}>
        {NORMAL_NOTIFICATIONS[key]}
      </Checkboxes.Box>
    );
  });

  const msdsNotifications = Object.keys(MSDS_NOTIFICATIONS).map(key => {
    function updateFilter() {
      const updatedSettings = {...notificationSettings};
      updatedSettings[key] = !updatedSettings[key];
      setNotificationSettings(updatedSettings);
    }

    return (
      <Checkboxes.Box key={key} checked={notificationSettings[key]} onChange={updateFilter}>
        {MSDS_NOTIFICATIONS[key]}
      </Checkboxes.Box>
    );
  });

  return (
    <div className='nhsuk-u-width-full'>
      <h1 className='nhsuk-heading-l' data-test-id='heading-one'>
        SDCS Cloud Notification Management
      </h1>
      <p className='nhsuk-body' data-test-id='welcome-text'>
        Select the notification you want to receive to the email registered to your account
      </p>
      <Fieldset aria-describedby='notification--hint'>
        <Fieldset.Legend>
          <b>Notify me when:</b>
        </Fieldset.Legend>
        <Checkboxes id='notification' hint='Select all that apply' name='notification'>
          {notifications}
        </Checkboxes>
      </Fieldset>

      <Fieldset aria-describedby='notification-mid-window--hint'>
        <Fieldset.Legend>
          <b>Notifications that apply to the Maternity Data Service Collection only</b>
        </Fieldset.Legend>
        <Checkboxes id='notification-mid-window' hint='Select all that apply' name='notification-mid-window'>
          {msdsNotifications}
        </Checkboxes>
      </Fieldset>

      <Button onClick={saveSettings}>Save</Button>
    </div>
  );
}

export default NotificationSettings;
