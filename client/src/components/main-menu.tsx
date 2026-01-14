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
    <div className="w-full bg-[#2c5e6b] text-white/90 py-0.5 px-2 border-b border-white/10 shadow-sm z-50">
      <NavigationMenu className="max-w-none justify-start">
        <NavigationMenuList className="gap-0">
          {menuItems.map((item) => (
            <NavigationMenuItem key={item}>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-white/90 hover:bg-white/15 hover:text-white h-7 px-3 text-[13px] font-medium transition-colors rounded-none focus:bg-white/20"
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
