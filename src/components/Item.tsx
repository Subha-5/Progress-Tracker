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
import { useState } from "react";
import { EditDialog as EditTask } from "@/components/EditDialog";

function Item({
  id,
  title,
  desc,
  footer,
  progress,
  total,
  isFavourite,
  rating,
  status
}: ItemProps) {
  const [progressBar, setProgressBar] = useState((progress / total) * 100);
  const [currentProgress, setCurrentProgress] = useState(progress);
  const handleAddAction = (id: number) => {
    if(currentProgress>=0 && currentProgress<=total){
      setCurrentProgress((prevProgress) => ( prevProgress + 1));
      setProgressBar((prevProgress) => {
        return prevProgress + (1 / total) * 100;
      });
    }
  };
  return (
    <Card className="bg-gray-900 text-white border border-gray-500">
      <CardHeader className="flex flex-row justify-between py-3 md:pt-6">
        <div>
          <CardTitle className="font-semibold">{title} </CardTitle>
          <CardDescription>{desc} <span className="text-yellow-500 text-lg">&#9733;</span></CardDescription>
        </div>
        {/* <Button className="text-xl border-white border-[1px] flex justify-center"> */}
        <EditTask name={title} description={desc} isMarkedFavourite={isFavourite} totalUnits={total} unitsCovered={progress} ratingValue={rating} status={status}/>

      </CardHeader>
      <CardContent className="flex flex-row items-center pb-0">
        <div className="flex flex-col items-end w-full">
          <Progress key={id} title={`${progressBar.toFixed(2)}%`} value={progressBar} color="#0000FF" />
          <p className="text-xs mt-1">
            <span>
              {currentProgress}/{total}
            </span>
          </p>
        </div>
        <Button
          disabled={(footer == "completed" || currentProgress>=total)}
          onClick={() => {
            handleAddAction(id);
          }}
          className="ml-4 text-3xl font-light border-white border-[1px] flex items-center justify-center p-3"
          title="Press to increment progress"
        >
          &#43;
        </Button>
      </CardContent>
      <CardFooter className="flex pb-3 md:pb-6">
        <p title={`Status: ${footer}`}>
          Status:<span className="font-bold tracking-wide"> {footer} </span>
        </p>
        {isFavourite && (
          <Badge variant={"outline"} className="text-white ml-4 cursor-default" title="Marked as favourite">
            Favourite
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
}

export type ItemProps = {
  id: number;
  title: string;
  desc: string;
  footer: string;
  progress: number;
  total: number;
  isFavourite: boolean;
  rating: number;
  status: string
};

export default Item;
