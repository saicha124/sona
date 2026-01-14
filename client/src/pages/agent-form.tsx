import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertAgentSchema, type InsertAgent } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MainMenu } from "@/components/main-menu";
import { 
  Save, RefreshCw, Plus, Trash2, Search, ArrowLeft, 
  ChevronRight, ChevronLeft, ChevronsRight, ChevronsLeft,
  FileText, User
} from "lucide-react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

export default function AgentForm() {
  const [, setLocation] = useLocation();
  const form = useForm<InsertAgent>({
    resolver: zodResolver(insertAgentSchema),
    defaultValues: {
      matricule: "",
      nom: "",
      prenom: "",
      nomJeunefille: "",
      structure: "",
      compteAnalytique: "",
      type: "SH",
    },
  });

  const onSubmit = (data: InsertAgent) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      <MainMenu />
      
      {/* Header Bar - Modern Style */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 px-6 py-4 flex items-center justify-between z-30 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-white p-2 rounded-xl shadow-lg shadow-primary/20">
            <User className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-black text-slate-900 leading-tight uppercase tracking-tight">Dossier Agents</h1>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Saisie des informations relatives</span>
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

      <main className="flex-1 p-8 flex justify-center overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl bg-white rounded-3xl shadow-xl border border-slate-100 relative pt-12 pb-10 px-12"
        >
          <div className="absolute top-0 left-12 -translate-y-1/2 bg-primary text-white px-6 py-2 text-[12px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-primary/20">
            Dossier de l'Agent
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex items-center gap-20 justify-center mb-8"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="SH" className="w-5 h-5 border-gray-400 text-primary rounded-none" />
                          </FormControl>
                          <FormLabel className="text-[14px] font-bold text-slate-900 uppercase">SH</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Etranger" className="w-5 h-5 border-gray-400 text-primary rounded-none" />
                          </FormControl>
                          <FormLabel className="text-[14px] font-bold text-slate-900 uppercase">Etranger</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 gap-x-4">
                <div className="md:col-span-4">
                  <FormField
                    control={form.control}
                    name="matricule"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-3 space-y-0">
                        <FormLabel className="text-[13px] font-bold text-slate-800 min-w-[70px]">Matricule</FormLabel>
                        <FormControl>
                          <Input {...field} className="h-10 bg-slate-50/50 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="md:col-span-4">
                  <FormField
                    control={form.control}
                    name="nom"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-3 space-y-0">
                        <FormLabel className="text-[13px] font-bold text-slate-800 min-w-[40px] flex items-center gap-1">
                          <Plus className="w-3 h-3 text-green-600" /> Nom
                        </FormLabel>
                        <FormControl>
                          <Input {...field} className="h-10 bg-slate-50/50 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="md:col-span-4">
                  <FormField
                    control={form.control}
                    name="prenom"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-3 space-y-0">
                        <FormLabel className="text-[13px] font-bold text-slate-800 min-w-[60px]">Prenom</FormLabel>
                        <FormControl>
                          <Input {...field} className="h-10 bg-slate-50/50 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="md:col-span-12">
                  <FormField
                    control={form.control}
                    name="nomJeunefille"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-3 space-y-0">
                        <FormLabel className="text-[13px] font-bold text-slate-800 min-w-[100px]">Nomjeunefille</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            value={field.value || ""} 
                            className="h-8 bg-white border-gray-300 rounded-none focus:ring-0" 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="md:col-span-12">
                  <FormField
                    control={form.control}
                    name="structure"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-3 space-y-0">
                        <FormLabel className="text-[13px] font-bold text-slate-800 min-w-[100px]">Structure</FormLabel>
                        <div className="flex gap-1 flex-1">
                          <Input className="h-8 w-24 bg-white border-gray-300 rounded-none focus:ring-0" />
                          <button type="button" className="w-8 h-8 border border-gray-300 bg-gray-100 flex items-center justify-center rounded-none shrink-0 text-[10px] font-bold">----</button>
                          <Input {...field} className="h-8 flex-1 bg-white border-gray-300 rounded-none focus:ring-0" />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="md:col-span-6">
                  <FormField
                    control={form.control}
                    name="compteAnalytique"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-3 space-y-0">
                        <FormLabel className="text-[13px] font-bold text-slate-800 min-w-[130px]">Compte analytique</FormLabel>
                        <FormControl>
                          <Input {...field} className="h-10 bg-slate-50/50 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
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
