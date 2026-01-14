import { Input } from "@/components/ui/input";
import { MainMenu } from "@/components/main-menu";
import { 
  Save, RefreshCw, Plus, Trash2, Search, ArrowLeft, 
  ChevronRight, ChevronLeft, ChevronsRight, ChevronsLeft,
  FileText
} from "lucide-react";
import { useLocation } from "wouter";

export default function ExpenseTypesPage() {
  const [, setLocation] = useLocation();
  
  const types = [
    { code: "0", libelle: "- Petit Déjeuner" },
    { code: "1", libelle: "- Déjeuner" },
    { code: "2", libelle: "- Dîner" },
    { code: "3", libelle: "- Pause Café" },
    { code: "4", libelle: "- Blanchisserie" },
    { code: "5", libelle: "- S'hour" },
    { code: "6", libelle: "- F'tour" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      <MainMenu />
      
      <div className="bg-[#78b3b3] text-white px-3 py-1.5 flex items-center justify-between border-b border-[#5a8a8a]">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4" />
          <h1 className="text-[13px] font-bold uppercase tracking-wider">WINDOW1</h1>
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
        <div className="w-full max-w-3xl bg-white border border-gray-300 rounded-sm shadow-sm relative pt-10 pb-6 px-10">
          <div className="absolute top-0 left-10 -translate-y-1/2 bg-white px-4 text-[15px] font-bold text-gray-800 border-x border-t border-gray-300 rounded-t-sm h-9 flex items-center">
            Liste Des Prise En Charge
          </div>
          
          <div className="overflow-hidden">
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="border-b border-transparent">
                  <th className="pb-3 text-center font-bold w-40">Code Type</th>
                  <th className="pb-3 text-left font-bold pl-10">Libelle</th>
                </tr>
              </thead>
              <tbody>
                {types.map((type, i) => (
                  <tr key={i} className="group">
                    <td className="p-0.5 pr-2">
                      <Input defaultValue={type.code} className="h-8 text-[14px] border-gray-300 rounded-none text-center bg-white group-hover:border-blue-400" />
                    </td>
                    <td className="p-0.5 relative flex items-center">
                      <Input defaultValue={type.libelle} className="h-8 text-[14px] border-gray-300 rounded-none w-full bg-white group-hover:border-blue-400" />
                      {i === 0 && (
                        <div className="absolute right-[-18px] top-1 bottom-1 w-5 bg-gray-100 border border-gray-300 flex flex-col items-center justify-center gap-1 rounded-sm">
                          <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[4px] border-b-gray-600" />
                          <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[4px] border-t-gray-600" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
                {Array.from({ length: 4 }).map((_, i) => (
                  <tr key={`empty-${i}`}>
                    <td className="p-0.5 pr-2">
                      <Input className="h-8 border-gray-300 rounded-none bg-white" />
                    </td>
                    <td className="p-0.5">
                      <Input className="h-8 border-gray-300 rounded-none w-full bg-white" />
                    </td>
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