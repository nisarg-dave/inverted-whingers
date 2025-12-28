import { createFileRoute } from "@tanstack/react-router";
import About from "@/components/About";
import Episodes from "@/components/Episodes";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<>
			<About />
			<Episodes />
		</>
	);
}
