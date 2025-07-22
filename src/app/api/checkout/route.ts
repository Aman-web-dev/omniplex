import Stripe from 'stripe';


const STRIPE_API_KEY=process.env.NEXT_PUBLIC_STRIPE_API_KEY as string
const YOUR_DOMAIN = process.env.NEXT_PUBLIC_HOSTED_DOMAIN;
const PRICE_ID = process.env.NEXT_PUBLIC_PRICE_ID;
console.log(STRIPE_API_KEY,YOUR_DOMAIN,PRICE_ID);

export async function POST(req:any,res:any){

const stripe = new Stripe(STRIPE_API_KEY);

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: PRICE_ID,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

return Response.redirect(session.url || `${YOUR_DOMAIN}/payment?success=false`, 303);
}



