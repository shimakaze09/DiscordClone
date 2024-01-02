import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col">
      <p className='text-3xl font-bold text-indigo-500'>
        Hello discord clone
      </p>
      <Button variant={"ghost"}>
        Click
      </Button>
    </div>
  )
}
