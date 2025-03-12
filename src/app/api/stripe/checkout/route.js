import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from 'next';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const {cart} = req.body;

            const line_items = cart.map((item) => ({
                price_data: {
                    currency: "dkk",
                    product_data: { name: item.name },
                    unit_amount: item.price, // Priser er i øre (1 DKK = 100 øre)
                },
                quantity: item.quantity,
            }));
            
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card", "mobilepay", "apple_pay", "google_pay"],
                line_items,
                mode: "payment",
                success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/cancel`,
            });

            res.status(200).json({ sessionId: session.id });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}







