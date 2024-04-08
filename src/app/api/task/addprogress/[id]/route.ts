import { connect } from "@/db/config";
import Task from "@/models/task.model";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function PATCH(req: NextRequest) {
  try {
    const id = (req.nextUrl.pathname).replace("/api/task/addprogress/", '');

    await Task.findByIdAndUpdate(id, {
      $inc: {
        "progress": 1
      }
    })
    
    return NextResponse.json(
      { status: 204 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}