const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
ASSET_MANAGER.queueDownload("./city.png");
//ASSET_MANAGER.queueDownload("./stage2.png");
ASSET_MANAGER.queueDownload("./Megaman.png");


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new Megaman(gameEngine));
	gameEngine.addEntity(new Background());

	gameEngine.init(ctx);

	gameEngine.start();
});
