https://shutakamei.com

## GitHub Actionsによる自動デプロイ

`main`ブランチにプッシュ（=マージ）されたタイミングでReactアプリのビルドとEC2サーバーへの配置を自動実行します。`.github/workflows/deploy.yml` を参照してください。

### 必要なGitHub Secrets

| Secret名 | 用途 |
| --- | --- |
| `EC2_HOST` | デプロイ先EC2のパブリックIPまたはホスト名 |
| `EC2_USER` | 接続ユーザー（例: `ec2-user`, `ubuntu` など） |
| `EC2_SSH_KEY` | 上記ユーザーに紐づくSSH秘密鍵（PEMファイルの中身をそのまま貼り付け） |
| `EC2_PORT` | SSHポート（デフォルト22の場合でも設定しておくと明示的で安全） |
| `EC2_TARGET_DIR` | ビルド成果物を配置するディレクトリ（例: `/var/www/starry-sky`） |
| `EC2_POST_DEPLOY_SCRIPT` | デプロイ後に実行したい任意のシェルコマンド（例: `cd /var/www/starry-sky && sudo systemctl restart nginx`） |

Secretsは GitHub のリポジトリ設定 → *Settings > Secrets and variables > Actions* から登録します。

### EC2側の準備例

1. Nginxなど静的ファイルを配信できるWebサーバーをセットアップする。
2. `EC2_TARGET_DIR` として指定したディレクトリを作成し、GitHub Actionsから書き込めるよう権限を設定する（例: `/var/www/starry-sky`）。
3. 必要に応じて `EC2_POST_DEPLOY_SCRIPT` でNginx再起動や所有権調整を行う。

これらの設定が完了すると、`main`ブランチにマージされた変更が自動的にビルドされ、EC2サーバーへ反映されます。
