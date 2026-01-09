# Commit and Push

変更をコミットしてリモートにプッシュします。

## 手順

1. `git status` で変更内容を確認
2. `git diff` で差分を確認
3. `git log --oneline -5` で直近のコミットメッセージのスタイルを確認
4. 変更内容に基づいた適切なコミットメッセージを作成
5. `git add .` で全ての変更をステージング
6. `git commit` でコミット（Co-Authored-By を含める）
7. `git push` でリモートにプッシュ

## コミットメッセージのルール

- 日本語で記述
- 変更の「なぜ」を簡潔に説明
- 末尾に `Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>` を追加
