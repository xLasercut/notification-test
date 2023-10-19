import {Header} from 'nhsuk-react-components';

function HeaderComponent() {
  return (
    <Header>
      <Header.Container>
        <Header.Logo href='/' />
        <Header.ServiceName href='/'>Strategic Data Collection Service</Header.ServiceName>
      </Header.Container>
      <Header.Nav>
        <Header.NavItem href='/' mobileOnly>
          Home
        </Header.NavItem>
        <Header.NavItem href='/'>Home</Header.NavItem>
        <Header.NavItem href='/'>Submit a File</Header.NavItem>
        <Header.NavItem href='/'>Submission History</Header.NavItem>
        <Header.NavItem href='/notification-settings'>Notification Settings</Header.NavItem>
      </Header.Nav>
    </Header>
  );
}

export default HeaderComponent;
