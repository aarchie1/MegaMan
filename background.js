class Background {
	constructor(game) {
		
	};

	update() {
		
	};
	
	draw(ctx) {
		ctx.drawImage(ASSET_MANAGER.getAsset("./city.png"), 0, 0);
		//ctx.drawImage(ASSET_MANAGER.getAsset("./stage2.png"), 520, 0);
	};
}
