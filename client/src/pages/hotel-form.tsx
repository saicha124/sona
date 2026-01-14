import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertHotelSchema, type InsertHotel } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { MainMenu } from "@/components/main-menu";
import { 
  Save, RefreshCw, Plus, Trash2, Search, ArrowLeft, 
  ChevronRight, ChevronLeft, ChevronsRight, ChevronsLeft,
  Copy, FileSpreadsheet
} from "lucide-react";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function HotelForm() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  const form = useForm<InsertHotel>({
    resolver: zodResolver(insertHotelSchema),
    defaultValues: {
      code: "KALA",
      nom: "EL KALAA",
      adresse: "M'SILA",
      ville: "M'SILA",
      telephone: "035359292",
      fax: "",
      siteInternet: "",
      email: "",
      utilise: "true",
    },
  });

  const onSubmit = (data: InsertHotel) => {
    toast({
      title: "Succès",
      description: "Hôtel enregistré avec succès (Simulation)",
    });
  };

  const tableRows = Array.from({ length: 10 }).map((_, i) => ({
    annee: i < 4 ? (2022 + i).toString() : "",
    type: i < 4 ? "-CHAMBRE SINGLE" : "",
    tarif: i < 4 ? "5000.00" : "",
    tva: i < 4 ? "9.00" : "",
    rest: i < 4 ? "2600.00" : "",
    pdj: i < 4 ? ".00" : "",
    statut: i < 4 ? "Cadre" : "",
    obs: ""
  }));

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      <MainMenu />
      
      {/* Header Bar - Modern Style */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 px-6 py-4 flex items-center justify-between z-30 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-white p-2 rounded-xl shadow-lg shadow-primary/20">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-black text-slate-900 leading-tight uppercase tracking-tight">Liste des Hôtels</h1>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Gestion des établissements</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => setLocation("/")} className="rounded-full hover:bg-slate-50 border-slate-200">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Toolbar - Modern Style */}
      <div className="bg-white/50 backdrop-blur-sm p-3 flex items-center gap-2 border-b border-slate-100 justify-center">
        <div className="flex items-center gap-1 bg-white p-1 rounded-2xl shadow-sm border border-slate-200">
          <ToolbarIcon icon={<Save className="w-5 h-5 text-primary" />} />
          <ToolbarIcon icon={<RefreshCw className="w-5 h-5 text-slate-400" />} />
          <ToolbarIcon icon={<Plus className="w-5 h-5 text-accent" />} />
          <ToolbarIcon icon={<Trash2 className="w-5 h-5 text-red-500" />} />
        </div>
        <div className="w-px h-6 bg-slate-200 mx-1" />
        <div className="flex items-center gap-1 bg-white p-1 rounded-2xl shadow-sm border border-slate-200">
          <ToolbarIcon icon={<Search className="w-5 h-5 text-primary" />} />
        </div>
        <div className="w-px h-6 bg-slate-200 mx-1" />
        <div className="flex items-center gap-1 bg-white p-1 rounded-2xl shadow-sm border border-slate-200">
          <ToolbarIcon icon={<ChevronsLeft className="w-5 h-5" />} />
          <ToolbarIcon icon={<ChevronLeft className="w-5 h-5" />} />
          <ToolbarIcon icon={<ChevronRight className="w-5 h-5" />} />
          <ToolbarIcon icon={<ChevronsRight className="w-5 h-5" />} />
        </div>
      </div>

      <main className="flex-1 p-6 overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto space-y-6"
        >
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 relative pt-12">
            <div className="absolute top-0 left-8 -translate-y-1/2 bg-primary text-white px-6 py-2 text-[12px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-primary/20">
              Saisie des Hôtels
            </div>
              
              <div className="grid grid-cols-12 gap-x-8 gap-y-2">
                {/* Left Column */}
                <div className="col-span-7 space-y-2">
                  <div className="grid grid-cols-4 items-center gap-2">
                    <label className="text-[12px] font-bold text-right col-span-1">Code Hotel</label>
                    <Input {...form.register("code")} className="h-7 text-[12px] border-gray-300 rounded-none w-32" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-2">
                    <label className="text-[12px] font-bold text-right col-span-1">Nom Hotel</label>
                    <Input {...form.register("nom")} className="h-7 text-[12px] border-gray-300 rounded-none col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-2">
                    <label className="text-[12px] font-bold text-right col-span-1">Adresse Hotel</label>
                    <Input {...form.register("adresse")} className="h-7 text-[12px] border-gray-300 rounded-none col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-2">
                    <label className="text-[12px] font-bold text-right col-span-1">Ville</label>
                    <div className="flex gap-1 col-span-3">
                      <Input {...form.register("ville")} className="h-7 text-[12px] border-gray-300 rounded-none w-32" />
                      <button type="button" className="h-7 px-2 bg-gray-100 border border-gray-300 text-[10px]">---</button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-2">
                    <label className="text-[12px] font-bold text-right col-span-1">Telephone</label>
                    <Input {...form.register("telephone")} className="h-7 text-[12px] border-gray-300 rounded-none w-48" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-2">
                    <label className="text-[12px] font-bold text-right col-span-1">Fax</label>
                    <Input {...form.register("fax")} className="h-7 text-[12px] border-gray-300 rounded-none w-48" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-2">
                    <label className="text-[12px] font-bold text-right col-span-1">Site Internet</label>
                    <Input {...form.register("siteInternet")} className="h-7 text-[12px] border-gray-300 rounded-none col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-2">
                    <label className="text-[12px] font-bold text-right col-span-1">Email</label>
                    <Input {...form.register("email")} className="h-7 text-[12px] border-gray-300 rounded-none col-span-3" />
                  </div>
                </div>

                {/* Right Column */}
                <div className="col-span-5 flex flex-col items-center gap-6 pt-4">
                  <Button variant="outline" className="h-8 rounded-none border-gray-300 text-[12px] bg-gray-50 px-8">
                    Copie les tarifs
                  </Button>
                  
                  <div className="space-y-2 w-full max-w-[240px]">
                    <div className="flex items-center justify-between gap-4">
                      <label className="text-[12px] font-bold">L'Annee a Copier</label>
                      <Input defaultValue="2025" className="h-7 w-20 text-[12px] border-gray-300 rounded-none text-center" />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <label className="text-[12px] font-bold">Nouvelle Annee</label>
                      <Input className="h-7 w-20 text-[12px] border-gray-300 rounded-none text-center" />
                    </div>
                  </div>

                  <div className="mt-auto flex items-center gap-2 self-end mr-10">
                    <label className="text-[12px] font-bold">Utilise</label>
                    <Checkbox checked className="border-gray-400 rounded-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Tariffs Grid Section */}
            <div className="bg-white border border-gray-300 rounded-sm overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[11px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-300">
                      <th className="p-2 text-left font-bold border-r border-gray-200 w-16">Annee</th>
                      <th className="p-2 text-left font-bold border-r border-gray-200">Type Chambre</th>
                      <th className="p-2 w-10 border-r border-gray-200"></th>
                      <th className="p-2 text-right font-bold border-r border-gray-200">Tarif Chambre HT</th>
                      <th className="p-2 text-right font-bold border-r border-gray-200 w-16">TVA</th>
                      <th className="p-2 text-right font-bold border-r border-gray-200">Tarif Rest</th>
                      <th className="p-2 text-right font-bold border-r border-gray-200">Tarif Petitdej</th>
                      <th className="p-2 text-left font-bold border-r border-gray-200 w-24">Statut</th>
                      <th className="p-2 text-left font-bold">Observation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row, i) => (
                      <tr key={i} className="border-b border-gray-100 hover:bg-slate-50">
                        <td className="p-1 border-r border-gray-200">
                          <Input value={row.annee} className="h-6 text-[11px] border-gray-300 rounded-none" readOnly />
                        </td>
                        <td className="p-1 border-r border-gray-200">
                          <Input value={row.type} className="h-6 text-[11px] border-gray-300 rounded-none" readOnly />
                        </td>
                        <td className="p-1 border-r border-gray-200 text-center">
                          <button type="button" className="w-full h-6 bg-gray-100 border border-gray-300 text-[9px]">---</button>
                        </td>
                        <td className="p-1 border-r border-gray-200">
                          <Input value={row.tarif} className="h-6 text-[11px] border-gray-300 rounded-none text-right" readOnly />
                        </td>
                        <td className="p-1 border-r border-gray-200">
                          <Input value={row.tva} className="h-6 text-[11px] border-gray-300 rounded-none text-right" readOnly />
                        </td>
                        <td className="p-1 border-r border-gray-200">
                          <Input value={row.rest} className="h-6 text-[11px] border-gray-300 rounded-none text-right" readOnly />
                        </td>
                        <td className="p-1 border-r border-gray-200">
                          <Input value={row.pdj} className="h-6 text-[11px] border-gray-300 rounded-none text-right" readOnly />
                        </td>
                        <td className="p-1 border-r border-gray-200">
                          <select className="w-full h-6 text-[11px] border border-gray-300 rounded-none bg-white">
                            <option>{row.statut}</option>
                          </select>
                        </td>
                        <td className="p-1">
                          <Input value={row.obs} className="h-6 text-[11px] border-gray-300 rounded-none" readOnly />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </form>
        </Form>
      </motion.div>
    </main>
    </div>
  );
}

function ToolbarIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button type="button" className="p-2 hover:bg-slate-50 rounded-xl transition-all duration-200 active:scale-90 group">
      <div className="group-hover:scale-110 transition-transform">{icon}</div>
    </button>
  );
}