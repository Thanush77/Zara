import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { user, items, total } = body;

        // Simulate validation
        if (!user || !items || items.length === 0) {
            return NextResponse.json({ message: 'Invalid order data' }, { status: 400 });
        }

        // Simulate database delay
        // await new Promise(resolve => setTimeout(resolve, 1000));

        // Simulate order ID generation
        const orderId = `ORD-${Math.floor(Math.random() * 100000)}`;

        // In a real app, we would:
        // 1. Verify stock/availability
        // 2. Create order record in DB
        // 3. Process payment
        // 4. Send confirmation email

        console.log(`[Mock API] Order placed: ${orderId} by ${user.email} for ₹${total}`);

        return NextResponse.json({
            success: true,
            orderId,
            message: "Order placed successfully"
        }, { status: 201 });

    } catch (error) {
        console.error('Order processing error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
