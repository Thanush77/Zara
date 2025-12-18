import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();

        // Validate
        if (!body.name || !body.date || !body.time) {
            return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
        }

        // Mock processing delay
        // await new Promise(resolve => setTimeout(resolve, 800));

        console.log(`[Mock API] Reservation Confirmed for ${body.name} on ${body.date}`);

        return NextResponse.json({ success: true, message: 'Reservation confirmed' });
    } catch (error) {
        return NextResponse.json({ message: 'Error' }, { status: 500 });
    }
}
