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
      <div className="bg-[#78b3b3] text-white px-3 py-1.5 flex items-center justify-between border-b border-[#5a8a8a]">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <h1 className="text-[13px] font-bold uppercase">SAISIE DES RESERVATIONS</h1>
        </div>
        <div className="flex gap-1">
          <button className="p-0.5 hover:bg-white/20 rounded"><ChevronLeft className="w-4 h-4" /></button>
          <button className="p-0.5 hover:bg-white/20 rounded"><ChevronRight className="w-4 h-4" /></button>
          <button onClick={() => setLocation("/")} className="p-0.5 hover:bg-white/20 rounded"><ArrowLeft className="w-4 h-4" /></button>
        </div>
      </div>

      {/* Toolbar */}
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
        <div className="w-px h-6 bg-gray-400 mx-1" />
        <ToolbarIcon icon={<Printer className="w-5 h-5 text-slate-700" />} />
      </div>

      <main className="flex-1 p-3 overflow-y-auto overflow-x-hidden">
        <Form {...form}>
          <form className="space-y-3">
            <div className="flex flex-col xl:flex-row gap-3">
              {/* Main Info Section */}
              <div className="flex-1 space-y-3">
                <div className="bg-white border border-gray-300 rounded-sm p-3 relative pt-6 shadow-sm">
                  <div className="absolute top-0 left-4 -translate-y-1/2 bg-white px-2 text-[12px] font-bold text-gray-700">
                    Saisie d'une Reservation
                  </div>
                  
                  <div className="grid grid-cols-12 gap-y-2 gap-x-4">
                    <div className="col-span-12 md:col-span-6 grid grid-cols-3 items-center gap-2">
                      <label className="text-[11px] font-bold text-right">N? Reservation</label>
                      <div className="flex gap-1 col-span-2">
                        <Input {...form.register("numeroReservation")} className="h-6 text-[11px] border-gray-300 rounded-none w-24" />
                        <button type="button" className="h-6 px-1.5 bg-gray-100 border border-gray-300 text-[10px]">...</button>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 grid grid-cols-3 items-center gap-2">
                      <label className="text-[11px] font-bold text-right">Date Reservation</label>
                      <Input {...form.register("dateReservation")} className="h-6 text-[11px] border-gray-300 rounded-none w-32" />
                    </div>

                    <div className="col-span-12 grid grid-cols-6 items-center gap-2">
                      <label className="text-[11px] font-bold text-right col-span-1">N? Prise en Charge</label>
                      <Input {...form.register("numeroPriseEnCharge")} className="h-6 text-[11px] border-gray-300 rounded-none col-span-2" />
                    </div>

                    <div className="col-span-12 md:col-span-6 grid grid-cols-3 items-center gap-2">
                      <label className="text-[11px] font-bold text-right">Structure Emettrice</label>
                      <div className="flex gap-1 col-span-2">
                        <Input {...form.register("structureEmettrice")} className="h-6 text-[11px] border-gray-300 rounded-none w-24" />
                        <button type="button" className="h-6 px-1.5 bg-gray-100 border border-gray-300 text-[10px]">----</button>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 grid grid-cols-3 items-center gap-2">
                      <label className="text-[11px] font-bold text-right">Compte Analytique</label>
                      <Input {...form.register("compteAnalytique")} className="h-6 text-[11px] border-gray-300 rounded-none w-32" />
                    </div>

                    <div className="col-span-12 grid grid-cols-12 items-center gap-2">
                      <label className="text-[11px] font-bold text-right col-span-2">Date Debut Reservation</label>
                      <Input {...form.register("dateDebut")} className="h-6 text-[11px] border-gray-300 rounded-none col-span-2" />
                      <label className="text-[11px] font-bold text-right col-span-2">Date Fin Reservation</label>
                      <Input {...form.register("dateFin")} className="h-6 text-[11px] border-gray-300 rounded-none col-span-2" />
                      <label className="text-[11px] font-bold text-right col-span-2">Duree</label>
                      <Input {...form.register("duree")} className="h-6 text-[11px] border-gray-300 rounded-none col-span-1 w-12" />
                    </div>

                    <div className="col-span-12 grid grid-cols-6 items-center gap-2">
                      <label className="text-[11px] font-bold text-right col-span-1">Etat Reservation</label>
                      <Select defaultValue="Saisie">
                        <SelectTrigger className="h-6 text-[11px] border-gray-300 rounded-none col-span-2 bg-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Saisie">Saisie</SelectItem>
                          <SelectItem value="Validée">Validée</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="col-span-12 grid grid-cols-6 items-center gap-2">
                      <label className="text-[11px] font-bold text-right col-span-1">Hotel</label>
                      <div className="flex gap-1 col-span-2">
                        <Input className="h-6 text-[11px] border-gray-300 rounded-none w-32" />
                        <button type="button" className="h-6 px-1.5 bg-gray-100 border border-gray-300 text-[10px]">----</button>
                      </div>
                    </div>

                    <div className="col-span-12 grid grid-cols-6 items-start gap-2">
                      <label className="text-[11px] font-bold text-right col-span-1">Observations</label>
                      <textarea className="col-span-5 h-12 text-[11px] border border-gray-300 rounded-none p-1 focus:outline-none" />
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <label className="text-[11px] font-bold">Liste des Agents Vide</label>
                    <Checkbox className="border-gray-400 rounded-none h-4 w-4" />
                  </div>
                </div>

                {/* Agents List Section */}
                <div className="bg-white border border-gray-300 rounded-sm p-3 relative pt-6 shadow-sm">
                  <div className="absolute top-0 left-4 -translate-y-1/2 bg-white px-2 text-[12px] font-bold text-gray-700">
                    Liste des Agents
                  </div>
                  <div className="overflow-x-auto border border-gray-200">
                    <table className="w-full border-collapse text-[11px]">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="p-1.5 text-center font-bold border-r border-gray-200">Matricule</th>
                          <th className="p-1.5 border-r border-gray-200 w-8"></th>
                          <th className="p-1.5 text-left font-bold border-r border-gray-200">Nom</th>
                          <th className="p-1.5 text-left font-bold border-r border-gray-200">Prenom</th>
                          <th className="p-1.5 text-center font-bold">Annul</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 10 }).map((_, i) => (
                          <tr key={i} className="border-b border-gray-100 hover:bg-slate-50">
                            <td className="p-0.5 border-r border-gray-200 w-32">
                              <Input className="h-6 text-[11px] border-gray-300 rounded-none" />
                            </td>
                            <td className="p-0.5 border-r border-gray-200 text-center">
                              <button type="button" className="w-full h-6 bg-gray-100 border border-gray-300 text-[9px]">----</button>
                            </td>
                            <td className="p-0.5 border-r border-gray-200">
                              <Input className="h-6 text-[11px] border-gray-300 rounded-none" />
                            </td>
                            <td className="p-0.5 border-r border-gray-200">
                              <Input className="h-6 text-[11px] border-gray-300 rounded-none" />
                            </td>
                            <td className="p-0.5 text-center">
                              <div className="flex justify-center">
                                <Checkbox className="border-gray-400 rounded-none" defaultChecked={i===0} />
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
              <div className="w-full xl:w-80 space-y-3 flex flex-col">
                <div className="bg-white border border-gray-300 rounded-sm p-4 relative pt-6 shadow-sm">
                  <div className="absolute top-0 left-4 -translate-y-1/2 bg-white px-2 text-[12px] font-bold text-gray-700">
                    Offre & Type Prise en Charge
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold">Offre</label>
                      <div className="flex gap-1">
                        <Input className="h-6 text-[11px] border-gray-300 rounded-none flex-1" />
                        <button type="button" className="h-6 px-1.5 bg-gray-100 border border-gray-300 text-[10px]">----</button>
                      </div>
                    </div>
                    <div className="space-y-1 pt-2">
                      <label className="text-[11px] font-bold">Type de Prise en Charge</label>
                      <div className="space-y-1">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div key={i} className="flex gap-1">
                            <Input className="h-6 text-[11px] border-gray-300 rounded-none flex-1" />
                            <button type="button" className="h-6 px-1.5 bg-gray-100 border border-gray-300 text-[10px]">----</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-4 flex-1">
                  <ActionButton label="BON DE COMMANDE" />
                  <ActionButton label="BON ANNULATION" />
                  <ActionButton label="BON REGULARISATION" />
                  <div className="h-4" />
                  <ActionButton label="TRAITEMENT BCs" />
                  <ActionButton label="LISTE DES BCs/JOUR" />
                  
                  <div className="mt-8 self-center">
                    <Button variant="outline" className="h-10 border-gray-300 rounded-none bg-white text-[11px] font-bold px-4 py-2 flex items-center justify-center border-2 border-slate-200">
                      RAPPORTS D'ACTIVITE
                    </Button>
                  </div>
                </div>

                <div className="mt-auto grid grid-cols-4 items-center gap-2 pt-4 border-t border-gray-200">
                  <label className="text-[11px] font-bold text-right col-span-1">Etabli(e) par :</label>
                  <Input {...form.register("etabliPar")} className="h-6 text-[11px] border-gray-300 rounded-none col-span-3" />
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