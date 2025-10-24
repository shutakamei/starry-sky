https://shutakamei.com

## GitHub Actionsによる自動デプロイ

`main`ブランチにプッシュ（=マージ）されたタイミングでReactアプリをビルドし、S3バケットへ静的ファイルとして同期します。`.github/workflows/deploy.yml` を参照してください。

### Node.jsバージョン

プロジェクトの推奨 Node.js バージョンは 22 系（`.nvmrc` 参照）です。`nvm use` や `.node-version` 互換ツールを使って `22.x` を利用してください。GitHub Actions も同バージョンでビルドするよう設定しています。

### 必要なGitHub Secrets

| Secret名 | 用途 |
| --- | --- |
| `AWS_ACCESS_KEY_ID` | S3へアップロードするためのIAMユーザーのアクセスキー |
| `AWS_SECRET_ACCESS_KEY` | 上記アクセスキーのシークレット |
| `AWS_REGION` | バケットが存在するリージョン（例: `ap-northeast-1`） |
| `S3_BUCKET` | デプロイ先バケット名（例: `my-starry-sky-bucket`） |

Secretsは GitHub のリポジトリ設定 → *Settings > Secrets and variables > Actions* から登録します。

### S3とCloudFrontなどの準備例

1. 静的サイトホスティングを有効にしたS3バケットを作成する（例: `my-starry-sky-bucket`）。
2. IAM上で `AmazonS3FullAccess` 等、`aws s3 sync` で必要な権限（`s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket` など）を持つユーザーを作成し、アクセスキーを発行する。
3. CloudFront や Route53 を利用している場合は、S3へのデプロイ後にキャッシュ無効化が必要なケースもあるため、必要なら追加のステップをワークフローに組み込む。

これらの設定が完了すると、`main`ブランチにマージされた変更が自動的にビルドされ、S3バケットへ反映されます。
