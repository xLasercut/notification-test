import {Header} from 'nhsuk-react-components';
import {useNavigate} from 'react-router-dom';

function HeaderComponent() {
  const navigate = useNavigate();

  function goHome(e: React.MouseEvent) {
      e.preventDefault()
      navigate('/notification-test/');
  }

  return (
    <Header>
      <Header.Container>
        <Header.Logo
          href=''
          onClick={goHome}
        />
        <Header.ServiceName
          href=''
          onClick={goHome}
        >
          Strategic Data Collection Service
        </Header.ServiceName>
      </Header.Container>
      <Header.Nav>
        <Header.NavItem href='' onClick={goHome} mobileOnly>
          Home
        </Header.NavItem>
        <Header.NavItem href='' onClick={goHome}>Home</Header.NavItem>
        <Header.NavItem href='' onClick={goHome}>Submit a File</Header.NavItem>
        <Header.NavItem href='' onClick={goHome}>Submission History</Header.NavItem>
        <Header.NavItem href='' onClick={e => {
            e.preventDefault()
            navigate('/notification-test/notification-settings')
        }}>
          Notification Settings
        </Header.NavItem>
      </Header.Nav>
    </Header>
  );
}

export default HeaderComponent;
