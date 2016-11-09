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
user_pref("browser.casting.enabled", false); // https://bugzil.la/1111967
user_pref("layout.css.visited_links_enabled", false); // regularly leaks

// Avoid providing non-essential info to web content
user_pref("dom.battery.enabled", false); // Firefox < 52
user_pref("dom.netinfo.enabled", false);
user_pref("media.video_stats.enabled", false);
user_pref("dom.enable_performance", false);
user_pref("webgl.enable-debug-renderer-info", false);

//////////////////////////
// Features to restrict
//////////////////////////

user_pref("privacy.resistFingerprinting", true);

// Don't reveal your internal IP: http://net.ipcalf.com/
user_pref("media.peerconnection.ice.default_address_only", true); // Firefox < 51
user_pref("media.peerconnection.ice.no_host", true); // Firefox >= 51
// Turn off SHA1 certificates issued in 2016 or later
user_pref("security.pki.sha1_enforcement_level", 2); // Firefox < 52

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
