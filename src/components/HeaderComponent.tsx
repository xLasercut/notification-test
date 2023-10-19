import {Header} from 'nhsuk-react-components';

function HeaderComponent() {
  return (
    <Header>
      <Header.Container>
        <Header.Logo href='/notification-test/' />
        <Header.ServiceName href='/notification-test/'>Strategic Data Collection Service</Header.ServiceName>
      </Header.Container>
      <Header.Nav>
        <Header.NavItem href='/notification-test/' mobileOnly>
          Home
        </Header.NavItem>
        <Header.NavItem href='/notification-test/'>Home</Header.NavItem>
        <Header.NavItem href='/notification-test/'>Submit a File</Header.NavItem>
        <Header.NavItem href='/notification-test/'>Submission History</Header.NavItem>
        <Header.NavItem href='/notification-test/notification-settings'>Notification Settings</Header.NavItem>
      </Header.Nav>
    </Header>
  );
}

export default HeaderComponent;
