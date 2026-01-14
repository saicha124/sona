import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertRegionSchema, type InsertRegion } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Save, X, Plus, RotateCcw, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, LogOut } from "lucide-react";

export default function RegionsPage() {
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
            Liste des Regions
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="w-[120px] text-xs font-bold text-slate-600 uppercase">Code Region</TableHead>
                <TableHead className="text-xs font-bold text-slate-600 uppercase">Nom Region</TableHead>
                <TableHead className="w-[180px] text-xs font-bold text-slate-600 uppercase">Compte Analytique</TableHead>
                <TableHead className="w-[200px] text-xs font-bold text-slate-600 uppercase">Email Region</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
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
              ].map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell className="py-2 px-4 border-r border-slate-100 font-medium text-xs text-slate-700">{row.code}</TableCell>
                  <TableCell className="py-2 px-4 border-r border-slate-100 text-xs text-slate-600">{row.nom}</TableCell>
                  <TableCell className="py-2 px-4 border-r border-slate-100 text-xs text-slate-600">{row.compte}</TableCell>
                  <TableCell className="py-2 px-4 text-xs text-slate-600">{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
