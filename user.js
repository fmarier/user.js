////////////////////////////////////
// Non-default features to enable
////////////////////////////////////

user_pref("privacy.trackingprotection.enabled",	true);
user_pref("privacy.donottrackheader.enabled", true);

// Experimental Safe Browsing features
user_pref("browser.safebrowsing.passwords.enabled", true);
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", true);

////////////////////////////////////////////////////
// Feature that can be disabled w/o much breakage
////////////////////////////////////////////////////

user_pref("device.sensors.enabled", false);
user_pref("media.eme.enabled", false); // proprietary DRM plugins
user_pref("pdfjs.disabled", true); // use external PDF viewer instead
user_pref("dom.allow_cut_copy", false); // prevents "copy/paste into a terminal" attacks
user_pref("layout.css.visited_links_enabled", false); // regularly leaks
user_pref("dom.vr.enabled", false);
user_pref("dom.webaudio.enabled", false);
user_pref("network.IDN_show_punycode", true); // there are no perfect solutions for this
user_pref("accessibility.force_disabled", true); // not needed

// These will become defaults in the future
user_pref("network.auth.subresource-img-cross-origin-http-auth-allow", false);
user_pref("security.data_uri.unique_opaque_origin", true);
user_pref("security.data_uri.block_toplevel_data_uri_navigations", true);

// Avoid providing non-essential info to web content
user_pref("dom.netinfo.enabled", false);
user_pref("media.video_stats.enabled", false);
user_pref("dom.enable_performance", false);
user_pref("webgl.enable-debug-renderer-info", false);

// Can be re-enabled manually as needed
user_pref("webgl.disabled", true); // large attack surface
user_pref("media.peerconnection.enabled", false);

// Disable things that listen on the network
user_pref("browser.casting.enabled", false); // https://bugzil.la/1111967
user_pref("devtools.webide.enabled", false); // https://bugzil.la/1249645
user_pref("dom.presentation.discoverable", false);

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

// Use MLS for the geolocation API
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

// Recommended by https-by-default add-on
user_pref("browser.urlbar.trimURLs", false);

// Prevent accidental closure of browser windows
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Automatically expand the "see details" part of Safe Browsing errors
user_pref("browser.xul.error_pages.show_safe_browsing_details_on_load", true);

// Automatically expand the "more details" part of TLS errors
user_pref("browser.xul.error_pages.expert_bad_cert", true);
