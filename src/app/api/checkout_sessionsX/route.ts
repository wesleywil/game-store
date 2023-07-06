import { NextResponse } from 'next/server';
import Stripe from 'stripe';

import { formatAmountForStripe } from '../../../../utils/stripe_helpers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,{
    apiVersion:'2022-11-15',
});

export default async function POST(request:Request){
    
        try{
        const {amount} = await request.json();
        const session = await stripe.checkout.sessions.create({
            line_items:[
                {
                    price_data:{
                        currency:'usd',
                        product:"1",
                        product_data:{
                            name:'test product'
                        },
                        unit_amount_decimal:amount,
                    },
                    quantity:1,
                },
            ],
            mode:'payment',
            success_url:"http://localhost:3000/success",
            cancel_url:"http://localhost:3000/payment",
        });
        NextResponse.redirect(session.url!,{status:303});
        }catch(error){
            const errorMessage = error instanceof Error ? error.message : 'Internal server error'
            NextResponse.json({message:errorMessage},{status:500})
        }
    
}

