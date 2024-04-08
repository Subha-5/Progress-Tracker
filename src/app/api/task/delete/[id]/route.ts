import { connect } from "@/db/config";
import Task from "@/models/task.model";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function DELETE(req: NextRequest) {

  try {
    const id = (req.nextUrl.pathname).replace("/api/task/delete/", '');

    await Task.findByIdAndDelete(id)

    return NextResponse.json(
      { message: "Task Deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}