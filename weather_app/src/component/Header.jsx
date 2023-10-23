
import Clock from "./UI/Clock";
import { Button, Dropdown } from 'antd';
import { Link } from "react-router-dom";
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Setting
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Profile
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Logout
      </a>
    ),
  },
];

const Header = () => {

    
  return (
    <header className="container-fluid">
      <div className="top-header container">
        <Clock/>
      </div>
      <div className="bottom-header d-flex justify-content-around align-items-center">
        <nav className="navbar navbar-dark">
            <Link className="navbar-brand text-uppercase" to="/" >Weather</Link>
            <Link className="navbar-brand text-uppercase " to="/task" >task</Link>
        </nav>
        <div className="customer">
        <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow
      trigger={['click']}
    >
      <Button className="button-btn">Account</Button>
    </Dropdown>
        </div>
      </div>
    </header>
  );
}

export default Header;
