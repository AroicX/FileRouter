<script>
  import {
    LOG_USER_IN
  } from '../utilis/actions.js'
  import {
    isEmpty
  } from '../utilis/validation.js'
  let title = 'Login';
  let email = 'umar@schoolmo.ng';
  let password = 'welcome';
  let error = '';




  function login() {
    const payload = {
      email,
      password
    }

    const callback = user => {
      localStorage.currentUser = JSON.stringify({
        token: user.token,
        user: user.user,
      });
      if (localStorage.currentUser) {
        window.location = '/app';
      }
    }

    const onError = err => {
      error = err.message
    }

    LOG_USER_IN(email, password, callback, onError);
  }
</script>


<style>
  .no-padding {
    padding: auto !important;
  }

  .text-danger {
    color: firebrick;
  }
</style>


<svelte:head>
  <title>Login</title>
</svelte:head>



<main class="dark-bg-color">

  <div class="login-form sch-col-md-12 sch-col-sm-12 sch-md-m-x-0 ">

    <div class="schoolmo-logo">
      <p> School<span>mo</span></p>
    </div>
    <div class="wrapper login-form-wrapper">

      <p class="login-form-wrapper-p ">Log in to your account</p>

      <form on:submit|preventDefault={login}>
        <div class="bx--form-item">
          <p> <span class="text-danger"> {error}</span></p>
        </div>
        <div class="bx--form-item">
          <label for="text-input-3" class="bx--label ">Email</label>
          <input id="text-input-3" type="email " class="bx--text-input" bind:value={email}
            placeholder="augsbyaccess@gmail.com ">

        </div>
        <div class="bx--form-item ">
          <label for="text-input-3 " class="bx--label ">Password</label>
          <input id="text-input-3 " type="password" class="bx--text-input " bind:value={password}
            placeholder="************** ">
        </div>

        <div class="bx--form-item ">
          <button class="bx--btn bx--btn--primary no-padding" type="submit">Continue</button>
        </div>


      </form>
      <div class="bx--col-lg-6 sch-col-md-5 bx--col-sm-6  sch-col-sm-12   bx--col-md-6 ">
        <p><a href={null}>Forgot password ?</a></p>
      </div>
    </div>



    <hr class="bx--form-item line ">

    <div class="bx--row form-padding ">
      <div class="bx--col-lg-12 ">
        <p>Don't have an account yet ? &nbsp; &nbsp;<a href={null}>Creat an account</a> </p>
      </div>
    </div>

  </div>



</main>