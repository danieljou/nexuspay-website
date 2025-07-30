import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Simulate authentication logic
    if (email === 'demo@nexuspay.com' && password === 'password123') {
      const user = {
        id: '1',
        email: 'demo@nexuspay.com',
        first_name: 'Demo',
        last_name: 'User',
      };

      const token = 'demo-jwt-token-' + Date.now();

      return NextResponse.json({
        access: token,
        refresh: 'demo-refresh-token',
        user,
      });
    }

    return NextResponse.json(
      { detail: 'Invalid credentials' },
      { status: 401 }
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { detail: 'Internal server error' },
      { status: 500 }
    );
  }
}
