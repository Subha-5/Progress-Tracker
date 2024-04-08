import mongoose from 'mongoose';
import { connect } from '@/db/config';
import User from '@/models/user.model';
import { getDataFromToken } from '@/utils/getDataFromToken';
import { NextRequest, NextResponse } from 'next/server';

connect()

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);

    console.log(userId);

    const userData = await User.aggregate(
      [
        {
          $match: {
            _id: new mongoose.Types.ObjectId(userId)
          }
        },
        {
          $lookup: {
            from: 'tasks',
            localField: 'tasks',
            foreignField: '_id',
            as: 'tasks'
          }
        },
        {
          $project: {
            _id: 1,
            tasks: 1,
            username: 1,
            email: 1,
            isVerified: 1
          }
        }
      ]
    )

    return NextResponse.json(
      {
        message: 'Tasks fetched successfully',
        success: true,
        data: userData[0] 
      }, { status: 200 }
    )
    
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}