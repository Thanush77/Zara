import { NextResponse } from 'next/server';
import { menuItems } from '@/data/menu';

export async function GET() {
    // Simulating database delay
    // await new Promise(resolve => setTimeout(resolve, 500)); 

    return NextResponse.json({ categories: menuItems });
}
