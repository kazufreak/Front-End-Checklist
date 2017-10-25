# 日本語版への貢献（翻訳）

誤訳、誤記、その他の誤りを見つけた場合には、以下のリポジトリにプルリクエストをお送りいただくか、Issue にてご報告をお願いします。

https://github.com/miya0001/Front-End-Checklist

原則として、このドキュメントはオリジナルの文書に忠実な翻訳をこころがけております。日本語独自の仕様等にもとづく内容の修正等は行なっておりません。

## 翻訳の手順

オリジナル側の変更を日本語版に反映するには、以下のような手順でオリジナル側の変更をマージしてください。

```
$ git clone git@github.com:miya0001/Front-End-Checklist.git
$ cd Front-End-Checklist
$ git remote add upstream git@github.com:thedaviddias/Front-End-Checklist.git
$ git fetch upstream
$ git merge upstream/master
```

翻訳する際には、オリジナルの原文を以下のようにコメントアウトして残して、その下に翻訳した文章を追加してください。そうすることでオリジナル版の変更点が確認できるようになります。

```
<!--
The **Front-End Checklist** is an exhaustive list of all elements you need to have / to test before launching your site / HTML page to production.
-->

**フロントエンドチェックリスト**は、みなさんがウェブサイトや HTML ページを本番環境で公開する前に確認するべきあらゆる項目を網羅したリストです。

<!--
It is based on Front-End developers' years of experience, with the additions coming from some other open-source checklists.
-->

これは、フロントエンド開発者たちの数年に及ぶ経験にもとづいており、さらに他のオープンソースのチェックリストの内容も追加されています。
```
