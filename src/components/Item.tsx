"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { EditDialog as EditTask } from "@/components/EditDialog";
import axios from "axios";

function Item({
  id,
  title,
  desc,
  footer,
  progress,
  total,
  isFavourite,
  rating,
  status,
  category,
}: ItemProps) {
  const [progressBar, setProgressBar] = useState((progress / total) * 100);
  const [currentProgress, setCurrentProgress] = useState(progress);
  const [addBtnDisabled, setAddBtnDisabled] = useState(false);

  const handleAddAction = async (id: string) => {
    setAddBtnDisabled(true);
    try {
      const response = await axios.patch(`/api/task/addprogress/${id}`);
      if (currentProgress < total && currentProgress >= 0) {
        setCurrentProgress((prevProgress) => prevProgress + 1);
        setProgressBar((prevProgress) => {
          return prevProgress + (1 / total) * 100;
        });
      } else if (currentProgress === total) {
        setAddBtnDisabled(true)
        console.log('to be completed');
        setProgressBar(100)
        await axios.put(`/api/task/edit/${id}`, {"status": "completed"})
        console.log('already completed');
      }
    } catch (error) {
      console.log("Could not connect to application to complete action");
    }
    setAddBtnDisabled(false);
  };

  useEffect(() => {}, []);

  return (
    <Card className="bg-gray-900 text-white border border-gray-500">
      <CardHeader className="flex flex-row justify-between py-2 md:pt-6">
        <div className="break-normal">
          <CardTitle className="font-normal text-lg md:text-2xl md:font-semibold">
            {title}{" "}
          </CardTitle>
          <CardDescription>
            {desc}{" "}
            <span className="text-yellow-500 text-lg p-0 whitespace-nowrap leading-none">
              {/* &#9733; */}
            </span>
          </CardDescription>
        </div>
        <EditTask
          id={id}
          name={title}
          description={desc}
          isMarkedFavourite={isFavourite}
          totalUnits={total}
          unitsCovered={progress}
          ratingValue={rating}
          status={status}
          category={category}
        />
      </CardHeader>
      <CardContent className="flex flex-row items-center pb-0">
        <div className="flex flex-col items-end w-full">
          <Progress
            key={id}
            title={`${progressBar.toFixed(2)}%`}
            value={progressBar}
            color="#0000FF"
          />
          <p className="text-xs mt-1">
            <span>
              <span className="text-xs font-extralight">{category}</span>{" "}
              {currentProgress}/{total}
            </span>
          </p>
        </div>
        <Button
          disabled={addBtnDisabled || currentProgress >= total}
          onClick={() => {
            handleAddAction(id);
          }}
          className="ml-4 text-3xl font-light border-white border-[1px] flex items-center justify-center p-2 md:p-3"
          title="Press to increment progress"
        >
          &#43;
        </Button>
      </CardContent>
      <CardFooter className="flex pb-2 text-sm md:text-base md:p-4">
        <p title={`Status: ${footer}`}>
          Status:<span className="font-bold tracking-wide"> {footer} </span>
        </p>
        {isFavourite && (
          <Badge
            variant={"outline"}
            className="text-white ml-4 cursor-default"
            title="Marked as favourite"
          >
            Favourite
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
}

export type ItemProps = {
  id: string;
  title: string;
  category: string;
  desc: string;
  footer: string;
  progress: number;
  total: number;
  isFavourite: boolean;
  rating: number;
  status: string;
};

export default Item;
