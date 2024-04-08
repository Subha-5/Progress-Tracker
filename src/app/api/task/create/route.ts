import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/user.model';
import Task from '@/models/task.model'
import { connect } from '@/db/config';
import { getDataFromToken } from '@/utils/getDataFromToken';

connect()

export async function POST(request: NextRequest) {

  try {
    const userId = getDataFromToken(request)    

    if (!userId) {
      return NextResponse.json(
        { error: "No user currently logged in. Please log in to create tasks." },
        { status: 404 }
      );
    }

    const reqBody = await request.json()
    const { name, type, description, total, progress, rating, status, isFavourite, revisited } = reqBody;

    const final_rating = Math.floor(rating) / 10;

    const newTask = new Task({
      name,
      type,
      description,
      totalParts: total,
      progress,
      rating: final_rating,
      status,
      isFavourite,
      "revisit-count": revisited
    })

    const savedTask = await newTask.save();

    const updatedUserTasks = await User.findByIdAndUpdate(
      userId,
      {
        $push: {
          tasks: savedTask._id
        }
      }
    )
    const updatedUser = await updatedUserTasks.save()
    console.log(updatedUser);
    

    return NextResponse.json(
      {
        message: "New task created successfully",
        success: true,
        task_id: savedTask._id,
        "task-details": savedTask
      }, { status: 201 }
    )
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}