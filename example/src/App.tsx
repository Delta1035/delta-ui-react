// import { useState } from 'react';
import './App.css';
import { Alert } from 'delta-ui-demo';
import "delta-ui-demo/esm/alert/style/css.js";
// import "delta-ui-demo/esm/alert/style/index.js";// 提示需要安装less
function App () {
  // const [count,setCount] = useState(0);

  return (
    <>
      <Alert kind='warning'>123</Alert>
    </>
  );
}

export default App;
