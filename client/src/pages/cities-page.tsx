import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainMenu } from "@/components/main-menu";
import { 
  Save, RefreshCw, Plus, Trash2, Search, ArrowLeft, 
  ChevronRight, ChevronLeft, ChevronsRight, ChevronsLeft,
  FileText
} from "lucide-react";
import { useLocation } from "wouter";

export default function CitiesPage() {
  const [, setLocation] = useLocation();
  
  const cities = [
    { code: "15000", nom: "TIZI -OUZOU", cp: "15000" },
    { code: "SAI", nom: "SAIDA", cp: "" },
    { code: "MAS", nom: "MASCARA", cp: "" },
    { code: "TLEM", nom: "TLEMCEN", cp: "" },
    { code: "BEL", nom: "BELABBES", cp: "" },
    { code: "TEM", nom: "IN TEMOUCHENT", cp: "" },
    { code: "GHEL", nom: "GHELIZANE", cp: "" },
    { code: "TIAR", nom: "TIARET", cp: "" },
    { code: "BEJ", nom: "BEJAIA", cp: "" },
    { code: "SET", nom: "SETIF", cp: "" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      <MainMenu />
      
      <div className="bg-[#78b3b3] text-white px-3 py-1.5 flex items-center justify-between border-b border-[#5a8a8a]">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4" />
          <h1 className="text-[13px] font-bold uppercase">LISTE DES VILLES</h1>
        </div>
        <div className="flex gap-1">
          <button className="p-0.5 hover:bg-white/20 rounded"><ChevronLeft className="w-4 h-4" /></button>
          <button className="p-0.5 hover:bg-white/20 rounded"><ChevronRight className="w-4 h-4" /></button>
          <button onClick={() => setLocation("/")} className="p-0.5 hover:bg-white/20 rounded"><ArrowLeft className="w-4 h-4" /></button>
        </div>
      </div>

      <div className="bg-[#d4d0c8] p-1 flex items-center gap-1 border-b border-[#808080]">
        <ToolbarIcon icon={<Save className="w-5 h-5 text-black" />} />
        <ToolbarIcon icon={<RefreshCw className="w-5 h-5 text-green-700" />} />
        <ToolbarIcon icon={<Plus className="w-5 h-5 text-green-600" />} />
        <ToolbarIcon icon={<Trash2 className="w-5 h-5 text-red-600" />} />
        <div className="w-px h-6 bg-gray-400 mx-1" />
        <ToolbarIcon icon={<Search className="w-5 h-5 text-blue-700" />} />
        <div className="w-px h-6 bg-gray-400 mx-1" />
        <ToolbarIcon icon={<ChevronsLeft className="w-5 h-5" />} />
        <ToolbarIcon icon={<ChevronLeft className="w-5 h-5" />} />
        <ToolbarIcon icon={<ChevronRight className="w-5 h-5" />} />
        <ToolbarIcon icon={<ChevronsRight className="w-5 h-5" />} />
      </div>

      <main className="flex-1 p-8 flex justify-center">
        <div className="w-full max-w-4xl bg-white border border-gray-300 rounded-sm shadow-sm relative pt-10 pb-6 px-6">
          <div className="absolute top-0 left-6 -translate-y-1/2 bg-white px-3 text-[14px] font-bold text-gray-800 border-x border-t border-gray-300 rounded-t-sm h-8 flex items-center">
            Liste des Villes
          </div>
          
          <div className="overflow-hidden border border-gray-200">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-2 text-center font-bold border-r border-gray-200 w-32">Code Ville</th>
                  <th className="p-2 text-left font-bold border-r border-gray-200">Nom Ville</th>
                  <th className="p-2 text-left font-bold w-64">Code postal</th>
                </tr>
              </thead>
              <tbody>
                {cities.map((city, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-b-0 hover:bg-blue-50/30 group">
                    <td className="p-1 border-r border-gray-200">
                      <Input defaultValue={city.code} className="h-7 text-[13px] border-gray-300 rounded-none focus:ring-0 group-hover:border-blue-400" />
                    </td>
                    <td className="p-1 border-r border-gray-200">
                      <Input defaultValue={city.nom} className="h-7 text-[13px] border-gray-300 rounded-none focus:ring-0 group-hover:border-blue-400" />
                    </td>
                    <td className="p-1 relative">
                      <Input defaultValue={city.cp} className="h-7 text-[13px] border-gray-300 rounded-none focus:ring-0 group-hover:border-blue-400" />
                      {i === 0 && (
                        <div className="absolute right-[-1px] top-0 bottom-0 w-5 bg-gray-100 border-l border-gray-300 flex flex-col items-center justify-center gap-1">
                          <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[4px] border-b-gray-600" />
                          <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[4px] border-t-gray-600" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
                {Array.from({ length: 2 }).map((_, i) => (
                  <tr key={`empty-${i}`} className="border-b border-gray-100 last:border-b-0">
                    <td className="p-1 border-r border-gray-200"><div className="h-7" /></td>
                    <td className="p-1 border-r border-gray-200"><div className="h-7" /></td>
                    <td className="p-1"><div className="h-7" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

function ToolbarIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button type="button" className="p-1.5 hover:bg-gray-300 border border-transparent hover:border-gray-400 transition-all">
      {icon}
    </button>
  );
}