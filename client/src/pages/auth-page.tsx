import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocation } from "wouter";
import { useUser, useLogin } from "@/hooks/use-auth";
import { SonatrachHeader } from "@/components/ui/sonatrach-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { MainMenu } from "@/components/main-menu";

// Schema for login form validation
const loginSchema = z.object({
  username: z.string().min(1, "L'utilisateur est requis"),
  password: z.string().min(1, "Le mot de passe est requis"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function AuthPage() {
  const [, setLocation] = useLocation();
  const { data: user, isLoading: isUserLoading } = useUser();
  const { mutate: login, isPending } = useLogin();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Redirect if already logged in
  if (!isUserLoading && user) {
    setLocation("/");
    return null;
  }

  const onSubmit = (data: LoginFormValues) => {
    login(data, {
      onSuccess: () => setLocation("/"),
    });
  };

  const handleReset = () => {
    form.reset();
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 relative overflow-hidden flex flex-col">
      <MainMenu />
      <div className="flex-1 flex flex-col items-center justify-center relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[100px] opacity-60 translate-y-1/2 -translate-x-1/2" />

        {/* Top Left Header */}
        <SonatrachHeader />

        {/* Main Content Area */}
        <div className="z-10 w-full max-w-md px-4 flex flex-col items-center gap-8">
          
          {/* Main Application Title */}
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-center text-primary font-heading tracking-tight drop-shadow-sm uppercase"
          >
            Gestion Hôtellerie
          </motion.h2>

          {/* Login Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="w-full bg-corporate-gradient rounded-2xl shadow-[0_20px_50px_rgba(30,64,175,0.3)] overflow-hidden border border-blue-900/10"
          >
            <div className="p-10">
              <div className="mb-8 text-center">
                <p className="text-blue-100/80 text-sm font-medium tracking-wide uppercase">Système de Gestion Intégré</p>
              </div>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Username Field */}
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-white font-bold text-xs uppercase tracking-widest ml-1 opacity-90">
                    Utilisateur
                  </Label>
                  <div className="relative group">
                    <Input
                      id="username"
                      type="text"
                      className="h-14 bg-white/10 border-white/20 focus-visible:ring-2 focus-visible:ring-orange-400 text-white font-medium text-lg placeholder:text-white/30 rounded-xl transition-all duration-300 group-hover:bg-white/15"
                      placeholder="Nom d'utilisateur"
                      {...form.register("username")}
                    />
                    {form.formState.errors.username && (
                      <span className="text-orange-300 text-[10px] font-bold uppercase tracking-tighter absolute -bottom-5 left-1">
                        {form.formState.errors.username.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2 mt-4">
                  <Label htmlFor="password" className="text-white font-bold text-xs uppercase tracking-widest ml-1 opacity-90">
                    Mot de Passe
                  </Label>
                  <div className="relative group">
                    <Input
                      id="password"
                      type="password"
                      className="h-14 bg-white/10 border-white/20 focus-visible:ring-2 focus-visible:ring-orange-400 text-white font-medium text-lg placeholder:text-white/30 rounded-xl transition-all duration-300 group-hover:bg-white/15"
                      placeholder="••••••••"
                      {...form.register("password")}
                    />
                    {form.formState.errors.password && (
                      <span className="text-orange-300 text-[10px] font-bold uppercase tracking-tighter absolute -bottom-5 left-1">
                        {form.formState.errors.password.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-6">
                  <Button 
                    type="submit" 
                    disabled={isPending}
                    className="flex-1 bg-white text-primary hover:bg-blue-50 h-14 text-lg font-black shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 rounded-xl"
                  >
                    {isPending ? <Loader2 className="w-6 h-6 animate-spin" /> : "CONNEXION"}
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={handleReset}
                    className="flex-1 bg-transparent border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 h-14 text-lg font-bold rounded-xl transition-all duration-300"
                  >
                    ANNULER
                  </Button>
                </div>

              </form>
            </div>
            
            {/* Footer of the card */}
            <div className="bg-black/20 px-8 py-4 text-center border-t border-white/5">
              <p className="text-blue-100/60 text-[10px] font-bold uppercase tracking-[0.2em]">
                Sécurisé par Sonatrach IT
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-slate-400 text-xs z-10">
        &copy; {new Date().getFullYear()} SONATRACH. Tous droits réservés.
      </div>
    </div>
  );
}
