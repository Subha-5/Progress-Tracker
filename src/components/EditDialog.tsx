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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Categories } from "@/components/Categories";
import { Checkbox } from "@/components/ui/checkbox";

type EditDialogProps = {
  name: string;
  description: string;
  totalUnits: number;
  unitsCovered: number;
  ratingValue: number;
  status: string;
  isMarkedFavourite: boolean;
};

export function EditDialog({
  name,
  description,
  totalUnits,
  unitsCovered,
  ratingValue,
  status,
  isMarkedFavourite,
}: EditDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="border border-white !m-0"
          title="Press to Edit task"
        >
          &#9998;
        </Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 rounded-lg invert">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
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
              value={name}
            />
          </div>
          <div className="grid md:grid-cols-3 items-center gap-4">
            <Label htmlFor="description" className="md:text-right">
              Task Description
            </Label>
            <Textarea
              id="description"
              className="col-span-2"
              value={description}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
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
                defaultValue={0}
                value={totalUnits}
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
                defaultValue={0}
                value={unitsCovered}
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
                defaultValue={0}
                value={ratingValue}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col w-full items-start gap-2">
              <Label htmlFor="status" className="md:text-right">
                Status
              </Label>
              <Categories defaultSelectedValue={status} />
            </div>
            <div className="flex gap-4 justify-center items-center w-full ">
              <Label htmlFor="is-favourite" className="md:text-right">
                Mark as Favourite
              </Label>
              <Checkbox id="is-favourite" checked={isMarkedFavourite} />
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Label
              htmlFor="revisit-count"
              className="md:text-right whitespace-nowrap font-bold"
            >
              Revisit Count
            </Label>
            <Input
              id="revisit-count"
              type="number"
              inputMode="numeric"
              min={0}
              max={10}
              step={1}
              className="col-span-1"
              defaultValue={0}
              value={0}
            />
          </div>
        </div>
        <DialogFooter className="flex flex-row gap-4 !justify-center">
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
            <Button className="w-max" type="submit" title="Save above changes">
              Save updated changes
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              variant={"destructive"}
              type="button"
              className="w-min invert"
              title="Delete Task"
            >
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
