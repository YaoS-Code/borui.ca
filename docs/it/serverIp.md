# Local Servers





| Website              |  Description   |
| :------------------- | :------------: |
| MMC                  | 207.216.132.81 |
| MMC Backup           | 207.216.132.21 |
| RAAC                 | 207.216.132.82 |
| RAAC Backup          | 216.232.48.30  |
| Local Oscar19 Docker | 216.232.48.177 |
| support.mmc-group.ca | 216.232.48.211 |

<script>
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', (event) => {
    let password = prompt("请输入密码:");
    if (password !== "1216") {
      window.location.href = '/'; // 密码不正确时跳转到首页
    }
  });
}
</script>
