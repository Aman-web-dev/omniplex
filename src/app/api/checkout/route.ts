const stripe = require('stripe')(process.env.STRIPE_API_KEY);


const YOUR_DOMAIN = process.env.HOSTED_DOMAIN;
const PRICE_ID = process.env.PRICE_ID;

export async function POST(req:any,res:any){
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

return Response.redirect(session.url, 303);
}



