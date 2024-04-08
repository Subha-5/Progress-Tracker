"use client";

import Header from "@/components/Header";
import Item from "@/components/Item";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { TaskType } from "@/types/task";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [emailState, setEmailState] = useState("")
  const [usernameState, setUsernameState] = useState("")

  useEffect( () => {
    fetchDetails();
  }, [tasks, emailState, usernameState])
  
  const fetchDetails  = async () => {
    try {
      const response = await axios.get("/api/task"); 
      const userTasks = response.data.data
      setEmailState(userTasks.email)
      setUsernameState(userTasks.username)
      setTasks(userTasks.tasks)
    } catch (error) {
      console.log("Failed to fetch tasks !!!");   
    }
  }
  return (
    <div className="bg-black flex min-h-screen flex-col items-center">
      <Header username={usernameState} email={emailState}/>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList
          style={{ scrollbarWidth: "none" }}
          className="px-8 w-full flex flex-nowrap justify-start md:justify-around bg-black text-white overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth sticky top-0 z-10"
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
            {tasks.map((task) => (
              <Item
                key={task._id}
                id={task._id}
                title={task.name}
                category={task.type}
                desc={task.description}
                footer={task.status}
                progress={task.progress}
                total={task.totalParts}
                isFavourite={task.isFavourite!}
                rating={task.rating}
                status={task.status}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="current">
          <div className="w-full px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2 md:py-4">
            {tasks
              .filter((task) => task.status == "current")
              .map((task) => (
                <Item
                  key={task._id}
                  id={task._id}
                  title={task.name}
                  category={task.type}
                  desc={task.description}
                  footer={task.status}
                  progress={task.progress}
                  total={task.totalParts}
                  isFavourite={task.isFavourite!}
                  rating={task.rating}
                  status={task.status}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="w-full px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2 md:py-4">
            {tasks
              .filter((task) => task.status == "completed")
              .map((task) => (
                <Item
                  key={task._id}
                  id={task._id}
                  title={task.name}
                  category={task.type}
                  desc={task.description}
                  footer={task.status}
                  progress={task.progress}
                  total={task.totalParts}
                  isFavourite={task.isFavourite!}
                  rating={task.rating}
                  status={task.status}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="on-hold">
          <div className="w-full px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2 md:py-4">
            {tasks
              .filter((task) => task.status == "on-hold")
              .map((task) => (
                <Item
                  key={task._id}
                  id={task._id}
                  title={task.name}
                  category={task.type}
                  desc={task.description}
                  footer={task.status}
                  progress={task.progress}
                  total={task.totalParts}
                  isFavourite={task.isFavourite!}
                  rating={task.rating}
                  status={task.status}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="dropped">
          <div className="w-full px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2 md:py-4">
            {tasks
              .filter((task) => task.status == "dropped")
              .map((task) => (
                <Item
                  key={task._id}
                  id={task._id}
                  title={task.name}
                  category={task.type}
                  desc={task.description}
                  footer={task.status}
                  progress={task.progress}
                  total={task.totalParts}
                  isFavourite={task.isFavourite!}
                  rating={task.rating}
                  status={task.status}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="planning">
          <div className="w-full px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2 md:py-4">
            {tasks
              .filter((task) => task.status == "planning")
              .map((task) => (
                <Item
                  key={task._id}
                  id={task._id}
                  title={task.name}
                  category={task.type}
                  desc={task.description}
                  footer={task.status}
                  progress={task.progress}
                  total={task.totalParts}
                  isFavourite={task.isFavourite!}
                  rating={task.rating}
                  status={task.status}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="favourites">
          <div className="w-full px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-2 md:py-4">
            {tasks
              .filter((task) => task.isFavourite)
              .map((task) => (
                <Item
                  key={task._id}
                  id={task._id}
                  title={task.name}
                  category={task.type}
                  desc={task.description}
                  footer={task.status}
                  progress={task.progress}
                  total={task.totalParts}
                  isFavourite={task.isFavourite!}
                  rating={task.rating}
                  status={task.status}
                />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
