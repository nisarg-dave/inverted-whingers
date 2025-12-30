import { Radio } from "lucide-react";

function Footer() {
	return (
		<footer className="border-t border-border bg-card py-12">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="flex flex-col items-center gap-6 text-center">
					<div className="flex items-center gap-3">
						<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
							<Radio className="h-5 w-5 text-primary-foreground" />
						</div>
						<span className="font-serif text-xl font-bold text-foreground">
							The Inverted Whingers
						</span>
					</div>
					<p className="max-w-md text-sm text-muted-foreground leading-relaxed">
						A football podcast with unfiltered takes on the beautiful game. For
						fans who love it as much as we do.
					</p>
					<div className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} The Inverted Whingers. All rights
						reserved.
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
