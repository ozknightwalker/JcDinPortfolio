(function () {
    'use strict';
    angular
        .module('app', ['ngRoute', 'ngAnimate', 'core'])
        .module('core', ["duScroll","ngAnimate","ui.router","ngSanitize","ngplus"])
        .controller('AppCtrl', ['$http', '$scope', '$mdSidenav', '$location', function ($http, $scope, $mdSidenav, $location) {
            
        }]);
}());

jQuery(document).ready(
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
    }
),
