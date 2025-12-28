function About() {
	return (
		<section className="bg-background py-20 lg:py-28">
			<div className="mx-auto max-w-4xl px-6 lg:px-8">
				<div className="space-y-6">
					<h2 className="font-serif text-4xl font-bold tracking-tight text-foreground lg:text-5xl text-balance">
						About the Show
					</h2>
					<div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
						<p>
							Welcome to the{" "}
							<span className="font-semibold text-foreground">
								Inverted Whingers
							</span>
							, a football podcast where we dive deep into the beautiful game.
							From player debates to controversial takes on the sport, we cover
							it all with passion and a healthy dose of skepticism.
						</p>
						<p>
							Join us as we discuss everything football - failed wonderkids,
							fixture congestion, rule changes, Ballon d'Or debates, and more.
							Whether you're a die-hard fan or a casual observer, there's
							something here for everyone who loves the game.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
