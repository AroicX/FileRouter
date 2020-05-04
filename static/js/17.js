(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./resources/js/Pages/Schools.svelte":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Schools.svelte ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Shared_Layout_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/Layout.svelte */ "./resources/js/Shared/Layout.svelte");
/* harmony import */ var _components_Loader_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loader.svelte */ "./resources/js/components/Loader.svelte");
/* harmony import */ var _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @inertiajs/inertia-svelte */ "./node_modules/@inertiajs/inertia-svelte/src/index.js");
/* resources/js/Pages/Schools.svelte generated by Svelte v3.20.1 */









function create_default_slot_1(ctx) {
	let t;

	return {
		c() {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Home");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t, anchor);
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t);
		}
	};
}

// (36:0) <Layout title="Schools">
function create_default_slot(ctx) {
	let t0;
	let div4;
	let div3;
	let div0;
	let ol;
	let li0;
	let t1;
	let li1;
	let t3;
	let h6;
	let t5;
	let div2;
	let current;
	const loader = new _components_Loader_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({ props: { status: true } });

	const inertialink = new _inertiajs_inertia_svelte__WEBPACK_IMPORTED_MODULE_6__["InertiaLink"]({
			props: {
				href: "/",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(loader.$$.fragment);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			ol = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("ol");
			li0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(inertialink.$$.fragment);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			li1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("li");
			li1.textContent = "Schools";
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h6");
			h6.textContent = "Schools";
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");

			div2.innerHTML = `<div class="table-wrapper"><table id="schools" class="table display responsive nowrap"><thead><tr><th class="wd-15p">First name</th> 
                                <th class="wd-15p">Last name</th> 
                                <th class="wd-20p">Position</th> 
                                <th class="wd-15p">Start date</th> 
                                <th class="wd-10p">Salary</th> 
                                <th class="wd-5p">Action</th></tr></thead> 
                        <tbody><tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr> 
                          
                            <tr><td>Tiger</td> 
                                <td>Nixon</td> 
                                <td>System Architect</td> 
                                <td>2011/04/25</td> 
                                <td>\$320,800</td> 
                                <td><button class="btn btn-info">View</button></td></tr></tbody></table></div>`;

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(li0, "class", "breadcrumb-item");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(li1, "class", "breadcrumb-item active");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(li1, "aria-current", "page");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(ol, "class", "breadcrumb slim-breadcrumb");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(h6, "class", "slim-pagetitle");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "slim-pageheader");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "section-wrapper");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", "container");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div4, "class", "slim-mainpanel");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(loader, target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, ol);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(ol, li0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(inertialink, li0, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(ol, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(ol, li1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, h6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, div2);
			current = true;
		},
		p(ctx, dirty) {
			const inertialink_changes = {};

			if (dirty & /*$$scope*/ 1) {
				inertialink_changes.$$scope = { dirty, ctx };
			}

			inertialink.$set(inertialink_changes);
		},
		i(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(loader.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(inertialink.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(loader.$$.fragment, local);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(inertialink.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(loader, detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(inertialink);
		}
	};
}

function create_fragment(ctx) {
	let current;

	const layout = new _Shared_Layout_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({
			props: {
				title: "Schools",
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

function instance($$self) {
	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(() => {
		jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).ready(function ($) {
			$("#schools").DataTable({
				responsive: true,
				language: {
					searchPlaceholder: "Search...",
					sSearch: "",
					lengthMenu: "_MENU_ items/page"
				}
			});
		});
	});

	return [];
}

class Schools extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Schools);


/***/ }),

/***/ "./resources/js/Shared/Layout.svelte":
/*!*******************************************!*\
  !*** ./resources/js/Shared/Layout.svelte ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/svelte-loader/index.js):\nError: ParseError: </a> attempted to close an element that was not open (203:12)\n201:               <span>Import Payments</span>\n202:               <span class=\"square-8\"></span>\n203:             </a>\n                 ^\n204:           </li>\n205:          \n    at preprocess.then.catch.err (/Users/macbookair/Desktop/web/schoolmo/node_modules/svelte-loader/index.js:181:12)");

/***/ }),

/***/ "./resources/js/components/Loader.svelte":
/*!***********************************************!*\
  !*** ./resources/js/components/Loader.svelte ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* resources/js/components/Loader.svelte generated by Svelte v3.20.1 */


function create_fragment(ctx) {
	let div1;
	let style;
	let t1;
	let div0;
	let div1_class_value;

	return {
		c() {
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
			style.textContent = "@keyframes loader-animation {\n        0% {\n            left: -100%;\n        }\n\n        49% {\n            left: 100%;\n        }\n\n        50% {\n            left: 100%;\n        }\n\n        100% {\n            left: -100%;\n        }\n    }\n\n    .loader {\n        height: 5px;\n        width: 100%;\n    }\n\n    .loader .bar {\n        width: 100%;\n        position: absolute;\n        height: 5px;\n        background-color: dodgerblue;\n        animation-name: loader-animation;\n        animation-duration: 3s;\n        animation-iteration-count: infinite;\n        animation-timing-function: ease-in-out;\n    }";
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "bar");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", div1_class_value = /*status*/ ctx[0] ? "loader" : "none");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, style);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, div0);
		},
		p(ctx, [dirty]) {
			if (dirty & /*status*/ 1 && div1_class_value !== (div1_class_value = /*status*/ ctx[0] ? "loader" : "none")) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", div1_class_value);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div1);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { status } = $$props;

	$$self.$set = $$props => {
		if ("status" in $$props) $$invalidate(0, status = $$props.status);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*status*/ 1) {
			$: if (status) {
				setTimeout(
					() => {
						$$invalidate(0, status = !status);
					},
					5000
				);
			}
		}
	};

	return [status];
}

class Loader extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { status: 0 });
	}
}


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Loader);


/***/ })

}]);