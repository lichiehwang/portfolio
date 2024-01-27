$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});

// =========================================================
 //      画面が開かれたときの初期設定
 // =========================================================
 window.onload = function() {
  // --- ブラウザのデフォルト言語を取得して初回の表示 ----- 
  var wDef = (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
  var selectedLang = getLangFromCookie() || wDef;
  langSet(selectedLang);
}

// =========================================================
//      選択された言語のみ表示
// =========================================================
function langSet(argLang){
  // --- 切り替え対象のclass一覧を取得 ----------------------
  var elm = document.getElementsByClassName("langCng");

  for (var i = 0; i < elm.length; i++) {
    // --- 選択された言語と一致は表示、その他は非表示 -------
    if(elm[i].getAttribute("lang") == argLang){
      elm[i].style.display = '';
    }
    else{
      elm[i].style.display = 'none';
    }
  }
  setLangCookie(argLang); // 設定 Cookie
}

// =========================================================
//      選択した言語をクッキーに保存
// =========================================================
function setLangCookie(lang) {
  document.cookie = "selectedLang=" + lang + "; path=/";
}

// =========================================================
//      クッキーから言語を取得して表示
// =========================================================
function getLangFromCookie() {
  var lang = document.cookie.replace(/(?:(?:^|.*;\s*)selectedLang\s*=\s*([^;]*).*$)|^.*$/, "$1");
  return lang || null;
}
