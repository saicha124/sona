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
  FileText
} from "lucide-react";
import { useLocation } from "wouter";

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
      
      {/* Title Bar - Classic Style */}
      <div className="bg-[#78b3b3] text-white px-3 py-1.5 flex items-center justify-between border-b border-[#5a8a8a]">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4" />
          <h1 className="text-[13px] font-bold uppercase tracking-wider">Saisie des informations relatives Des Agents</h1>
        </div>
        <div className="flex gap-1">
          <button className="p-0.5 hover:bg-white/20 rounded"><ChevronLeft className="w-4 h-4" /></button>
          <button className="p-0.5 hover:bg-white/20 rounded"><ChevronRight className="w-4 h-4" /></button>
          <button onClick={() => setLocation("/")} className="p-0.5 hover:bg-white/20 rounded"><ArrowLeft className="w-4 h-4" /></button>
        </div>
      </div>

      {/* Toolbar - Legacy Aesthetic */}
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

      <main className="flex-1 p-8 flex justify-center overflow-y-auto">
        <div className="w-full max-w-4xl bg-white border border-gray-300 rounded-sm shadow-sm relative pt-10 pb-6 px-10">
          <div className="absolute top-0 left-10 -translate-y-1/2 bg-white px-4 text-[14px] font-bold text-gray-800 border-x border-t border-gray-300 rounded-t-sm h-9 flex items-center">
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
                          <Input {...field} className="h-8 bg-white border-gray-300 rounded-none focus:ring-0" />
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
                          <Input {...field} className="h-8 bg-white border-gray-300 rounded-none focus:ring-0" />
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
                          <Input {...field} className="h-8 bg-white border-gray-300 rounded-none focus:ring-0" />
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
                          <Input {...field} className="h-8 bg-white border-gray-300 rounded-none focus:ring-0" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </form>
          </Form>
        </div>
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
