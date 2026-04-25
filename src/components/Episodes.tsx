import { useId, useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import episodesData from "@/data/episodes.json";
import Episode from "./Episode";

function Episodes() {
	const seasonSelectId = useId();
	const [selectedSeason, setSelectedSeason] = useState("2025/26");
	const seasons = Object.keys(episodesData).sort((a, b) => b.localeCompare(a));
	const episodes = episodesData[selectedSeason as keyof typeof episodesData];

	return (
		<section className="bg-muted/30 py-20 lg:py-28">
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
					{episodes.map((episode) => (
						<Episode key={episode.id} episode={episode} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Episodes;
