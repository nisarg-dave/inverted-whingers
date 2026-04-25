import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface Episode {
	id: number;
	title: string;
	description: string;
	date: string;
	duration: string;
	link: string;
}

function Episode({ episode }: { episode: Episode }) {
	return (
		<Card
			key={episode.id}
			className="overflow-hidden transition-shadow hover:shadow-md"
		>
			<div className="flex flex-col gap-4 p-6 lg:flex-row lg:items-center lg:justify-between">
				<div className="flex-1 space-y-3">
					<div className="flex items-center gap-3 text-sm text-muted-foreground">
						<span className="font-mono font-semibold text-primary">
							EP {String(episode.id).padStart(2, "0")}
						</span>
						<span className="h-1 w-1 rounded-full bg-muted-foreground"></span>
						<div className="flex items-center gap-1.5">
							<Calendar className="h-3.5 w-3.5" />
							{episode.date}
						</div>
						<span className="h-1 w-1 rounded-full bg-muted-foreground"></span>
						<span>{episode.duration}</span>
					</div>
					<h3 className="font-serif text-2xl font-semibold text-foreground text-balance">
						{episode.title}
					</h3>
					<p className="text-muted-foreground leading-relaxed">
						{episode.description}
					</p>
				</div>
				<div className="flex gap-3 lg:flex-col">
					<Button asChild variant="default" className="flex-1 lg:flex-initial">
						<a href={episode.link} target="_blank" rel="noopener noreferrer">
							Listen Now
							<ExternalLink className="ml-2 h-4 w-4" />
						</a>
					</Button>
				</div>
			</div>
		</Card>
	);
}

export default Episode;
