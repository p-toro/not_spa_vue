# Not SPA Vue.
Use Parcel.

## Usage
```bash
yarn
yarn dev
yarn build
```

## Note
### 目的
- SPAではなくLPなどのページにおけるVue.jsの使い方をテストする
- jQueryは使用しない

### 仕様
- 1機能ごとにVueインスタンスを生成
- elはスコープ的な意味合い
- 基本的にコンポーネントは未使用

### 利点
- 機能ごとに記述を整理できる
- HTML側でイベントと処理、クラスの付け外し、インタラクティブなパーツなどを理解できる

### 問題点
- HTMLがバリデートで注意される
- el外のオブジェクトの操作
- 複数のVueインスタンスのelで同一のオブジェクトを指定できない

### 所感
- インタラクティブな機能やパーツの多いケースでは採用の可能性あり