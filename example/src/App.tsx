import './App.css';
// import "delta-ui-demo/esm/alert/style/index.js";// 提示需要安装less
import { Alert } from '@delta-ui-react';
import "@delta-ui-react/alert/style/index.less";
function App () {
  // const [count,setCount] = useState(0);

  return (
    <>
      <Alert kind='warning'>123</Alert>
    </>
  );
}

export default App;
