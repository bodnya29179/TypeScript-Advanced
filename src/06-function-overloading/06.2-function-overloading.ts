/* 💡 Example 2: Payment processing with overloaded function */
function processPayment(amount: number, method: 'creditCard'): string;
function processPayment(amount: number, method: 'paypal', email: string): string;
function processPayment(amount: number, method: 'crypto', walletAddress: string): string;

function processPayment(amount: number, method: 'creditCard' | 'paypal' | 'crypto', extra?: string): string {
  switch (method) {
    case 'creditCard':
      return `Processed $${ amount } via Credit Card.`;
    case 'paypal':
      return `Processed $${ amount } via PayPal (email: ${ extra }).`;
    case 'crypto':
      return `Processed $${ amount } via Crypto (wallet: ${ extra }).`;
    default:
      throw new Error('Invalid payment method');
  }
}

processPayment(10, 'crypto', '1e2a3q'); // ✅ Works as expected with 'crypto' method and wallet address
