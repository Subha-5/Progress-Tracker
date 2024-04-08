import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Categories } from "@/components/Categories";
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
import { Checkbox } from "./ui/checkbox";

export function AddSheet() {
  const { toast } = useToast();
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
              id="name"
              className="col-span-2"
              placeholder="Assign a name to your task"
              required
            />
          </div>
          <div className="grid md:grid-cols-4 items-center gap-4">
            <Label htmlFor="task-type" className="md:text-right">
              Task Type
            </Label>
            <Input
              id="task-type"
              className="col-span-2"
              placeholder="Type of Task like episodes, lectures, chapter, etc."
            />
          </div>
          <div className="grid md:grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="md:text-right">
              Task Description
            </Label>
            <Textarea
              id="description"
              className="col-span-2"
              placeholder="Details and description about your task"
            />
          </div>
          <div className="grid md:grid-cols-4 items-center gap-4">
            <Label htmlFor="total-units" className="md:text-right">
              Total Units
            </Label>
            <Input
              id="total-units"
              type="number"
              inputMode="numeric"
              min={0}
              step={1}
              defaultValue={1}
              className="col-span-1"
              required
            />
          </div>
          <div className="grid md:grid-cols-4 items-center gap-4">
            <Label htmlFor="progress" className="md:text-right">
              Units completed
            </Label>
            <Input
              id="progress"
              type="number"
              inputMode="numeric"
              min={0}
              step={1}
              defaultValue={0}
              className="col-span-1"
              required
            />
          </div>
          <div className="grid md:grid-cols-4 items-center gap-4">
            <Label htmlFor="rating" className="md:text-right">
              Rating (out of 10)
            </Label>
            <Input
              id="rating"
              type="number"
              inputMode="numeric"
              min={0}
              max={10}
              step={1}
              defaultValue={0}
              className="col-span-1"
            />
          </div>
          <div className="grid md:grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="md:text-right">
              Status
            </Label>
            <Categories defaultSelectedValue={undefined} />
          </div>
          <div className="md:grid md:grid-cols-4 items-center gap-4 flex flex-row">
            <Label htmlFor="is-favourite" className="md:text-right">
              Mark as Favourite
            </Label>
            <Checkbox id="is-favourite" defaultChecked={false} />
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
              onClick={() => {
                toast({
                  title: "Task Added Successfully",
                  description: "",
                });
              }}
            >
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
