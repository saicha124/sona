import { Input } from "@/components/ui/input";
import { MainMenu } from "@/components/main-menu";
import { 
  Save, RefreshCw, Plus, Trash2, Search, ArrowLeft, 
  ChevronRight, ChevronLeft, ChevronsRight, ChevronsLeft,
  FileText
} from "lucide-react";
import { useLocation } from "wouter";

export default function RegionsPage() {
  const [, setLocation] = useLocation();
  
  const regions = [
    { code: "DRA", nom: "DIRECTION REGIONALE ADRAR", compte: "295000", email: "" },
    { code: "ADR", nom: "DIRECTION REGIONALE ADRAR", compte: "295000", email: "" },
    { code: "REA", nom: "REALISATION", compte: "200090", email: "" },
    { code: "AMT", nom: "ACTIVITE AMONT", compte: "200020", email: "" },
    { code: "AST", nom: "DIVISION ASSOCIATIONS", compte: "2GX000", email: "" },
    { code: "DAT", nom: "DIRECTION APPRO. & TRANSPORT", compte: "200820", email: "" },
    { code: "DFC", nom: "D. FINANCES/COMPTABILITE (HYD/DPR-SIEGE)", compte: "200100", email: "" },
    { code: "DGP", nom: "DIRECTION GESTION DU PERSONNEL", compte: "200200", email: "" },
    { code: "DMG", nom: "DIRECTION MOYENS GENERAUX", compte: "200300", email: "" },
    { code: "DOP", nom: "DIRECTION OPERATIONS (DP-SIEGE)", compte: "200600", email: "" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      <MainMenu />
      
      <div className="bg-[#78b3b3] text-white px-3 py-1.5 flex items-center justify-between border-b border-[#5a8a8a]">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4" />
          <h1 className="text-[13px] font-bold uppercase tracking-wider">LISTE DES REGIONS</h1>
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
        <div className="w-full max-w-5xl bg-white border border-gray-300 rounded-sm shadow-sm relative pt-10 pb-6 px-10">
          <div className="absolute top-0 left-10 -translate-y-1/2 bg-white px-4 text-[14px] font-bold text-gray-800 border-x border-t border-gray-300 rounded-t-sm h-9 flex items-center">
            Liste des Regions
          </div>
          
          <div className="overflow-hidden border border-gray-200">
            <table className="w-full border-collapse text-[12px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-2 text-center font-bold border-r border-gray-200 w-32">Code Region</th>
                  <th className="p-2 text-left font-bold border-r border-gray-200">Nom Region</th>
                  <th className="p-2 text-center font-bold border-r border-gray-200 w-40">Compte Analytique</th>
                  <th className="p-2 text-left font-bold">Email Region</th>
                </tr>
              </thead>
              <tbody>
                {regions.map((region, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-b-0 hover:bg-blue-50/30 group">
                    <td className="p-1 border-r border-gray-200">
                      <Input defaultValue={region.code} className="h-7 text-[12px] border-gray-300 rounded-none focus:ring-0 group-hover:border-blue-400 text-center" />
                    </td>
                    <td className="p-1 border-r border-gray-200">
                      <Input defaultValue={region.nom} className="h-7 text-[12px] border-gray-300 rounded-none focus:ring-0 group-hover:border-blue-400" />
                    </td>
                    <td className="p-1 border-r border-gray-200">
                      <Input defaultValue={region.compte} className="h-7 text-[12px] border-gray-300 rounded-none focus:ring-0 group-hover:border-blue-400 text-center" />
                    </td>
                    <td className="p-1">
                      <Input defaultValue={region.email} className="h-7 text-[12px] border-gray-300 rounded-none focus:ring-0 group-hover:border-blue-400" />
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
