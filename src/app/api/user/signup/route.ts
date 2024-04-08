import { NextRequest, NextResponse } from 'next/server';

import { connect } from '@/db/config';
import User from '@/models/user.model';

import bcrypt from 'bcryptjs';

connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;

    // TODO: validation

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      )
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    })

    const savedUser = await newUser.save();
    savedUser.password = undefined
    
    // send verification email
    /* await sendMail({ email, emailType: 'VERIFY', userId: savedUser._id });*/

    return NextResponse.json(
      {
        message: 'User registered successfully',
        success: true,
        'registered-user': savedUser
      }, {status: 201}
    )

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}