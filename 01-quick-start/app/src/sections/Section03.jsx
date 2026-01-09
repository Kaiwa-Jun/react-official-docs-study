// Section03: JSXでマークアップを書く
// 公式ドキュメント「JSXでマークアップを書く」に対応
// https://ja.react.dev/learn#writing-markup-with-jsx

// ============================================
// BadExample コンポーネント
// - JSXで避けるべき書き方を説明用に表示
// ============================================
function BadExample() {
  return (
    <div className="code-example bad">
      <h4>NG例（これはエラーになる）</h4>
      <pre>{`// 複数のタグを並列で返すとエラー
function App() {
  return (
    <h1>タイトル</h1>
    <p>段落</p>
  )
}`}</pre>
    </div>
  )
}

// ============================================
// GoodExample コンポーネント
// - JSXの正しい書き方を説明用に表示
// ============================================
function GoodExample() {
  return (
    <div className="code-example good">
      <h4>OK例（親要素で囲む）</h4>
      <pre>{`// 1. divで囲む
function App() {
  return (
    <div>
      <h1>タイトル</h1>
      <p>段落</p>
    </div>
  )
}

// 2. フラグメント（<>...</>）で囲む
function App() {
  return (
    <>
      <h1>タイトル</h1>
      <p>段落</p>
    </>
  )
}`}</pre>
    </div>
  )
}

// ============================================
// JSXRulesDemo コンポーネント
// - JSXの基本ルールをデモで表示
// ============================================
function JSXRulesDemo() {
  return (
    <div className="demo-area">
      <h3>デモ: JSXの基本ルール</h3>

      {/* フラグメントで複数要素を囲む例 */}
      <>
        <p>このように複数の要素を返すことができます。</p>
        <p>フラグメント（&lt;&gt;...&lt;/&gt;）で囲んでいます。</p>
      </>

      {/* 自己終了タグの例 */}
      <hr />
      <p>
        上の水平線は <code>&lt;hr /&gt;</code> と書きます。
        <br />
        改行は <code>&lt;br /&gt;</code> です。
      </p>

      {/* 画像タグも閉じる必要がある */}
      <img
        src="https://via.placeholder.com/100x50?text=JSX"
        alt="JSXサンプル"
        style={{ border: '1px solid #ddd', borderRadius: '4px' }}
      />
    </div>
  )
}

// ============================================
// Section03 メインコンポーネント
// ============================================
function Section03({ onBack }) {
  return (
    <div className="section">
      <button className="back-button" onClick={onBack}>
        ← ホームへ戻る
      </button>

      <h1>Section 03: JSXでマークアップを書く</h1>

      <div className="content">
        <h2>JSXとは</h2>
        <p>
          JSXは、JavaScriptの中にHTMLライクなマークアップを書ける構文拡張です。
          使用は任意ですが、その便利さからほとんどのReactプロジェクトで使われています。
        </p>

        <h2>JSXのルール</h2>

        <h3>1. 単一のルート要素を返す</h3>
        <p>
          コンポーネントから複数の要素を返す場合は、
          必ず1つの親要素で囲む必要があります。
        </p>

        <BadExample />
        <GoodExample />

        <h3>2. すべてのタグを閉じる</h3>
        <p>
          HTMLでは <code>&lt;img&gt;</code> や <code>&lt;br&gt;</code> など
          閉じタグがなくても動作しますが、JSXでは必ず閉じる必要があります。
        </p>
        <ul>
          <li><code>&lt;img&gt;</code> → <code>&lt;img /&gt;</code></li>
          <li><code>&lt;br&gt;</code> → <code>&lt;br /&gt;</code></li>
          <li><code>&lt;input&gt;</code> → <code>&lt;input /&gt;</code></li>
        </ul>

        <h3>3. キャメルケースで属性を書く</h3>
        <p>
          JSXはJavaScriptに変換されるため、属性名はキャメルケースで書きます。
        </p>
        <ul>
          <li><code>class</code> → <code>className</code></li>
          <li><code>for</code> → <code>htmlFor</code></li>
          <li><code>stroke-width</code> → <code>strokeWidth</code></li>
        </ul>

        <JSXRulesDemo />

        <h2>なぜJSXを使うのか</h2>
        <p>
          Reactでは、レンダリングロジックとマークアップが同じ場所（コンポーネント）にあります。
          これにより、UIの変更時にロジックとマークアップを一緒に更新でき、
          整合性を保ちやすくなります。
        </p>
      </div>

      <p className="reference">
        <a
          href="https://ja.react.dev/learn#writing-markup-with-jsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          公式ドキュメント: JSXでマークアップを書く
        </a>
      </p>
    </div>
  )
}

export default Section03
