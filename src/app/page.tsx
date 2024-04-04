"use client";

import React from "react";
import { AddSheet as AddTask } from "@/components/AddSheet";
import Item from "@/components/Item";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import tasks from "@/data/tasks.json";

export default function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-col items-center">
      <div className="w-full flex  md:flex-row items-center justify-between p-4 md:p-8 md:pt-8">
        <h3 className="text-white font-bold text-2xl lg:text-4xl md:p-4">
          Monitor your Goals
        </h3>
        <AddTask />
      </div>
      <Tabs defaultValue="all" className="w-full">
        <TabsList
          style={{ scrollbarWidth: "none" }}
          className="px-8 w-full flex flex-nowrap justify-start md:justify-around bg-black text-white overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth"
        >
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="current">Current</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="on-hold">On Hold</TabsTrigger>
          <TabsTrigger value="dropped">Dropped</TabsTrigger>
          <TabsTrigger value="planning">Plan to do</TabsTrigger>
          <TabsTrigger value="favourites">Favourites</TabsTrigger>
        </TabsList>
        <Separator />
        <TabsContent value="all">
          <div className="w-full px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2 md:py-4">
            {tasks.data.tasks.map((task) => (
              <Item
                key={task.id}
                id={task.id}
                title={task.name}
                category={task.type}
                desc={task.description}
                footer={task.status}
                progress={task.progress}
                total={task.total}
                isFavourite={task.isFavourite!}
                rating={task.rating}
                status={task.status}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="current">
          <div className="w-full px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2 md:py-4">
            {tasks.data.tasks
              .filter((task) => task.status == "current")
              .map((task) => (
                <Item
                  key={task.id}
                  id={task.id}
                  title={task.name}
                  category={task.type}
                  desc={task.description}
                  footer={task.status}
                  progress={task.progress}
                  total={task.total}
                  isFavourite={task.isFavourite!}
                  rating={task.rating}
                  status={task.status}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="w-full px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2 md:py-4">
            {tasks.data.tasks
              .filter((task) => task.status == "completed")
              .map((task) => (
                <Item
                  key={task.id}
                  id={task.id}
                  title={task.name}
                  category={task.type}
                  desc={task.description}
                  footer={task.status}
                  progress={task.progress}
                  total={task.total}
                  isFavourite={task.isFavourite!}
                  rating={task.rating}
                  status={task.status}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="on-hold">
          <div className="w-full px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2 md:py-4">
            {tasks.data.tasks
              .filter((task) => task.status == "on-hold")
              .map((task) => (
                <Item
                  key={task.id}
                  id={task.id}
                  title={task.name}
                  category={task.type}
                  desc={task.description}
                  footer={task.status}
                  progress={task.progress}
                  total={task.total}
                  isFavourite={task.isFavourite!}
                  rating={task.rating}
                  status={task.status}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="dropped">
          <div className="w-full px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2 md:py-4">
            {tasks.data.tasks
              .filter((task) => task.status == "dropped")
              .map((task) => (
                <Item
                  key={task.id}
                  id={task.id}
                  title={task.name}
                  category={task.type}
                  desc={task.description}
                  footer={task.status}
                  progress={task.progress}
                  total={task.total}
                  isFavourite={task.isFavourite!}
                  rating={task.rating}
                  status={task.status}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="planning">
          <div className="w-full px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2 md:py-4">
            {tasks.data.tasks
              .filter((task) => task.status == "planning")
              .map((task) => (
                <Item
                  key={task.id}
                  id={task.id}
                  title={task.name}
                  category={task.type}
                  desc={task.description}
                  footer={task.status}
                  progress={task.progress}
                  total={task.total}
                  isFavourite={task.isFavourite!}
                  rating={task.rating}
                  status={task.status}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="favourites">
          <div className="w-full px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2 md:py-4">
            {tasks.data.tasks
              .filter((task) => task.isFavourite)
              .map((task) => (
                <Item
                  key={task.id}
                  id={task.id}
                  title={task.name}
                  category={task.type}
                  desc={task.description}
                  footer={task.status}
                  progress={task.progress}
                  total={task.total}
                  isFavourite={task.isFavourite!}
                  rating={task.rating}
                  status={task.status}
                />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
