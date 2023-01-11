class Megaman {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./Megaman.png"), 2, 0, 42, 35, 10, .175);

		this.x = 0;
		this.y = 675;
		this.speed = 150;
	};

	update() {
		this.x += this.speed * this.game.clockTick;
		if (this.x > 1280) this.x = 0;
	};
	
	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y)
	};
}
