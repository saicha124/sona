import { useUser, useLogout } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { SonatrachHeader } from "@/components/ui/sonatrach-header";
import { LogOut, Home, User, Settings, FileText } from "lucide-react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { MainMenu } from "@/components/main-menu";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const { data: user, isLoading } = useUser();
  const { mutate: logout } = useLogout();

  // Redirect if not logged in
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

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-r border-slate-200 hidden md:flex flex-col shadow-sm">
          <div className="p-6 bg-slate-50/50 border-b border-slate-100">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Menu Principal</h2>
            <div className="space-y-1">
              <NavItem icon={<Home className="w-4 h-4" />} label="DONNEES DE BASE" active />
              <NavItem icon={<FileText className="w-4 h-4" />} label="EDITION DES ETATS" />
              <NavItem icon={<Settings className="w-4 h-4" />} label="GESTION HOTELLERIE" />
              <NavItem icon={<User className="w-4 h-4" />} label="SECURITE" />
            </div>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Contextual sub-menu based on selection */}
            <div className="space-y-4">
              <div>
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">Données de base</h3>
                <div className="space-y-0.5">
                  <button 
                    onClick={() => setLocation("/agents")}
                    className="w-full text-left px-3 py-1.5 text-[13px] text-slate-600 hover:bg-blue-50 hover:text-primary rounded transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                    Dossier Agents
                  </button>
                  <button 
                    onClick={() => setLocation("/hotels")}
                    className="w-full text-left px-3 py-1.5 text-[13px] text-slate-600 hover:bg-blue-50 hover:text-primary rounded transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                    Liste des Hôtels
                  </button>
                  <button 
                    onClick={() => setLocation("/offers")}
                    className="w-full text-left px-3 py-1.5 text-[13px] text-slate-600 hover:bg-blue-50 hover:text-primary rounded transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                    Liste des Offres
                  </button>
                  <button 
                    onClick={() => setLocation("/regions")}
                    className="w-full text-left px-3 py-1.5 text-[13px] text-slate-600 hover:bg-blue-50 hover:text-primary rounded transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                    Liste des Régions
                  </button>
                  <button 
                    onClick={() => setLocation("/cities")}
                    className="w-full text-left px-3 py-1.5 text-[13px] text-slate-600 hover:bg-blue-50 hover:text-primary rounded transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                    Liste des Villes
                  </button>
                  <button 
                    onClick={() => setLocation("/expense-types")}
                    className="w-full text-left px-3 py-1.5 text-[13px] text-slate-600 hover:bg-blue-50 hover:text-primary rounded transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                    Prises En Charge
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-auto p-6 border-t border-slate-100 bg-slate-50/30">
            <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
              <p className="text-xs text-slate-800 font-bold mb-1">Assistance</p>
              <p className="text-[11px] text-slate-500 leading-relaxed">Support informatique interne : poste 5555</p>
            </div>
          </div>
        </aside>

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

            {/* Quick Actions */}
            <h2 className="text-xl font-bold text-slate-800 mb-6">Actions Rapides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <QuickAction icon={<FileText />} label="Nouvelle Réservation" />
              <QuickAction icon={<User />} label="Enregistrer Client" />
              <QuickAction icon={<Settings />} label="Disponibilités" />
              <QuickAction icon={<LogOut className="rotate-180" />} label="Check-in Rapide" />
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
              <Button className="mt-6">Voir le planning</Button>
            </div>

          </motion.div>
        </main>
      </div>
    </div>
  );
}

// Sub-components for Dashboard
function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-[12px] font-black tracking-wider transition-all duration-200 ${
      active 
        ? "sidebar-item-active" 
        : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
    }`}>
      {icon}
      {label}
    </button>
  );
}

function DashboardCard({ title, value, subtitle, trend, color }: { title: string, value: string, subtitle: string, trend: string, color: "blue" | "orange" | "slate" }) {
  const colorStyles = {
    blue: "border-l-4 border-l-blue-600",
    orange: "border-l-4 border-l-orange-500",
    slate: "border-l-4 border-l-slate-500"
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-slate-100 p-6 ${colorStyles[color]} hover:shadow-md transition-shadow`}>
      <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">{title}</h3>
      <div className="text-3xl font-bold text-slate-900 mb-1">{value}</div>
      <div className="text-sm text-slate-500 mb-4">{subtitle}</div>
      <div className="text-xs font-medium px-2 py-1 bg-slate-100 rounded inline-block text-slate-600">
        {trend}
      </div>
    </div>
  );
}

function QuickAction({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-slate-200 hover:border-primary/50 hover:shadow-md transition-all group">
      <div className="text-slate-400 group-hover:text-primary mb-3 transition-colors">
        {icon}
      </div>
      <span className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors">{label}</span>
    </button>
  );
}
