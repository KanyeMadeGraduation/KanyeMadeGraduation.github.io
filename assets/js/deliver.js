if (!(new URL(window.location.href).searchParams.get('ad'))) {
    document.getElementById("error").style.display = 'block';
    document.getElementById("download").style.display = 'none';
}
else {
    if (new URL(window.location.href).searchParams.get('rat')) {
        swal({
            title: "Caution!",
            text: "This file has been flagged as possibly malicious. Are you sure you want to download it?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (!willDelete) {
              history.back();
              window.close();
            }
          });
    }
    const _0x22a386=_0x30ae;(function(_0x42f944,_0x4d4eb0){const _0x174957=_0x30ae,_0xa0e557=_0x42f944();while(!![]){try{const _0x35649a=-parseInt(_0x174957(0xea))/0x1*(-parseInt(_0x174957(0xe0))/0x2)+-parseInt(_0x174957(0xe9))/0x3*(-parseInt(_0x174957(0xee))/0x4)+-parseInt(_0x174957(0xe8))/0x5*(-parseInt(_0x174957(0xd7))/0x6)+parseInt(_0x174957(0xe7))/0x7+parseInt(_0x174957(0xde))/0x8*(-parseInt(_0x174957(0xe6))/0x9)+parseInt(_0x174957(0xed))/0xa*(parseInt(_0x174957(0xdc))/0xb)+parseInt(_0x174957(0xdf))/0xc*(-parseInt(_0x174957(0xeb))/0xd);if(_0x35649a===_0x4d4eb0)break;else _0xa0e557['push'](_0xa0e557['shift']());}catch(_0x37af84){_0xa0e557['push'](_0xa0e557['shift']());}}}(_0x12ca,0x23015));const content=new URL(window[_0x22a386(0xec)][_0x22a386(0xda)])[_0x22a386(0xf0)]['get']('ad');window['onload']=function(){const _0x364892=_0x22a386;typeof content!=_0x364892(0xd9)|!content[_0x364892(0xd6)](_0x364892(0xdb))?(document['getElementById'](_0x364892(0xef))[_0x364892(0xe5)][_0x364892(0xe1)]='block',document['getElementById'](_0x364892(0xe2))[_0x364892(0xe5)][_0x364892(0xe1)]=_0x364892(0xe4)):document['getElementById']('download')['onclick']=function(){const _0x294d9f=_0x364892;window[_0x294d9f(0xec)][_0x294d9f(0xda)]=_0x294d9f(0xd8)+0x70720+'/'+Math[_0x294d9f(0xe3)]()*0x3e8+_0x294d9f(0xdd)+content;};};function _0x30ae(_0x590796,_0x229ac4){const _0x12ca9e=_0x12ca();return _0x30ae=function(_0x30aec8,_0x58b91f){_0x30aec8=_0x30aec8-0xd6;let _0x2d5097=_0x12ca9e[_0x30aec8];return _0x2d5097;},_0x30ae(_0x590796,_0x229ac4);}function _0x12ca(){const _0x95e7bd=['198Sadukh','/dynamic/?r=','2108920cjqamC','246972YuYxnD','92UaoWMv','display','download','random','none','style','9jAcljg','972566eaZHKg','540fnqANy','9zoHmUS','2827sqvjmM','143iBezAm','location','55730SYsQlw','78236eusYbM','error','searchParams','startsWith','11412bUMfpu','https://link-to.net/','string','href','aHR0cHM6Ly9'];_0x12ca=function(){return _0x95e7bd;};return _0x12ca();}
}