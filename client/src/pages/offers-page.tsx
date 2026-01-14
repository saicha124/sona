import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertOfferSchema, type InsertOffer } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Save, X, Plus, RotateCcw, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, LogOut } from "lucide-react";

export default function OffersPage() {
  const form = useForm<InsertOffer>({
    resolver: zodResolver(insertOfferSchema),
    defaultValues: {
      code: "",
      libelle: "",
    },
  });

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

      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="bg-slate-50/50 border-b border-slate-100 py-3">
          <CardTitle className="text-sm font-bold text-slate-700 uppercase tracking-tight text-center">
            Saisie des Offres
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="w-[200px] text-xs font-bold text-slate-600 uppercase">Code Offre</TableHead>
                <TableHead className="text-xs font-bold text-slate-600 uppercase">Libelle</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { code: "33", libelle: "CHAMBRE STANDARD" },
                { code: "cs", libelle: "chambre superieur" },
                { code: "ss", libelle: "suite superieur" },
                { code: "23", libelle: "-VUE SUR MER" },
                { code: "21", libelle: "-SUITE ROYALE" },
                { code: "20", libelle: "-CHAMBRE SUPERIEUR" },
                { code: "19", libelle: "-DE LUXE" },
                { code: "18", libelle: "-CHAMBRE SENIOR" },
                { code: "1", libelle: "-CHAMBRE SINGLE" },
                { code: "2", libelle: "-CHAMBRE DOUBLE" },
              ].map((row, idx) => (
                <TableRow key={idx} className={idx === 0 ? "bg-blue-600 text-white hover:bg-blue-700" : ""}>
                  <TableCell className="py-2 px-4 border-r border-slate-100">
                    <Input value={row.code} readOnly className={`h-7 text-xs border-0 bg-transparent focus-visible:ring-0 ${idx === 0 ? "text-white" : "text-slate-900"}`} />
                  </TableCell>
                  <TableCell className="py-2 px-4">
                    <Input value={row.libelle} readOnly className={`h-7 text-xs border-0 bg-transparent focus-visible:ring-0 ${idx === 0 ? "text-white" : "text-slate-900"}`} />
                  </TableCell>
                </TableRow>
              ))}
              {Array.from({ length: 5 }).map((_, idx) => (
                <TableRow key={`empty-${idx}`}>
                  <TableCell className="py-2 px-4 border-r border-slate-100 h-11" />
                  <TableCell className="py-2 px-4 h-11" />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
