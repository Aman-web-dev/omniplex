import { NextResponse } from 'next/server';
import { stripe } from '../../../../firebaseConfig';



const YOUR_DOMAIN = process.env.HOSTED_DOMAIN!;
const PRICE_ID = process.env.PRICE_ID!;


export async function POST(req: Request) {

  try {
const session = await stripe.checkout.sessions.create({
      line_items: [{ price: PRICE_ID, quantity: 1 }],
      mode: 'subscription',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    return NextResponse.redirect(session.url!, { status: 303 });
  } catch (err) {
    console.error('Stripe error:', err);
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 });
  }
}
