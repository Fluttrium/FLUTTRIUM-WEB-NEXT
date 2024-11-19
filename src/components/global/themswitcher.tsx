import { Switch } from "@/components/ui/switch"
import { Moon, MoonIcon, Sun } from "lucide-react"

export function ThemSwitcher(){
    return(
        <div className='absolute z-50 bottom-0 right-0 bg-accent rounded-lg flex flex-row justify-between m-1 p-1 items-center'>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
            <Switch/>
            <Moon color="#ffffff" className='h-[1.2rem] w-[1.2rem]   transition-all ' />

        </div>
    );
}