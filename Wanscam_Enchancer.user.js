// ==UserScript==
// @name        Wanscam Enchancer
// @namespace   Poland
// @description PURE EXPERIMENTAL AND UNTESTED, USE IT ON YOUR OWN RISK! Unlocks all web interface features from IE and a lot of extra hidden stuff on Firefox and Chrome. Possibly works with other Wanscam IP cams.
// @include     http://192.*
// @exclude     http://www.*
// @icon        ./icon.png
// @resource icon ./icon.png
// @version     0.1
// @grant       GM_getResourceURL
// ==/UserScript==

window.addEventListener('load', function() {//Waits for page to load.

/* Main stream page (./web/admin.html) */

    /* Bottom buttons */

      /* Zoom, Focus, Digital Zoom, Logo */
    if (document.getElementById("menu") != null) {
      var menu = document.getElementById("menu");
      if(menu && menu.style.display == "none") {
         menu.style.display = "";
         var icon = document.createElement('img');
         icon.src = GM_getResourceURL("icon");
         icon.height = 36;
         menu.appendChild(icon);
         var text = document.createTextNode('Wanscam Enchancer is Enabled');
         menu.appendChild(text);
      }
    }

    /* Multiple camera buttons */
    var x1_kang_1 = document.getElementById("x1_kang_1");
    if (x1_kang_1) {
       x1_kang_1.style.display = "";
    }

    var x1_kang_4 = document.getElementById("x1_kang_4");
    if (x1_kang_4) {
       x1_kang_4.style.display = "";
    }

    var x1_kang_9 = document.getElementById("x1_kang_9");
    if (x1_kang_9) {
       x1_kang_9.style.display = "";
    }

    /* Side buttons on main page, not working mostly. */

    var td1 = document.querySelector('.table_kang_left > form:nth-child(1) > div:nth-child(11) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1)');
    if (td1) {
       td1.style.display = "";
    }

    var td2 = document.querySelector('.table_kang_left > form:nth-child(1) > div:nth-child(11) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)');
    if (td2) {
       td2.style.display = "";
    }

    var img_listen = document.getElementById("img_listen");
    if (img_listen) {
       img_listen.style.display = "";
    }

    var img_talk = document.getElementById("img_talk");
    if (img_talk) {
       img_talk.style.display = "";
    }

    var img_rec = document.getElementById("img_rec");
    if (img_rec) {
       img_rec.style.display = "";
    }

    var img_snap = document.getElementById("img_snap");
    if (img_snap) {
       img_snap.style.display = "";
    }

    var path_kang_id = document.getElementById("path_kang_id");
    if (path_kang_id) {
       path_kang_id.style.display = "";
    }

    var img_ir = document.getElementById("img_ir");
    if (img_ir) {
       img_ir.style.display = "";
    }

    var btn_file = document.getElementById("btn_file");
    if (btn_file) {
       btn_file.style.display = "";
    }

/* Right side settings table. */

    /* Alarm Service Settings */
    var alarm = document.getElementById("alarm");
    if (alarm) {
       alarm.style.display = "";
       alarm.style.backgroundColor = "yellow";
    }

    var alarm2 = document.getElementById("alarm2");
    if (alarm2) {
       alarm2.style.display = "";
    }

    /* Multiple settings */
    var addport2 = document.getElementById("addport2");
    if (addport2) {
       addport2.style.display = "";
    }

    var addport = document.getElementById("addport");
    if (addport) {
       addport.style.display = "";
       addport.style.backgroundColor = "yellow";
    }

    /* Motion detection */
    var md_menu = document.getElementById("md_menu");
    if (md_menu) {
       md_menu.style.display = "";
       md_menu.style.backgroundColor = "yellow";
    }

    var md_menu2 = document.getElementById("md_menu2");
    if (md_menu2) {
       md_menu2.style.display = "";
    }

    /* Video mask */
    var videoshade_men = document.getElementById("videoshade_men");
    if (videoshade_men) {
       videoshade_men.style.display = "";
       videoshade_men.style.backgroundColor = "yellow";
    }

    var videoshade_men2 = document.getElementById("videoshade_men2");
    if (videoshade_men2) {
       videoshade_men2.style.display = "";
    }

    /* P2P */
    var p2p1 = document.querySelector('.table_kang_b > tbody:nth-child(1) > tr:nth-child(24)');
    if (p2p1) {
       p2p1.style.display = "";
    }

    var p2p2 = document.querySelector('.table_kang_b > tbody:nth-child(1) > tr:nth-child(25)');
    if (p2p2) {
       p2p2.style.display = "";
       p2p2.style.backgroundColor = "yellow";
    }

    /* UPnP set */
    var upnp = document.querySelector('.table_kang_b > tbody:nth-child(1) > tr:nth-child(26)');
    if (upnp) {
       upnp.style.display = "";
    }

    var upnp2 = document.querySelector('.table_kang_b > tbody:nth-child(1) > tr:nth-child(27)');
    if (upnp2) {
       upnp2.style.display = "";
       upnp2.style.backgroundColor = "yellow";
    }
    /* Audio alarm */
    var audioAlarm = document.querySelector('.table_kang_b > tbody:nth-child(1) > tr:nth-child(38)');
    if (audioAlarm) {
       audioAlarm.style.display = "";
    }

    var audioAlarm2 = document.querySelector('.table_kang_b > tbody:nth-child(1) > tr:nth-child(39)');
    if (audioAlarm2) {
       audioAlarm2.style.display = "";
       audioAlarm2.style.backgroundColor = "yellow";
    }

/* Settings pages */

    /* Device Information page */

      /* Device Type */
    var deviceType = document.querySelector('.table_kang_t > tbody:nth-child(1) > tr:nth-child(3)');
    if (deviceType.style.display == "none" && deviceType) {
      deviceType.style.display = "";
      var deviceTypeC = document.querySelector('.table_kang_t > tbody:nth-child(1) > tr:nth-child(3)').children;
      deviceTypeC[0].style.backgroundColor = "yellow";
      deviceTypeC[1].style.backgroundColor = "yellow";
      if(document.getElementById("form_devtype") != null) document.getElementById("form_devtype").style.backgroundColor = "yellow";
    }

      /* UPnP status. Wors also for Night luminance in Image cart. */
    if (document.querySelector('.table_kang_t > tbody:nth-child(1) > tr:nth-child(15)') != null) {
      var upnpstatus = document.querySelector('.table_kang_t > tbody:nth-child(1) > tr:nth-child(15)');
      if (upnpstatus.style.display == "none" && upnpstatus) {
          upnpstatus.style.display = "";
          var upnpstatusC = document.querySelector('.table_kang_t > tbody:nth-child(1) > tr:nth-child(15)').children;
          upnpstatusC[0].style.backgroundColor = "yellow";
          if (upnpstatusC[1] != null) upnpstatusC[1].style.backgroundColor = "yellow";
          if (document.getElementById("form_upnpstatus") != null) document.getElementById("form_upnpstatus").style.backgroundColor = "yellow";
      }
    }

    /* Audio Settings page */

      /* Audio type(second stream) */
    if (document.getElementById("layer1") != null) {
       var layer1 = document.getElementById("layer1");
       if (layer1.style.display == "none" && layer1) {
          layer1.style.display = "";
          var layer1c = document.getElementById("layer1").children;
          layer1c[0].style.backgroundColor = "yellow";
          layer1c[1].style.backgroundColor = "yellow";
       }
    }

      /*Audio type(third stream)*/
    if (document.getElementById("layer2") != null) {
       var layer2 = document.getElementById("layer2");
       if (layer2.style.display == "none" && layer2) {
          layer2.style.display = "";
          var layer2c = document.getElementById("layer2").children;
          layer2c[0].style.backgroundColor = "yellow";
          layer2c[1].style.backgroundColor = "yellow";
         }
    }

    /* Record Settings page */

      /* Record files duration. Works also for DDNS > Internet IP adress. */
    var recordFD = document.querySelector('.table_kang_t > tbody:nth-child(1) > tr:nth-child(2)');
    if (recordFD.style.display == "none" && recordFD) {
      recordFD.style.display = "";
      var recordFDC = document.querySelector('.table_kang_t > tbody:nth-child(1) > tr:nth-child(2)').children;
      recordFDC[0].style.backgroundColor = "yellow";
      recordFDC[1].style.backgroundColor = "yellow";
    }


    /* DDNS Settings page */

      /* Your Domain */
    if (document.getElementById("layer10") != null) {
       var layer10 = document.getElementById("layer10");
       if (layer10.style.display == "none" && layer10) {
          layer10.style.display = "";
          var layer10c = document.getElementById("layer10").children;
          layer10c[0].style.backgroundColor = "yellow";
          layer10c[1].style.backgroundColor = "yellow";
       }
     }

    /* PTZ set page */

      /* Indicator light Display Mode. Works also for Shutter in Image page */
    var indicatorLDM = document.querySelector('.table_kang_t > tbody:nth-child(1) > tr:nth-child(6)');
    if (indicatorLDM.style.display == "none" && indicatorLDM && indicatorLDM.id != "720bps") {
      indicatorLDM.style.display = "";
      var indicatorLDMC = document.querySelector('.table_kang_t > tbody:nth-child(1) > tr:nth-child(6)').children;
      indicatorLDMC[0].style.backgroundColor = "yellow";
      indicatorLDMC[1].style.backgroundColor = "yellow";
      if (indicatorLDMC[2] != null) indicatorLDMC[2].style.backgroundColor = "yellow";
    }

    /* Maintain page */

      /* Backup setting data */
    var backupSD = document.querySelector('.table_kang_t > tbody:nth-child(1) > tr:nth-child(4)');
    if (backupSD.style.display == "none" && backupSD) {
      backupSD.style.display = "";
      var backupSDC = document.querySelector('.table_kang_t > tbody:nth-child(1) > tr:nth-child(4)').children;
      backupSDC[0].style.backgroundColor = "yellow";
      backupSDC[1].style.backgroundColor = "yellow";
    }

      /* Backup setting data */
    var restore = document.querySelector('.table_kang_t > tbody:nth-child(1) > tr:nth-child(5)');
    if (restore.style.display == "none" && restore && document.getElementById('form_bakfile').id != null) {
      restore.style.display = "";
      var restoreC = document.querySelector('.table_kang_t > tbody:nth-child(1) > tr:nth-child(5)').children;
      restoreC[0].style.backgroundColor = "yellow";
      restoreC[1].style.backgroundColor = "yellow";
    }

    /* Image page */

      /* AE */
    var baoguang = document.getElementById("baoguang");
    if (baoguang.style.display == "none" && baoguang) {
      baoguang.style.display = "";
      var baoguangC = document.getElementById("baoguang").children;
      baoguangC[0].style.backgroundColor = "yellow";
      baoguangC[1].style.backgroundColor = "yellow";
      baoguangC[2].style.backgroundColor = "yellow";
    }

      /* Smoothing mode */
    var noise = document.getElementById("noise");
    if (noise.style.display == "none" && noise) {
      noise.style.display = "";
      var noiseC = document.getElementById("noise").children;
      noiseC[0].style.backgroundColor = "yellow";
    }

      /* Night effect adjust */
    var buttonnight = document.getElementById("buttonnight");
    if (buttonnight.style.display == "none" && buttonnight) {
      buttonnight.style.display = "";
      var buttonnightC = document.getElementById("buttonnight").children;
      buttonnightC[0].style.backgroundColor = "yellow";
    }

}, false);
