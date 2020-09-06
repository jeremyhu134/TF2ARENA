class MenuScene extends Phaser.Scene {
    constructor() {
		super({ key: 'MenuScene' })
	}
    preload(){
        this.load.image('menubg','tf2arenaimages/menubg.png');
        this.load.image('logoicon','tf2arenaimages/logoicon.png');
        //buttons
        this.load.image('playicon','tf2arenaimages/playicon.png');
        this.load.image('shopicon','tf2arenaimages/shopicon.png');
        this.load.image('playaiicon','tf2arenaimages/playaiicon.png');
    }
    create() {
        this.add.image(0,0,'menubg').setOrigin(0,0);
        this.add.image(0,15,'logoicon').setOrigin(0,0).setInteractive();
        var playicon = this.add.image(10,90,'playicon').setOrigin(0,0).setInteractive();
        var shopicon = this.add.image(10,160,'shopicon').setOrigin(0,0).setInteractive();
        var playaiicon = this.add.image(260,100,'playaiicon').setOrigin(0,0).setInteractive();
        var creditstext = this.add.text(130, 175, `CREDITS:${gameState.credits}`, { fontSize: 'bold 30px', fill: '#FF4500' });
        playaiicon.on('pointerup', () => {
            this.scene.stop("MenuScene");
            this.scene.start("ChooseHeroScene");
		});
        shopicon.on('pointerup', () => {
            this.scene.stop("MenuScene");
            this.scene.start("ShopScene");
		});
	}
    update(){
        
    }
}