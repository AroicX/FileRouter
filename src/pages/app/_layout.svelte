<script>
  import {
    onMount
  } from "svelte";
  import {
    SET_TERM,
    STORAGE_TOKEN
  } from "../../store.js";
  import {
    TERMS
  } from "../../utilis/actions.js";

  let title;
  let activePage = '';
  let token = null;

  onMount(() => {

    const ls = JSON.parse(localStorage.getItem("currentUser"));
    token = ls.token;
    STORAGE_TOKEN.set(token);
    getTerms();


  })





  const getTerms = () => {

    const callback = res => {
      SET_TERM.set(res.data)
    }

    const onError = err => {
      console.error(err);
    }

    TERMS(token, callback, onError);

  }
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<main>
  <nav class=" bx--cloud-header sch-nav">
    <div class="bx--cloud-header__wrapper ">

      <a href="/" class=" schoolmo-logo ">
        <svg width="96" height="19" viewBox="0 0 96 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.544 18.288C6.44 18.288 5.44 18.104 4.544 17.736C3.648 17.368 2.88 16.816 2.24 16.08C1.616 15.344 1.128 14.44 0.776 13.368C0.424 12.296 0.248 11.048 0.248 9.624C0.248 8.216 0.424 6.976 0.776 5.904C1.128 4.816 1.616 3.904 2.24 3.168C2.88 2.432 3.648 1.88 4.544 1.512C5.44 1.144 6.44 0.959999 7.544 0.959999C8.648 0.959999 9.648 1.144 10.544 1.512C11.44 1.88 12.208 2.432 12.848 3.168C13.488 3.904 13.976 4.816 14.312 5.904C14.664 6.976 14.84 8.216 14.84 9.624C14.84 11.048 14.664 12.296 14.312 13.368C13.976 14.44 13.488 15.344 12.848 16.08C12.208 16.816 11.44 17.368 10.544 17.736C9.648 18.104 8.648 18.288 7.544 18.288ZM7.544 15.48C8.744 15.48 9.696 15.08 10.4 14.28C11.12 13.48 11.48 12.36 11.48 10.92V8.328C11.48 6.888 11.12 5.768 10.4 4.968C9.696 4.168 8.744 3.768 7.544 3.768C6.344 3.768 5.384 4.168 4.664 4.968C3.96 5.768 3.608 6.888 3.608 8.328V10.92C3.608 12.36 3.96 13.48 4.664 14.28C5.384 15.08 6.344 15.48 7.544 15.48ZM17.9619 18V5.472H21.0339V7.56H21.1539C21.4099 6.888 21.8099 6.328 22.3539 5.88C22.9139 5.416 23.6819 5.184 24.6579 5.184C25.9539 5.184 26.9459 5.608 27.6339 6.456C28.3219 7.304 28.6659 8.512 28.6659 10.08V18H25.5939V10.392C25.5939 9.496 25.4339 8.824 25.1139 8.376C24.7939 7.928 24.2659 7.704 23.5299 7.704C23.2099 7.704 22.8979 7.752 22.5939 7.848C22.3059 7.928 22.0419 8.056 21.8019 8.232C21.5779 8.392 21.3939 8.6 21.2499 8.856C21.1059 9.096 21.0339 9.384 21.0339 9.72V18H17.9619Z"
            fill="white" />
          <path
            d="M32.3633 1.248H40.1153C40.8033 1.248 41.4193 1.352 41.9633 1.56C42.5233 1.768 42.9953 2.056 43.3793 2.424C43.7633 2.792 44.0513 3.248 44.2433 3.792C44.4513 4.32 44.5553 4.904 44.5553 5.544C44.5553 6.184 44.4673 6.728 44.2913 7.176C44.1313 7.608 43.9073 7.968 43.6193 8.256C43.3473 8.544 43.0273 8.76 42.6593 8.904C42.3073 9.048 41.9393 9.128 41.5553 9.144V9.288C41.9233 9.288 42.3153 9.36 42.7313 9.504C43.1633 9.648 43.5553 9.88 43.9073 10.2C44.2753 10.504 44.5793 10.904 44.8193 11.4C45.0593 11.88 45.1793 12.48 45.1793 13.2C45.1793 13.872 45.0673 14.504 44.8433 15.096C44.6353 15.672 44.3393 16.176 43.9553 16.608C43.5713 17.04 43.1153 17.384 42.5873 17.64C42.0593 17.88 41.4833 18 40.8593 18H32.3633V1.248ZM35.5313 15.312H39.9473C40.5553 15.312 41.0273 15.16 41.3633 14.856C41.6993 14.536 41.8673 14.08 41.8673 13.488V12.672C41.8673 12.08 41.6993 11.624 41.3633 11.304C41.0273 10.984 40.5553 10.824 39.9473 10.824H35.5313V15.312ZM35.5313 8.232H39.4433C40.0193 8.232 40.4673 8.08 40.7873 7.776C41.1073 7.456 41.2673 7.016 41.2673 6.456V5.712C41.2673 5.152 41.1073 4.72 40.7873 4.416C40.4673 4.096 40.0193 3.936 39.4433 3.936H35.5313V8.232ZM53.1534 18.288C52.2574 18.288 51.4494 18.136 50.7294 17.832C50.0254 17.528 49.4174 17.088 48.9054 16.512C48.4094 15.936 48.0254 15.248 47.7534 14.448C47.4814 13.632 47.3454 12.72 47.3454 11.712C47.3454 10.704 47.4814 9.8 47.7534 9C48.0254 8.2 48.4094 7.52 48.9054 6.96C49.4174 6.384 50.0254 5.944 50.7294 5.64C51.4494 5.336 52.2574 5.184 53.1534 5.184C54.0494 5.184 54.8574 5.336 55.5774 5.64C56.2974 5.944 56.9054 6.384 57.4014 6.96C57.9134 7.52 58.3054 8.2 58.5774 9C58.8494 9.8 58.9854 10.704 58.9854 11.712C58.9854 12.72 58.8494 13.632 58.5774 14.448C58.3054 15.248 57.9134 15.936 57.4014 16.512C56.9054 17.088 56.2974 17.528 55.5774 17.832C54.8574 18.136 54.0494 18.288 53.1534 18.288ZM53.1534 15.816C53.9694 15.816 54.6094 15.568 55.0734 15.072C55.5374 14.576 55.7694 13.848 55.7694 12.888V10.56C55.7694 9.616 55.5374 8.896 55.0734 8.4C54.6094 7.904 53.9694 7.656 53.1534 7.656C52.3534 7.656 51.7214 7.904 51.2574 8.4C50.7934 8.896 50.5614 9.616 50.5614 10.56V12.888C50.5614 13.848 50.7934 14.576 51.2574 15.072C51.7214 15.568 52.3534 15.816 53.1534 15.816ZM71.0248 18C70.3528 18 69.8168 17.808 69.4168 17.424C69.0328 17.024 68.7928 16.496 68.6968 15.84H68.5528C68.3448 16.656 67.9208 17.272 67.2808 17.688C66.6408 18.088 65.8488 18.288 64.9048 18.288C63.6248 18.288 62.6408 17.952 61.9528 17.28C61.2648 16.608 60.9208 15.712 60.9208 14.592C60.9208 13.296 61.3848 12.336 62.3128 11.712C63.2408 11.072 64.5608 10.752 66.2728 10.752H68.4088V9.84C68.4088 9.136 68.2248 8.592 67.8568 8.208C67.4888 7.824 66.8968 7.632 66.0808 7.632C65.3608 7.632 64.7768 7.792 64.3288 8.112C63.8968 8.416 63.5288 8.784 63.2248 9.216L61.4008 7.584C61.8648 6.864 62.4808 6.288 63.2488 5.856C64.0168 5.408 65.0328 5.184 66.2968 5.184C67.9928 5.184 69.2808 5.568 70.1608 6.336C71.0408 7.104 71.4808 8.208 71.4808 9.648V15.552H72.7288V18H71.0248ZM65.9368 16.056C66.6248 16.056 67.2088 15.904 67.6888 15.6C68.1688 15.296 68.4088 14.848 68.4088 14.256V12.6H66.4408C64.8408 12.6 64.0408 13.112 64.0408 14.136V14.544C64.0408 15.056 64.2008 15.44 64.5208 15.696C64.8568 15.936 65.3288 16.056 65.9368 16.056ZM75.3151 18V5.472H78.3871V8.064H78.5071C78.5871 7.728 78.7071 7.408 78.8671 7.104C79.0431 6.784 79.2671 6.504 79.5391 6.264C79.8111 6.024 80.1311 5.832 80.4991 5.688C80.8831 5.544 81.3231 5.472 81.8191 5.472H82.4911V8.376H81.5311C80.4911 8.376 79.7071 8.528 79.1791 8.832C78.6511 9.136 78.3871 9.632 78.3871 10.32V18H75.3151ZM92.4957 15.912H92.3757C92.1517 16.632 91.7277 17.208 91.1037 17.64C90.4797 18.072 89.7517 18.288 88.9197 18.288C87.3357 18.288 86.1197 17.72 85.2717 16.584C84.4397 15.448 84.0237 13.824 84.0237 11.712C84.0237 9.616 84.4397 8.008 85.2717 6.888C86.1197 5.752 87.3357 5.184 88.9197 5.184C89.7517 5.184 90.4797 5.4 91.1037 5.832C91.7277 6.248 92.1517 6.816 92.3757 7.536H92.4957V0.24H95.5677V18H92.4957V15.912ZM89.9037 15.744C90.6397 15.744 91.2557 15.568 91.7517 15.216C92.2477 14.864 92.4957 14.36 92.4957 13.704V9.72C92.4957 9.112 92.2477 8.624 91.7517 8.256C91.2557 7.888 90.6397 7.704 89.9037 7.704C89.1037 7.704 88.4557 7.976 87.9597 8.52C87.4797 9.048 87.2397 9.76 87.2397 10.656V12.816C87.2397 13.712 87.4797 14.424 87.9597 14.952C88.4557 15.48 89.1037 15.744 89.9037 15.744Z"
            fill="#0F62FE" />
        </svg>

      </a>

    </div>
    <div class="bx--cloud-header">
      <ul class="bx--cloud-header-list  ">
        <li class="sch-Onboard-app   ">
          SchoolMo Onboarding Application

        </li>
      </ul>
    </div>
    <div class="bx--cloud-header-right ">
      <ul class="bx--cloud-header-list  ">
        <a href={null}>
          <li class="bx--cloud-header-list__item bx--cloud-header-list__item--icon ">
            Logout
            <svg width="24 " height="24 " viewBox="0 0 24 24 " fill="none " xmlns="http://www.w3.org/2000/svg "
              class="logout-svg">
              <path
                d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9 "
                stroke="white " stroke-width="2 " stroke-linecap="round" stroke-linejoin="round " />
              <path d="M16 17L21 12L16 7 " stroke="white " stroke-width="2 " stroke-linecap="round "
                stroke-linejoin="round " />
              <path d="M21 12H9 " stroke="white " stroke-width="2 " stroke-linecap="round " stroke-linejoin="round " />
            </svg>

          </li>
        </a>
        <a href={null}>
          <li class="bx--cloud-header-list__item bx--cloud-header-list__item--icon menu-list-element ">
            <svg width="27 " height="28 " viewBox="0 0 27 28 " fill="none " xmlns="http://www.w3.org/2000/svg ">
              <title>notifications</title>
              <path
                d="M21 12C21 10.4087 20.3679 8.88258 19.2426 7.75736C18.1174 6.63214 16.5913 6 15 6C13.4087 6 11.8826 6.63214 10.7574 7.75736C9.63214 8.88258 9 10.4087 9 12C9 19 6 21 6 21H24C24 21 21 19 21 12Z "
                stroke="white" stroke-width="2 " stroke-linecap="round " stroke-linejoin="round " />
              <path
                d="M16.73 25C16.5542 25.3031 16.3019 25.5547 15.9982 25.7295C15.6946 25.9044 15.3504 25.9965 15 25.9965C14.6496 25.9965 14.3054 25.9044 14.0018 25.7295C13.6982 25.5547 13.4458 25.3031 13.27 25 "
                stroke="white " stroke-width="2" stroke-linecap="round " stroke-linejoin="round " />
              <circle cx="8 " cy="8 " r="8 " fill="#F25C78" />
              <path
                d="M5.80859 11H4.66113V6.39062C4.66113 5.84049 4.67415 5.4043 4.7002 5.08203C4.62533 5.16016 4.53255 5.24642 4.42188 5.34082C4.31445 5.43522 3.94987 5.7347 3.32812 6.23926L2.75195 5.51172L4.85156 3.86133H5.80859V11ZM12.9912 11H8.15234V10.1309L9.99316
                        8.28027C10.5368 7.72363 10.8965 7.32975 11.0723 7.09863C11.2513 6.86426 11.3815 6.64453 11.4629 6.43945C11.5443 6.23438 11.585 6.01465 11.585 5.78027C11.585 5.45801 11.4873 5.2041 11.292 5.01855C11.0999 4.83301 10.833 4.74023 10.4912 4.74023C10.2178 4.74023
                        9.95247 4.79069 9.69531 4.8916C9.44141 4.99251 9.14681 5.1748 8.81152 5.43848L8.19141 4.68164C8.58854 4.34635 8.97428 4.10872 9.34863 3.96875C9.72298 3.82878 10.1217 3.75879 10.5449 3.75879C11.209 3.75879 11.7412 3.93294 12.1416 4.28125C12.542 4.6263
                        12.7422 5.0918 12.7422 5.67773C12.7422 6 12.6836 6.30599 12.5664 6.5957C12.4525 6.88542 12.2751 7.1849 12.0342 7.49414C11.7965 7.80013 11.3994 8.21517 10.8428 8.73926L9.60254 9.94043V9.98926H12.9912V11Z "
                fill="white " />
            </svg>

          </li>
        </a>

        <li class="bx--cloud-header-list__item bx--cloud-header-list__item--icon ">
          <button class="bx--cloud-header-list__btn " type="button ">
            <svg class="bx--cloud-header__user-icon " viewBox="0 0 24 24 ">
              <title>user</title>
              <path
                d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 4.6c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm7 14.5c-1.8 1.8-4.3 2.9-7 2.9s-5.2-1.1-7-2.9v-1.6c0-1.3.7-2 2-2h10c1.3 0 2 .7 2 2v1.6z " />
            </svg>
          </button>
        </li>
        <li class="bx--cloud-header-list__item bx--cloud-header-list__item--icon ">
          <div class="dropdown ">

            <button class="dropbtn ">Dropdown

            </button>
            <div class="dropdown-content ">
              <a href="# ">Link 1</a>
              <a href="# ">Link 2</a>
              <a href="# ">Link 3</a>
            </div>
          </div>
          <svg width="16 " height="16 " viewBox="0 0 16 16 " fill="none " xmlns="http://www.w3.org/2000/svg ">
            <path fill-rule="evenodd " clip-rule="evenodd " d="M11.5 6L8 10L4.5 6H11.5Z " fill="white " />
            <mask id="mask0 " mask-type="alpha "  x="4 " y="6 " width="8 " height="4 ">
              <path fill-rule="evenodd " clip-rule="evenodd " d="M11.5 6L8 10L4.5 6H11.5Z " fill="white " />
            </mask>
            <g mask="url(#mask0) ">
            </g>
          </svg>

        </li>
      </ul>
    </div>
  </nav>

  <div class="sch-mobile-nav" id="mobileNav">
    <a href="#home" class="mobile-active">Onboard</a>
    <a href="#news">Notification</a>
    <a href="#contact">Dashboard</a>
    <a href="#contact">Users</a>
    <a href="#contact">Schools</a>
    <div class="mobile-nav-dropdown">
      <button class="mobile-nav-dropbtn">Settings
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="mobile-nav-dropdown-content">
        <a href={null}>Account</a>
        <a href={null}>Profile</a>
        <a href={null}>Security</a>
      </div>
    </div>
    <a href="#about">About</a>
    <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="mobileNavbar()">&#9776;</a>
  </div>
  <section class="section-wrapper ">
    <div class="sch-row ">
      <div class="sch-col-lg-2 ">
        <div class="  bx--side-nav__navigation sch-side-nav-bg ">
          <div class=" bx--side-nav__navigation">
            <ul class=" " id="side-nav">
              <li class="  sch-m-t">
                <a href="/app" class="side-nav-a active">
                  <i data-feather="calendar">

                  </i> <span> Dashboard </span>
                </a>
              </li>
              <li class=" sch-m-y ">
                <a href="/app/schools" class=" side-nav-a ">
                  <i data-feather="file-text">

                  </i> <span> Schools </span>
                </a>
              </li>


              <li class="  sch-m-y  ">
                <a href={null} class="side-nav-a ">
                  <i data-feather="users">

                  </i><span> Users</span>

                </a>
              </li>

              <nav class='sch-side-nav sch-m-y '>
                <ul class=" ">
                  <li class='sub-menu'>
                    <a href='#settings' class="side-nav-a "> <i data-feather="settings">

                      </i><span>Settings</span>
                      <div class='fa right'></div>
                    </a>
                    <ul class="sch-side-dropdwn-items ">
                      <li class="sch-side-dropdwn-items sch-drop-color"><a href='#settings'>Account</a>
                      </li>
                      <li class="sch-side-dropdwn-items sch-drop-color"><a href='#settings'>Profile</a></li>
                      <li class="sch-side-dropdwn-items sch-drop-color"><a href='#settings'>Secruity </a></li>
                      <li class="sch-side-dropdwn-items sch-drop-color"><a href='#settings'>Password</a></li>
                      <li class="sch-side-dropdwn-items sch-drop-color"><a href='#settings'>Notification</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>

            </ul>



          </div>

        </div>

      </div>

      <div class="sch-col-lg-10 sch-col-sm-12 sch-col-md-12 ">
        <div class="sch-row d-m-top-1 sch-sm-pl">
          <div class="sch-col-lg-dash-9 sch-dashboard-name  ">
            <div class="sch-row sch-top-btn">
              <div class="sch-col-lg-1  ">
                <p class="sch-schools-name">{title} |</p>
              </div>
              <div class="sch-col-lg-7 sch-dropbtn-align sch-m-x sch-pl-1">
                <!-- <h2>Primary school</h2> -->
              </div>
              <div class="sch-col-lg-12 sch-col-md-12 sch-col-sm-12">
                <!-- <p>Manage all school data and information here.</p> -->
              </div>
            </div>
          </div>
          <div class="sch-col-lg-2 sch-top-btn sch-sm-p-y ">
            <button class="bx--btn btn-primary bx--btn--field" type="button ">
              Onboard School &nbsp; &nbsp;

            </button>

          </div>
        </div>


        <slot  />

      </div>

    </div>


  </section>





</main>