# NoirLedger Invoice

Web3 invoice generator demo — dark UI, fiktif data, deploy-ready untuk Vercel.

## Stack

- React 18 + Vite
- Tailwind CSS 3
- Lucide React icons
- date-fns

## Fitur

- Dashboard dengan stat invoice
- Create Invoice form dengan line items
- Invoice preview dengan wallet addresses
- Receipt preview untuk paid invoices
- Invoice history table + search & filter
- Status: Draft, Pending, Demo Paid, Failed
- Dummy: wallet sender/receiver, tx hash, network (Sepolia Testnet)
- Export invoice/receipt sebagai HTML file
- Dark Web3 UI

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

Buka `http://localhost:5173`

## Build

```bash
npm run build
```

Output di `dist/`

## Deploy ke Vercel

### CLI

```bash
npm i -g vercel
vercel
```

### Git Integration

1. Push ke GitHub
2. Import project di vercel.com
3. Framework preset: Vite (auto-detected)
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy

## Project Structure

```
noirledger-invoice/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── dummy.js          # Dummy data, wallets, generators
    ├── utils/
    │   ├── calculations.js   # Subtotal, total, formatters
    │   └── export.js         # Export invoice/receipt as HTML
    ├── components/
    │   ├── Layout.jsx        # Sidebar + main layout
    │   ├── Sidebar.jsx       # Navigation sidebar
    │   ├── DemoBanner.jsx    # Safety disclaimer banner
    │   ├── StatusBadge.jsx   # Status pill badges
    │   └── WalletBox.jsx     # Wallet address display
    └── pages/
        ├── Dashboard.jsx     # Overview + recent invoices
        ├── CreateInvoice.jsx # Invoice creation form
        ├── InvoicePreview.jsx # Invoice detail view
        ├── ReceiptPreview.jsx # Receipt detail view
        └── InvoiceHistory.jsx # Searchable invoice list
```

## Disclaimer

DEMO DOCUMENT ONLY — NOT A REAL RECEIPT OR PROOF OF PAYMENT.

Semua data bersifat fiktif untuk tujuan UI/layout testing.
