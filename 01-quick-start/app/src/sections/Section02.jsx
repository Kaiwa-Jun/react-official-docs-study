// Section02: コンポーネントの作成とネスト
// 公式ドキュメント「コンポーネントの作成とネスト」に対応
// https://ja.react.dev/learn#components

// ============================================
// Avatar コンポーネント
// - 最も小さな単位のコンポーネント
// - プロフィール画像を表示する役割
// ============================================
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.pravatar.cc/100?img=3"
      alt="プロフィール画像"
    />
  )
}

// ============================================
// Profile コンポーネント
// - Avatar をネスト（入れ子に）して使用
// - ユーザー情報をカード形式で表示
// ============================================
function Profile() {
  return (
    <div className="profile-card">
      {/* Avatar コンポーネントをここで使用（ネスト） */}
      <Avatar />
      <div className="profile-info">
        <h3>田中 太郎</h3>
        <p>フロントエンドエンジニア</p>
        <p>React / TypeScript / Next.js</p>
      </div>
    </div>
  )
}

// ============================================
// Section02 メインコンポーネント
// ============================================
function Section02({ onBack }) {
  return (
    <div className="section">
      <button className="back-button" onClick={onBack}>
        ← ホームへ戻る
      </button>

      <h1>Section 02: コンポーネントの作成とネスト</h1>

      <div className="content">
        <h2>コンポーネントとは</h2>
        <p>
          Reactでは、UIを「コンポーネント」という独立した部品に分割します。
          コンポーネントは JavaScript 関数で、マークアップを返します。
        </p>

        <h2>実際のコード例</h2>
        <p>
          以下は <code>Avatar</code> コンポーネントを
          <code>Profile</code> コンポーネント内でネストした例です。
        </p>

        {/* ここで Profile コンポーネントを表示 */}
        <div className="demo-area">
          <h3>デモ: Profile カード</h3>
          <Profile />
        </div>

        <h2>ポイント</h2>
        <ul>
          <li>コンポーネント名は必ず大文字で始める（例: Profile, Avatar）</li>
          <li>小文字で始まるタグは HTML 要素として扱われる</li>
          <li>コンポーネントは他のコンポーネント内で使用できる（ネスト）</li>
          <li>同じコンポーネントを複数回使うことも可能</li>
        </ul>

        <h2>複数のカードを表示</h2>
        <p>同じ Profile コンポーネントを複数回使用できます。</p>
        <div className="demo-area">
          <Profile />
          <Profile />
        </div>
      </div>

      <p className="reference">
        <a
          href="https://ja.react.dev/learn#components"
          target="_blank"
          rel="noopener noreferrer"
        >
          公式ドキュメント: コンポーネントの作成とネスト
        </a>
      </p>
    </div>
  )
}

export default Section02
