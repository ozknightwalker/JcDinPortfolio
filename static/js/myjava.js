(function(){
	"use strict";
	angular.module(
		"app",[
			"ngAnimate",
			"ui.router",
			"core"
		]
	)
}).call(this),function(){
	"use strict";
	angular.module(
		"core",
		[
			"duScroll",
			"ngAnimate",
			"ui.router",
			"ngSanitize",
			"ngplus"
		]
	)
}.call(this),jQuery(document).ready(
	function(){
		"use strict";
		function e(){
			var e=new TimelineLite;
			e.to(
				s,1,{
					width:"200px",
					height:"200px",
					marginLeft:"-100px",
					marginTop:"-100px",
					delay:.5
				}
			).to(
				s,1,{
					borderRadius:"0px"
				},1
			).to(
				s,1,{
					width:"400px",
					marginLeft:"-200px"
				},1.5
			).to(
				a,1,{
					autoAlpha:1
				},1.7
			).to(
				a,1,{
					autoAlpha:0,
					delay:1
				}
			).to(
				s,1,{
					rotation:"360deg",
					left:"0px",
					top:"0px",
					marginLeft:"0",
					marginTop:"0",
					width:"250px",
					height:"10px"
				},4.5
			).to(
				s,1,{
					autoAlpha:0
				},5
			).to(
				t,0,{
					display:"none"
				}
			)
		}
		var i=$(".io-nav"),
			t=$(".intro"),
			s=$(".intro-inner"),
			a=t.find("h1"),
			n=$(".io-nav-inner"),
			o=n.find(".io-nav-header"),
			c=($(".userIcon"),$(".io-nav-text > *")),
			l=($(".io-title"),$(".io-title > h1"),$(".io-navigation")),
			r=l.find(".io-navigation-item"),
			d=l.find(".io-navigation-item.active"),
			p=l.find(".io-navigation-item-text"),
			m=r.find("i"),
			g=$(".io-content"),
			v=new TimelineLite;
			v.add(e).to(
				i,0,{
					autoAlpha:1,
					delay:4.7
				}
			).from(
				i,
				1,
				{
					y:"-100%",
					delay:1
				}
			).from(
				n,
				.5,
				{
					x:"-100%"
				}
			).from(
				o,
				1,
				{
					width:0
				},
				1
			).staggerFrom(
				c,
				.5,
				{
					autoAlpha:0,
					rotationX:180
				},
				.2
			).from(
				l,
				1,
				{
					x:"-100%"
				},
				1
			).staggerFrom(
				m,
				.5,
				{
					rotation:"270deg",
					autoAlpha:0
				},
				.1
			).from(
				p,
				.5,
				{
					autoAlpha:0,
					marginLeft:"-20px"
				}
			).from(
				d,
				.5,
				{
					background:"rgba(0,0,0,0)"
				}
			).from(
				g,
				1,
				{
					x:100,
					autoAlpha:0
				}
				,6
			)
		}),
function(){
	"use strict";
	angular.module("core")
		.constant("toastr",toastr)
		.constant("moment",moment)
		.constant("TimelineLite",TimelineLite)
		.constant("TweenMax",TweenMax)
		.constant("Cubic",Cubic)
}(),
function(){
	"use strict";
	function e(){

	}
	function i(e,i){
		i.otherwise("/"),e.state(
			"home",
			{
				url:"/",
				templateUrl:"app/core/views/home.view.html",
				controller:"HomeController as vm"
			}
		)
	}

	angular.module("core").config(i).run(e),e.$inject=["$rootScope"],i.$inject=["$stateProvider","$urlRouterProvider"]}.call(this),
function(){
	"use strict";
	function e(){
		var e=angular.element(document.getElementById("container")),i=angular.element(document.getElementById("section-2"));
		this.positions=["UI & UX Desiner","Software Engineer"],
		this.birthday="September 11, 1990",
		this.address="San Francisco, CA",
		this.email="Joel.Cox.dev@gmail.com",
		this.phone="(405) 388 - 7691",
		this.name={
			full:"Joel Cox",
			all:"Joel Thomas Cox",
			first:"Joel",
			last:"Cox"
		},
		this.toSection2=function(){
			console.log("test"),
			e.scrollTo(i,0,1e3)
		}
	}
	angular.module("core").controller("AppController",e),e.$inject=["$scope","$storage","TweenMax","Cubic"]}.call(this),
