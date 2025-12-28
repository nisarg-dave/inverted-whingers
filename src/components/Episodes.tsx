import { Calendar, ExternalLink } from "lucide-react";
import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const episodesBySeason = {
	"2024": [
		{
			id: 1,
			title: "The Tactical Revolution: How Modern Fullbacks Changed the Game",
			date: "December 20, 2024",
			duration: "58 min",
			description:
				"We explore how the fullback position has evolved from defensive liability to creative force.",
			link: "#",
		},
		{
			id: 2,
			title: "Transfer Window Madness: Winners and Losers",
			date: "December 13, 2024",
			duration: "1h 12 min",
			description:
				"Breaking down the biggest transfers and what they mean for the rest of the season.",
			link: "#",
		},
		{
			id: 3,
			title: "The False Nine Debate: Dead or Just Sleeping?",
			date: "December 6, 2024",
			duration: "45 min",
			description:
				"Is the false nine a relic of the past or still a viable tactical option?",
			link: "#",
		},
		{
			id: 4,
			title: "VAR: Friend or Foe?",
			date: "November 29, 2024",
			duration: "1h 5 min",
			description:
				"A heated discussion about technology in football and whether it's helping or hurting the game.",
			link: "#",
		},
		{
			id: 5,
			title: "Underrated Players Who Deserve More Recognition",
			date: "November 22, 2024",
			duration: "52 min",
			description:
				"Shining a light on the unsung heroes who make their teams tick.",
			link: "#",
		},
		{
			id: 6,
			title: "The Art of the Counter-Attack",
			date: "November 15, 2024",
			duration: "48 min",
			description:
				"Analyzing the most devastating counter-attacking teams and what makes them so effective.",
			link: "#",
		},
	],
	"2023": [
		{
			id: 7,
			title: "Season Finale: Our Bold Predictions",
			date: "December 22, 2023",
			duration: "1h 15 min",
			description:
				"Looking back at 2023 and making some bold predictions for the year ahead.",
			link: "#",
		},
		{
			id: 8,
			title: "World Cup Retrospective: The Drama, The Glory",
			date: "December 8, 2023",
			duration: "1h 30 min",
			description: "Reliving the most memorable moments from the World Cup.",
			link: "#",
		},
		{
			id: 9,
			title: "The Rise of Young Talents",
			date: "November 17, 2023",
			duration: "55 min",
			description: "Spotlighting the next generation of football superstars.",
			link: "#",
		},
	],
};

function Episodes() {
	const episodesId = useId();
	const seasonSelectId = useId();
	const [selectedSeason, setSelectedSeason] = useState("2024");
	const seasons = Object.keys(episodesBySeason).sort(
		(a, b) => Number(b) - Number(a),
	);
	const episodes =
		episodesBySeason[selectedSeason as keyof typeof episodesBySeason];

	return (
		<section id={episodesId} className="bg-muted/30 py-20 lg:py-28">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<div className="mb-12">
					<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<div>
							<h2 className="font-serif text-4xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
								Latest Episodes
							</h2>
							<p className="mt-4 text-lg text-muted-foreground">
								Catch up on our recent discussions and debates
							</p>
						</div>
						<div className="flex items-center gap-3">
							<label
								htmlFor={seasonSelectId}
								className="text-sm font-medium text-muted-foreground"
							>
								Season:
							</label>
							<Select value={selectedSeason} onValueChange={setSelectedSeason}>
								<SelectTrigger id={seasonSelectId} className="w-[140px]">
									<SelectValue placeholder="Select season" />
								</SelectTrigger>
								<SelectContent>
									{seasons.map((season) => (
										<SelectItem key={season} value={season}>
											{season}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>

				<div className="space-y-6">
					{episodes.map((episode, index) => (
						<Card
							key={episode.id}
							className="overflow-hidden transition-shadow hover:shadow-md"
						>
							<div className="flex flex-col gap-4 p-6 lg:flex-row lg:items-center lg:justify-between">
								<div className="flex-1 space-y-3">
									<div className="flex items-center gap-3 text-sm text-muted-foreground">
										<span className="font-mono font-semibold text-primary">
											EP {String(index + 1).padStart(2, "0")}
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
									<Button
										asChild
										variant="default"
										className="flex-1 lg:flex-initial"
									>
										<a
											href={episode.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											Listen Now
											<ExternalLink className="ml-2 h-4 w-4" />
										</a>
									</Button>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}

export default Episodes;
