import sonaLogo from "@assets/sona_1768128567892.png";

export function SonatrachHeader() {
  return (
    <div className="absolute top-0 left-0 p-8 z-10 select-none">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3 mb-2">
          <img 
            src={sonaLogo} 
            alt="Sonatrach Logo" 
            className="h-20 w-auto object-contain shadow-sm rounded-sm"
          />
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
