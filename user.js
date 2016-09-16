////////////////////////////////////
// Non-default features to enable
////////////////////////////////////

user_pref("privacy.trackingprotection.enabled",	true);
user_pref("privacy.donottrackheader.enabled", true);

////////////////////////////////////////////////////
// Feature that can be disabled w/o much breakage
////////////////////////////////////////////////////

user_pref("beacon.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("geo.enabled", false);
user_pref("media.eme.enabled", false); // proprietary DRM plugins
user_pref("dom.netinfo.enabled", false);
user_pref("pdfjs.disabled", true); // use external PDF viewer instead
user_pref("layout.css.visited_links_enabled", false); // regularly leaks
user_pref("media.video_stats.enabled", false);
user_pref("browser.casting.enabled", false); // https://bugzil.la/1111967

//////////////////////////
// Features to restrict
//////////////////////////

user_pref("privacy.resistFingerprinting", true);

// Don't reveal your internal IP: http://net.ipcalf.com/
user_pref("media.peerconnection.ice.default_address_only", true);
// https://bugzilla.mozilla.org/show_bug.cgi?id=942515#c32
user_pref("security.pki.sha1_enforcement_level", 2);

// Restrict referrers to sites belonging to the same organization
// TODO: blog post
user_pref("network.http.referer.XOriginPolicy", 1);

// Limit cookie lifetime
// https://feeding.cloud.geek.nz/posts/tweaking-cookies-for-privacy-in-firefox/
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("network.cookie.cookieBehavior", 0);
user_pref("network.cookie.lifetimePolicy", 3);
user_pref("network.cookie.lifetime.days", 5);
user_pref("network.cookie.thirdparty.sessionOnly", true);
