import { useState } from 'react'
import './App.css'
import Section01 from './sections/Section01'
import Section02 from './sections/Section02'
import Section03 from './sections/Section03'
import Section04 from './sections/Section04'

// ホームページコンポーネント
function Home({ onNavigate }) {
  return (
    <div className="home">
      <h1>React クイックスタート勉強会</h1>

      <p className="description">
        React公式ドキュメントを読みながら「コード」と「ブラウザ表示」を往復して学ぶデモです。
      </p>

      <p>
        <a
          href="https://ja.react.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          公式ドキュメント: クイックスタート
        </a>
      </p>

      <div className="nav-buttons">
        <button onClick={() => onNavigate('section01')}>
          Section 01: React概要
        </button>
        <button onClick={() => onNavigate('section02')}>
          Section 02: コンポーネントの作成とネスト
        </button>
        <button onClick={() => onNavigate('section03')}>
          Section 03: JSXでマークアップを書く
        </button>
        <button onClick={() => onNavigate('section04')}>
          Section 04: データを表示する
        </button>
      </div>
    </div>
  )
}

function App() {
  // 現在表示中のページを管理するstate
  const [currentPage, setCurrentPage] = useState('home')

  // ページ切替関数
  const navigateTo = (page) => {
    setCurrentPage(page)
  }

  // currentPageの値に応じて表示するコンポーネントを切り替え
  const renderPage = () => {
    switch (currentPage) {
      case 'section01':
        return <Section01 onBack={() => navigateTo('home')} />
      case 'section02':
        return <Section02 onBack={() => navigateTo('home')} />
      case 'section03':
        return <Section03 onBack={() => navigateTo('home')} />
      case 'section04':
        return <Section04 onBack={() => navigateTo('home')} />
      default:
        return <Home onNavigate={navigateTo} />
    }
  }

  return (
    <div className="app">
      {renderPage()}
    </div>
  )
}

export default App
