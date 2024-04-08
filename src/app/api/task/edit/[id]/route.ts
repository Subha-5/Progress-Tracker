import { connect } from "@/db/config";
import Task from "@/models/task.model";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function PUT(req: NextRequest) {
  try {
    const id = (req.nextUrl.pathname).replace("/api/task/edit/", '');

    const reqBody = await req.json()
    const { name, type, description, total, progress, rating, status, isFavourite, revisited } = reqBody;

    const updatedTask = await Task.findByIdAndUpdate(id, {
      $set: {
        name,
        type,
        description,
        totalParts: total,
        progress,
        rating: Math.floor(rating)/10 || 0,
        status,
        isFavourite,
        "revisit-count": revisited
      }
    })

    return NextResponse.json(
      {
        message: "Task Updated successfully",
        success: true,
        "task-details": updatedTask
      }, { status: 200 }
    )
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}