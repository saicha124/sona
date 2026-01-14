import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertAgentSchema, type InsertAgent } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Save, X, Plus, RotateCcw, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, LogOut } from "lucide-react";

export default function AgentForm() {
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
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6 bg-slate-100 p-2 rounded-md border border-slate-200 overflow-x-auto">
        <Button variant="ghost" size="icon" className="h-8 w-8"><Save className="w-4 h-4" /></Button>
        <Button variant="ghost" size="icon" className="h-8 w-8"><RotateCcw className="w-4 h-4" /></Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-green-600"><Plus className="w-4 h-4" /></Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600"><X className="w-4 h-4" /></Button>
        <div className="w-px h-6 bg-slate-300 mx-1" />
        <Button variant="ghost" size="icon" className="h-8 w-8"><Search className="w-4 h-4 text-blue-600" /></Button>
        <Button variant="ghost" size="icon" className="h-8 w-8"><Search className="w-4 h-4 text-orange-600" /></Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400"><X className="w-4 h-4" /></Button>
        <div className="w-px h-6 bg-slate-300 mx-1" />
        <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronsRight className="w-4 h-4" /></Button>
        <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronRight className="w-4 h-4" /></Button>
        <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronLeft className="w-4 h-4" /></Button>
        <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronsLeft className="w-4 h-4" /></Button>
        <div className="w-px h-6 bg-slate-300 mx-1" />
        <Button variant="ghost" size="icon" className="h-8 w-8"><LogOut className="w-4 h-4" /></Button>
      </div>

      <Card className="border-slate-200 shadow-sm overflow-visible">
        <CardHeader className="bg-slate-50/50 border-b border-slate-100 py-3">
          <CardTitle className="text-sm font-bold text-slate-700 uppercase tracking-tight text-center">
            Saisie des informations relatives Des Agents
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8 pb-10 px-10">
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
                            <RadioGroupItem value="SH" className="w-5 h-5 border-2 border-slate-300 text-primary" />
                          </FormControl>
                          <FormLabel className="text-base font-bold text-slate-900">SH</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Etranger" className="w-5 h-5 border-2 border-slate-300 text-primary" />
                          </FormControl>
                          <FormLabel className="text-base font-bold text-slate-900">Etranger</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 gap-x-4">
                <div className="md:col-span-3">
                  <FormField
                    control={form.control}
                    name="matricule"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-3 space-y-0">
                        <FormLabel className="text-[13px] font-bold text-slate-800 min-w-[70px]">Matricule</FormLabel>
                        <FormControl>
                          <Input {...field} className="h-8 bg-white border-slate-300 focus:ring-primary/20" />
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
                          <Input {...field} className="h-8 bg-white border-slate-300 focus:ring-primary/20" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="md:col-span-5">
                  <FormField
                    control={form.control}
                    name="prenom"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-3 space-y-0">
                        <FormLabel className="text-[13px] font-bold text-slate-800 min-w-[60px]">Prenom</FormLabel>
                        <FormControl>
                          <Input {...field} className="h-8 bg-white border-slate-300 focus:ring-primary/20" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="md:col-span-12 flex justify-center">
                  <div className="w-full md:w-2/3">
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
                              className="h-8 bg-white border-slate-300 focus:ring-primary/20" 
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="md:col-span-12">
                  <FormField
                    control={form.control}
                    name="structure"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-3 space-y-0">
                        <FormLabel className="text-[13px] font-bold text-slate-800 min-w-[70px]">Structure</FormLabel>
                        <div className="flex gap-2 flex-1">
                          <Input className="h-8 w-24 bg-white border-slate-300 focus:ring-primary/20" />
                          <div className="w-8 h-8 border border-slate-300 bg-slate-50 flex items-center justify-center rounded shrink-0"></div>
                          <Input {...field} className="h-8 flex-1 bg-white border-slate-300 focus:ring-primary/20" />
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
                          <Input {...field} className="h-8 bg-white border-slate-300 focus:ring-primary/20" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
