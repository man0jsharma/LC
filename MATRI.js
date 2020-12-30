<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!-- <link rel="manifest" href="manifest.json"> -->
  <script>
    var title = ["speaking people", "Kannadigas", "Malayalis", "Odias"];
    var hname = window.location.hostname.split(".");
    if (hname[1] != undefined) {
      var dname = hname[1] && hname[1].replace("matrimony", "");
      var uppercasedname = dname.toUpperCase();
      var dname_mt = dname.substr(1);
      var domain_mt = uppercasedname[0] + dname_mt;
    } else {
      var domain_mt = "Tamil";
    }
    // Manifest file
    var strlink = '<link rel="manifest" href="' + dname + '-manifest.json">';
    document.write(strlink);
    // Title
    var TitleName = '';
    if (domain_mt == 'Hindi' || domain_mt == 'Urdu') {
      TitleName = domain_mt + ' Matrimony - The No. 1 Matrimony Site for ' + domain_mt + ' ' + title[0] + ' - ' +
        domain_mt + 'Matrimony.com';
    } else if (domain_mt == 'Kannada') {
      TitleName = domain_mt + ' Matrimony - The No. 1 Matrimony Site for ' + title[1] + ' - ' + domain_mt +
        'Matrimony.com';
    } else if (domain_mt == 'Kerala') {
      TitleName = domain_mt + ' Matrimony - The No. 1 Matrimony Site for ' + title[2] + ' - ' + domain_mt +
        'Matrimony.com';
    } else if (domain_mt == 'Oriya') {
      TitleName = domain_mt + ' Matrimony - The No. 1 Matrimony Site for ' + title[3] + ' - ' + domain_mt +
        'Matrimony.com';
    } else if (domain_mt == 'Bharat') {
      TitleName = domain_mt + ' Matrimony - The No. 1 & Most Trusted Indian Matrimonial Website - ' + domain_mt +
        'Matrimony.com';
    } else if (domain_mt == 'Assamese') {
      TitleName = domain_mt + ' Matrimony - The No. 1 Matrimony Site for ' + domain_mt + ' - ' + domain_mt +
        'Matrimony.com';
    } else {
      TitleName = domain_mt + ' Matrimony - The No. 1 Matrimony Site for ' + domain_mt + 's - ' + domain_mt +
        'Matrimony.com';
    }
    document.title = TitleName;

    // MetaContent
    var MetaContent = '';
    if (domain_mt == 'Bharat') {
      MetaContent =
        'BharatMatrimony - The No. 1 & Most Trusted Matrimony Service for Indians. Millions of success stories. Register Free to find your Perfect Match';
    } else if (domain_mt == 'Parsi') {
      MetaContent = domain_mt + 'Matrimony - The No. 1 & most successful ' + domain_mt +
        ' Matrimonial Site from BharatMatrimony. Trusted by thousands of ' + domain_mt +
        ' Brides & Grooms globally. Register Free!';
    } else {
      MetaContent = domain_mt + 'Matrimony - The No. 1 & most successful ' + domain_mt +
        ' Matrimonial Site from BharatMatrimony. Trusted by lakhs of ' + domain_mt +
        ' Brides & Grooms globally. Register Free!';
    }
    var meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.content = MetaContent;
    document.getElementsByTagName('head')[0].appendChild(meta);
    /*** Finger Print End ***/
    //Firebase performance analytics - Start
    var performance_standalone = 'https://www.gstatic.com/firebasejs/7.9.2/firebase-performance-standalone.js';

  var firebaseConfig = {
    apiKey: "AIzaSyDE_MQTlpKyWum79RS3VxYxR7RSWo4vAn8",
    authDomain: "bm-ui-track.firebaseapp.com",
    databaseURL: "https://bm-ui-track.firebaseio.com",
    projectId: "bm-ui-track",
    storageBucket: "bm-ui-track.appspot.com",
    messagingSenderId: "324196937204",
    appId: "1:324196937204:web:3cffd8dd50e641c6abdda1",
    measurementId: "G-H7DLX2W4D7"
  };

  (function (sa, fbc) {
    function load(f, c) {
      var a = document.createElement('script');
      a.async = 1; a.src = f; var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(a, s);
    } load(sa);
    window.addEventListener('load', function () { firebase.initializeApp(fbc).performance() });
  })(performance_standalone, firebaseConfig);
  //Firebase performance analytics - End

  //FID
  !function (n, e) {
    var t, o, i, c = [], f = { passive: !0, capture: !0 }, r = new Date, a = "pointerup", u = "pointercancel"; function
      p(n, c) { t || (t = c, o = n, i = new Date, w(e), s()) } function s() { o >= 0 && o < i - r && (c.forEach(function (n) { n(o, t) }), c = []) } function
      l(t) {
      if (t.cancelable) {
        var o = (t.timeStamp > 1e12 ? new
          Date : performance.now()) - t.timeStamp; "pointerdown" == t.type ? function (t, o) {
            function i() { p(t, o), r() } function
              c() { r() } function r() { e(a, i, f), e(u, c, f) } n(a, i, f), n(u, c, f)
          }(o, t) : p(o, t)
      }
    } function
      w(n) { ["click", "mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (e) { n(e, l, f) }) } w(n), self.perfMetrics = self.perfMetrics || {}, self.perfMetrics.onFirstInputDelay = function (n) { c.push(n), s() }
  }(addEventListener, removeEventListener);

  // The perfMetrics object is created by the code that goes in <head>.
  perfMetrics.onFirstInputDelay(function (delay, evt) {
    ga('send', 'event', {
      eventCategory: 'Perf Metrics',
      eventAction: 'first-input-delay',
      eventLabel: evt.type,
      // Event values must be an integer.
      eventValue: Math.round(delay),
      // Exclude this event from bounce rate calculations.
      nonInteraction: true,
    });
  });
  </script>
  <title>BharatMatrimony</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="assets/icon/bharatmatrimony.ico">
  <meta name="theme-color" content="#00a13a">
<link rel="stylesheet" href="styles.36e7729758aa1bf0c895.css">
  <script>(window.BOOMR_mq=window.BOOMR_mq||[]).push(["addVar",{"rua.upush":"false","rua.cpush":"false","rua.upre":"false","rua.cpre":"true","rua.uprl":"false","rua.cprl":"false","rua.cprf":"false","rua.trans":"SJ-9b1dbd2c-9af1-43cb-a84b-f34260c354d8","rua.cook":"true","rua.ims":"false","rua.ufprl":"false","rua.cfprl":"true"}]);</script>
  <script>!function(a){var e="https://s.go-mpulse.net/boomerang/",t="addEventListener";if("False"=="True")a.BOOMR_config=a.BOOMR_config||{},a.BOOMR_config.PageParams=a.BOOMR_config.PageParams||{},a.BOOMR_config.PageParams.pci=!0,e="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="L3552-PLPL2-S83DN-5KK2F-VQ4YH",function(){function n(e){a.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!a.BOOMR||!a.BOOMR.version&&!a.BOOMR.snippetExecuted){a.BOOMR=a.BOOMR||{},a.BOOMR.snippetExecuted=!0;var i,_,o,r=document.createElement("iframe");if(a[t])a[t]("load",n,!1);else if(a.attachEvent)a.attachEvent("onload",n);r.src="javascript:void(0)",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="width:0;height:0;border:0;display:none;",o=document.getElementsByTagName("script")[0],o.parentNode.insertBefore(r,o);try{_=r.contentWindow.document}catch(O){i=document.domain,r.src="javascript:var d=document.open();d.domain='"+i+"';void(0);",_=r.contentWindow.document}_.open()._l=function(){var a=this.createElement("script");if(i)this.domain=i;a.id="boomr-if-as",a.src=e+"L3552-PLPL2-S83DN-5KK2F-VQ4YH",BOOMR_lstart=(new Date).getTime(),this.body.appendChild(a)},_.write("<bo"+'dy onload="document._l();">'),_.close()}}(),"".length>0)if(a&&"performance"in a&&a.performance&&"function"==typeof a.performance.setResourceTimingBufferSize)a.performance.setResourceTimingBufferSize();!function(){if(BOOMR=a.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var e="true"=="true"?1:0,t="cookiepresent",n="rzh55g3inbuhgx67uwla-f-8c3657b14-clientnsv4-s.akamaihd.net",i={"ak.v":"29","ak.cp":"1063702","ak.ai":parseInt("632019",10),"ak.ol":"0","ak.cr":20,"ak.ipv":4,"ak.proto":"h2","ak.rid":"112fa7c4","ak.r":38689,"ak.a2":e,"ak.m":"dsca","ak.n":"essl","ak.bpcip":"142.79.222.0","ak.cport":53854,"ak.gh":"23.195.252.156","ak.quicv":"","ak.tlsv":"tls1.3","ak.0rtt":"","ak.csrc":"-","ak.acc":"","ak.t":"1608492438","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==AlAPbwn/uFlTnN0M2Rz0qvK9NcPDtqMfKkHMEVewxAybR/NLqoAA3P9ZP33gKCUVcOctEAtB+diFLs3DrmT9j2+1tsWq5OvU7eDSjNZT+8LwzSFsa+rqsLIgFV6vscTHQnReJ83an2gEtGcM/B4Kji9nqHsFU6wZ+/QwYaowLtKLIzcet3U4K7XkVRvLP0zlhh0Ee0xQTPNqYSPEF58SHFSqDJw9M0fdlvh0XZaGu/8sRwOzBHgPUf6qBd6CF7WfBj9aGOttHcJbw3R89AdF6+HO0lw22mOrZoImy+GgdpeJjS4a+FVnGB4i3+3WpLrgQiUZ1WHo2rHSZyxNg2Bew62/0MpIHg4wGRMxYsdEWxiLtSS/7apgSdjDSp9bZlmnMv25DAIKg5QiHBgoIB+c/zzvqP3AolkRCohFd1JQd/M=","ak.pv":"1","ak.dpoabenc":""};if(""!==t)i["ak.ruds"]=t;var _={i:!1,av:function(e){var t="http.initiator";if(e&&(!e[t]||"spa_hard"===e[t]))i["ak.feo"]=void 0!==a.aFeoApplied?1:0,BOOMR.addVar(i)},rv:function(){var a=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.m","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.r","ak.acc","ak.t"];BOOMR.removeVar(a)}};BOOMR.plugins.AK={akVars:i,akDNSPreFetchDomain:n,init:function(){if(!_.i){var a=BOOMR.subscribe;a("before_beacon",_.av,null,null),a("onbeacon",_.rv,null,null),_.i=!0}return this},is_complete:function(){return!0}}}}()}(window);</script></head>

<body>
  <script>
    function loadGamooga() {
      console.log("loadgamooga function");
      _matriid = localStorage.getItem("MATRIID");
      _ss_track = {
        "id": "206f307a-c1bf-41ec-8ac6-8d0b3a07ace5",
        "events": [],
        "handlers": [],
        "alarms": [],
        "options": {}
      };
      ss = document.createElement('script');
      ss.type = 'text/javascript';
      ss.async = true;
      ss.id = "__ss";
      ss.src = 'https://cdn-jp.gsecondscreen.com/static/ssclient.min.js?source=WAP';
      // _ss_track.events.push(['viewing_page', {
      //   'url': location.hash
      // }]);
      fs = document.getElementsByTagName('script')[0];
      fs.parentNode.insertBefore(ss, fs);
      isGamoogaLoaded = 1;
    }
    var isGamoogaLoaded = 0;

    if (isGamoogaLoaded == 0) {
      loadGamooga();
    }

  </script>
  <script>

var setinterval = setInterval(function(){
	$matriid = localStorage.getItem("MATRIID");
	$name = localStorage.getItem("NAME");
	if($matriid && $matriid != 'undefined' && $matriid != undefined && $matriid != '') {
	clearInterval(setinterval);
		(function (d, w, c) {
			if (!d.getElementById("spd-busns-spt")) {
				var n = d.getElementsByTagName('script')[0],
					s = d.createElement('script');
				var loaded = false;
				s.id = "spd-busns-spt";
				s.async = "async";
					s.setAttribute("data-self-init", "false");
					s.setAttribute("data-init-type", "normal");
				s.src = 'https://cdn.in-freshbots.ai/assets/share/js/freshbots.min.js';
				s.setAttribute("data-client", "3c81a00513a206b17584c5c6728ba8ecb269b5cf");
				s.setAttribute("data-bot-hash", "427a28b61cc050913962a0a4fa141b700c4d24a3");
				s.setAttribute("data-env", "");
				s.setAttribute("data-region", "in");
				if (c) {
					s.onreadystatechange = s.onload = function () {
						if (!loaded) {
							c();
						}
						loaded = true;
					};
				}
				n.parentNode.insertBefore(s, n);
			}
		})(document, window, function () {
				Freshbots.initiateWidget({
					autoInitChat: false,
					getClientParams: function () {
						return {
							"Matriid": $matriid,
							"cstmr::nm" : $name,
							"source" : "Desktop"
						};
					}
				}, function (successResponse) {}, function (errorResponse) {});
		});
	}
}, 3000);

</script>
  <!-- <style>
            body {
                background-color: #ffffff;
            }

            .initialloading>img {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                position: fixed;
                font-family: monospace;
                font-size: 25px;
                font-weight: 500;
            }

            .rotate {
                animation: rotation 1s infinite linear;
            }

            @keyframes rotation {
                from {
                    transform: rotate(0deg);
                }

                to {
                    transform: rotate(359deg);
                }
            }
        </style>
             <div class="initialloading">
            <img class="rotate" src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/bmlogo.png"
                alt="loading..." />
        </div> -->
  <app-root>
    <style>
      /* .bm-load-animate-myhome {
        background: #fff;
        border: 1px solid;
        border-color: #e5e6e9;
        border-radius: 3px;
        display: block;
        width: 1286px;
        height: 592px;
        padding: 0px;
        margin: 0px auto;
      }

      @keyframes animate {
        0% {
          background-position: -468px 0
        }

        100% {
          background-position: 468px 0
        }
      }

      #bm-load-animate-myhome-container {
        width: 100%;
        height: 30px;
      }

      #bm-row-myhome-1,
      #bm-row-myhome-2,
      #bm-row-myhome-3,
      #bm-row-myhome-4,
      #bm-row-myhome-5,
      #bm-row-myhome-6,
      #bm-row-myhome-7 {
        position: relative;
        background-color: #CCC;
        height: 6px;
        animation-name: animate;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        background: -webkit-gradient(linear, left top, right top, color-stop(8%, #eeeeee), color-stop(18%, #dddddd), color-stop(33%, #eeeeee));
        background: -webkit-linear-gradient(left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        background-size: 1000px 104px;
      }

      #bm-row-myhome-1 {
        width: 225px;
        height: 490px;
      }

      #bm-row-myhome-2 {
        width: 275px;
        height: 490px;
      }

      #bm-row-myhome-3 {
        left: 50px;
        top: -20px;
        width: 15%;
      }

      #bm-row-myhome-4 {
        width: 725px;
        height: 200px;
        margin-bottom: 10px;
      }

      #bm-row-myhome-5 {
        width: 725px;
        height: 120px;
        margin-bottom: 10px;
      }

      #bm-row-myhome-6 {
        width: 725px;
        height: 150px;
        margin-bottom: 10px;
      }

      #bm-row-myhome-7 {
        width: 1286px;
        height: 75px;
        margin-bottom: 10px;
      } */

    </style>

    <!-- <div class="bm-load-animate-myhome">
      <div id="bm-row-myhome-7"></div>
      <table style="border-style: none;" cellpadding="10" cellspacing="0">
        <tr>
          <td valign="top">
            <div id="bm-row-myhome-1"></div>
          </td>
          <td valign="top">
            <div id="bm-row-myhome-4"></div>
            <div id="bm-row-myhome-5"></div>
            <div id="bm-row-myhome-6"></div>
          </td>
          <td valign="top">
            <div id="bm-row-myhome-2"></div>
          </td>
        </tr>
      </table>
    </div> -->
    <app-root>
  <noscript>Please enable JavaScript to continue using this application.</noscript>
<script src="runtime.e6b797472819e4f1c0a3.js" defer></script><script src="polyfills-es5.6b458bca4f3bd16d99f9.js" nomodule defer></script><script src="polyfills.7636643ab608fa995c5d.js" defer></script><script src="scripts.e3413d7226333b0f9391.js" defer></script><script src="main.169089a0d0866dc6929b.js" defer></script></body>

</html>
