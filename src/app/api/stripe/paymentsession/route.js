import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
    const url = new URL(req.url);
    const sessionId = url.searchParams.get("session_id");

    if (!sessionId) {
        return new Response(JSON.stringify({ error: "Missing session_id" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        return new Response(JSON.stringify(session), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching Stripe session:", error.message);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
