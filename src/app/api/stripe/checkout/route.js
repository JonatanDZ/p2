import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    console.log("API received a POST request");

    try {
        const body = await req.json();
        const { cart, paymentMethod } = body;

        if (!cart || !Array.isArray(cart)) {
            return new Response(JSON.stringify({ error: "Invalid cart data." }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: cart.map((item) => ({
                price_data: {
                    currency: "dkk",
                    product_data: { name: item.name },
                    unit_amount: item.price,
                },
                quantity: item.quantity,
            })),
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/paymentsuccess?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/paymentfail`,
        });

        console.log("Stripe Checkout Session Created:", session);

        return new Response(JSON.stringify({ url: session.url }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (err) {
        console.error("Stripe API Error:", err.message);
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
