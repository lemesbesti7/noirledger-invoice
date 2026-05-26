import { formatDate } from './calculations'
import { NETWORK, DISCL } from '../data/dummy'

export function exportInvoiceHTML(inv) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>${inv.invoiceNumber}</title>
<style>
  body{font-family:Arial,sans-serif;max-width:800px;margin:40px auto;padding:20px;background:#f8fafc;color:#1f2937;line-height:1.6}
  .demo-banner{background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;padding:12px;text-align:center;font-weight:bold;border-radius:8px;margin-bottom:20px}
  .card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:30px}
  .header{display:flex;justify-content:space-between;gap:20px;margin-bottom:30px}
  .header>div{width:48%}
  .amount{font-size:26px;font-weight:700;color:#7c3aed;margin:25px 0}
  .wallet{background:#f1f5f9;padding:15px;border-radius:8px;font-size:13px;word-break:break-all;margin:20px 0;font-family:monospace}
  table{width:100%;border-collapse:collapse;margin:20px 0}
  th,td{border:1px solid #ddd;padding:10px;text-align:left}
  th{background:#f1f5f9}
  .totals{text-align:right;margin-top:20px}
  .footer{margin-top:40px;font-size:12px;color:#666;border-top:1px solid #ddd;padding-top:15px}
</style>
</head>
<body>
<div class="card">
  <div class="demo-banner">${DISCL}</div>
  <h1>Web3 Invoice</h1>
  <p><strong>Invoice #:</strong> ${inv.invoiceNumber}</p>
  <p><strong>Date:</strong> ${formatDate(inv.createdAt)}</p>
  <div class="header">
    <div><strong>${inv.company.name}</strong><br>${inv.company.email}</div>
    <div><strong>Bill to</strong><br>${inv.client.name}<br>${inv.client.city}<br>${inv.client.email}</div>
  </div>
  <div class="wallet">
    <strong>Network:</strong> ${NETWORK}<br>
    <strong>From:</strong> ${inv.senderWallet}<br>
    <strong>To:</strong> ${inv.receiverWallet}
  </div>
  <table>
    <tr><th>Description</th><th>Qty</th><th>Unit Price</th><th>Amount</th></tr>
    ${inv.items.map(it => `<tr><td>${it.description}<br><small>${it.detail}</small></td><td>${it.qty}</td><td>${it.unitPrice} USDC</td><td>${it.unitPrice * it.qty} USDC</td></tr>`).join('')}
  </table>
  <div class="totals">
    <p><strong>Subtotal:</strong> ${inv.subtotal} USDC</p>
    <p><strong>Network fee:</strong> ${inv.networkFee} ETH</p>
    <p><strong>Total:</strong> ${inv.total} USDC</p>
  </div>
  <div class="footer">This is a fictional Web3 demo invoice for UI/layout testing only.</div>
</div>
</body>
</html>`

  const blob = new Blob([html], { type: 'text/html' })
  const url  = URL.createObjectURL(blob)
  const a    = Object.assign(document.createElement('a'), { href: url, download: `${inv.invoiceNumber}.html` })
  a.click()
  URL.revokeObjectURL(url)
}

export function exportReceiptHTML(inv) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>${inv.receiptNumber}</title>
<style>
  body{font-family:Arial,sans-serif;max-width:800px;margin:40px auto;padding:20px;background:#f8fafc;color:#1f2937;line-height:1.6}
  .demo-banner{background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;padding:12px;text-align:center;font-weight:bold;border-radius:8px;margin-bottom:20px}
  .card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:30px}
  .amount{font-size:26px;font-weight:700;color:#7c3aed;margin:25px 0}
  .wallet{background:#f1f5f9;padding:15px;border-radius:8px;font-size:13px;word-break:break-all;font-family:monospace;margin:20px 0}
  .status{display:inline-block;background:#dcfce7;color:#166534;padding:6px 12px;border-radius:999px;font-weight:700;font-size:13px}
  table{width:100%;border-collapse:collapse;margin:20px 0}
  th,td{border:1px solid #ddd;padding:10px;text-align:left}
  th{background:#f1f5f9}
  .totals{text-align:right;margin-top:20px}
  .footer{margin-top:40px;font-size:12px;color:#666;border-top:1px solid #ddd;padding-top:15px}
</style>
</head>
<body>
<div class="card">
  <div class="demo-banner">${DISCL}</div>
  <h1>Web3 Payment Receipt</h1>
  <p><strong>Invoice #:</strong> ${inv.invoiceNumber}</p>
  <p><strong>Receipt #:</strong> ${inv.receiptNumber}</p>
  <p><strong>Date paid:</strong> ${formatDate(inv.paidAt || inv.createdAt)}</p>
  <p><strong>Status:</strong> <span class="status">Demo Paid</span></p>
  <div class="amount">${inv.total} USDC paid on ${formatDate(inv.paidAt || inv.createdAt)}</div>
  <div class="wallet">
    <strong>Network:</strong> ${NETWORK}<br>
    <strong>Payer:</strong> ${inv.senderWallet}<br>
    <strong>Receiver:</strong> ${inv.receiverWallet}<br>
    <strong>TX Hash:</strong> ${inv.txHash}
  </div>
  <table>
    <tr><th>Description</th><th>Qty</th><th>Unit Price</th><th>Amount</th></tr>
    ${inv.items.map(it => `<tr><td>${it.description}<br><small>${it.detail}</small></td><td>${it.qty}</td><td>${it.unitPrice} USDC</td><td>${it.unitPrice * it.qty} USDC</td></tr>`).join('')}
  </table>
  <div class="totals">
    <p><strong>Subtotal:</strong> ${inv.subtotal} USDC</p>
    <p><strong>Network fee:</strong> ${inv.networkFee} ETH</p>
    <p><strong>Total:</strong> ${inv.total} USDC</p>
  </div>
  <div class="footer">This is a fictional Web3 demo receipt for UI/layout testing only.</div>
</div>
</body>
</html>`

  const blob = new Blob([html], { type: 'text/html' })
  const url  = URL.createObjectURL(blob)
  const a    = Object.assign(document.createElement('a'), { href: url, download: `${inv.receiptNumber}.html` })
  a.click()
  URL.revokeObjectURL(url)
}
