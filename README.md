# 秋を旅する。｜2026 九州紅葉・溫泉自駕手帖

一個適合手機使用、日系文青風格的繁體中文旅行網站。

**行程日期：2026年11月12日至18日（7日6晚）**

路線：福岡機場 → Costco 久山 → 大岳民宿 → 糸島 → 海之中道・志賀島 → LaLaport → 武雄御船山 → 嬉野溫泉 → 柳川（遊船＋若松屋鰻魚飯）→ 鳥栖 Outlet → 太宰府 → 福岡機場。

## 網站功能

- **今日模式**：出發前顯示倒數；旅程期間（日本時間）一開就見到當日行程、下一站同導航掣
- **離線可用**：可「加到主畫面」，開過一次之後冇訊號都睇到行程（外部相片要曾經載入過）
- 每天行程、預計時間、住宿、行車路線
- 每個景點及餐廳都有 **Google Maps 駕駛導航** 連結，另有「整日路線」
- 已訂航班、三站住宿資料、柳川遊船比較、美食地圖
- 行程完成打勾與出發前清單（只儲存喺自己部機）
- 和紙色系、紅葉封面；支援減少動態效果設定

### 預覽某一日

網址後面加 `?date=2026-11-13T12:00`（日本時間）就可以預覽嗰個時刻嘅「今日」卡。

## 啟用 GitHub Pages（一次性）

1. 打開本 repository 的 **Settings**。
2. 左邊選 **Pages**。
3. 在 **Build and deployment → Source** 選 **Deploy from a branch**。
4. **Branch** 選 `main`，資料夾選 `/(root)`，按 **Save**。
5. 等 GitHub 完成發佈，再開啟：

   **https://kinleong-partyhome.github.io/fukuoka-trip/**

網站直接放在根目錄 `index.html`，不需要 npm、Vite、React 或任何 build 流程。

> 如果 Pages 未啟用，GitHub repository 只會顯示程式碼，不能當作公開旅行網站分享。網站圖片使用 Wikimedia Commons 外部連結，開啟時需要網路。

## 編輯內容

行程、時間、Google Maps 搜尋地址、圖片都在 `index.html` 最下方的 `days`、`photos` 變數，可以直接在 GitHub 編輯並 commit；已啟用 Pages 時會自動更新。

## 重要提醒

本網站是旅遊規劃，不代表已訂餐廳、酒店或租車；車程、營業時間、票價、路況、紅葉時間，請出發前再次確認。11/16（星期一）元祖本吉屋休息，行程改去若松屋（柳川市沖端町26），出發前請查當日營業。租車公司只是提供國際線營業所的實用例子，實際請依租車確認書。

航班資訊按照旅行者提供之截圖整理，若航班、航廈或時間有更改，請以航空公司最新通知為準。

圖片來源及作者的連結可在網站底部「圖片來源及授權」展開查看。

## 參考連結

- [福岡機場租車資訊](https://www.fukuoka-airport.jp/en/access/rent.html)
- [Nippon Rent-A-Car 福岡機場國際線營業所](https://store.nipponrentacar.co.jp/en/b/nrs/info/011185/)
- [Wikimedia Commons](https://commons.wikimedia.org/)

Made for friends · 九州の秋を旅する。