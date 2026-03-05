// =============================================================================
// App.tsx — TTRPG Rulebook
// Holonet Terminal design: dark sci-fi dashboard with sidebar navigation
// =============================================================================

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ClassesPage from "./pages/ClassesPage";
import ClassDetailPage from "./pages/ClassDetailPage";
import SubclassDetailPage from "./pages/SubclassDetailPage";
import ForceAbilitiesPage from "./pages/ForceAbilitiesPage";
import GadgetsPage from "./pages/GadgetsPage";
import SkillsPage from "./pages/SkillsPage";
import StancesPage from "./pages/StancesPage";
import RulesPage from "./pages/RulesPage";
import WeaponsPage from "./pages/WeaponsPage";
import ItemsPage from "./pages/ItemsPage";
import ArmorPage from "./pages/ArmorPage";
import ChangelogPage from "./pages/ChangelogPage";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/classes" component={ClassesPage} />
        <Route path="/classes/:classId" component={ClassDetailPage} />
        <Route path="/classes/:classId/:subclassId" component={SubclassDetailPage} />
        <Route path="/force-abilities" component={ForceAbilitiesPage} />
        <Route path="/gadgets" component={GadgetsPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/stances" component={StancesPage} />
        <Route path="/weapons" component={WeaponsPage} />
        <Route path="/items" component={ItemsPage} />
        <Route path="/armor" component={ArmorPage} />
        <Route path="/rules" component={RulesPage} />
        <Route path="/changelog" component={ChangelogPage} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
