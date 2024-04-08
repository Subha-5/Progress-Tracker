import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/db/config';
import User from '@/models/user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // TODO: validation

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: 'User does not exists' },
        { status: 400 }
      )
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid Credentials' },
        { status: 400 }
      )
    }

    const tokenPayload = {
      id: user._id,
      username: user.username
    }

    const token = await jwt.sign(
      tokenPayload,
      process.env.SECRET_KEY!,
      { expiresIn: '24h' }
    )

    const response = NextResponse.json({
      message: 'Logged In successfully',
      success: true
    })

    response.cookies.set(
      'token',
      token,
      { httpOnly: true }
    )
    return response
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}