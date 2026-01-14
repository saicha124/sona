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
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] opacity-60 translate-y-1/2 -translate-x-1/2 animate-pulse" />

        {/* Top Left Header */}
        <SonatrachHeader />

        {/* Main Content Area */}
        <div className="z-10 w-full max-w-lg px-6 flex flex-col items-center gap-10">
          
          {/* Main Application Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h2 className="text-5xl md:text-6xl font-black text-center text-primary font-heading tracking-tighter drop-shadow-2xl uppercase leading-none">
              Gestion<br/><span className="text-slate-900">Hôtellerie</span>
            </h2>
            <div className="h-1.5 w-24 bg-accent mt-4 rounded-full shadow-lg shadow-accent/20" />
          </motion.div>

          {/* Login Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="w-full bg-corporate-gradient p-0.5 rounded-[2rem] shadow-[0_40px_80px_-15px_rgba(30,64,175,0.4)] overflow-hidden"
          >
            <div className="bg-[#1E3A8A] rounded-[1.9rem] p-10 md:p-12">
              <div className="mb-10 text-center">
                <p className="text-blue-200/50 text-[10px] font-black tracking-[0.4em] uppercase mb-2">Authenticated Session</p>
                <h3 className="text-white font-black text-2xl tracking-tight uppercase">Accès Portail</h3>
              </div>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                
                {/* Username Field */}
                <div className="space-y-3">
                  <Label htmlFor="username" className="text-blue-100 font-black text-[10px] uppercase tracking-[0.2em] ml-1 opacity-70">
                    Utilisateur
                  </Label>
                  <div className="relative group">
                    <Input
                      id="username"
                      type="text"
                      className="h-16 bg-white/5 border-white/10 focus-visible:ring-2 focus-visible:ring-accent text-white font-bold text-xl placeholder:text-white/10 rounded-2xl transition-all duration-500 group-hover:bg-white/10"
                      placeholder="Username"
                      {...form.register("username")}
                    />
                    {form.formState.errors.username && (
                      <span className="text-accent text-[9px] font-black uppercase tracking-widest absolute -bottom-6 left-1">
                        {form.formState.errors.username.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-3 mt-4">
                  <Label htmlFor="password" className="text-blue-100 font-black text-[10px] uppercase tracking-[0.2em] ml-1 opacity-70">
                    Mot de Passe
                  </Label>
                  <div className="relative group">
                    <Input
                      id="password"
                      type="password"
                      className="h-16 bg-white/5 border-white/10 focus-visible:ring-2 focus-visible:ring-accent text-white font-bold text-xl placeholder:text-white/10 rounded-2xl transition-all duration-500 group-hover:bg-white/10"
                      placeholder="••••••••"
                      {...form.register("password")}
                    />
                    {form.formState.errors.password && (
                      <span className="text-accent text-[9px] font-black uppercase tracking-widest absolute -bottom-6 left-1">
                        {form.formState.errors.password.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4 pt-8">
                  <Button 
                    type="submit" 
                    disabled={isPending}
                    className="w-full bg-white text-primary hover:bg-blue-50 h-16 text-xl font-black shadow-2xl hover:shadow-white/20 hover:-translate-y-1 active:translate-y-0 transition-all duration-500 rounded-2xl group"
                  >
                    {isPending ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                      <span className="flex items-center gap-3">
                        CONNEXION
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                          <Loader2 className="w-3 h-3 rotate-90" />
                        </div>
                      </span>
                    )}
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="ghost"
                    onClick={handleReset}
                    className="w-full text-blue-200/50 hover:text-white hover:bg-white/5 h-12 text-xs font-black uppercase tracking-widest rounded-2xl transition-all"
                  >
                    Réinitialiser
                  </Button>
                </div>

              </form>
            </div>
            
            {/* Footer of the card */}
            <div className="bg-black/20 px-8 py-5 text-center border-t border-white/5">
              <p className="text-blue-100/30 text-[9px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent animate-ping" />
                Protected by Sonatrach Infrastructure
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
