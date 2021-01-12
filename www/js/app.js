// Dom7
const $ = Dom7;

// Init App
const app = new Framework7({
  id: 'com.skripsi.deteksiWajah',
  root: '#app',
  theme: 'md',
  view: {
    stackPages: true
  },
  statusbar: {
    androidBackgroundColor: '#2f7bf5',
    androidTextColor: 'white'
  },
  // routes.js,
  routes: routes
});


// ----------------
// Create global DB
let db

// Create event untuk android
document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("backbutton", onBackKeyDown, false);

function onDeviceReady() {
  // Deklarasi DB sqlite
  db = window.sqlitePlugin.openDatabase({
    name: 'db_face_recognition',
    location: 'default',
    androidDatabaseProvider: 'system'
  });

  // Request permission untuk Kamera
  const permissions = cordova.plugins.permissions;

  permissions.requestPermission(permissions.CAMERA);
}

// Fungsi untuk tombol back
let tutup = false;

const toastTutup = app.toast.create({
  text: 'Tekan lagi untuk keluar',
  position: 'center',
  closeTimeout: 2000,
  on: {
    opened: function () {
      tutup = true
    }
  }
});

function onBackKeyDown() {
  console.log(app.views.main.history.length);
  // Handle the back button
  if ($('.modal-in').length > 0 && !tutup) {
    app.sheet.close('.modal-in')
  } else if (app.views.main.history.length == 1) {
    if (tutup) navigator.app.exitApp();

    toastTutup.open()

    setTimeout(() => {
      tutup = false
    }, 2000);

  } else {
    app.dialog.close();
    app.views.main.router.back();
    return false;
  }
}