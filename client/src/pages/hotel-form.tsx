import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertHotelSchema, type InsertHotel } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MainMenu } from "@/components/main-menu";
import { Save, RefreshCw, Plus, Trash2, Search, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";

export default function HotelForm() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  const form = useForm<InsertHotel>({
    resolver: zodResolver(insertHotelSchema),
    defaultValues: {
      code: "",
      nom: "",
      adresse: "",
      ville: "",
      telephone: "",
      etoiles: "",
    },
  });

  const onSubmit = (data: InsertHotel) => {
    console.log(data);
    toast({
      title: "Succès",
      description: "Hôtel enregistré avec succès (Simulation)",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <MainMenu />
      
      <div className="bg-[#005596] text-white px-6 py-2 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLocation("/")}
            className="p-1 hover:bg-white/10 rounded transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-bold text-sm tracking-widest uppercase">SAISIE DES HOTELS</h1>
        </div>
        
        <div className="flex items-center gap-1">
          <ToolbarButton icon={<Save className="w-4 h-4" />} label="Enregistrer" onClick={form.handleSubmit(onSubmit)} />
          <ToolbarButton icon={<Plus className="w-4 h-4" />} label="Nouveau" onClick={() => form.reset()} />
          <ToolbarButton icon={<RefreshCw className="w-4 h-4" />} label="Actualiser" />
          <ToolbarButton icon={<Trash2 className="w-4 h-4" />} label="Supprimer" />
          <div className="w-px h-6 bg-white/20 mx-1" />
          <ToolbarButton icon={<Search className="w-4 h-4" />} label="Rechercher" />
        </div>
      </div>

      <main className="flex-1 p-6 flex justify-center overflow-y-auto">
        <div className="w-full max-w-4xl">
          <Card className="shadow-sm border-slate-200">
            <CardHeader className="bg-slate-50/50 border-b border-slate-100 py-3">
              <CardTitle className="text-xs font-black text-slate-500 uppercase tracking-widest">
                Informations de l'Hôtel
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <Form {...form}>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="code"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Code Hôtel</FormLabel>
                          <FormControl>
                            <Input {...field} className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="nom"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Nom de l'Hôtel</FormLabel>
                          <FormControl>
                            <Input {...field} className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="adresse"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Adresse</FormLabel>
                          <FormControl>
                            <Input {...field} value={field.value || ""} className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="ville"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Ville</FormLabel>
                          <FormControl>
                            <Input {...field} value={field.value || ""} className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="telephone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Téléphone</FormLabel>
                          <FormControl>
                            <Input {...field} value={field.value || ""} className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="etoiles"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Catégorie (Étoiles)</FormLabel>
                          <FormControl>
                            <Input {...field} value={field.value || ""} placeholder="Ex: 4*" className="bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function ToolbarButton({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick?: () => void }) {
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={onClick}
      className="text-white hover:bg-white/20 flex flex-col items-center h-auto py-1 px-3 gap-1 no-default-hover-elevate"
    >
      {icon}
      <span className="text-[9px] uppercase font-bold tracking-tighter">{label}</span>
    </Button>
  );
}