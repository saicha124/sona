import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const menuItems = [
  "Action",
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
    <div className="w-full bg-[#3d7a8a] text-white py-1 px-2 border-b border-white/20 z-50">
      <NavigationMenu className="max-w-none justify-start">
        <NavigationMenuList className="gap-0">
          {menuItems.map((item) => (
            <NavigationMenuItem key={item}>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-white hover:bg-white/10 hover:text-white h-8 px-3 text-sm font-medium transition-colors"
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
