// ==UserScript==
// @name         PEC Webmail – Deutsch (inoffiziell)
// @namespace    https://github.com/mlgtcode/pec-webmail-de
// @version      1.3.0
// @description  Inoffizielle deutsche Übersetzung der Aruba PEC-Webmail (webmail.pec.it). Nicht von Aruba erstellt oder geprüft, ohne Gewähr.
// @author       mlgtcode
// @homepageURL  https://github.com/mlgtcode/pec-webmail-de
// @supportURL   https://github.com/mlgtcode/pec-webmail-de/issues
// @updateURL    https://raw.githubusercontent.com/mlgtcode/pec-webmail-de/main/pec-webmail-deutsch.user.js
// @downloadURL  https://raw.githubusercontent.com/mlgtcode/pec-webmail-de/main/pec-webmail-deutsch.user.js
// @require      https://raw.githubusercontent.com/mlgtcode/pec-webmail-de/main/de.js
// @match        https://webmail.pec.it/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  if (typeof PEC_WEBMAIL_DE === 'undefined') {
    console.warn('[PEC-Webmail DE] de.js wurde nicht geladen – Oberfläche bleibt unverändert.');
    return;
  }

  var version = '';
  try {
    if (typeof GM_info !== 'undefined') version = GM_info.script.version;
    else if (typeof GM !== 'undefined' && GM.info) version = GM.info.script.version;
  } catch (e) {}

  function pageMain(DE, VERSION) {
    if (window.__pecDeInstalled) return;
    window.__pecDeInstalled = true;

    var REPLACE_LANGS = ['it', 'en', 'es', 'fr', 'cs', 'hu', 'pl'];
    var REPO_URL = 'https://github.com/mlgtcode/pec-webmail-de';
    var ISSUES_URL = REPO_URL + '/issues';
    var STORAGE_KEY = 'pec-webmail-de.settings';
    var DEFAULTS = { enabled: true, fallback: 'en' };

    function loadSettings() {
      var s = {};
      try { s = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') || {}; } catch (e) {}
      return {
        enabled: typeof s.enabled === 'boolean' ? s.enabled : DEFAULTS.enabled,
        fallback: s.fallback === 'it' ? 'it' : DEFAULTS.fallback
      };
    }
    function saveSettings(s) {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); return true; } catch (e) { return false; }
    }
    var settings = loadSettings();

    function merge(base, de) {
      if (typeof de === 'string') return de;
      if (Array.isArray(base)) return Array.isArray(de) ? de : base;
      if (base && typeof base === 'object') {
        var r = {};
        for (var k in base) r[k] = (de && typeof de === 'object' && k in de) ? merge(base[k], de[k]) : base[k];
        return r;
      }
      return base;
    }

    var RE = /((?:^|\/)assets\/i18n\/(override\/[^\/]+\/)?)([a-z]{2})(\/[^\/?#]+\.json)/i;
    function match(url) {
      if (!settings.enabled) return null;
      var u = String(url && url.url ? url.url : url);
      var m = u.match(RE);
      if (!m || REPLACE_LANGS.indexOf(m[3].toLowerCase()) < 0) return null;
      return { url: u.replace(RE, '$1' + settings.fallback + '$4'), de: m[2] ? DE.override : DE['default'] };
    }

    if (settings.enabled) {
      var origFetch = window.fetch;
      if (origFetch) {
        window.fetch = function (input, init) {
          var t = match(input);
          if (!t) return origFetch.apply(this, arguments);
          return origFetch.call(this, t.url, init).then(function (r) {
            if (!r.ok) return origFetch.apply(window, [input, init]);
            return r.json().then(function (j) {
              return new Response(JSON.stringify(merge(j, t.de)), { status: 200, headers: { 'Content-Type': 'application/json' } });
            });
          }).catch(function () { return origFetch.apply(window, [input, init]); });
        };
      }

      var XP = XMLHttpRequest.prototype;
      var origOpen = XP.open;
      var dResp = Object.getOwnPropertyDescriptor(XP, 'response');
      var dText = Object.getOwnPropertyDescriptor(XP, 'responseText');
      XP.open = function (method, url) {
        var t = match(url);
        if (!t) return origOpen.apply(this, arguments);
        var args = Array.prototype.slice.call(arguments);
        args[1] = t.url;
        var cache = null, self = this;
        function get() {
          if (cache === null) {
            var raw = (self.responseType === '' || self.responseType === 'text') ? dText.get.call(self) : dResp.get.call(self);
            try { cache = merge(typeof raw === 'string' ? JSON.parse(raw) : raw, t.de); } catch (e) { cache = undefined; }
          }
          return cache;
        }
        Object.defineProperty(this, 'response', {
          configurable: true,
          get: function () {
            if (this.readyState !== 4 || this.status !== 200) return dResp.get.call(this);
            var c = get(); if (c === undefined) return dResp.get.call(this);
            return this.responseType === 'json' ? c : JSON.stringify(c);
          }
        });
        Object.defineProperty(this, 'responseText', {
          configurable: true,
          get: function () {
            if (this.readyState !== 4 || this.status !== 200) return dText.get.call(this);
            var c = get(); return c === undefined ? dText.get.call(this) : JSON.stringify(c);
          }
        });
        return origOpen.apply(this, args);
      };
    }

    function el(tag, attrs, children) {
      var n = document.createElement(tag);
      if (attrs) for (var k in attrs) {
        if (k === 'style') n.style.cssText = attrs[k];
        else if (k === 'text') n.textContent = attrs[k];
        else if (k.indexOf('on') === 0) n.addEventListener(k.slice(2), attrs[k]);
        else n.setAttribute(k, attrs[k]);
      }
      (children || []).forEach(function (c) { if (c) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
      return n;
    }

    function isDark() {
      var ref = document.querySelector('aru-button.help-menu') || document.body;
      var c = getComputedStyle(ref).color.match(/\d+/g);
      if (!c) return false;
      return (0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2]) > 150;
    }

    function closeDialog() {
      var o = document.getElementById('pec-de-overlay');
      if (o) o.remove();
      document.removeEventListener('keydown', onKey, true);
    }
    function onKey(e) { if (e.key === 'Escape') { e.stopPropagation(); closeDialog(); } }

    function openDialog() {
      if (document.getElementById('pec-de-overlay')) return;
      var dark = isDark();
      var fg = dark ? '#e9ecef' : '#212529';
      var bg = dark ? '#2b2f33' : '#ffffff';
      var muted = dark ? '#adb5bd' : '#6c757d';
      var line = dark ? '#495057' : '#dee2e6';
      var accent = dark ? '#6ea8fe' : '#0b5ed7';
      var linkStyle = 'color:' + accent + ';text-decoration:underline';
      var btnStyle = 'border:1px solid ' + line + ';background:transparent;color:' + fg + ';border-radius:6px;padding:8px 14px;font:inherit;cursor:pointer';

      var cbEnabled = el('input', { type: 'checkbox', id: 'pec-de-enabled', style: 'margin:0 8px 0 0' });
      cbEnabled.checked = settings.enabled;
      var selFallback = el('select', { id: 'pec-de-fallback', style: 'font:inherit;color:' + fg + ';background:' + bg + ';border:1px solid ' + line + ';border-radius:6px;padding:4px 6px' }, [
        el('option', { value: 'en', text: 'Englisch' }),
        el('option', { value: 'it', text: 'Italienisch' })
      ]);
      selFallback.value = settings.fallback;
      var status = el('div', { style: 'min-height:18px;font-size:12px;color:' + muted });

      var dialog = el('div', {
        role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'pec-de-title',
        style: 'background:' + bg + ';color:' + fg + ';width:min(460px,calc(100vw - 32px));max-height:calc(100vh - 32px);overflow:auto;border-radius:10px;box-shadow:0 10px 40px rgba(0,0,0,.35);padding:22px 24px;font:14px/1.5 Lato,Arial,sans-serif'
      }, [
        el('div', { style: 'display:flex;align-items:baseline;justify-content:space-between;gap:12px' }, [
          el('h2', { id: 'pec-de-title', style: 'margin:0;font-size:18px;font-weight:700', text: 'PEC-Webmail – Deutsch' }),
          el('span', { style: 'font-size:12px;color:' + muted, text: VERSION ? 'Version ' + VERSION : '' })
        ]),
        el('p', { style: 'margin:12px 0 0' }, [
          'Dies ist eine ', el('strong', { text: 'inoffizielle' }),
          ' deutsche Übersetzung der Webmail. Sie wurde nicht von Aruba S.p.A. bzw. Aruba PEC S.p.A. erstellt, geprüft oder unterstützt. Alle Angaben ohne Gewähr – im Zweifel gilt der Originaltext.'
        ]),
        el('p', { style: 'margin:12px 0 0;display:flex;gap:16px;flex-wrap:wrap' }, [
          el('a', { href: REPO_URL, target: '_blank', rel: 'noopener noreferrer', style: linkStyle, text: 'Projekt auf GitHub' }),
          el('a', { href: ISSUES_URL, target: '_blank', rel: 'noopener noreferrer', style: linkStyle, text: 'Fehler melden (Bugtracker)' })
        ]),
        el('hr', { style: 'border:0;border-top:1px solid ' + line + ';margin:18px 0 14px' }),
        el('h3', { style: 'margin:0 0 10px;font-size:15px;font-weight:700', text: 'Einstellungen' }),
        el('label', { 'for': 'pec-de-enabled', style: 'display:flex;align-items:center;cursor:pointer' }, [cbEnabled, 'Deutsche Übersetzung verwenden']),
        el('div', { style: 'margin:4px 0 0 21px;font-size:12px;color:' + muted, text: 'Ausgeschaltet zeigt die Webmail wieder die in Aruba eingestellte Sprache.' }),
        el('label', { 'for': 'pec-de-fallback', style: 'display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:14px' }, [
          'Sprache für noch nicht übersetzte Texte', selFallback
        ]),
        el('div', { style: 'margin-top:4px;font-size:12px;color:' + muted, text: 'Die Einstellungen werden nur lokal in diesem Browser gespeichert.' }),
        el('div', { style: 'display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:20px;flex-wrap:wrap' }, [
          status,
          el('div', { style: 'display:flex;gap:8px;margin-left:auto' }, [
            el('button', { type: 'button', style: btnStyle, text: 'Schließen', onclick: closeDialog }),
            el('button', {
              type: 'button', text: 'Speichern und neu laden',
              style: btnStyle + ';background:' + accent + ';border-color:' + accent + ';color:#fff',
              onclick: function () {
                var next = { enabled: cbEnabled.checked, fallback: selFallback.value === 'it' ? 'it' : 'en' };
                if (!saveSettings(next)) { status.textContent = 'Speichern nicht möglich (Browser-Speicher gesperrt).'; return; }
                location.reload();
              }
            })
          ])
        ])
      ]);

      var overlay = el('div', {
        id: 'pec-de-overlay',
        style: 'position:fixed;inset:0;z-index:2147483000;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;padding:16px',
        onclick: function (e) { if (e.target === overlay) closeDialog(); }
      }, [dialog]);
      document.body.appendChild(overlay);
      document.addEventListener('keydown', onKey, true);
      cbEnabled.focus();
    }

    function addMenuItem() {
      if (document.getElementById('pec-de-menu')) return;
      var help = document.querySelector('aru-button.help-menu');
      if (!help || !help.parentNode) return;
      var btn = el('button', {
        id: 'pec-de-menu', type: 'button',
        title: settings.enabled ? 'Deutsche Übersetzung (inoffiziell) – Info und Einstellungen' : 'Deutsche Übersetzung ist ausgeschaltet – Info und Einstellungen',
        'aria-label': 'Deutsche Übersetzung – Info und Einstellungen',
        style: 'flex:0 0 auto;align-self:stretch;border:0;background:transparent;color:inherit;font:inherit;font-weight:700;font-size:14px;letter-spacing:.5px;padding:0 12px;cursor:pointer;' + (settings.enabled ? '' : 'opacity:.5;text-decoration:line-through'),
        text: 'DE',
        onclick: openDialog,
        onmouseenter: function () { this.style.background = 'rgba(127,127,127,.12)'; },
        onmouseleave: function () { this.style.background = 'transparent'; }
      });
      help.parentNode.insertBefore(btn, help);
    }

    function startObserver() {
      if (!document.body) { setTimeout(startObserver, 50); return; }
      if (settings.enabled) { try { document.documentElement.lang = 'de'; } catch (e) {} }
      addMenuItem();
      new MutationObserver(addMenuItem).observe(document.body, { childList: true, subtree: true });
    }
    startObserver();

    console.info('[PEC-Webmail DE] Inoffizielle deutsche Übersetzung ' + (settings.enabled ? 'aktiv' : 'ausgeschaltet') + ' – ' + REPO_URL);
  }

  var s = document.createElement('script');
  s.textContent = '(' + pageMain.toString() + ')(' + JSON.stringify(PEC_WEBMAIL_DE) + ',' + JSON.stringify(version) + ');';
  (document.head || document.documentElement).appendChild(s);
  s.remove();
})();
