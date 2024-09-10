<template>
<div class="container">
    <div class="main">
      <div class="header">
      <h1>LOGIN</h1>
      <h4>Please login to continue <span>Keep</span></h4>
    </div>
    <div class="footer">
        <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish" @finishFailed="onFinishFailed">
            <a-form-item label="Username" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
                <a-input v-model:value="formState.username">
                    <template #prefix>
                        <UserOutlined class="site-form-item-icon" />
                    </template>
                </a-input>
            </a-form-item>

            <a-form-item label="Password" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
                <a-input-password v-model:value="formState.password">
                    <template #prefix>
                        <LockOutlined class="site-form-item-icon" />
                    </template>
                </a-input-password>
            </a-form-item>

            <a-form-item>
                <a-form-item name="remember" no-style>
                    <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                </a-form-item>
                <a class="login-form-forgot" href="">Forgot password</a>
            </a-form-item>

            <a-form-item>
                <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
                    Log in
                </a-button>
                Or
                <RouterLink to="/auth/register">register now!</RouterLink>
          </a-form-item>
        </a-form>
    </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import {
    reactive,
    computed
} from 'vue';
import {
    UserOutlined,
    LockOutlined
} from '@ant-design/icons-vue';
import { RouterLink } from 'vue-router';
interface FormState {
    username: string;
    password: string;
    remember: boolean;
}
const formState = reactive < FormState > ({
    username: '',
    password: '',
    remember: true,
});
const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
    return !(formState.username && formState.password);
});
</script>

<style scoped lang="scss">
.container{
  margin-top: 5rem;

  .main{
    padding: 5rem 2rem;
    width: 50%;
    margin: auto;
    border: 0.1rem solid #34495e;
    border-radius: 2rem;
    .header{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      text-align: center;
      margin-bottom: 2rem;
      h1{
        font-size: 4.5rem;
        color:#34495e;

      }
      h4{
        font-weight: 400;
        font-style: italic;
        span{
          color: #f1c40f;
        }
      }

    }
    .footer{
      width: 40%;
      margin: auto;
      display: flex;
      flex-direction: column;
      gap: 2rem;

    }


    #components-form-demo-normal-login .login-form {
      max-width: 300px;
    }

    #components-form-demo-normal-login .login-form-forgot {
        float: right;
    }

    #components-form-demo-normal-login .login-form-button {
        width: 100%;
    }
  }
  
}
</style>
