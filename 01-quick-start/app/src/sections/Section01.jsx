// Section01: Reactの概要
// 公式ドキュメント「クイックスタート」の導入部分に対応

function Section01({ onBack }) {
  return (
    <div className="section">
      <button className="back-button" onClick={onBack}>
        ← ホームへ戻る
      </button>

      <h1>Section 01: Reactとは？</h1>

      <div className="content">
        <h2>Reactの役割</h2>
        <p>
          ReactはユーザインターフェイスをビルドするためのJavaScriptライブラリです。
          Webページ全体を作るフレームワークではなく、UIの構築に特化しています。
        </p>

        <h2>宣言的UI（Declarative UI）</h2>
        <p>
          Reactでは「どのようにUIを変更するか」ではなく、
          「UIが最終的にどのような状態であるべきか」を記述します。
        </p>
        <ul>
          <li>
            <strong>命令的（jQuery時代）:</strong>
            「このボタンを見つけて、クリックされたら、この要素のテキストを変更して...」
          </li>
          <li>
            <strong>宣言的（React）:</strong>
            「データがこの状態のとき、UIはこう表示される」
          </li>
        </ul>

        <h2>コンポーネントとは</h2>
        <p>
          Reactアプリは「コンポーネント」という独立した部品で構成されます。
          各コンポーネントは独自のロジックとUIを持ち、再利用可能です。
        </p>
        <p>
          例: ヘッダー、サイドバー、ボタン、カードなど、それぞれがコンポーネントになります。
        </p>

        <h2>次のセクションでは</h2>
        <p>
          実際にコンポーネントを作成し、ネスト（入れ子に）する方法を学びます。
        </p>
      </div>

      <p className="reference">
        <a
          href="https://ja.react.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          公式ドキュメント: クイックスタート
        </a>
      </p>
    </div>
  )
}

export default Section01
