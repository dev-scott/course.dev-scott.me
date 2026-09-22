import NonDashboardNavbar from "@/components/ui/NonDashboardNavbar";
import Image from "next/image";
import Landing from "./(nondashboard)/landing";

export default function Home() {
  return (
    <div className="">
      <NonDashboardNavbar />
      <main className="">
        <Landing />
      </main>
    </div>
  );
}
