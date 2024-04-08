"use client";

import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Checkbox } from "./ui/checkbox";
import { useState } from "react";

export function AddSheet() {
  const { toast } = useToast();

  const [newTask, setNewTask] = useState({
    name: "",
    type: "",
    description: "",
    total: 1,
    progress: 0,
    rating: 0,
    status: "planning",
    isFavourite: false,
  });

  const handleAddTask = async () => {
    try {
      const response = await axios.post("/api/task/create", newTask);
      console.log(response.data)
    } catch (error) {
      console.log("Failed to Add New Task !!!");
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild className="w-min md:px-6 md:py-2">
        <Button
          variant={"outline"}
          className="bg-white text-black"
          title="Press to Add a task or job"
        >
          Add Task
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"top"}
        className="invert h-full md:h-min  overflow-x-auto overflow-y-auto max-h-screen pb-96 md:pb-4"
      >
        <SheetHeader>
          <SheetTitle className="text-center">Add a Task</SheetTitle>
          <SheetDescription className="text-center">
            Add a task to track its progress
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid md:grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="md:text-right">
              Task Name
            </Label>
            <Input
              name="name"
              id="name"
              className="col-span-2"
              placeholder="Assign a name to your task"
              required
              value={newTask.name}
              onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
            />
          </div>
          <div className="grid md:grid-cols-4 items-center gap-4">
            <Label htmlFor="task-type" className="md:text-right">
              Task Type
            </Label>
            <Input
              name="type"
              id="task-type"
              className="col-span-2"
              placeholder="Type of Task like episodes, lectures, chapter, etc."
              value={newTask.type}
              onChange={(e) => setNewTask({ ...newTask, type: e.target.value })}
            />
          </div>
          <div className="grid md:grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="md:text-right">
              Task Description
            </Label>
            <Textarea
              name="description"
              id="description"
              className="col-span-2"
              placeholder="Details and description about your task"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
            />
          </div>
          <div className="grid md:grid-cols-4 items-center gap-4">
            <Label htmlFor="total-units" className="md:text-right">
              Total Units
            </Label>
            <Input
              name="total"
              id="total-units"
              type="number"
              inputMode="numeric"
              min={0}
              step={1}
              // defaultValue={1}
              className="col-span-1"
              required
              value={newTask.total}
              onChange={(e) =>
                setNewTask({ ...newTask, total: parseInt(e.target.value) })
              }
            />
          </div>
          <p className="text-red-600">{(newTask.total < newTask.progress ? "Total Units cannot be less than Units completed" : "")}</p>
          <div className="grid md:grid-cols-4 items-center gap-4">
            <Label htmlFor="progress" className="md:text-right">
              Units completed
            </Label>
            <Input
              name="progress"
              id="progress"
              type="number"
              inputMode="numeric"
              min={0}
              step={1}
              // defaultValue={0}
              className="col-span-1"
              required
              value={newTask.progress}
              onChange={(e) =>
                setNewTask({ ...newTask, progress: parseInt(e.target.value) })
              }
            />
          </div>
          <div className="grid md:grid-cols-4 items-center gap-4">
            <Label htmlFor="rating" className="md:text-right">
              Rating (out of 10)
            </Label>
            <Input
              name="rating"
              id="rating"
              type="number"
              inputMode="numeric"
              min={0}
              max={10}
              step={1}
              // defaultValue={0}
              className="col-span-1"
              value={newTask.rating}
              onChange={(e) =>
                setNewTask({ ...newTask, rating: parseInt(e.target.value) })
              }
            />
          </div>
          <div className="grid md:grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="md:text-right">
              Status
            </Label>
            <Select
              // defaultValue={undefined}
              name={"status"}
              value={newTask.status}
              onValueChange={(value) =>
                setNewTask({ ...newTask, status: value })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your present status" />
              </SelectTrigger>
              <SelectContent id={"status"}>
                <SelectGroup>
                  <SelectLabel>Your status: </SelectLabel>
                  <SelectItem value="current">Currently doing</SelectItem>
                  <SelectItem value="planning">Plan to do</SelectItem>
                  <SelectItem value="completed">Completed already</SelectItem>
                  <SelectItem value="on-hold">On hold</SelectItem>
                  <SelectItem value="dropped">Dropped</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="md:grid md:grid-cols-4 items-center gap-4 flex flex-row">
            <Label htmlFor="is-favourite" className="md:text-right">
              Mark as Favourite
            </Label>
            <Checkbox
              id="is-favourite"
              defaultChecked={false}
              name="isFavourite"
              checked={newTask.isFavourite}
              onCheckedChange={(e) =>
                setNewTask((prev) => {
                  return { ...newTask, isFavourite: !prev.isFavourite };
                })
              }
            />
          </div>
        </div>
        <SheetFooter className="flex flex-row gap-4 !justify-center">
          <SheetClose asChild>
            <Button
              variant="outline"
              type="button"
              className=" w-min"
              title="Close Add Task Panel"
            >
              Cancel
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              type="submit"
              className="w-full md:w-2/5"
              title="Add Task"
              onClick={handleAddTask}
            >
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

//   () => {
//   toast({
//     title: "Task Added Successfully",
//     description: "",
//   });
// }


            {/* <Categories
              defaultSelectedValue={undefined}
              id="status"
              name="status"
              value={newTask.status}
              onChange={(e) =>
                setNewTask({ ...newTask, status: e.target.value })
              }
            /> */}