/* registers service worker and handles PWA install prompt */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js')
      .then(function(reg) { console.log('[App] SW registered:', reg.scope); })
      .catch(function(err) { console.warn('[App] SW failed:', err); });
  });
}

var deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', function(event) {
  event.preventDefault();
  deferredInstallPrompt = event;
  var btn = document.getElementById('installBtn');
  if (btn) btn.style.display = 'inline-block';
});

window.addEventListener('appinstalled', function() {
  deferredInstallPrompt = null;
  var btn = document.getElementById('installBtn');
  if (btn) btn.style.display = 'none';
  console.log('[App] PWA installed');
});

document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('installBtn');
  if (!btn) return;
  btn.addEventListener('click', function() {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then(function(result) {
      console.log('[App] Install outcome:', result.outcome);
      deferredInstallPrompt = null;
      btn.style.display = 'none';
    });
  });
});
