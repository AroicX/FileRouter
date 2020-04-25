<script>
    import Dashboard from "./Dashboard.svelte";
    // console.log(props.token);
</script>


<svelte:head>
    <title>Dashboard</title>
</svelte:head>
<main>

    <div class="sch-col-lg-12  sch-col-md-12 sch-col-sm-12">

        <div class="sch-row d-m-top  ">
            <div class="sch-col-lg-6 sch-card-row sch-dashboard-name ">
                <p>Hi Augbs Access</p>
                <h2>Welcome back!!</h2>
            </div>
        </div>


        <div class="sch-row d-m-top sch-card--spc  ">
            <div class="sch-col-lg-4 sch-col-md-10 sch-col-sm-11  sch-sm-p-y"
                style="margin: 5px ; max-width: 30% !important;">
                <div class="bx--tile ">
                    <div class="sch-row  sch-m-t-1 ">
                        <div class="sch-col-lg-12  sch-col-sm-7 sch-col-md-7 ">
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
            <div class="sch-col-lg-4 sch-col-md-10 sch-col-sm-11  sch-sm-p-y"
                style="margin: 5px ; max-width: 30% !important;">
                <div class="bx--tile ">
                    <div class="sch-row  sch-m-t-1 ">
                        <div class="sch-col-lg-12  sch-col-sm-7 sch-col-md-7 ">
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
            <div class="sch-col-lg-4 sch-col-md-10 sch-col-sm-11  sch-sm-p-y"
                style="margin: 5px ; max-width: 30% !important;">
                <div class="bx--tile ">
                    <div class="sch-row  sch-m-t-1 ">
                        <div class="sch-col-lg-12  sch-col-sm-7 sch-col-md-7 ">
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

            <div class="sch-col-lg-4 sch-col-md-10 sch-col-sm-11  sch-sm-p-y"
                style="margin: 5px ; max-width: 30% !important;">
                <div class="bx--tile ">
                    <div class="sch-row  sch-m-t-1 ">
                        <div class="sch-col-lg-12  sch-col-sm-7 sch-col-md-7 ">
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
            <div class="sch-col-lg-4 sch-col-md-10 sch-col-sm-11  sch-sm-p-y"
                style="margin: 5px ; max-width: 30% !important;">
                <div class="bx--tile ">
                    <div class="sch-row  sch-m-t-1 ">
                        <div class="sch-col-lg-12  sch-col-sm-7 sch-col-md-7 ">
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
            <div class="sch-col-lg-4 sch-col-md-10 sch-col-sm-11  sch-sm-p-y"
                style="margin: 5px ; max-width: 30% !important;">
                <div class="bx--tile ">
                    <div class="sch-row  sch-m-t-1 ">
                        <div class="sch-col-lg-12  sch-col-sm-7 sch-col-md-7 ">
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


        </div>
    </div>




</main>