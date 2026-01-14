import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertReservationSchema, type InsertReservation } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MainMenu } from "@/components/main-menu";
import { 
  Save, RefreshCw, Plus, Trash2, Search, ArrowLeft, 
  ChevronRight, ChevronLeft, ChevronsRight, ChevronsLeft,
  Calendar, Printer, FileText, Settings
} from "lucide-react";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";

export default function ReservationForm() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  const form = useForm<InsertReservation>({
    resolver: zodResolver(insertReservationSchema),
    defaultValues: {
      numeroReservation: "",
      dateReservation: new Date().toLocaleDateString('fr-FR'),
      numeroPriseEnCharge: "",
      structureEmettrice: "",
      compteAnalytique: "",
      dateDebut: "",
      dateFin: "",
      duree: "",
      etat: "Saisie",
      hotelId: 0,
      observations: "",
      offreCode: "",
      etabliPar: "",
    },
  });

  const onSubmit = (data: InsertReservation) => {
    toast({
      title: "Succès",
      description: "Réservation enregistrée avec succès (Simulation)",
    });
  };

  return (
    <div className="h-screen bg-slate-100 flex flex-col font-sans overflow-hidden">
      <MainMenu />
      
      {/* Title Bar */}
      <div className="bg-[#78b3b3] text-white px-3 py-1 flex items-center justify-between border-b border-[#5a8a8a] shrink-0">
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5" />
          <h1 className="text-[12px] font-bold uppercase">SAISIE DES RESERVATIONS</h1>
        </div>
        <div className="flex gap-1">
          <button className="p-0.5 hover:bg-white/20 rounded"><ChevronLeft className="w-3.5 h-3.5" /></button>
          <button className="p-0.5 hover:bg-white/20 rounded"><ChevronRight className="w-3.5 h-3.5" /></button>
          <button onClick={() => setLocation("/")} className="p-0.5 hover:bg-white/20 rounded"><ArrowLeft className="w-3.5 h-3.5" /></button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-[#d4d0c8] p-0.5 flex items-center gap-1 border-b border-[#808080] shrink-0">
        <ToolbarIcon icon={<Save className="w-4 h-4 text-black" />} />
        <ToolbarIcon icon={<RefreshCw className="w-4 h-4 text-green-700" />} />
        <ToolbarIcon icon={<Plus className="w-4 h-4 text-green-600" />} />
        <ToolbarIcon icon={<Trash2 className="w-4 h-4 text-red-600" />} />
        <div className="w-px h-5 bg-gray-400 mx-0.5" />
        <ToolbarIcon icon={<Search className="w-4 h-4 text-blue-700" />} />
        <div className="w-px h-5 bg-gray-400 mx-0.5" />
        <ToolbarIcon icon={<ChevronsLeft className="w-4 h-4" />} />
        <ToolbarIcon icon={<ChevronLeft className="w-4 h-4" />} />
        <ToolbarIcon icon={<ChevronRight className="w-4 h-4" />} />
        <ToolbarIcon icon={<ChevronsRight className="w-4 h-4" />} />
        <div className="w-px h-5 bg-gray-400 mx-0.5" />
        <ToolbarIcon icon={<Printer className="w-4 h-4 text-slate-700" />} />
      </div>

      <main className="flex-1 p-2 overflow-hidden">
        <Form {...form}>
          <form className="h-full flex flex-col gap-2">
            <div className="flex flex-1 gap-2 overflow-hidden">
              {/* Main Info Section */}
              <div className="flex-[3] flex flex-col gap-2 overflow-hidden">
                <div className="bg-white border border-gray-300 rounded-sm p-2 relative pt-4 shadow-sm shrink-0">
                  <div className="absolute top-0 left-3 -translate-y-1/2 bg-white px-1.5 text-[11px] font-bold text-gray-700">
                    Saisie d'une Reservation
                  </div>
                  
                  <div className="grid grid-cols-12 gap-y-1 gap-x-3">
                    <div className="col-span-6 grid grid-cols-3 items-center gap-1.5">
                      <label className="text-[10px] font-bold text-right">N? Reservation</label>
                      <div className="flex gap-0.5 col-span-2">
                        <Input {...form.register("numeroReservation")} className="h-5 text-[10px] border-gray-300 rounded-none w-20" />
                        <button type="button" className="h-5 px-1 bg-gray-100 border border-gray-300 text-[9px]">...</button>
                      </div>
                    </div>
                    <div className="col-span-6 grid grid-cols-3 items-center gap-1.5">
                      <label className="text-[10px] font-bold text-right">Date Res.</label>
                      <Input {...form.register("dateReservation")} className="h-5 text-[10px] border-gray-300 rounded-none w-24" />
                    </div>

                    <div className="col-span-6 grid grid-cols-3 items-center gap-1.5">
                      <label className="text-[10px] font-bold text-right">N? Prise en Ch.</label>
                      <Input {...form.register("numeroPriseEnCharge")} className="h-5 text-[10px] border-gray-300 rounded-none col-span-2" />
                    </div>
                    <div className="col-span-6" />

                    <div className="col-span-6 grid grid-cols-3 items-center gap-1.5">
                      <label className="text-[10px] font-bold text-right">Structure Em.</label>
                      <div className="flex gap-0.5 col-span-2">
                        <Input {...form.register("structureEmettrice")} className="h-5 text-[10px] border-gray-300 rounded-none w-20" />
                        <button type="button" className="h-5 px-1 bg-gray-100 border border-gray-300 text-[9px]">--</button>
                      </div>
                    </div>
                    <div className="col-span-6 grid grid-cols-3 items-center gap-1.5">
                      <label className="text-[10px] font-bold text-right">Cp Analytique</label>
                      <Input {...form.register("compteAnalytique")} className="h-5 text-[10px] border-gray-300 rounded-none w-24" />
                    </div>

                    <div className="col-span-12 grid grid-cols-12 items-center gap-1">
                      <label className="text-[10px] font-bold text-right col-span-2">Début</label>
                      <Input {...form.register("dateDebut")} className="h-5 text-[10px] border-gray-300 rounded-none col-span-2" />
                      <label className="text-[10px] font-bold text-right col-span-2">Fin</label>
                      <Input {...form.register("dateFin")} className="h-5 text-[10px] border-gray-300 rounded-none col-span-2" />
                      <label className="text-[10px] font-bold text-right col-span-2">Durée</label>
                      <Input {...form.register("duree")} className="h-5 text-[10px] border-gray-300 rounded-none col-span-1 w-8" />
                    </div>

                    <div className="col-span-6 grid grid-cols-3 items-center gap-1.5">
                      <label className="text-[10px] font-bold text-right">Etat Res.</label>
                      <Select defaultValue="Saisie">
                        <SelectTrigger className="h-5 text-[10px] border-gray-300 rounded-none col-span-2 bg-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Saisie">Saisie</SelectItem>
                          <SelectItem value="Validée">Validée</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="col-span-6 grid grid-cols-3 items-center gap-1.5">
                      <label className="text-[10px] font-bold text-right">Hotel</label>
                      <div className="flex gap-0.5 col-span-2">
                        <Input className="h-5 text-[10px] border-gray-300 rounded-none w-24" />
                        <button type="button" className="h-5 px-1 bg-gray-100 border border-gray-300 text-[9px]">--</button>
                      </div>
                    </div>

                    <div className="col-span-12 grid grid-cols-12 items-start gap-1">
                      <label className="text-[10px] font-bold text-right col-span-2">Obs.</label>
                      <textarea className="col-span-10 h-8 text-[10px] border border-gray-300 rounded-none p-0.5 focus:outline-none" />
                    </div>
                  </div>
                </div>

                {/* Agents List Section */}
                <div className="bg-white border border-gray-300 rounded-sm p-1.5 relative pt-4 shadow-sm flex-1 overflow-hidden flex flex-col">
                  <div className="absolute top-0 left-3 -translate-y-1/2 bg-white px-1.5 text-[11px] font-bold text-gray-700">
                    Liste des Agents
                  </div>
                  <div className="overflow-auto border border-gray-200 flex-1">
                    <table className="w-full border-collapse text-[10px]">
                      <thead className="sticky top-0 bg-gray-50 z-10 shadow-sm">
                        <tr className="border-b border-gray-200">
                          <th className="p-1 text-center font-bold border-r border-gray-200">Matricule</th>
                          <th className="p-1 border-r border-gray-200 w-6"></th>
                          <th className="p-1 text-left font-bold border-r border-gray-200">Nom</th>
                          <th className="p-1 text-left font-bold border-r border-gray-200">Prenom</th>
                          <th className="p-1 text-center font-bold w-10">Annul</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 15 }).map((_, i) => (
                          <tr key={i} className="border-b border-gray-100 hover:bg-slate-50">
                            <td className="p-0 border-r border-gray-200 w-24">
                              <Input className="h-5 text-[10px] border-0 rounded-none w-full px-1" />
                            </td>
                            <td className="p-0 border-r border-gray-200 text-center">
                              <button type="button" className="w-full h-5 bg-gray-100 border-0 text-[8px]">--</button>
                            </td>
                            <td className="p-0 border-r border-gray-200">
                              <Input className="h-5 text-[10px] border-0 rounded-none w-full px-1" />
                            </td>
                            <td className="p-0 border-r border-gray-200">
                              <Input className="h-5 text-[10px] border-0 rounded-none w-full px-1" />
                            </td>
                            <td className="p-0 text-center">
                              <div className="flex justify-center items-center h-5">
                                <Checkbox className="border-gray-400 rounded-none h-3 w-3" defaultChecked={i===0} />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Side Panels */}
              <div className="flex-1 space-y-2 flex flex-col overflow-hidden">
                <div className="bg-white border border-gray-300 rounded-sm p-2 relative pt-4 shadow-sm shrink-0">
                  <div className="absolute top-0 left-3 -translate-y-1/2 bg-white px-1.5 text-[11px] font-bold text-gray-700">
                    Offre & Prise en Charge
                  </div>
                  <div className="space-y-2">
                    <div className="space-y-0.5">
                      <label className="text-[10px] font-bold">Offre</label>
                      <div className="flex gap-0.5">
                        <Input className="h-5 text-[10px] border-gray-300 rounded-none flex-1" />
                        <button type="button" className="h-5 px-1 bg-gray-100 border border-gray-300 text-[9px]">--</button>
                      </div>
                    </div>
                    <div className="space-y-0.5">
                      <label className="text-[10px] font-bold">Types de Prise en Charge</label>
                      <div className="space-y-0.5">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div key={i} className="flex gap-0.5">
                            <Input className="h-5 text-[10px] border-gray-300 rounded-none flex-1" />
                            <button type="button" className="h-5 px-1 bg-gray-100 border border-gray-300 text-[9px]">--</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 flex-1 overflow-auto p-1">
                  <ActionButton label="BON DE COMMANDE" />
                  <ActionButton label="BON ANNULATION" />
                  <ActionButton label="BON REGULARISATION" />
                  <div className="h-2" />
                  <ActionButton label="TRAITEMENT BCs" />
                  <ActionButton label="LISTE DES BCs/JOUR" />
                  
                  <div className="mt-4 self-center w-full">
                    <Button variant="outline" className="w-full h-8 border-gray-300 rounded-none bg-white text-[10px] font-bold px-2 py-1 flex items-center justify-center border-2 border-slate-200">
                      RAPPORTS D'ACTIVITE
                    </Button>
                  </div>
                </div>

                <div className="mt-auto grid grid-cols-3 items-center gap-1 pt-2 border-t border-gray-200 shrink-0">
                  <label className="text-[10px] font-bold text-right">Etabli par :</label>
                  <Input {...form.register("etabliPar")} className="h-5 text-[10px] border-gray-300 rounded-none col-span-2" />
                </div>
              </div>
            </div>
          </form>
        </Form>
      </main>
    </div>
  );
}

function ToolbarIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button type="button" className="p-1.5 hover:bg-gray-300 border border-transparent hover:border-gray-400 transition-all no-default-hover-elevate">
      {icon}
    </button>
  );
}

function ActionButton({ label }: { label: string }) {
  return (
    <Button 
      variant="outline" 
      className="w-full h-9 border-gray-300 rounded-none bg-[#e8e8e8] text-[11px] font-bold shadow-sm hover:bg-gray-200 no-default-hover-elevate"
    >
      {label}
    </Button>
  );
}