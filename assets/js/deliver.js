if (new URLSearchParams(window.location.search).has("rat")) {
    Swal.fire({
      icon: 'warning',
      title: 'Caution!',
      text: 'This file has been flagged as possibly malicious. Are you sure you want to download it?',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#d3d3d3',
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        window.history.back();
      }
    });
}
if (new URLSearchParams(window.location.search).has("old")) {
    Swal.fire({
      icon: 'info',
      title: 'Disclaimer!',
      text: 'This file is old, it may suffer from vulnerabilities such as Log4Shell. If you use it, make sure you enable flags such as -noverify. If you don\'t even know what that means, you probably shouldn\'t continue. Are you sure you want to download it?',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#d3d3d3',
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        window.history.back();
      }
    });
}
document.getElementById("download").onclick = function () {
  const adValue = new URL(window.location.href).searchParams.get("ad");

  const campaignId = 460576;
  const redirectUrl =
      "https://link-to.net/" +
      campaignId + "/" +
      (Math.random() * 1000) +
      "/dynamic/?r=";

  const finalUrl = "https://hovac.top/download.html?dl=" + adValue;

  window.location.href = redirectUrl + btoa(finalUrl);
};