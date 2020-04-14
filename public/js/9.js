(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./resources/js/Pages/welcome.svelte":
/*!*******************************************!*\
  !*** ./resources/js/Pages/welcome.svelte ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Shared_Layout_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout.svelte */ "./resources/js/Shared/Layout.svelte");
/* resources/js/Pages/welcome.svelte generated by Svelte v3.20.1 */




function create_default_slot(ctx) {
	let div36;

	return {
		c() {
			div36 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");

			div36.innerHTML = `<div class="container"><div class="slim-pageheader"><ol class="breadcrumb slim-breadcrumb"><li class="breadcrumb-item"><a href="${null}">Home</a></li> 
                    <li class="breadcrumb-item active" aria-current="page">Dashboard</li></ol> 
                <h6 class="slim-pagetitle">Welcome back, Katherine</h6></div> 

            <div class="row row-xs"><div class="col-sm-6 col-lg-3"><div class="card card-status"><div class="media"><div class="media-body"><h1>₦ 0.00</h1> 
                                <p>Total Fees</p></div></div></div></div> 
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-sm-t-0"><div class="card card-status"><div class="media"><div class="media-body"><h1>₦ 0.00</h1> 
                                <p>Paid Fees</p></div></div></div></div> 
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0"><div class="card card-status"><div class="media"><div class="media-body"><h1>₦ 0.00 </h1> 
                                <p>Owed Fees</p></div></div></div></div> 
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0"><div class="card card-status"><div class="media"><div class="media-body"><h1>₦ 0.00 </h1> 
                                <p>Total Number of Students</p></div></div></div></div></div> 

            <div class="row row-xs py-5"><div class="col-sm-6 col-lg-3"><div class="card card-status"><div class="media"><div class="media-body"><h1>₦ 0.00</h1> 
                                <p>Total Fees</p></div></div></div></div> 
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-sm-t-0"><div class="card card-status"><div class="media"><div class="media-body"><h1>₦ 0.00</h1> 
                                <p>Paid Fees</p></div></div></div></div> 
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0"><div class="card card-status"><div class="media"><div class="media-body"><h1>₦ 0.00 </h1> 
                                <p>Owed Fees</p></div></div></div></div> 
                <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0"><div class="card card-status"><div class="media"><div class="media-body"><h1>₦ 0.00 </h1> 
                                <p>Total Number of Students</p></div></div></div></div></div></div>`;

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div36, "class", "slim-mainpanel");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div36, anchor);
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div36);
		}
	};
}

function create_fragment(ctx) {
	let current;

	const layout = new _Shared_Layout_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
			props: {
				title: "Dashboard",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(layout.$$.fragment);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(layout, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const layout_changes = {};

			if (dirty & /*$$scope*/ 1) {
				layout_changes.$$scope = { dirty, ctx };
			}

			layout.$set(layout_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(layout.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(layout.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(layout, detaching);
		}
	};
}

class Welcome extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Welcome);


/***/ })

}]);