import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import axios from "axios";

type EditDialogProps = {
  id: string;
  name: string;
  description: string;
  totalUnits: number;
  unitsCovered: number;
  ratingValue: number;
  status: string;
  isMarkedFavourite: boolean;
  category: string;
};

export function EditDialog({
  id,
  name,
  description,
  totalUnits,
  unitsCovered,
  ratingValue,
  status,
  isMarkedFavourite,
  category,
}: EditDialogProps) {
  const [editTask, setEditTask] = useState({
    name: name,
    type: category,
    description: description,
    total: totalUnits,
    progress: unitsCovered,
    rating: ratingValue * 10,
    status: status,
    isFavourite: isMarkedFavourite,
    revisited: 0
  });

  const handleEditTask = async (id: string) => {
    console.log("UPDATED TASK: ", editTask);
    try {
      const response = await axios.put(`/api/task/edit/${id}`, editTask);
      console.log(response.data); 
    } catch (error) {
      console.log("Failed to Edit existing Task !!!");
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      const response = await axios.delete(`/api/task/delete/${id}`);
      console.log(response.data); 
    } catch (error) {
      console.log("Failed to Delete existing Task !!!");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="border border-white !m-0 p-3 md:p-4"
          title="Press to Edit task"
        >
          &#9998;
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full rounded-lg invert overflow-x-auto overflow-y-auto max-h-screen my-4 md:my-0 py-12 md:py-4 pb-96 md:pb-4">
        <DialogHeader>
          <DialogTitle className="text-center">Edit Task</DialogTitle>
          <DialogDescription className="text-center">
            Update the selected task and save changes
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid md:grid-cols-3 items-center gap-4">
            <Label htmlFor="name" className="md:text-right">
              Task Name
            </Label>
            <Input
              id="name"
              className="col-span-2"
              autoComplete="off"
              value={editTask.name}
              onChange={(e) =>
                setEditTask({ ...editTask, name: e.target.value })
              }
            />
          </div>
          <div className="grid md:grid-cols-3 items-center gap-4">
            <Label htmlFor="task-type" className="md:text-right">
              Task Type
            </Label>
            <Input
              id="name"
              className="col-span-2"
              autoComplete="off"
              value={editTask.type}
              onChange={(e) =>
                setEditTask({ ...editTask, type: e.target.value })
              }
            />
          </div>
          <div className="grid md:grid-cols-3 items-center gap-4">
            <Label htmlFor="description" className="md:text-right">
              Task Description
            </Label>
            <Textarea
              id="description"
              className="col-span-2"
              value={editTask.description}
              onChange={(e) =>
                setEditTask({ ...editTask, description: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
            <div className="flex flex-col w-full items-start gap-2">
              <Label htmlFor="total-units" className="md:text-right">
                Total Units
              </Label>
              <Input
                id="total-units"
                type="number"
                inputMode="numeric"
                min={0}
                step={1}
                className="col-span-1"
                // defaultValue={0}
                value={editTask.total}
                onChange={(e) =>
                  setEditTask({ ...editTask, total: parseInt(e.target.value) })
                }
              />
            </div>
            <div className="flex flex-col w-full items-start gap-2">
              <Label htmlFor="progress" className="md:text-right">
                Units completed
              </Label>
              <Input
                id="progress"
                type="number"
                inputMode="numeric"
                min={0}
                step={1}
                className="col-span-1"
                // defaultValue={0}
                value={editTask.progress}
                onChange={(e) =>
                  setEditTask({
                    ...editTask,
                    progress: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div className="flex flex-col w-auto items-start gap-2">
              <Label htmlFor="rating" className="md:text-right">
                Rating
              </Label>
              <Input
                id="rating"
                type="number"
                inputMode="numeric"
                min={0}
                max={10}
                step={1}
                className="col-span-1"
                // defaultValue={0}
                value={editTask.rating}
                onChange={(e) =>
                  setEditTask({ ...editTask, rating: parseInt(e.target.value) })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col w-full items-start gap-2">
              <Label htmlFor="status" className="md:text-right">
                Status
              </Label>
              {/* <Categories defaultSelectedValue={status} /> */}
              <Select
                // defaultValue={undefined}
                name={"status"}
                value={editTask.status}
                onValueChange={(value) =>
                  setEditTask({ ...editTask, status: value })
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
            <div className="flex gap-4 justify-center items-center w-full ">
              <Label htmlFor="is-favourite" className="md:text-right">
                Mark as Favourite
              </Label>
              <Checkbox
                id="is-favourite"
                checked={editTask.isFavourite}
                onCheckedChange={(e) =>
                  setEditTask((prev) => {
                    return { ...editTask, isFavourite: !prev.isFavourite };
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Label
              htmlFor="revisit-count"
              className="md:text-right whitespace-nowrap font-bold"
            >
              Revisit / Revision Count
            </Label>
            <Input
              id="revisit-count"
              type="number"
              inputMode="numeric"
              min={0}
              max={10}
              step={1}
              className="col-span-1"
              // defaultValue={0}
              value={editTask.revisited}
              onChange={e => setEditTask(
                {...editTask, revisited: parseInt(e.target.value)}
              )}
            />
          </div>
        </div>
        <DialogFooter className="flex flex-row gap-4 md:gap-4 !justify-center pb-8">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="w-min"
              title="Close Edit Dialog box"
            >
              Close
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              className="w-min md:w-max"
              type="submit"
              title="Save above changes"
              onClick={() => {
                handleEditTask(id);
              }}
            >
              Save Changes
            </Button>
          </DialogClose>

          <AlertDialog>
            <AlertDialogTrigger>
              <Button
                variant={"destructive"}
                type="button"
                className="w-min invert"
                title="Delete Task"
              >
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="invert">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you absolutely sure to delete this task?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action will permanently delete task named{" "}
                  <span className="font-bold ">{name}</span> and can&apos;t be
                  undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => {handleDeleteTask(id) }}>Delete Task</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
