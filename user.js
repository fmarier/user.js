////////////////////////////////////
// Non-default features to enable
////////////////////////////////////

user_pref("privacy.trackingprotection.enabled",	true);
user_pref("privacy.donottrackheader.enabled", true);

////////////////////////////////////////////////////
// Feature that can be disabled w/o much breakage
////////////////////////////////////////////////////

user_pref("device.sensors.enabled", false);
user_pref("media.eme.enabled", false); // proprietary DRM plugins
user_pref("pdfjs.disabled", true); // use external PDF viewer instead
user_pref("browser.casting.enabled", false); // listens on network: https://bugzil.la/1111967
user_pref("devtools.webide.enabled", false); // listens on network: https://bugzil.la/1249645
user_pref("layout.css.visited_links_enabled", false); // regularly leaks
user_pref("webgl.disabled", true); // large attack surface
user_pref("dom.gamepad.enabled", false);
user_pref("dom.webaudio.enabled", false);
user_pref("network.IDN_show_punycode", true); // there are no perfect solutions for this

// Avoid providing non-essential info to web content
user_pref("dom.netinfo.enabled", false);
user_pref("media.video_stats.enabled", false);
user_pref("dom.enable_performance", false);
user_pref("webgl.enable-debug-renderer-info", false);

//////////////////////////
// Features to restrict
//////////////////////////

user_pref("privacy.resistFingerprinting", true);

// Don't reveal your internal IP: http://net.ipcalf.com/
user_pref("media.peerconnection.ice.no_host", true);

// Don't send cross-origin referrers
// https://feeding.cloud.geek.nz/posts/tweaking-referrer-for-privacy-in-firefox/
user_pref("network.http.referer.XOriginPolicy", 1);

// Limit cookie lifetime
// https://feeding.cloud.geek.nz/posts/tweaking-cookies-for-privacy-in-firefox/
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("network.cookie.cookieBehavior", 0);
user_pref("network.cookie.lifetimePolicy", 3);
user_pref("network.cookie.lifetime.days", 5);
user_pref("network.cookie.thirdparty.sessionOnly", true);

///////////
// Other
///////////

// Recommended by https-by-default add-on
user_pref("browser.urlbar.trimURLs", false);

// Automatically expand the "more details" part of TLS errors
user_pref("browser.xul.error_pages.expert_bad_cert", true);
