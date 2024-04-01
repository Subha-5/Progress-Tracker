import { AddSheet as AddTask } from "@/components/AddSheet";
import Item from "@/components/Item";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import tasks from "@/data/tasks.json";

export default function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-col items-center">
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between p-8">
        <h3 className="text-white font-bold text-4xl p-4">
          Monitor your Goals
        </h3>
        <AddTask/>
      </div>
      <Separator />

      <div className="w-full px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10">
        {tasks.data.tasks.map((task) => (
          <Item
            key={task.id}
            id={task.id}
            title={task.name}
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
    </main>
  );
}
