import { Radio } from "lucide-react";

function Header() {
	return (
		<header className="border-b border-border bg-card">
			<div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
				<div className="flex items-center gap-3">
					<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
						<Radio className="h-6 w-6 text-primary-foreground" />
					</div>
					<div>
						<h1 className="font-serif text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
							The Inverted Whingers
						</h1>
						<p className="text-sm text-muted-foreground">A Football Podcast</p>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
