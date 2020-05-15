<script>
  import {
    LOG_USER_IN
  } from '../utilis/actions.js'
  import {
    isEmpty
  } from '../utilis/validation.js'
  import {
    goto
  } from "@sveltech/routify"
    import {
    onMount
  } from "svelte";

  
  let title = 'Login';
  let email = 'umar@schoolmo.ng';
  let password = 'welcome';
  let error = '';


  onMount(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem("currentUser"));

    if (isLoggedIn) {
      $goto('/app')
    }



  });

  function login() {
    const payload = {
      email,
      password
    }


    const callback = user => {

      localStorage.currentUser = JSON.stringify({
        user: user.user,

      });
      localStorage.token = JSON.stringify({
        token: user.token,

      });

      if (localStorage.currentUser) {
        $goto('/app');
      }


    }

    const onError = err => {
      error = err.message

    }

    LOG_USER_IN(email, password, callback, onError);


  }
</script>


<style>

</style>


<svelte:head>
  <title>Login</title>
</svelte:head>

<main>
  <div class="signin-wrapper">

    <div class="signin-box">
      <h2 class="slim-logo"><a href="/">Schoolmo<span>.</span></a></h2>
      <h2 class="signin-title-primary">Welcome back!</h2>
      <h3 class="signin-title-secondary">Sign in to continue.</h3>
      <form on:submit|preventDefault={login}>



        <p> <span class="text-danger"> {error}</span></p>

        <div class="form-group">
          <input type="text" class="form-control" bind:value={email} placeholder="Enter your email" required />
        </div><!-- form-group -->
        <div class="form-group mg-b-50">
          <input type="password" class="form-control" bind:value={password} placeholder="Enter your password"
            required />
        </div><!-- form-group -->

        <button class="btn btn-primary btn-block btn-signin" type="submit">Sign In</button>
      </form>

      <!-- <p class="mg-b-0">Don't have an account? <a href="/app">Sign Up</a></p> -->
    </div><!-- signin-box -->

  </div><!-- signin-wrapper -->

</main>