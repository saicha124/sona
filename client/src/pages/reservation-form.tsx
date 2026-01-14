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
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      <MainMenu />
      
      {/* Title Bar */}
      <div className="bg-[#78b3b3] text-white px-3 py-2 flex items-center justify-between border-b border-[#5a8a8a] shrink-0">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <h1 className="text-[14px] font-bold uppercase tracking-wide">SAISIE DES RESERVATIONS</h1>
        </div>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-white/20 rounded"><ChevronLeft className="w-5 h-5" /></button>
          <button className="p-1 hover:bg-white/20 rounded"><ChevronRight className="w-5 h-5" /></button>
          <button onClick={() => setLocation("/")} className="p-1 hover:bg-white/20 rounded"><ArrowLeft className="w-5 h-5" /></button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-[#d4d0c8] p-1.5 flex items-center gap-2 border-b border-[#808080] shrink-0">
        <ToolbarIcon icon={<Save className="w-6 h-6 text-black" />} />
        <ToolbarIcon icon={<RefreshCw className="w-6 h-6 text-green-700" />} />
        <ToolbarIcon icon={<Plus className="w-6 h-6 text-green-600" />} />
        <ToolbarIcon icon={<Trash2 className="w-6 h-6 text-red-600" />} />
        <div className="w-px h-8 bg-gray-400 mx-1" />
        <ToolbarIcon icon={<Search className="w-6 h-6 text-blue-700" />} />
        <div className="w-px h-8 bg-gray-400 mx-1" />
        <ToolbarIcon icon={<ChevronsLeft className="w-6 h-6" />} />
        <ToolbarIcon icon={<ChevronLeft className="w-6 h-6" />} />
        <ToolbarIcon icon={<ChevronRight className="w-6 h-6" />} />
        <ToolbarIcon icon={<ChevronsRight className="w-6 h-6" />} />
        <div className="w-px h-8 bg-gray-400 mx-1" />
        <ToolbarIcon icon={<Printer className="w-6 h-6 text-slate-700" />} />
      </div>

      <main className="flex-1 p-4 overflow-auto">
        <Form {...form}>
          <form className="max-w-[1600px] mx-auto space-y-4">
            <div className="flex flex-col xl:flex-row gap-6">
              {/* Main Info Section */}
              <div className="flex-[3] space-y-4">
                <div className="bg-white border border-gray-300 rounded-sm p-4 relative pt-8 shadow-md">
                  <div className="absolute top-0 left-6 -translate-y-1/2 bg-white px-2 text-[14px] font-bold text-gray-700 border-x border-t border-gray-300 rounded-t-sm px-4">
                    Saisie d'une Reservation
                  </div>
                  
                  <div className="grid grid-cols-12 gap-y-3 gap-x-6">
                    <div className="col-span-12 lg:col-span-6 grid grid-cols-4 items-center gap-3">
                      <label className="text-[13px] font-bold text-right">N? Reservation</label>
                      <div className="flex gap-1 col-span-3">
                        <Input {...form.register("numeroReservation")} className="h-8 text-[13px] border-gray-300 rounded-none w-32 font-medium" />
                        <button type="button" className="h-8 px-2 bg-gray-100 border border-gray-300 text-[11px] font-bold">...</button>
                      </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 grid grid-cols-4 items-center gap-3">
                      <label className="text-[13px] font-bold text-right">Date Res.</label>
                      <Input {...form.register("dateReservation")} className="h-8 text-[13px] border-gray-300 rounded-none w-40 font-medium" />
                    </div>

                    <div className="col-span-12 grid grid-cols-8 items-center gap-3">
                      <label className="text-[13px] font-bold text-right col-span-1">N? PEC</label>
                      <Input {...form.register("numeroPriseEnCharge")} className="h-8 text-[13px] border-gray-300 rounded-none col-span-3 font-medium" />
                    </div>

                    <div className="col-span-12 lg:col-span-6 grid grid-cols-4 items-center gap-3">
                      <label className="text-[13px] font-bold text-right">Structure Em.</label>
                      <div className="flex gap-1 col-span-3">
                        <Input {...form.register("structureEmettrice")} className="h-8 text-[13px] border-gray-300 rounded-none w-32 font-medium" />
                        <button type="button" className="h-8 px-2 bg-gray-100 border border-gray-300 text-[11px] font-bold">----</button>
                      </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 grid grid-cols-4 items-center gap-3">
                      <label className="text-[13px] font-bold text-right">Cp Analytique</label>
                      <Input {...form.register("compteAnalytique")} className="h-8 text-[13px] border-gray-300 rounded-none w-40 font-medium" />
                    </div>

                    <div className="col-span-12 grid grid-cols-12 items-center gap-3">
                      <label className="text-[13px] font-bold text-right col-span-2">Date Début</label>
                      <Input {...form.register("dateDebut")} className="h-8 text-[13px] border-gray-300 rounded-none col-span-2 font-medium" />
                      <label className="text-[13px] font-bold text-right col-span-2">Date Fin</label>
                      <Input {...form.register("dateFin")} className="h-8 text-[13px] border-gray-300 rounded-none col-span-2 font-medium" />
                      <label className="text-[13px] font-bold text-right col-span-2">Durée</label>
                      <Input {...form.register("duree")} className="h-8 text-[13px] border-gray-300 rounded-none col-span-1 w-16 font-medium" />
                    </div>

                    <div className="col-span-12 lg:col-span-6 grid grid-cols-4 items-center gap-3">
                      <label className="text-[13px] font-bold text-right">Etat Res.</label>
                      <Select defaultValue="Saisie">
                        <SelectTrigger className="h-8 text-[13px] border-gray-300 rounded-none col-span-3 bg-white font-medium">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Saisie">Saisie</SelectItem>
                          <SelectItem value="Validée">Validée</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="col-span-12 lg:col-span-6 grid grid-cols-4 items-center gap-3">
                      <label className="text-[13px] font-bold text-right">Hotel</label>
                      <div className="flex gap-1 col-span-3">
                        <Input className="h-8 text-[13px] border-gray-300 rounded-none w-48 font-medium" />
                        <button type="button" className="h-8 px-2 bg-gray-100 border border-gray-300 text-[11px] font-bold">----</button>
                      </div>
                    </div>

                    <div className="col-span-12 grid grid-cols-12 items-start gap-3">
                      <label className="text-[13px] font-bold text-right col-span-2">Observations</label>
                      <textarea className="col-span-10 h-16 text-[13px] border border-gray-300 rounded-none p-2 focus:outline-none font-medium" />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <label className="text-[13px] font-bold">Liste des Agents Vide</label>
                    <Checkbox className="border-gray-400 rounded-none h-5 w-5" />
                  </div>
                </div>

                {/* Agents List Section */}
                <div className="bg-white border border-gray-300 rounded-sm p-4 relative pt-8 shadow-md">
                  <div className="absolute top-0 left-6 -translate-y-1/2 bg-white px-2 text-[14px] font-bold text-gray-700 border-x border-t border-gray-300 rounded-t-sm px-4">
                    Liste des Agents
                  </div>
                  <div className="overflow-auto border border-gray-200 max-h-[400px]">
                    <table className="w-full border-collapse text-[13px]">
                      <thead className="sticky top-0 bg-gray-50 z-10 shadow-sm">
                        <tr className="border-b border-gray-200">
                          <th className="p-2 text-center font-bold border-r border-gray-200 w-40">Matricule</th>
                          <th className="p-2 border-r border-gray-200 w-10"></th>
                          <th className="p-2 text-left font-bold border-r border-gray-200">Nom</th>
                          <th className="p-2 text-left font-bold border-r border-gray-200">Prenom</th>
                          <th className="p-2 text-center font-bold w-16">Annul</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 10 }).map((_, i) => (
                          <tr key={i} className="border-b border-gray-100 hover:bg-slate-50">
                            <td className="p-1 border-r border-gray-200">
                              <Input className="h-8 text-[13px] border-0 rounded-none w-full px-2 font-medium" />
                            </td>
                            <td className="p-1 border-r border-gray-200 text-center">
                              <button type="button" className="w-full h-8 bg-gray-100 border-0 text-[10px] font-bold">----</button>
                            </td>
                            <td className="p-1 border-r border-gray-200">
                              <Input className="h-8 text-[13px] border-0 rounded-none w-full px-2 font-medium" />
                            </td>
                            <td className="p-1 border-r border-gray-200">
                              <Input className="h-8 text-[13px] border-0 rounded-none w-full px-2 font-medium" />
                            </td>
                            <td className="p-1 text-center">
                              <div className="flex justify-center items-center h-8">
                                <Checkbox className="border-gray-400 rounded-none h-4 w-4" defaultChecked={i===0} />
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
              <div className="flex-1 space-y-4 flex flex-col min-w-[300px]">
                <div className="bg-white border border-gray-300 rounded-sm p-4 relative pt-8 shadow-md shrink-0">
                  <div className="absolute top-0 left-6 -translate-y-1/2 bg-white px-2 text-[14px] font-bold text-gray-700 border-x border-t border-gray-300 rounded-t-sm px-4">
                    Offre & Prise en Charge
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[13px] font-bold">Offre</label>
                      <div className="flex gap-1">
                        <Input className="h-8 text-[13px] border-gray-300 rounded-none flex-1 font-medium" />
                        <button type="button" className="h-8 px-2 bg-gray-100 border border-gray-300 text-[11px] font-bold">----</button>
                      </div>
                    </div>
                    <div className="space-y-2 pt-2">
                      <label className="text-[13px] font-bold">Type de Prise en Charge</label>
                      <div className="space-y-1.5">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div key={i} className="flex gap-1">
                            <Input className="h-8 text-[13px] border-gray-300 rounded-none flex-1 font-medium" />
                            <button type="button" className="h-8 px-2 bg-gray-100 border border-gray-300 text-[11px] font-bold">----</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 p-1">
                  <ActionButton label="BON DE COMMANDE" />
                  <ActionButton label="BON ANNULATION" />
                  <ActionButton label="BON REGULARISATION" />
                  <div className="h-4" />
                  <ActionButton label="TRAITEMENT BCs" />
                  <ActionButton label="LISTE DES BCs/JOUR" />
                  
                  <div className="mt-6">
                    <Button variant="outline" className="w-full h-12 border-gray-300 rounded-none bg-white text-[12px] font-extrabold px-4 py-2 border-2 border-slate-300 shadow-sm hover:bg-slate-50">
                      RAPPORTS D'ACTIVITE
                    </Button>
                  </div>
                </div>

                <div className="mt-auto grid grid-cols-3 items-center gap-3 pt-6 border-t border-gray-200 shrink-0">
                  <label className="text-[13px] font-bold text-right">Etabli par :</label>
                  <Input {...form.register("etabliPar")} className="h-8 text-[13px] border-gray-300 rounded-none col-span-2 font-medium" />
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