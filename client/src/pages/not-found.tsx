import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center border border-slate-200">
        <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
          <AlertCircle className="w-10 h-10 text-red-500" />
        </div>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-2 font-heading">404</h1>
        <p className="text-xl text-slate-600 font-medium mb-6">Page introuvable</p>
        
        <p className="text-slate-500 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <Link href="/">
          <Button className="w-full h-12 text-lg">
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
}
