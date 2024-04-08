import { connect } from '@/db/config';
import User from '@/models/user.model';
import { getDataFromToken } from '@/utils/getDataFromToken';
import { NextRequest, NextResponse } from 'next/server';

connect()

export async function GET (request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);

    const user = await User.findOne({_id: userId}).select('-password')

    if(!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: 'User found',
      data: user
    })
    
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}