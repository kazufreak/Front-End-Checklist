# フロントエンドチェックリスト
[![Contributors](https://img.shields.io/github/contributors/thedaviddias/Front-End-Checklist.svg)](https://github.com/thedaviddias/Front-End-Checklist/graphs/contributors)
[![CC0](https://img.shields.io/badge/license-CC0-green.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

<!--
The **Front-End Checklist** is an exhaustive list of all elements you need to have / to test before launching your site / page HTML to production.
-->

**フロントエンドチェックリスト**は、みなさんがウェブサイトや HTML ページを本番環境で公開する前に確認するべきあらゆる項目を網羅したリストです。

<!--
It is based on Front-End developers' years of experience, with the additions coming from some other open-source checklists.
-->

これは、フロントエンド開発者たちの数年に及ぶ経験にもとづいており、さらに他のオープンソースのチェックリストの内容も追加されています。

<!--
## Table of Contents
-->

## 目次

<!--
1. **[How to use](#how-to-use)**
2. **[Head](#head)**
3. **[HTML](#html)**
4. **[Webfonts](#webfonts)**
5. **[CSS](#css)**
6. **[Images](#images)**
7. **[JavaScript](#javascript)**
8. **[Security](#security)**
9. **[Performance](#performance-1)**
10. **[Accessibility](#accessibility)**
11. **[SEO](#seo)**
12. **[Translation](#translation)**
13. **[Contributing](#contributing)**
-->

1. **[利用方法](#利用方法)**
2. **[Head](#head)**
3. **[HTML](#html)**
4. **[ウェブフォント](#ウェブフォント)**
5. **[CSS](#css)**
6. **[画像](#画像)**
7. **[JavaScript](#javascript)**
8. **[セキュリティ](#セキュリティ)**
9. **[パフォーマンス](#パフォーマンス-1)**
10. **[アクセシビリティ](#アクセシビリティ)**
11. **[SEO](#seo)**
12. **[翻訳](#翻訳)**
13. **[Contributing](#contributing)**

<!--
## How to use?
-->

## 利用方法

<!--
All items in the **Front-End Checklist** are required for the majority of the projects, but some elements can be omitted or are not essential (in the case of an administration web app, you may not need RSS feed for example). We choose to use 3 levels of flexibility:
-->

**フロントエンドチェックリスト**のすべての項目は大半のプロジェクトで必要とされていますが、いくつかの項目は省略できますし、必須でもありません。（たとえば管理用のウェブアプリケーションの場合は、RSSは必要ないでしょう。）私たちは三段階で重要度を評価しています。

<!--
* ![Low][low_img] means that the item is **recommended** but can be omitted in some particular situations.
* ![Medium][medium_img] means that the item is **highly recommended** and can eventually be omitted in some really particular cases. Some elements, if omitted, can have bad repercussions in terms of performance or SEO.
* ![High][high_img] means that the item **can't be omitted** by any reason. You may cause a dysfunction in your page or have accessibility or SEO issues. The testing priority needs to be on these elements first.
-->

* ![Low][low_img] は、**推奨**を意味していますが、個別のシチュエーションによっては省略することも可能です。
* ![Medium][medium_img] は、**強く推奨**を意味していますが、ごく稀なケースでは必須ではなく省略することも可能です。いくつかの項目においては省略することによってパフォーマンスやSEOで悪影響がある可能性があります。
* ![High][high_img] は、**必須**を意味しており、いかなる理由でも省略することはできません。これらを省略することで機能が不完全だったり、アクセシビリティやSEOの問題が発生することがあります。テストの優先順位はまずこれらの項目からはじめるべきです。

<!--
Some resources possess an emoticon to help you understand which type of content / help you may find on the checklist:
-->

チェックリストのいくつかのリソースでは、絵文字を使ってコンテンツの種類を理解したり、ヘルプを見つけやすいようにしています。

<!--
* 📖: documentation or article
* 🛠: online tool / testing tool
* 📹: media or video content
-->

* 📖: ドキュメンテーションまたは文章
* 🛠: オンラインツール / テストツール
* 📹: メディアまたはビデオコンテンツ

---

## Head

<!--
> **Notes:** You can find [a list of everything](https://github.com/joshbuchea/HEAD) that could be found in the `<head>` of an HTML document.
-->

> **備考:** HTMLドキュメントの `<head>` については、[すべてのリストがこちらにあります](https://github.com/joshbuchea/HEAD)。

<!--
### Meta tag
-->

### Meta タグ

<!--
* [ ] **Doctype:** ![High][high_img] The Doctype is HTML5 and is at the top of all your HTML pages.
-->

* [ ] **DOCTYPE宣言:** ![High][high_img] Doctype が HTML5 であり、すべての HTML ページの先頭にあること。

```html
<!-- Doctype HTML5 -->
<!doctype html>
```

> 📖 [Determining the character encoding - HTML5 W3C](https://www.w3.org/TR/html5/syntax.html#determining-the-character-encoding)

<!--
*The next 3 meta tags (Charset, X-UA Compatible and Viewport) need to come first in the head.*
-->

*次の3つの Meta タグ（Charset、X-UA、Viewport）は、`<head>`の先頭にあるべきです。*

<!--
* [ ] **Charset:** ![High][high_img] The charset declared (UTF-8) is declared correctly.
-->

* [ ] **文字コード:** ![High][high_img] 文字コードの宣言 (UTF-8) が正しく宣言されている。

```html
<!-- Set character encoding for the document -->
<meta charset="utf-8">
```

<!--
* [ ] **X-UA-Compatible:** ![Medium][medium_img] The X-UA-Compatible meta tag is present.
-->

* [ ] **X-UA-Compatible:** ![Medium][medium_img] Meta タグ X-UA-Compatible が存在している。

```html
<!-- Instruct Internet Explorer to use its latest rendering engine -->
<meta http-equiv="x-ua-compatible" content="ie=edge">
```

<!--
> 📖 [Specifying legacy document modes (Internet Explorer)](https://msdn.microsoft.com/en-us/library/jj676915(v=vs.85).aspx)
-->

> 📖 [レガシードキュメントモードの設定 (Internet Explorer)](https://msdn.microsoft.com/en-us/library/jj676915(v=vs.85).aspx)

<!--
* [ ] **Viewport:** ![High][high_img] The viewport is declared correctly.
-->

* [ ] **Viewport:** ![High][high_img] viewport が正しく宣言されている。

```html
<!-- Viewport for responsive web design -->
<meta name="viewport" content="width=device-width, initial-scale=1">
```

<!--
* [ ] **Title:** ![High][high_img] A title is used on all pages (SEO: No more than 65 characters, website title included).
-->

* [ ] **Title:** ![High][high_img] title が全てのページで使用されている。（SEO: ウェブサイトのタイトルも含めて65文字以内であること。）

```html
<!-- Document Title -->
<title>Page Title less than 65 characters</title>
```

> 📖 [Title - HTML - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)

<!--
* [ ] **Description:** ![High][high_img] A meta description is provided, it is unique and doesn't possess more than 150 characters.
-->

* [ ] **Description:** ![High][high_img] meta description が提供されており、これはユニークでありなおかつ150文字以下である。

```html
<!-- Meta Description -->
<meta name="description" content="Description of the page less than 150 characters">
```

<!--
* [ ] **Favicons:** ![Medium][medium_img] Each favicon has been created and displays correctly. If you have only a `favicon.ico`, put it at the root of your site. Normally you won't need to use any markup. However, it's still good practice to link to it using the example below. Today, **PNG format is recommended** over `.ico` format (dimensions: 32x32px).
-->

* [ ] **Favicons:** ![Medium][medium_img] それぞれの favicon が作られており正しく表示されている。もし、``favicon.ico`` しかない場合、それはあなたのサイトのルートに設置されている。通常はマークアップは必要ない。しかしながら、以下の例のようにリンクをはることがまだ有効である。昨今では、**PNG フォーマット** が  ``.ico`` フォーマットよりも推奨されている。（サイズ: 32x32px）

```html
<!-- Standard favicon -->
<link rel="icon" type="image/x-icon" href="https://example.com/favicon.ico">
<!-- Recommended favicon format -->
<link rel="icon" type="image/png" href="https://example.com/favicon.png">
```

> * 🛠 [Favicon Generator](https://www.favicon-generator.org/)
> * 🛠 [RealFaviconGenerator](https://realfavicongenerator.net/)
> * 📖 [Favicon Cheat Sheet](https://github.com/audreyr/favicon-cheat-sheet)
> * 📖 [Favicons, Touch Icons, Tile Icons, etc. Which Do You Need? - CSS Tricks](https://css-tricks.com/favicon-quiz/)
> * 📖 [PNG favicons - caniuse](https://caniuse.com/#feat=link-icon-png)

<!--
* [ ] **Apple Touch Icon:** ![Low][low_img] Apple touch favicon apple-mobile-web-app-capable are present. *(Create your Apple Icon file with at least 200x200px dimension to support all dimensions that you may need)*
-->

* [ ] **Apple Touch Icon:** ![Low][low_img] apple-mobile-web-app-capable がある。 *(すくなくとも 200x200pxのAppleアイコンファイルを作成すれば、必要な全ての寸法をサポートする。)*

```html
<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" href="/custom-icon.png">
```

> 📖 [Configuring Web Applications](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)

<!--
* [ ] **Canonical:** ![Medium][medium_img] Use `rel="canonical"` to avoid duplicate content.
-->

* [ ] **Canonical:** ![Medium][medium_img] 重複したコンテンツを避けるために ``rel="canonical"`` を使用している。

```html
<!-- Helps prevent duplicate content issues -->
<link rel="canonical" href="http://example.com/2017/09/a-new-article-to-red.html">
```

### HTML タグ

<!--
* [ ] **Language tag:** ![High][high_img] The language tag of your website is specified and related to the language of the current page.
-->

* [ ] **言語:** ![High][high_img] あなたのサイトの言語タグが記述されており、そのページの言語を指定している。

```html
<html lang="en">
```

<!--
* [ ] **Direction tag:** ![Medium][medium_img] The direction of lecture is specified on the body tag (It can be used on another HTML tag).
-->

* [ ] **文字方向:** ![Medium][medium_img] 文字方向が記述されている。（これは他の HTML タグ上でも使用可能である。）

```html
<html dir="rtl">
```

> 📖 [dir - HTML - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir)

<!--
* [ ] **Alternate language:** ![Low][low_img] The language tag of your website is specified and related to the language of the current page.
-->

* [ ] **代替言語:** ![Low][low_img] あなたのサイトの言語タグが既述されており、現在のページに言語が関連づけられている。

```html
<link rel="alternate" href="https://es.example.com/" hreflang="es">
```

<!--
* [ ] **Conditional comments:** ![Low][low_img] Conditional comments are present for IE if needed.
-->

* [ ] **条件分岐コメント:** ![Low][low_img] もし必要なら、IE 用の条件分岐コメントタグが設置されている。

> 📖 [About conditional comments (Internet Explorer) - MSDN - Microsoft](https://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx)

<!--
* [ ] **RSS feed:** ![Low][low_img] If your project is a blog or has articles, an RSS link was provided.
-->

* [ ] **RSS フィード:** ![Low][low_img] もしあなたのサイトがブログ、もしくは記事をもっているなら、RSS へのリンクが提供されている。

<!--
* [ ] **CSS Critical:** ![Medium][medium_img] The CSS critical (or "above the fold") collects all the CSS used to render the visible portion of the page. It is embedded before your principal CSS call and between `<style></style>` in a single line (minified).
-->

* [ ] **CSS クリティカル:** ![Medium][medium_img] クリティカル CSS (または "above the fold") が、ページの可視部分をレンダリングするために使用されるすべての CSS を収集していること。それは主な CSS を読み込む前に呼び出されており、``<style></style>`` の間に1行で記述されている。（圧縮されている）

> 📖 [About conditional comments (Internet Explorer) - MSDN - Microsoft](https://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx)

> 🛠 [Critical by Addy Osmani on Github](https://github.com/addyosmani/critical)

<!--
* [ ] **CSS order:** ![High][high_img] All CSS files are loaded before any JavaScript files in the `<head>`. (Except the case where sometimes JS files are loaded asynchronously on top of your page).
-->

* [ ] **CSS 読み込み順:** ![High][high_img] すべての CSS ファイルは ``<head>`` 内でいかなる JavaScript よりも先に読み込まれている。 (JS ファイルが時々非同期にあなたのページのトップに読み込まれる場合を除く。)

<!--
### Social meta
-->

### ソーシャル

<!--
***Facebook OG*** and ***Twitter Cards*** are, for any website, highly recommended. The other social media tags can be considered if you target a particular presence on those and want to ensure the display.
-->

***Facebook OG*** と ***Twitter Cards*** は、すべてのウェブサイトに強く推奨します。 その他のソーシャルメディア用のタグは、特定の対象をターゲットとする際に、より確実に表示されるようになるでしょう。

<!--
* [ ] **Facebook Open Graph:** ![Low][low_img] All Facebook Open Graph (OG) are tested and no one is missing or with a false information. Images need to be at least 600 x 315 pixels, 1200 x 630 pixels recommended.
-->

* [ ] **Facebook Open Graph:** ![Low][low_img] すべての Facebook Open Graph (OG) はテストされ、不足がなく不具合もない。画像サイズは少なくとも 600 x 315 ピクセル以上であり、1200 x 630 ピクセルを推奨する。

```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://example.com/page.html">
<meta property="og:title" content="Content Title">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:description" content="Description Here">
<meta property="og:site_name" content="Site Name">
<meta property="og:locale" content="en_US">
```

<!--
> * 📖 [A Guide to Sharing for Webmasters](https://developers.facebook.com/docs/sharing/webmasters/)
> * 🛠 Test your page with the [Facebook OG testing](https://developers.facebook.com/tools/debug/)
-->

> * 📖 [A Guide to Sharing for Webmasters](https://developers.facebook.com/docs/sharing/webmasters/)
> * 🛠 [Facebook OG testing](https://developers.facebook.com/tools/debug/) であなたのサイトをテストしましょう。

* [ ] **Twitter Card:** ![Low][low_img]

```html
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@site_account">
<meta name="twitter:creator" content="@individual_account">
<meta name="twitter:url" content="https://example.com/page.html">
<meta name="twitter:title" content="Content Title">
<meta name="twitter:description" content="Content description less than 200 characters">
<meta name="twitter:image" content="https://example.com/image.jpg">
```

<!--
> * 📖 [Getting started with cards — Twitter Developers](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started)
> * 🛠 Test your page with the [Twitter card validator](https://cards-dev.twitter.com/validator)
-->

> * 📖 [Getting started with cards — Twitter Developers](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started)
> * 🛠 [Twitter card validator](https://cards-dev.twitter.com/validator) であなたのサイトのテストをしましょう。

<!--
**[⬆ back to top](#table-of-contents)**
-->

**[⬆ トップに戻る](#目次)**

---

## HTML

<!--
### Best practices
-->

### ベストプラクティス

<!--
* [ ] **HTML5 Semantic Elements:** ![High][high_img] HTML5 Semantic Elements are used appropriately (header, section, footer, main...)
-->

* [ ] **HTML5 セマンティック要素:** ![High][high_img] HTML5 セマンティック要素が適切に使用されている。(header, section, footer, main...)

> 📖 [HTML Reference](http://htmlreference.io/)

<!--
* [ ] **Error pages:** ![High][high_img] Error 404 page and 5xx exist. Remember that the 5xx error page needs to have his CSS integrated (no external call on the current server).
-->

* [ ] **エラーページ:** ![High][high_img] 404 及び 5xx 用のエラーページが存在している。5xx エラーページは CSS が内蔵されている必要があることを覚えておくこと。（サーバーに対する追加のリクエストを行わないこと。）

<!--
* [ ] **Noopener:** ![Medium][medium_img] In case you are using external links with ``target="_blank"``, your link should have a ``rel="noopener"`` attribute to prevent tab nabbing. If you need to support older versions of Firefox, use ``rel="noopener noreferrer"``.
-->

* [ ] **Noopener:** ![Medium][medium_img] ``target="_blank"`` で外部リンクを使用する際には、``rel="noopener"`` 属性をつけて Tabnabbing 脆弱性を防ぐこと。もしあなたが古いバージョンの Firefox をサポートする必要があるなら、``rel="noopener noreferrer"`` を使用すること。

> 📖 [About rel=noopener](https://mathiasbynens.github.io/rel-noopener/)

<!--
* [ ] **Clean up comments:** ![Low][low_img] Unnecessary code needs to be removed before sending the page to production.
-->

* [ ] **不必要なコード:** ![Low][low_img] 不必要なコードは、本番環境にアップロードされる前に削除されていること。

<!--
### HTML testing
-->

### HTML のテスト

<!--
* [ ] **W3C compliant:**: ![High][high_img] All pages need to be tested with the W3C validator to identify possible issues in the HTML code.
-->

* [ ] **W3C 準拠:**: ![High][high_img] すべてのページを HTML バリデーターでテストして、問題点を抽出する。

> 🛠 [W3C validator](https://validator.w3.org/)

<!--
* [ ] **HTML Lint:** ![High][high_img] I use tools to help me analyze any issues I could have on my HTML code.
-->

* [ ] **HTML Lint:** ![High][high_img] ツールを使って HTML に問題があるかどうかを分析する。

> 🛠 [Dirty markup](https://dirtymarkup.com/)

<!--
* [ ] **Desktop Browsers:** ![High][high_img] All pages were tested on all current desktop browsers (Safari, Firefox, Chrome, Internet Explorer, EDGE...).
* [ ] **Mobile Browsers:**  ![High][high_img] All pages were tested on all current mobile browsers (Native browser, Chrome, Safari...).
-->

* [ ] **デスクトップブラウザ:** ![High][high_img] すべてのページは、現在のすべてのデスクトップブラウザでテストされている。(Safari, Firefox, Chrome, Internet Explorer, EDGE...)
* [ ] **モバイルブラウザ:**  ![High][high_img] すべてのページは、現在のすべてのモバイルブラウザでテストされている。(Native browser, Chrome, Safari...)

<!--
* [ ] **Link checker:** ![High][high_img] There are no broken links in my page, verify that you don't have any 404 error.
-->

* [ ] **リンクチェッカー:** ![High][high_img] リンク切れがなく、404 エラーが発生しないことを確認する。

> 🛠 [W3C Link Checker](https://validator.w3.org/checklink)

<!--
* [ ] **Adblockers test:** ![Medium][medium_img] Your website shows your content correctly with adblockers enabled (You can provide a message encouraging people to disable their adblocker)
-->

* [ ] **広告ブロッカーテスト:** ![Medium][medium_img] 広告ブロッカーが有効でもコンテンツが正しく表示されている。（ユーザーに対してそれらの広告ブロッカーを無効化するようメッセージを表示することができる。）

<!--
- [ ] **Pixel perfect:** ![High][high_img] Pages are close to pixel perfect. Depending on the quality of the creatives, you may not be 100% accurate, but your page needs to be close to your template.
-->

- [ ] **ピクセルパーフェクト:** ![High][high_img] すべてのページはピクセルパーフェクトに近い状態であること。クリエイティブの品質によっては 100% 正確ではない場合があるが、テンプレートにほぼ近い状態である必要がある。

> [Pixel Perfect - Chrome Extension](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en)

<!--
**[⬆ back to top](#table-of-contents)**
-->

**[⬆ トップに戻る](#目次)**

---

<!--
## Webfonts
-->

## ウェブフォント

<!--
* [ ] **Webfont format:** ![High][high_img] WOFF, WOFF2 and TTF are supported by all modern browsers.
-->

* [ ] **ウェブフォントのフォーマット:** ![High][high_img] WOFF, WOFF2 及び TTF はすべてのモダンブラウザでサポートされている。

> * 📖 [WOFF - Web Open Font Format - Caniuse](https://caniuse.com/#feat=woff).
> * 📖 [WOFF 2.0 - Web Open Font Format - Caniuse](https://caniuse.com/#feat=woff2).
> * 📖 [TTF/OTF - TrueType and OpenType font support](https://caniuse.com/#feat=ttf)
> * 📖 [Using @font-face - CSS-Tricks](https://css-tricks.com/snippets/css/using-font-face/)

<!--
* [ ] **Webfont size:** ![High][high_img] Webfont sizes don't exceed 2 MB (all variants included)
-->

* [ ] **ウェブフォントのサイズ:** ![High][high_img] ウェブフォントのサイズは、すべての綴りが含まれた状態で 2MB を超えないこと。

<!--
**[⬆ back to top](#table-of-contents)**
-->

**[⬆ トップに戻る](#目次)**

---

## CSS

<!--
> **Notes:** Take a look at [CSS guidelines](https://cssguidelin.es/) and [Sass Guidelines](https://sass-guidelin.es/) followed by most  Front-End developers. If you have a doubt about CSS properties, you can visit [CSS Reference](http://cssreference.io/).
-->

> **備考:** 多くのフロントエンド開発者が従っている [CSS guidelines](https://cssguidelin.es/) と [Sass Guidelines](https://sass-guidelin.es/) を見てみましょう。 もし CSS プロパティについて疑問があるなら、[CSS Reference](http://cssreference.io/) に訪れてみましょう。

<!--
* [ ] **Responsive Web Design:** ![High][high_img] The website is using responsive web design.
* [ ] **CSS Print:** ![Medium][medium_img] A print stylesheet is provided and is correct on each page.
* [ ] **Preprocessors:** ![Medium][medium_img] Your page is using a CSS preprocessor ([Sass](http://sass-lang.com/) is preferred).
* [ ] **Unique ID:** ![High][high_img] If IDs are used, they are unique to a page
* [ ] **Reset CSS:** ![High][high_img] A CSS reset (reset, normalize or reboot) is used and up to date. *(If you are using a CSS Framework like Bootstrap or Foundation, a Normalize is already included into it.)*
-->

* [ ] **Responsive Web Design:** ![High][high_img] そのウェブサイトはレスポンシブデザインを採用している。
* [ ] **CSS Print:** ![Medium][medium_img] 印刷用のスタイルシートがそれぞれのページに対して正しく提供されている。
* [ ] **Preprocessors:** ![Medium][medium_img] あなたのサイトは CSS プリプロセッサーを使用している。 ([Sass](http://sass-lang.com/) が推奨される。)
* [ ] **Unique ID:** ![High][high_img] もし ID が使用されているなら、そのページの中でユニークであること。
* [ ] **Reset CSS:** ![High][high_img] CSS のリセット (reset, normalize または reboot) が使用されており最新である。 *(もしあなたが Bootstrap や Foundation などの CSS フレームワークを使用しているなら、それらはすでに導入されている。)*

> * 📖 [Reset.css](https://meyerweb.com/eric/tools/css/reset/)
> * 📖 [Normalize.css](https://necolas.github.io/normalize.css/)
> * 📖 [Reboot](https://getbootstrap.com/docs/4.0/content/reboot/)

<!--
* [ ] **JS prefix:** ![Low][low_img] All classes (or id- used in JavaScript files) begin with **js-** and are not styled into the CSS files.
-->

* [ ] **JS prefix:** ![Low][low_img] すべての class (または JavaScript で使用されいる ID) は、**js-** で始まっており、それらは CSS で使用されていない。

```html
<div id="js-slider" class="my-slider">
<!-- Or -->
<div id="id-used-by-cms" class="js-slider my-slider">
```

<!--
* [ ] **CSS embed or line:** ![High][high_img] Avoid at all cost the use of CSS embed or inline: only used for valid reasons (ex: background-image for slider, CSS critical).
* [ ] **Vendor prefixes:** ![High][high_img] CSS vendor prefixes are used and are generated accordingly with your browser support compatibility.
-->

* [ ] **内部 CSS 及びインラインスタイル:** ![High][high_img] 内部 CSS やインラインスタイルを使用することを避け、正当な理由でのみ使用する。（例： スライダー用の背景画像や CSS クリティカルなど）
* [ ] **ベンダープレフィックス:** ![High][high_img] CSS ベンダープレフィックスが、ブラウザの互換性に基づいて生成され、使用されている。

> 🛠 [Autoprefixer CSS online](https://autoprefixer.github.io/)

<!--
### Performance
-->

### パフォーマンス

<!--
- [ ] **Concatenation:** ![High][high_img] CSS files are concatenated in a single file *(Not for HTTP/2)*
- [ ] **Minification:** ![High][high_img] All CSS files are minified.
- [ ] **Non-blocking:** ![Medium][medium_img] CSS files need to be non-blocking to prevent the DOM from taking time to load.
-->

- [ ] **ファイルの結合:** ![High][high_img] CSS ファイルが結合されている。 *(HTTP/2 では不要)*
- [ ] **ミニファイ:** ![High][high_img] すべての CSS ファイルはミニファイされている。
- [ ] **ノンブロッキング:** ![Medium][medium_img] CSS ファイルは DOM の読み込みに時間がかからないようにノンブロッキングである。

> * 📖 [loadCSS by filament group](https://github.com/filamentgroup/loadCSS)
> * 📖 [Example of preload CSS using loadCSS](https://gist.github.com/thedaviddias/c24763b82b9991e53928e66a0bafc9bf)

<!--
- [ ] **Unused CSS:** ![Low][low_img] Remove unused CSS
-->

- [ ] **Unused CSS:** ![Low][low_img] 使用していない CSS は削除されていること。

> * 🛠 [UnCSS Online](https://uncss-online.com/) 🛠
> * 🛠 [PurifyCSS](https://github.com/purifycss/purifycss)
> * 🛠 [Chrome DevTools Coverage](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage)

<!--
### CSS testing
-->

### CSS のテスト

<!--
* [ ] **Stylelint:** ![High][high_img] All CSS or SCSS files are without any errors.
-->

* [ ] **文法:** ![High][high_img] すべての CSS 及び SCSS にはエラーがないこと。

> * 🛠 [stylelint, a CSS linter](https://stylelint.io/)
> * 📖 [Sass guidelines](https://sass-guidelin.es/)

<!--
* [ ] **Responsive web design:** ![High][high_img] All pages were tested at the following breakpoints: 320px, 768px, 1024px (can be more / different according to your analytics).
-->

* [ ] **レスポンシブデザイン:** ![High][high_img] すべてのページは、320px, 768px, 1024px のブレイクポイントでテストされていること。（可能であれば、アナリティクスの結果に基づいて他のブレイクポイントでもテストする。）

<!--
* [ ] **CSS Validator:** ![Medium][medium_img] The CSS was tested and pertinent errors were corrected.
-->

* [ ] **CSS バリデーター:** ![Medium][medium_img] CSS がテストされ、関連するエラーが修正されていること。

> 🛠 [CSS Validator](https://jigsaw.w3.org/css-validator/)

<!--
* [ ] **Reading direction:** ![High][high_img] All pages need to be tested for LTR and RTL languages if they need to be supported.
-->

* [ ] **書字方向:** ![High][high_img] すべてのページは、必要に応じて LTR 及び RTL でテストされていること。

> * 📖 [Building RTL-Aware Web Apps & Websites: Part 1 - Mozilla Hacks](https://hacks.mozilla.org/2015/09/building-rtl-aware-web-apps-and-websites-part-1/)
> * 📖 [Building RTL-Aware Web Apps & Websites: Part 2 - Mozilla Hacks](https://hacks.mozilla.org/2015/10/building-rtl-aware-web-apps-websites-part-2/)

<!--
**[⬆ back to top](#table-of-contents)**
-->

**[⬆ トップに戻る](#目次)**

---

<!--
## Images
-->

## 画像

<!--
> **Notes:** For a complete understanding of image optimization, check the free ebook **[Essential Image Optimization](https://images.guide/)** from Addy Osmani.
-->

> **Notes:** 画像の最適化に関して総合的に理解するには、Addy Osmani による **[Essential Image Optimization](https://images.guide/)** をおすすめします。

<!--
### Best practices
-->

### ベストプラクティス

<!--
* [ ] **Optimization:** ![High][high_img] All images are optimized to be rendered in the browser. WebP format could be used for critical pages (like Homepage).
-->

* [ ] **Optimization:** ![High][high_img] すべての画像はブラウザでの表示に対して最適化されていること。WebP フォーマットは、ホームページのような重要なページでも使用することができます。

> * 🛠 [Imagemin](https://github.com/imagemin/imagemin)
> * 🛠 Use [ImageOptim](https://imageoptim.com/) to optimise your images for free.

<!--
* [ ] **Retina:** ![Low][low_img] You provide layout images x2 or 3x, support retina display.
* [ ] **Sprite:** ![Medium][medium_img] Small images are in a sprite file (in the case of icons, they can be in an SVG sprite image).
* [ ] **Width and Height:** ![High][high_img] All ``<img>`` have height and width set (Don't specify px or %).
-->

* [ ] **Retina:** ![Low][low_img] Retina ディスプレイをサポートするために2倍または3倍のイメージサイズの画像を提供している。
* [ ] **Sprite:** ![Medium][medium_img] 小さい画像はスプライト画像にまとめられている。（アイコンの場合は、SVGスプライトイメージに含めることができます。）
* [ ] **Width and Height:** ![High][high_img] すべての ``<img>`` は、`height` と `width` が指定されている。（`px` または `%` を指定しない。）

<!--
> ***Note:*** Lots of developers assume that width and height are not compatible with responsive web design. It's absolutely not the case.
-->

> ***備考:*** 開発者の多くは、`width` と `height` がレスポンシブウェブデザインと互換性がないと想定しています。 断じてそうではありません。

<!--
* [ ] **Alternative text:** ![High][high_img] All ``<img>`` have an alternative text which describe the image visually.
* [ ] **Lazy loading:** ![Medium][medium_img] Images are lazyloaded (A noscript fallback is always provided).
-->

* [ ] **Alt テキスト:** ![High][high_img] すべての ``<img>`` は Alt テキストが代替えテキストとして指定されていること。
* [ ] **遅延ロード:** ![Medium][medium_img] 画像は遅延ロードされていること。（noscript による代替策が常に提供されていること。）

<!--
**[⬆ back to top](#table-of-contents)**
-->

**[⬆ トップに戻る](#目次)**

---

## JavaScript

<!--
### Best practices
-->

### ベストプラクティス

<!--
* [ ] **JavaScript Inline:** ![High][high_img] You don't have any JavaScript code inline (mixed with your HTML code).
* [ ] **Concatenation:** ![High][high_img] JavaScript files are concatenated.
* [ ] **Minification:** ![High][high_img] JavaScript files are minified (you can add the `.min` suffix).
-->

* [ ] **インライン JavaScript:** ![High][high_img] インライン JavaScript がないこと。（HTML と混ざっているもの）
* [ ] **ファイルの結合:** ![High][high_img] JavaScript ファイルは一つのファイルに結合されていること。
* [ ] **ミニファイ:** ![High][high_img] JavaScript ファイルはミニファイされていること。（`.min.js` という拡張子を使用できる。）

> [Minify Resources (HTML, CSS, and JavaScript)](https://developers.google.com/speed/docs/insights/MinifyResources)

* [ ] **JavaScript セキュリティ:**

> [Guidelines for Developing Secure Applications Utilizing JavaScript](https://www.owasp.org/index.php/DOM_based_XSS_Prevention_Cheat_Sheet#Guidelines_for_Developing_Secure_Applications_Utilizing_JavaScript)*

<!--
* [ ] **Non-blocking:** ![Medium][medium_img] JavaScript files are loaded asynchronously using `async` or deferred using `defer` attribute.
-->

* [ ] **ノンブロッキング:** ![Medium][medium_img] JavaScript ファイルは、`async` 属性を使用して非同期で読み込まれるか、`defer` 属性を使用して遅延実行されている。

> 📖 [Remove Render-Blocking JavaScript](https://developers.google.com/speed/docs/insights/BlockingJS)

<!--
* [ ] **Modernizr:** ![Low][low_img] If you need to target some specific features you can use a custom Modernizr to add classes in your `<html>` tag.
-->

* [ ] **Modernizr:** ![Low][low_img] もし、ある特定の機能を使用する際には、Modernizr を使用して、`<html>` の class を追加することができる。

> 🛠 [Customize your Modernizr](https://modernizr.com/download?setclasses)

<!--
### JavaScript testing
-->

### JavaScript テスティング

<!--
* [ ] **ESLint:** ![High][high_img] No errors are flagged by ESLint (based on your configuration or standards rules).
-->

* [ ] **ESLint:** ![High][high_img] ESLint にてエラーが発生しないこと。（あなたの設定またはスタンダードなルールを基準とする。）

> * 📖 [ESLint - The pluggable linting utility for JavaScript and JSX](https://eslint.org/)

<!--
**[⬆ back to top](#table-of-contents)**
-->

**[⬆ トップに戻る](#目次)**

---

<!--
## Security
-->

## セキュリティ

<!--
### Scan and check your web site
-->

### ウェブサイトをスキャンして確認する

> * [securityheaders.io](https://securityheaders.io/)
> * [Observatory by Mozilla](https://observatory.mozilla.org/)
> * [ASafaWeb - Automated Security Analyser for ASP.NET Websites](https://asafaweb.com/)

<!--
### Best practices
-->

### ベストプラクティス

<!--
* [ ] **HTTPS:** ![Medium][medium_img] HTTPS is used on every pages and for all external content (plugins, images...).
-->

* [ ] **HTTPS:** ![Medium][medium_img] すべてのページ及び外部コンテンツで HTTPS が使用されている。（プラグイン、画像 ...）

> * 🛠 [Let's Encrypt - Free SSL/TLS Certificates](https://letsencrypt.org/)
> * 🛠 [Free SSL Server Test](https://www.ssllabs.com/ssltest/index.html)
> * 📖 [Strict Transport Security](http://caniuse.com/#feat=stricttransportsecurity)

<!--
* [ ] **HTTP Strict Transport Security (HSTS):** ![Medium][medium_img] The HTTP header is set to 'Strict-Transport-Security'.
-->

* [ ] **HTTP Strict Transport Security (HSTS):** ![Medium][medium_img] HTTP ヘッダーには 'Strict-Transport-Security' が設定されている。

> * 🛠 [Check HSTS preload status and eligibility](https://hstspreload.org/)
> * 📖 [HTTP Strict Transport Security Cheat Sheet - OWASP](https://www.owasp.org/index.php/HTTP_Strict_Transport_Security_Cheat_Sheet)
> * 📖 [Transport Layer Protection Cheat Sheet - OWASP](https://www.owasp.org/index.php/Transport_Layer_Protection_Cheat_Sheet)

<!--
* [ ] **Cross Site Request Forgery (CSRF):** ![High][high_img] You are ensure that requests made to your server-side are legitimate and originate from your website / app to prevent CSRF attacks.
-->

* [ ] **Cross Site Request Forgery (CSRF):** ![High][high_img] CSRF 攻撃を防ぐために、あなたのサーバーへのリクエストにたいしては、それがあなたのウェブサイト/アプリから送信されていることを確認している。

> 📖 [Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet  - OWASP](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet)

<!--
* [ ] **Cross Site Scripting (XSS):** ![High][high_img] Your page or website is free from XSS possible issues.
-->

* [ ] **Cross Site Scripting (XSS):** ![High][high_img] あなたのサイトには、XSS が可能な脆弱性が存在していない。

> * 📖 [XSS (Cross Site Scripting) Prevention Cheat Sheet  - OWASP](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet)
> * 📖 [DOM based XSS Prevention Cheat Sheet  - OWASP](https://www.owasp.org/index.php/DOM_based_XSS_Prevention_Cheat_Sheet)

<!--
* [ ] **Content Type Options** ![Medium][medium_img] Prevents Google Chrome and Internet Explorer from trying to mime-sniff the content-type of a response away from the one being declared by the server.
-->

* [ ] **Content Type Options** ![Medium][medium_img] サーバーからのレスポンスヘッダーによって、Google Chrome と Internet Explorer による、mime-sniff による Content-Type に一致しない動作を防止する。

> * 📖 [X-Content-Type-Options - Scott Helme](https://scotthelme.co.uk/hardening-your-http-response-headers/#x-content-type-options)

<!--
* [ ] **X-Frame-Options (XFO)** ![Medium][medium_img] Protects your visitors against clickjacking attacks.
-->

* [ ] **X-Frame-Options (XFO)** ![Medium][medium_img] 来訪者をクリックジャッキング攻撃から保護する。

> * 📖 [X-Frame-Options - Scott Helme](https://scotthelme.co.uk/hardening-your-http-response-headers/#x-frame-options)
> * 📖 [RFC7034 - HTTP Header Field X-Frame-Options](https://tools.ietf.org/html/rfc7034)

<!--
**[⬆ back to top](#table-of-contents)**
-->

**[⬆ トップに戻る](#目次)**

---

<!--
## Performance
-->

## パフォーマンス

<!--
### Best practices
-->

### ベストプラクティス

<!--
- [ ] **Weight page:** ![High][high_img] The weight of each page is between 0 and 500 KB.
-->

- [ ] **ページの重さ:** ![High][high_img] それぞれのページの重さは 500 KB以下である。

> * 🛠 [Website Page Analysis](https://tools.pingdom.com)
> * 📖 [Size Limit: Make the Web lighter](https://evilmartians.com/chronicles/size-limit-make-the-web-lighter)

<!--
- [ ] **Minified:** ![Medium][medium_img] Your HTML is minified.
-->

- [ ] **ミニファイ:** ![Medium][medium_img] HTML がミニファイされている。

> 🛠 [W3C Validator](https://validator.w3.org/)

<!--
* [ ] **Lazy loading:** ![Medium][medium_img] Images, scripts and CSS need to be lazy loaded to improve the response time of the current page (See details in their respective sections).
-->

* [ ] **Lazy loading:** ![Medium][medium_img] 画像やスクリプト、CSS は、レスポンス時間を改善するために遅延ロードされている。（それぞれのセクションで詳細をみてください。）

<!--
* [ ] **Cookie size:** If you are using cookies be sure each cookie doesn't exceed 4096 bytes and your domain name don't have more than 20 cookies.
-->

* [ ] **Cookie size:** もし Cookie を使用しているなら、4096 バイトを超えていないこと、20以上の Cookie を使用していないこと。

> * 📖 [Cookie specification: RFC 6265](https://tools.ietf.org/html/rfc6265)
> * 📖 [Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
> * 🛠 [Browser Cookie Limits](http://browsercookielimits.squawky.net/)

<!--
### Preparing upcoming requests
-->

### HTTP リクエストの最適化

> 📖 [Explanation of the following techniques](https://css-tricks.com/prefetching-preloading-prebrowsing/)

<!--
* [ ] **DNS resolution:** ![Low][low_img] DNS of third-party services that may be needed are resolved in advance during idle time using `dns-prefetch`.
-->

* [ ] **DNS resolution:** ![Low][low_img] サードパーティーサービスの DNS には `dns-prefetch` を使用して、アイドル時間中に名前解決を行う。


```html
<link rel="dns-prefetch" href="https://example.com">
```

<!--
* [ ] **Preconnection:** ![Low][low_img] DNS lookup, TCP handshake and TLS negociation with services that will be needed soon is done in advance during idle time using `preconnect`.
-->

* [ ] **Preconnection:** ![Low][low_img] サードパーティーサービスの DNS ルックアップ、TCP ハンドシェイク及び TLS ネゴシエーションには、`preconnect` を使用してアイドル時間中に事前に行われている。

```html
<link rel="preconnect" href="https://example.com">
```

<!--
* [ ] **Prefetching:** ![Low][low_img] Resources that will be needed soon (e.g. lazy loaded images) are requested in advance during idle time using `prefetch`.
-->

* [ ] **Prefetching:** ![Low][low_img] すぐに必要になりそうなリソース（たとえば遅延ロードを行なっている画像）は、`prefetch` を使用してアイドル時間中にリクエストを行なっている。

```html
<link rel="prefetch" href="image.png">
```

<!--
* [ ] **Preloading:** ![Low][low_img] Resources needed in the current page (e.g. scripts placed at the end of `<body>`) in advance using `preload`.
-->

* [ ] **Preloading:** ![Low][low_img] そのページで必要なリソース（たとえば `<body>` の最後に設置されているスクリプトなど）には `preload` を使用している。

```html
<link rel="preload" href="app.js">
```

> 📖 [Difference between prefetch and preload](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)

<!--
### Performance testing
-->

### パフォーマンステスト

<!--
* [ ] **Google PageSpeed:** ![High][high_img] All your pages were tested (not only the homepage) and have a score of at least 90/100.
-->

* [ ] **Google PageSpeed:** ![High][high_img] ホームページだけでなく、すべてのページがテストされており、90-100 のスコアであること。

> * 🛠 [Google PageSpeed](https://developers.google.com/speed/pagespeed/insights/)
> * 🛠 [Test your mobile speed with Google](https://testmysite.withgoogle.com)
> * 🛠 [WebPagetest - Website Performance and Optimization Test](https://www.webpagetest.org/)

<!--
**[⬆ back to top](#table-of-contents)**
-->

**[⬆ トップに戻る](#目次)**

---

<!--
## Accessibility
-->

## アクセシビリティ

> **Notes:** You can watch the playlist [A11ycasts with Rob Dodson](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g) 📹

<!--
### Best practices
-->

### ベストプラクティス

<!--
- [ ] **Progressive enhancement:** ![Medium][medium_img] Major functionality like main navigation and search should work without JavaScript enabled.
-->

- [ ] **プログレッシブエンハンスメント:** ![Medium][medium_img] 主要な機能、たとえばメインナビゲーションや検索などは、JavaScript 無しでも動作しなければならない。

> 📖 [Enable / Disable JavaScript in Chrome Developer Tools](https://www.youtube.com/watch?v=kBmvq2cE0D8)

<!--
- [ ] **Color contrast:** ![Medium][medium_img] Color contrast should at least pass WCAG AA (AAA for mobile).
-->

- [ ] **Color contrast:** ![Medium][medium_img] カラーコントラストは WCAG のレベル AA を満たしている。（モバイル向けには AAA）

> 🛠 [Contrast ratio](https://leaverou.github.io/contrast-ratio/)

<!--
#### Headings
-->

#### 見出し

<!--
* [ ] **H1:** ![High][high_img] All pages have an H1 which is not the title of the website.
* [ ] **Headings:** ![High][high_img] Headings should be used properly in the right order (H1 to H6).
-->

* [ ] **H1:** ![High][high_img] 全てのページには、サイトのタイトルとは違う H1 がある。
* [ ] **Headings:** ![High][high_img] 見出しは正しい順序で適切に使用されている。（H1 から H6）

> 📹 [Why headings and landmarks are so important -- A11ycasts #18](https://www.youtube.com/watch?v=vAAzdi1xuUY&index=9&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)

<!--
#### Landmarks
-->

#### ランドマーク

<!--
- [ ] **Role banner:** ![High][high_img] `<header>` has `role="banner"`.
- [ ] **Role navigation:** ![High][high_img] `<nav>` has `role="navigation"`.
- [ ] **Role main:** ![High][high_img] `<main>` has `role="main"`.
-->

- [ ] **Role banner:** ![High][high_img] `<header>` には `role="banner"` がある。
- [ ] **Role navigation:** ![High][high_img] `<nav>` には `role="navigation"` がある。
- [ ] **Role main:** ![High][high_img] `<main>` には `role="main"` がある。

> 📖 [Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/GL/wiki/Using_ARIA_landmarks_to_identify_regions_of_a_page)

<!--
### Semantics
-->

### セマンティック

<!--
- [ ] **Specific HTML5 input types are used:** ![Medium][medium_img] This is especially important for mobile devices that show customized keypads and widgets for different types.
-->

- [ ] **適切な HTML5 `input` タイプが使用されている:** ![Medium][medium_img] これは、キーパッドやウィジェットが様々なタイプにカスタマイズされるモバイルデバイスでは特に重要です。

> 📖 [Mobile Input Types](http://mobileinputtypes.com/)

<!--
### Form
-->

### フォーム

<!--
* [ ] **Label:** ![High][high_img] A label is associated with each input form element. In case a label can't be displayed, use `aria-label` instead.
-->

* [ ] **Label:** ![High][high_img] `label` は、それぞれのフォーム要素に関連づけられている。もし `label` を表示できない場合には `aria-label` を使用する。

> 📖 [Using the aria-label attribute - MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)

<!--
### Accessibility testing
-->

### アクセシビリティテスト

<!--
* [ ] **Accessibility standards testing:** ![High][high_img] Use the WAVE tool to test if your page respects the accessibility standards.
-->

* [ ] **アクセシビリティスタンダードテスト:** ![High][high_img] もしアクセシビリティスタンダードに準拠するなら、WAVE ツールを使用してテストを行うことができる。

> 🛠 [Wave testing](http://wave.webaim.org/)

<!--
* [ ] **Keyboard navigation:** ![High][high_img] Test your website using only your keyboard in a previsible order. All interactive elements are reachable and usable.
* [ ] **Screen-reader:** ![Medium][medium_img] All pages were tested in a screen-reader (VoiceOver, ChromeVox, NVDA or Lynx).
* [ ] **Focus style:** ![High][high_img] If the focus is disabled, it is replaced by visible state in CSS.
-->

* [ ] **キーボード操作:** ![High][high_img] すべてのインタラクティブな要素に到達可能で使用可能であることが、目に見える順序でキーボードだけを使ってテストされている。
* [ ] **スクリーンリーダー:** ![Medium][medium_img] すべてのページはスクリーンリーダーでテストされている。（VoiceOver, ChromeVox, NVDA or Lynx）
* [ ] **フォーカススタイル:** ![High][high_img] もし、フォーカスが無効化されているなら、CSS による状態の可視化に置き換えられている。

> 📹 [Managing Focus - A11ycasts #22](https://www.youtube.com/watch?v=srLRSQg6Jgg&index=5&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)

<!--
**[⬆ back to top](#table-of-contents)**
-->

**[⬆ トップに戻る](#目次)**

---

## SEO

<!--
* [ ] **Google Analytics:** ![High][high_img] Google Analytics is installed and correctly configured.
* [ ] **Headings logic:** ![Medium][medium_img] Heading text helps to understand the content in the current page.
* [ ] **sitemap.xml:** ![High][high_img] A sitemap.xml exists and was submitted to Google Search Console (previously Google Webmaster Tools).
* [ ] **robots.txt:** ![High][high_img] The robots.txt is not blocking webpages.
-->

* [ ] **Google Analytics:** ![High][high_img] Google Analytics がインストールされており、正しく設定されている。
* [ ] **見出し構造:** ![Medium][medium_img] 見出し用のテキストが、そのページの内容を理解することの手助けになっている。
* [ ] **sitemap.xml:** ![High][high_img] `sitemap.xml` が存在しており Google Search Console に登録されている。（旧 Google Webmaster Tools）
* [ ] **robots.txt:** ![High][high_img] `robots.txt` によってブロックされていないこと。

> * 🛠 Test your robots.txt with [Google Robots Testing Tool](https://www.google.com/webmasters/tools/robots-testing-tool)

<!--
* [ ] **Structured Data:** ![High][high_img] Pages using structured data are tested and are without errors. Structured data helps crawlers understand the content in the current page.
-->

* [ ] **構造化データ:** ![High][high_img] 構造化データを使用しており、エラーがないことをテストされている。構造化データはクローラーがそのページのコンテンツを理解するための手助けになっている。

> * 📖 [Introduction to Structured Data - Search - Google Developers](https://developers.google.com/search/docs/guides/intro-structured-data)
> * 🛠 Test your page with the [Structured Data Testing Tool](https://developers.google.com/structured-data/testing-tool/)

<!--
* [ ] **Sitemap HTML:** ![Medium][medium_img] An HTML sitemap is provided and is accessible via a link in the footer of your website.
-->

* [ ] **Sitemap HTML:** ![Medium][medium_img] HTML サイトマップが提供されており、フッターのリンクからリンクされている。

> * 📖 [Sitemap guidelines - Google Support](https://support.google.com/webmasters/answer/183668?hl=en)
> * 🛠 [Sitemap generator](https://websiteseochecker.com/html-sitemap-generator/)


<!--
**[⬆ back to top](#table-of-contents)**
-->

**[⬆ トップに戻る](#目次)**

---

<!--
## Translation
-->

## 翻訳

<!--
The Front-End Checklist is also available in other languages. Thanks for all translators and their awesome work!
-->

フロントエンドチェックリストは、他の言語でも提供されています。すべての翻訳者の皆さん、すばらしい仕事をしてくれてありがとう！

* 🇯🇵 Japanese: [miya0001/Front-End-Checklist](https://github.com/miya0001/Front-End-Checklist)

<!--
**[⬆ back to top](#table-of-contents)**
-->

**[⬆ トップに戻る](#目次)**

---

<!--
## Contributing
-->

## 貢献

訳注： オリジナル版への貢献と区別するため、オリジナルへの貢献については英語の原文そのままを掲載しておきます。

**Open an issue or a pull request to suggest changes or additions.**

### Guide

The **Front-End Checklist** repository consists of two branches:

#### 1. `master`

This branch consists of the `README.md` file that is automatically reflected on the [Front-End Checklist](http://frontendchecklist.com/) website.

#### 2. `develop`

This branch will be used to make some significant changes to the structure, content if needed. It is preferable to use the master branch to fix small errors or add a new item.

### Contributors

Check out all the super awesome [contributors](https://github.com/thedaviddias/frontendchecklist/graphs/contributors).

## Authors

**[David Dias](https://github.com/thedaviddias/Front-End-Checklist)**, **[Geoffrey Signorato](https://github.com/geosenna)**, **[Sandeep Ramgolam](https://twitter.com/__Sun__)** and **[Cédric Poilly](https://github.com/CedricPoilly)**.

## License

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

<!--
**[⬆ back to top](#table-of-contents)**
-->

## 日本語版への貢献（翻訳）

誤訳、誤記、その他の誤りを見つけた場合には、以下のリポジトリにプルリクエストをお送りいただくか、Issue にてご報告をお願いします。

https://github.com/miya0001/Front-End-Checklist

原則として、このドキュメントはオリジナルの文書に忠実な翻訳をこころがけております。日本語独自の仕様等にもとづく内容の修正等は行なっておりません。

### 翻訳の手順

オリジナル側の変更を追従させるには、以下のような手順でオリジナル側の変更をマージしてください。

```
$ git clone git@github.com:miya0001/Front-End-Checklist.git
$ cd Front-End-Checklist
$ git remote add upstream git@github.com:thedaviddias/Front-End-Checklist.git
$ git fetch upstream
$ git merge upstream/master
```

翻訳する際には、オリジナルの原文をコメントアウトしておくと、オリジナル側で変更があった際に差分を確認しやすくなります。

**[⬆ トップに戻る](#目次)**

[low_img]: http://res.cloudinary.com/djnyaloac/image/upload/v1508238836/level-checklist-low.png
[medium_img]: http://res.cloudinary.com/djnyaloac/image/upload/v1508238836/level-checklist-medium.png
[high_img]: http://res.cloudinary.com/djnyaloac/image/upload/v1508238836/level-checklist-high.png
