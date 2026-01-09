// Section04: データを表示する
// 公式ドキュメント「データを表示する」に対応
// https://ja.react.dev/learn#displaying-data

// ============================================
// ユーザーデータ（サンプル）
// ============================================
const user = {
  name: '山田 花子',
  imageUrl: 'https://i.pravatar.cc/100?img=5',
  imageSize: 90,
  profession: 'UIデザイナー',
  skills: ['Figma', 'Photoshop', 'Illustrator'],
}

// ============================================
// UserProfile コンポーネント
// - 波括弧を使ってJavaScript変数を埋め込む例
// ============================================
function UserProfile() {
  return (
    <div className="profile-card">
      {/* src属性に波括弧で変数を埋め込む */}
      <img
        className="avatar"
        src={user.imageUrl}
        alt={user.name + 'のアバター'}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <div className="profile-info">
        {/* テキストに波括弧で変数を埋め込む */}
        <h3>{user.name}</h3>
        <p>{user.profession}</p>
        <p>スキル: {user.skills.join(', ')}</p>
      </div>
    </div>
  )
}

// ============================================
// DynamicStyleDemo コンポーネント
// - style属性に動的な値を設定する例
// ============================================
function DynamicStyleDemo() {
  const boxColor = '#0066cc'
  const boxSize = 100

  return (
    <div
      style={{
        backgroundColor: boxColor,
        width: boxSize,
        height: boxSize,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        borderRadius: '8px',
        fontWeight: 'bold',
      }}
    >
      {boxSize}px
    </div>
  )
}

// ============================================
// ExpressionDemo コンポーネント
// - 波括弧内でJavaScript式を使う例
// ============================================
function ExpressionDemo() {
  const price = 1200
  const quantity = 3

  return (
    <div className="expression-demo">
      <p>単価: ¥{price.toLocaleString()}</p>
      <p>数量: {quantity}個</p>
      <p>
        <strong>合計: ¥{(price * quantity).toLocaleString()}</strong>
      </p>
    </div>
  )
}

// ============================================
// Section04 メインコンポーネント
// ============================================
function Section04({ onBack }) {
  return (
    <div className="section">
      <button className="back-button" onClick={onBack}>
        ← ホームへ戻る
      </button>

      <h1>Section 04: データを表示する</h1>

      <div className="content">
        <h2>波括弧でJavaScriptを埋め込む</h2>
        <p>
          JSXでは、波括弧 <code>{'{}'}</code> を使うことで、
          JavaScript の変数や式を埋め込むことができます。
          これにより、動的なデータを表示できます。
        </p>

        <h2>テキストに変数を埋め込む</h2>
        <div className="code-example">
          <pre>{`const name = '山田 花子'

// JSX内で変数を表示
<h1>こんにちは、{name}さん</h1>`}</pre>
        </div>

        <h2>属性に変数を埋め込む</h2>
        <p>
          属性に動的な値を設定する場合は、引用符ではなく波括弧を使います。
        </p>
        <div className="code-example">
          <pre>{`// クォートではなく波括弧を使う
<img src={user.imageUrl} alt={user.name} />

// style属性には二重の波括弧（オブジェクト）
<div style={{ color: 'red', fontSize: '20px' }}>
  テキスト
</div>`}</pre>
        </div>

        <h2>デモ: ユーザープロフィール</h2>
        <p>
          以下は <code>user</code> オブジェクトのデータを表示した例です。
        </p>
        <div className="demo-area">
          <h4>user オブジェクト:</h4>
          <pre className="data-preview">
{`{
  name: '${user.name}',
  imageUrl: '${user.imageUrl}',
  imageSize: ${user.imageSize},
  profession: '${user.profession}',
  skills: ['${user.skills.join("', '")}']
}`}
          </pre>
          <h4>表示結果:</h4>
          <UserProfile />
        </div>

        <h2>デモ: 動的スタイル</h2>
        <p>
          <code>style</code> 属性には JavaScript オブジェクトを渡します。
          二重の波括弧 <code>{'{{}}'}</code> は「JSX内のオブジェクト」です。
        </p>
        <div className="demo-area">
          <DynamicStyleDemo />
        </div>

        <h2>デモ: 計算式の埋め込み</h2>
        <p>
          波括弧内では、変数だけでなく任意のJavaScript式が使えます。
        </p>
        <div className="demo-area">
          <ExpressionDemo />
        </div>

        <h2>ポイント</h2>
        <ul>
          <li>波括弧内には任意のJavaScript式を書ける</li>
          <li>文字列リテラルは引用符、動的な値は波括弧</li>
          <li>style属性はオブジェクトで指定（キャメルケース）</li>
          <li>二重波括弧 <code>{'{{}}'}</code> は「JSX内のオブジェクト」</li>
        </ul>
      </div>

      <p className="reference">
        <a
          href="https://ja.react.dev/learn#displaying-data"
          target="_blank"
          rel="noopener noreferrer"
        >
          公式ドキュメント: データを表示する
        </a>
      </p>
    </div>
  )
}

export default Section04
