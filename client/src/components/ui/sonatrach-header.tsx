import sonaLogo from "@assets/sona_1768128567892.png";

export function SonatrachHeader() {
  return (
    <div className="absolute top-0 left-0 p-10 z-20 select-none">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src={sonaLogo} 
              alt="Sonatrach Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-black text-slate-900 leading-none tracking-tighter">SONATRACH</h1>
            <p className="text-[10px] font-bold text-accent uppercase tracking-[0.3em]">Corporate Systems</p>
          </div>
        </div>
        
        <div className="flex flex-col text-[10px] font-black text-slate-400 pl-4 border-l-2 border-accent/30 space-y-0.5">
          <span className="uppercase tracking-[0.2em]">Division Production</span>
          <span className="uppercase tracking-[0.2em]">Direction Informatique</span>
          <span className="uppercase tracking-[0.2em] text-slate-500">Département Etudes & Développement</span>
        </div>
      </div>
    </div>
  );
}
