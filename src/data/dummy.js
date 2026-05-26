export const NETWORK = 'Ethereum Sepolia Testnet'
export const TOKEN  = 'USDC'
export const DISCL  = 'DEMO DOCUMENT ONLY — NOT A REAL RECEIPT OR PROOF OF PAYMENT'

export const wallets = {
  sender:   '0xDemoSender11111111111111111111111111111111111111',
  receiver: '0xDemoReceiver22222222222222222222222222222222222222',
}

export const sampleItems = [
  { description: 'Web3 AI Analytics Subscription', detail: 'DEX volume tracking, wallet monitoring, smart money alerts', unitPrice: 500 },
  { description: 'Smart Contract Risk Report',    detail: 'Demo audit summary for educational use',                    unitPrice: 0 },
  { description: 'Whale Wallet Tracking (30d)',    detail: 'On-chain whale movement monitoring',                       unitPrice: 120 },
  { description: 'DeFi Yield Optimizer Report',    detail: 'APY comparison across major protocols',                    unitPrice: 75 },
]

export function genTxHash() {
  const hex = [...Array(64)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')
  return '0x' + hex
}

export function genInvoiceNumber(i) {
  return `INV-NL-2026-${String(i).padStart(4, '0')}`
}

export function genReceiptNumber(i) {
  return `RCPT-NL-2026-${String(i).padStart(4, '0')}`
}

function genInvoice(id, status, createdAt, items, networkFee = 0.002) {
  const subtotal = items.reduce((s, it) => s + it.unitPrice * it.qty, 0)
  return {
    id,
    invoiceNumber:  genInvoiceNumber(id),
    receiptNumber:  genReceiptNumber(id),
    status,
    createdAt,
    paidAt:         status === 'paid' ? createdAt : null,
    company:        { name: 'NoirChain Labs Demo',   email: 'billing@noirchain-demo.test',   city: 'Demo City, Blockchain Network' },
    client:         { name: 'Demo DAO Organization', email: 'client@demo-dao.test',          city: 'Jawa Tengah, Indonesia' },
    senderWallet:   wallets.sender,
    receiverWallet: wallets.receiver,
    txHash:         status === 'paid' ? genTxHash() : null,
    network:        NETWORK,
    token:          TOKEN,
    items,
    subtotal,
    networkFee,
    total:          subtotal,
    currency:       TOKEN,
  }
}

const statusOrder = ['draft', 'pending', 'paid', 'failed', 'paid', 'pending', 'paid', 'draft']

export const dummyInvoices = Array.from({ length: 8 }, (_, i) => {
  const items = [sampleItems[i % sampleItems.length]].map(it => ({ ...it, qty: 1 }))
  const day = String(22 + i).padStart(2, '0')
  return genInvoice(i + 1, statusOrder[i], `2026-03-${day}`, items)
})
