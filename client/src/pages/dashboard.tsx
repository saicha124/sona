import { useUser, useLogout } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { LogOut, Home, User, Settings, FileText, ChevronRight, ChevronDown, FileCode, Monitor } from "lucide-react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { MainMenu } from "@/components/main-menu";
import { useState } from "react";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const { data: user, isLoading } = useUser();
  const { mutate: logout } = useLogout();

  if (!isLoading && !user) {
    setLocation("/auth");
    return null;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => setLocation("/auth"),
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <MainMenu />
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 shadow-sm px-6 py-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
           <div className="bg-primary text-white p-2 rounded font-bold">SH</div>
           <span className="font-bold text-lg text-slate-800 hidden sm:inline-block">Gestion Hôtellerie</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end mr-2">
            <span className="text-sm font-bold text-slate-900">{user?.username}</span>
            <span className="text-xs text-slate-500 uppercase">{user?.role || "Utilisateur"}</span>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleLogout}
            className="text-slate-500 hover:text-red-600 hover:bg-red-50"
            title="Se déconnecter"
          >
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <LegacyTreeSidebar />

        {/* Content Area */}
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="mb-10">
              <h1 className="text-3xl font-heading font-bold text-slate-900 mb-2">
                Bienvenue, {user?.username}
              </h1>
              <p className="text-slate-500">
                Voici un aperçu de l'activité hôtelière d'aujourd'hui.
              </p>
            </div>

            {/* Dashboard Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <DashboardCard 
                title="Chambres occupées" 
                value="42" 
                subtitle="Sur 150 chambres totales"
                trend="+5% depuis hier"
                color="blue"
              />
              <DashboardCard 
                title="Arrivées prévues" 
                value="12" 
                subtitle="Aujourd'hui"
                trend="2 VIP attendus"
                color="orange"
              />
              <DashboardCard 
                title="Départs prévus" 
                value="8" 
                subtitle="Aujourd'hui"
                trend="3 en attente"
                color="slate"
              />
            </div>

            {/* Placeholder Content Area */}
            <div className="mt-10 bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex flex-col items-center justify-center min-h-[300px] text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-1">Aucune activité récente</h3>
              <p className="text-slate-500 max-w-sm">
                Commencez par créer une nouvelle réservation ou consultez le planning des chambres.
              </p>
              <Button className="mt-6" onClick={() => setLocation("/reservations")}>Voir le planning</Button>
            </div>

          </motion.div>
        </main>
      </div>
    </div>
  );
}

function LegacyTreeSidebar() {
  const [, setLocation] = useLocation();
  const [expanded, setExpanded] = useState<string[]>(["MENU PRINCIPAL", "GESTION HOTELLERIE", "MENU RESERVATION"]);

  const toggle = (id: string) => {
    setExpanded(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const TreeItem = ({ id, label, children, icon, path }: { id: string, label: string, children?: React.ReactNode, icon?: React.ReactNode, path?: string }) => {
    const isExpanded = expanded.includes(id);
    const hasChildren = !!children;

    return (
      <div className="ml-4 border-l border-slate-200/50">
        <div 
          className="flex items-center gap-1 py-1 px-2 hover:bg-slate-100 cursor-pointer group rounded transition-colors"
          onClick={() => {
            if (hasChildren) toggle(id);
            if (path) setLocation(path);
          }}
        >
          <div className="w-4 flex justify-center">
            {hasChildren ? (
              isExpanded ? <ChevronDown className="w-3 h-3 text-slate-400" /> : <ChevronRight className="w-3 h-3 text-slate-400" />
            ) : (
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
            )}
          </div>
          {icon && <div className="text-slate-500 group-hover:text-primary transition-colors">{icon}</div>}
          <span className={`text-[12px] font-bold uppercase tracking-tight ${path ? 'text-slate-600 hover:text-primary' : 'text-slate-800'}`}>
            {label}
          </span>
        </div>
        {hasChildren && isExpanded && (
          <div className="ml-2">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-80 bg-white border-r border-slate-200 hidden md:flex flex-col shadow-sm">
      <div className="bg-[#78b3b3] text-white px-3 py-1.5 flex items-center justify-between border-b border-[#5a8a8a]">
        <div className="flex items-center gap-2">
          <Monitor className="w-4 h-4" />
          <h2 className="text-[11px] font-bold uppercase tracking-widest">MENU PRINCIPAL</h2>
        </div>
      </div>
      
      <div className="flex-1 p-2 overflow-y-auto bg-white">
        <div className="ml-[-1rem]">
          <TreeItem id="MENU PRINCIPAL" label="MENU PRINCIPAL" icon={<FileCode className="w-3.5 h-3.5" />}>
            <TreeItem id="DONNEES DE BASE" label="DONNEES DE BASE">
              <TreeItem id="AGENTS" label="Saisie des informations relatives Des Agents" path="/agents" />
              <TreeItem id="HOTELS" label="Liste des Hôtels" path="/hotels" />
              <TreeItem id="OFFRES" label="Liste des Offres" path="/offers" />
              <TreeItem id="VILLES" label="Liste des Villes" path="/cities" />
              <TreeItem id="REGIONS" label="Liste des Régions" path="/regions" />
            </TreeItem>
            <TreeItem id="EDITION DES ETATS" label="EDITION DES ETATS">
              <TreeItem id="ETATS1" label="États Statistiques" />
            </TreeItem>
            <TreeItem id="GESTION HOTELLERIE" label="GESTION HOTELLERIE">
              <TreeItem id="MENU FACTURATION" label="MENU FACTURATION" />
              <TreeItem id="MENU RESERVATION" label="MENU RESERVATION">
                <TreeItem id="SUPERVISION" label="SUPERVISION DES BONS SAISIS" />
                <TreeItem id="SAISIE_RES" label="SAISIE DES RESERVATIONS" path="/reservations" />
                <TreeItem id="CONSULTATION" label="CONSULTATION DES RESERVATION PAR AGENT" />
              </TreeItem>
            </TreeItem>
            <TreeItem id="SECURITE" label="SECURITE">
              <TreeItem id="PWD_CHANGE" label="CHANGEMENT DE MOT DE PASSE" />
              <TreeItem id="DEF_MENU" label="DEFINITION DU MENU" />
              <TreeItem id="DEF_FORMS" label="DEFINITION DES FORMS" />
              <TreeItem id="DEF_GROUPS" label="DEFINITION DES GROUPES UTILISATEURS" />
              <TreeItem id="PARAMS" label="LISTE DES PARAMETRES" />
              <TreeItem id="PERMISSIONS" label="PERMISSIONS UTILISATEURS SUR LES FONCTIONS" />
              <TreeItem id="DEF_USERS" label="DEFINITION DES UTILISATEURS" />
            </TreeItem>
          </TreeItem>
        </div>
      </div>
      
      <div className="p-4 border-t border-slate-100 bg-slate-50/30">
        <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
          <p className="text-[11px] text-slate-800 font-bold mb-1">Assistance Technique</p>
          <p className="text-[10px] text-slate-500">Poste Interne : 5555</p>
        </div>
      </div>
    </aside>
  );
}

function DashboardCard({ title, value, subtitle, trend, color }: { title: string, value: string, subtitle: string, trend: string, color: "blue" | "orange" | "slate" }) {
  const colorStyles = {
    blue: "border-t-4 border-t-blue-600",
    orange: "border-t-4 border-t-orange-500",
    slate: "border-t-4 border-t-slate-500"
  };

  const iconColor = {
    blue: "text-blue-600 bg-blue-50",
    orange: "text-orange-600 bg-orange-50",
    slate: "text-slate-600 bg-slate-50"
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-100 p-6 ${colorStyles[color]} card-hover`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">{title}</h3>
        <div className={`p-2 rounded-lg ${iconColor[color]}`}>
          {color === "blue" && <Monitor className="w-4 h-4" />}
          {color === "orange" && <User className="w-4 h-4" />}
          {color === "slate" && <FileText className="w-4 h-4" />}
        </div>
      </div>
      <div className="text-4xl font-black text-slate-900 mb-1">{value}</div>
      <div className="text-sm text-slate-500 mb-4 font-medium">{subtitle}</div>
      <div className={`text-[10px] font-bold px-2 py-1 rounded-full inline-block ${color === 'blue' ? 'bg-blue-50 text-blue-700' : color === 'orange' ? 'bg-orange-50 text-orange-700' : 'bg-slate-50 text-slate-700'}`}>
        {trend}
      </div>
    </div>
  );
}

function QuickAction({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-primary/30 hover:shadow-lg transition-all group active:scale-95"
    >
      <div className="p-3 bg-slate-50 rounded-full text-slate-400 group-hover:text-primary group-hover:bg-primary/5 mb-3 transition-all duration-300">
        {icon}
      </div>
      <span className="text-xs font-bold text-slate-600 group-hover:text-primary transition-colors uppercase tracking-tight">{label}</span>
    </button>
  );
}
