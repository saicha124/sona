import { ShieldCheck } from "lucide-react";

export function SonatrachHeader() {
  return (
    <div className="absolute top-0 left-0 p-8 z-10 select-none">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3 mb-2">
           {/* Placeholder for actual logo - using a styled icon for now */}
          <div className="h-12 w-12 bg-orange-500 rounded-sm flex items-center justify-center text-white shadow-md">
             <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-primary font-heading">
            SONATRACH
          </h1>
        </div>
        
        <div className="flex flex-col text-sm font-bold text-slate-600 pl-1 border-l-4 border-orange-500 ml-2">
          <span className="uppercase tracking-wide pl-2">Division Production</span>
          <span className="uppercase tracking-wide pl-2">Direction Informatique</span>
          <span className="uppercase tracking-wide pl-2">Département Etudes & Développement</span>
        </div>
      </div>
    </div>
  );
}
