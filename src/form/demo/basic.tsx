import '../style/index.tsx';
import Form from '..';

export default () => (
  <Form
    initialValues={{ username: '', email: '' }}
    onFinish={(values) => {
      console.log('表单提交:', values);
    }}
    onFinishFailed={(errorInfo) => {
      console.log('提交失败:', errorInfo);
    }}
  >
    <div style={{ marginBottom: 16 }}>
      <label>用户名：</label>
      <input type="text" name="username" />
    </div>
    <div style={{ marginBottom: 16 }}>
      <label>邮箱：</label>
      <input type="email" name="email" />
    </div>
    <button type="submit">提交</button>
  </Form>
);