import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const menuItems = [
  "Edition",
  "Interrogation",
  "Block",
  "Enregistrement",
  "Champ",
  "Fenêtre",
  "Aide",
];

export function MainMenu() {
  return (
    <div className="w-full bg-white/50 backdrop-blur-xl py-1 px-4 border-b border-slate-200 sticky top-0 z-[100] shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
      <NavigationMenu className="max-w-none justify-start">
        <NavigationMenuList className="gap-1">
          {menuItems.map((item) => (
            <NavigationMenuItem key={item}>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-slate-600 hover:bg-primary/5 hover:text-primary h-8 px-4 text-xs font-black uppercase tracking-widest transition-all rounded-xl border border-transparent hover:border-primary/10"
                )}
                href="#"
              >
                {item}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
