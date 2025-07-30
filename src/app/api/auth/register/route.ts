import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const userData = await request.json();
    const { first_name, last_name, email, password } = userData;

    // Simulate validation
    if (!first_name || !email || !password) {
      return NextResponse.json(
        { detail: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { detail: 'Password must be at least 8 characters' },
        { status: 400 }
      );
    }

    // Simulate user creation
    const user = {
      id: Date.now().toString(),
      first_name,
      last_name,
      email,
      created_at: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        message: 'User created successfully',
        user,
      },
      { status: 201 }
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { detail: 'Internal server error' },
      { status: 500 }
    );
  }
}
