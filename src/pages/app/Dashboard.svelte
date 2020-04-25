<script>
    import {
        onMount
    } from "svelte";
    import {
        DASHBOARD
    } from "../../utilis/actions.js";
    import Loader from "../../components/Loader.svelte";


    let dashboard = [];
    let isLoading = null;





    onMount(() => {
        getDashboard();
    })

    function getDashboard() {
        isLoading = true;
        const ls = JSON.parse(localStorage.getItem("currentUser"));

        const callback = res => {
            isLoading = false;
            dashboard = res.data[0];
        }

        const onError = err => {
            console.error(err);
        }

        DASHBOARD(ls.token, callback, onError);
    }
</script>

<svelte:head>
    <title>Dashboard</title>
</svelte:head>



<main>

    <div class="sch-col-lg-10  sch-col-md-12 sch-col-sm-12">
        <div class="sch-row d-m-top">
            <div class="sch-col-lg-3 sch-col-md-4 sch-col-sm-4   ">
                <h4 class="sch-dashboard-name">Dashboard</h4>
            </div>
            <div class="sch-col-lg-card offset-3 sch-col-md-6 sch-col-sm-6 ">
                <button class="bx--btn btn-primary bx--btn--field" type="button ">
                    Onboard School &nbsp; &nbsp;
                    <svg focusable="false " preserveAspectRatio="xMidYMid meet " style="will-change: transform; "
                        xmlns="http://www.w3.org/2000/svg " class="bx--btn__icon " width="16 " height="16 "
                        viewBox="0 0 16 16 " aria-hidden="true" fill="#fff">
                        <path d="M9 7L9 3 7 3 7 7 3 7 3 9 7 9 7 13 9 13 9 9 13 9 13 7z "></path>
                    </svg>
                </button>

            </div>
        </div>
        <div class="sch-row d-m-top  ">
            <div class="sch-col-lg-3 sch-card-row sch-dashboard-name ">
                <p>Hi Augbs Access</p>
                <h2>Welcome back!!</h2>
            </div>



        </div>


        <div class="sch-row d-m-top sch-card--spc  ">
            <div class="sch-col-lg-card sch-col-md-10 sch-col-sm-11  sch-sm-p-y">
                <div class="bx--tile ">
                    <div class="sch-row  sch-m-t-1 ">
                        <div class="sch-col-lg-6  sch-col-sm-7 sch-col-md-7 ">
                            <p> Total number of Schools</p>
                        </div>
                        <div class="sch-col-lg-6 sch-col-sm-5 sch-align-s-e  ">
                            <svg width="65" height="40" viewBox="0 0 40 40" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#0F62FE"></circle>
                                <circle cx="20" cy="20" r="20" fill="url(#paint0_linear)"></circle>
                                <path
                                    d="M24.1666 27.5V25.8333C24.1666 24.9493 23.8155 24.1014 23.1903 23.4763C22.5652 22.8512 21.7174 22.5 20.8333 22.5H14.1666C13.2826 22.5 12.4347 22.8512 11.8096 23.4763C11.1845 24.1014 10.8333 24.9493 10.8333 25.8333V27.5"
                                    stroke="white" stroke-width="1.66667" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path
                                    d="M17.5 19.1667C19.341 19.1667 20.8334 17.6743 20.8334 15.8333C20.8334 13.9924 19.341 12.5 17.5 12.5C15.6591 12.5 14.1667 13.9924 14.1667 15.8333C14.1667 17.6743 15.6591 19.1667 17.5 19.1667Z"
                                    stroke="white" stroke-width="1.66667" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path
                                    d="M29.1667 27.4998V25.8332C29.1661 25.0946 28.9203 24.3771 28.4678 23.7934C28.0153 23.2097 27.3818 22.7928 26.6667 22.6082"
                                    stroke="white" stroke-width="1.66667" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path
                                    d="M23.3333 12.6082C24.0503 12.7917 24.6858 13.2087 25.1397 13.7934C25.5935 14.3781 25.8398 15.0972 25.8398 15.8373C25.8398 16.5775 25.5935 17.2966 25.1397 17.8812C24.6858 18.4659 24.0503 18.8829 23.3333 19.0665"
                                    stroke="white" stroke-width="1.66667" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <defs>
                                    <linearGradient id="paint0_linear" x1="55" y1="-10.5" x2="-20.5" y2="80"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#16FFD5"></stop>
                                        <stop offset="0.928315" stop-color="#0F62FE"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div class="sch-col-lg-12 sch-col-sm-12 sch-col-md-12 sch-m-y-2  ">
                            <h2 class="sch-txt-bold ">26,000</h2>

                        </div>
                        <div class="sch-col-lg-12 sch-col-sm-12 sch-col-md-12 sch-m-x-2  ">
                            <p class=" "><svg width="20 " height="20 " viewBox="0 0 20 20 " fill="none "
                                    xmlns="http://www.w3.org/2000/svg ">
                                    <path d="M18.3333 10H15L12.5 17.5L7.49996 2.5L4.99996 10H1.66663 " stroke="#14C7E4 "
                                        stroke-width="1.66667 " stroke-linecap="round " stroke-linejoin="round "></path>
                                </svg>
                                <span class="percentage-per-week ">3.6%</span> up from past week.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sch-col-lg-card sch-col-md-10 sch-col-sm-11 sch-sm-p-y ">
                <div class="bx--tile ">
                    <div class="sch-row  sch-m-t-1 ">
                        <div class="sch-col-lg-6  sch-col-sm-7 sch-col-md-7 ">
                            <p> Total number of Schools</p>
                        </div>
                        <div class="sch-col-lg-6 sch-col-sm-5 sch-align-s-e">
                            <svg width="65" height="41" viewBox="0 0 41 41" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20.5" cy="20.5" r="20.5" fill="url(#paint0_linear)"></circle>
                                <path
                                    d="M22.1542 10.8792H14.6375C14.1391 10.8792 13.6612 11.0771 13.3088 11.4295C12.9563 11.782 12.7584 12.2599 12.7584 12.7583V27.7917C12.7584 28.29 12.9563 28.768 13.3088 29.1204C13.6612 29.4728 14.1391 29.6708 14.6375 29.6708H25.9125C26.4109 29.6708 26.8889 29.4728 27.2413 29.1204C27.5937 28.768 27.7917 28.29 27.7917 27.7917V16.5167L22.1542 10.8792Z"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                                <path d="M22.1542 10.8792V16.5167H27.7917" stroke="white" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M24.0333 21.2146H16.5167" stroke="white" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M24.0333 24.9729H16.5167" stroke="white" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M18.3958 17.4563H17.4562H16.5167" stroke="white" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <defs>
                                    <linearGradient id="paint0_linear" x1="86.1" y1="-57.9125" x2="-21.0125" y2="82"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#16FF4A"></stop>
                                        <stop offset="0.928315" stop-color="#0FD3FE"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div class="sch-col-lg-12 sch-col-sm-12 sch-col-md-12 sch-m-y-2  ">
                            <h2 class="sch-txt-bold ">26,000</h2>

                        </div>
                        <div class="sch-col-lg-12 sch-m-x-2 ">
                            <p class=" "><svg width="20 " height="20 " viewBox="0 0 20 20 " fill="none "
                                    xmlns="http://www.w3.org/2000/svg ">
                                    <path d="M18.3333 10H15L12.5 17.5L7.49996 2.5L4.99996 10H1.66663 " stroke="#14C7E4 "
                                        stroke-width="1.66667 " stroke-linecap="round " stroke-linejoin="round "></path>
                                </svg>
                                <span class="percentage-per-week ">3.6%</span> up from past week.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sch-col-lg-card sch-col-md-10 sch-col-sm-11 sch-sm-p-y">
                <div class="bx--tile ">
                    <div class="sch-row sch-m-t-1 ">
                        <div class="sch-col-lg-6  sch-col-sm-7 sch-col-md-7 ">
                            <p> Total number of Schools</p>
                        </div>
                        <div class="sch-col-lg-6 sch-col-sm-5 sch-align-s-e ">
                            <svg width="65" height="41" viewBox="0 0 41 41" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20.5" cy="20.5" r="20.5" fill="url(#paint0_linear)"></circle>
                                <path
                                    d="M22.1542 10.8792H14.6375C14.1391 10.8792 13.6612 11.0771 13.3088 11.4295C12.9563 11.782 12.7584 12.2599 12.7584 12.7583V27.7917C12.7584 28.29 12.9563 28.768 13.3088 29.1204C13.6612 29.4728 14.1391 29.6708 14.6375 29.6708H25.9125C26.4109 29.6708 26.8889 29.4728 27.2413 29.1204C27.5937 28.768 27.7917 28.29 27.7917 27.7917V16.5167L22.1542 10.8792Z"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                                <path d="M22.1542 10.8792V16.5167H27.7917" stroke="white" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M24.0333 21.2146H16.5167" stroke="white" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M24.0333 24.9729H16.5167" stroke="white" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M18.3958 17.4563H17.4562H16.5167" stroke="white" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <defs>
                                    <linearGradient id="paint0_linear" x1="86.1" y1="-57.9125" x2="-21.0125" y2="82"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#16FF4A"></stop>
                                        <stop offset="0.928315" stop-color="#0FD3FE"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div class="sch-col-lg-12 sch-col-sm-12 sch-col-md-12 sch-m-y-2  ">
                            <h2 class="sch-txt-bold ">26,000</h2>
                        </div>
                        <div class="sch-col-lg-12 sch-m-x-2 ">
                            <p class=" "><svg width="20 " height="20 " viewBox="0 0 20 20 " fill="none "
                                    xmlns="http://www.w3.org/2000/svg ">
                                    <path d="M18.3333 10H15L12.5 17.5L7.49996 2.5L4.99996 10H1.66663 " stroke="#14C7E4 "
                                        stroke-width="1.66667 " stroke-linecap="round " stroke-linejoin="round "></path>
                                </svg>
                                <span class="percentage-per-week ">3.6%</span> up from past week.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sch-col-lg-card sch-col-md-10 sch-col-sm-11 sch-sm-p-y ">
                <div class="bx--tile ">
                    <div class="sch-row  sch-m-t-1 ">
                        <div class="sch-col-lg-6  sch-col-sm-7 sch-col-md-7 ">
                            <p> Total number of Schools</p>
                        </div>
                        <div class="sch-col-lg-6 sch-col-sm-5 sch-align-s-e">
                            <svg width="65" height="41" viewBox="0 0 41 41" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20.5" cy="20.5" r="20.5" fill="url(#paint0_linear)"></circle>
                                <path
                                    d="M22.1542 10.8792H14.6375C14.1391 10.8792 13.6612 11.0771 13.3088 11.4295C12.9563 11.782 12.7584 12.2599 12.7584 12.7583V27.7917C12.7584 28.29 12.9563 28.768 13.3088 29.1204C13.6612 29.4728 14.1391 29.6708 14.6375 29.6708H25.9125C26.4109 29.6708 26.8889 29.4728 27.2413 29.1204C27.5937 28.768 27.7917 28.29 27.7917 27.7917V16.5167L22.1542 10.8792Z"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                                <path d="M22.1542 10.8792V16.5167H27.7917" stroke="white" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M24.0333 21.2146H16.5167" stroke="white" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M24.0333 24.9729H16.5167" stroke="white" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M18.3958 17.4563H17.4562H16.5167" stroke="white" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                                <defs>
                                    <linearGradient id="paint0_linear" x1="86.1" y1="-57.9125" x2="-21.0125" y2="82"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#16FF4A"></stop>
                                        <stop offset="0.928315" stop-color="#0FD3FE"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>
                        <div class="sch-col-lg-12 sch-col-sm-12 sch-col-md-12 sch-m-y-2 ">
                            <h2 class="sch-txt-bold ">26,000</h2>

                        </div>
                        <div class="sch-col-lg-12 sch-m-x-2 ">
                            <p class=" ">
                                <svg width="20 " height="20 " viewBox="0 0 20 20 " fill="none "
                                    xmlns="http://www.w3.org/2000/svg ">
                                    <path d="M18.3333 10H15L12.5 17.5L7.49996 2.5L4.99996 10H1.66663 " stroke="#14C7E4 "
                                        stroke-width="1.66667 " stroke-linecap="round " stroke-linejoin="round "></path>
                                </svg>
                                <span class="percentage-per-week ">3.6%</span> up from past week.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</main>