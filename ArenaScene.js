class ChooseHeroScene extends Phaser.Scene {
    constructor() {
		super({ key: 'ChooseHeroScene' })
	}
    preload(){
        this.load.image('menubg','tf2arenaimages/menubg.png');
        this.load.image('back','tf2arenaimages/back.png');
        this.load.image('checkicon','tf2arenaimages/checkicon.png');
        this.load.image('checkicon','tf2arenaimages/checkicon.png');
        this.load.image('selectionboxes','tf2arenaimages/selectionboxes.png');
        //classes
        this.load.spritesheet('redscout','tf2arenaimages/redscout.png',{frameWidth: 33,frameHeight:53});
        this.load.spritesheet('redheavy','tf2arenaimages/redheavy.png',{frameWidth: 42,frameHeight:75});
        this.load.spritesheet('reddemoman','tf2arenaimages/reddemoman.png',{frameWidth: 36,frameHeight:65});
        this.load.spritesheet('redspy','tf2arenaimages/redspy.png',{frameWidth: 36,frameHeight:75});
        //animation
    }
    create() {
        this.add.image(0,0,'menubg').setOrigin(0,0);
        this.add.image(25,10,'selectionboxes').setOrigin(0,0);
        var selectscout = this.add.image(50,15,'redscout').setOrigin(0,0).setInteractive().setScale(1.7);
        var selectdemoman = this.add.image(300,15,'reddemoman').setOrigin(0,0).setInteractive().setScale(1.3);
        var selectheavy = this.add.image(385,15,'redheavy').setOrigin(0,0).setInteractive().setScale(1.1);
        var selectspy = this.add.image(715,15,'redspy').setOrigin(0,0).setInteractive().setScale(1.2);
        var back = this.add.image(20,450,'back').setOrigin(0,0).setInteractive();
        var check = this.add.image(720,430,'checkicon').setOrigin(0,0).setInteractive();
        
        var selectedhero = this.add.image(350,200,'redscout').setOrigin(0,0).setInteractive().setScale(3);
        gameState.class = 'scout';
        selectscout.on('pointerover', () => {
            gameState.class = 'scout';
            selectedhero.destroy();
            selectedhero = this.add.image(350,200,'redscout').setOrigin(0,0).setInteractive().setScale(3);
		});
        selectdemoman.on('pointerover', () => {
            gameState.class = 'demoman';
            selectedhero.destroy();
            selectedhero = this.add.image(350,200,'reddemoman').setOrigin(0,0).setInteractive().setScale(3);
		});
        selectheavy.on('pointerover', () => {
            gameState.class = 'heavy';
            selectedhero.destroy();
            selectedhero = this.add.image(350,200,'redheavy').setOrigin(0,0).setInteractive().setScale(3);
		});
        selectspy.on('pointerover', () => {
            gameState.class = 'spy';
            selectedhero.destroy();
            selectedhero = this.add.image(350,200,'redspy').setOrigin(0,0).setInteractive().setScale(3);
		});
        back.on('pointerup', () => {
            this.scene.stop("ChooseHeroScene");
            this.scene.start("MenuScene");
            this.scene.stop("ArenaScene");
		});
        check.on('pointerup', () => {
            this.scene.stop("ChooseHeroScene");
            this.scene.start("ArenaScene");
		});
	}
    update(){
        
    }
}

class ArenaScene extends Phaser.Scene {
    constructor() {
		super({ key: 'ArenaScene' })
	}
    preload(){
        this.load.image('invisibleplatform','tf2arenaimages/invisibleplatform.png');
        this.load.image('70x10','tf2arenaimages/70x10.png');
        this.load.image('60x6','tf2arenaimages/60x6.png');
        this.load.image('35x5','tf2arenaimages/35x5.png');
        this.load.image('130x10','tf2arenaimages/130x10.png');
        this.load.image('145x10','tf2arenaimages/145x10.png');
        this.load.image('25x5','tf2arenaimages/25x5.png');
        
        
        this.load.image('arenabg','tf2arenaimages/dustbowlbg.png');
        this.load.image('back','tf2arenaimages/back.png');
        this.load.image('infoicon','tf2arenaimages/infoicon.png');
        this.load.image('info','tf2arenaimages/info.png');
        this.load.spritesheet('redpill','tf2arenaimages/redpill.png',{frameWidth: 30,frameHeight:30});
        this.load.image('bullet','tf2arenaimages/bullet.png');
        this.load.image('redstickybomb','tf2arenaimages/redstickybomb.png');
        //classes
        this.load.spritesheet('redscout','tf2arenaimages/redscout.png',{frameWidth: 33,frameHeight:53});
        this.load.spritesheet('redscout2','tf2arenaimages/redscout2.png',{frameWidth: 33,frameHeight:53});
        this.load.spritesheet('redheavy','tf2arenaimages/redheavy.png',{frameWidth: 42,frameHeight:75});
        this.load.spritesheet('redheavy2','tf2arenaimages/redheavy2.png',{frameWidth: 42,frameHeight:75});
        this.load.spritesheet('reddemoman','tf2arenaimages/reddemoman.png',{frameWidth: 36,frameHeight:65});
        this.load.spritesheet('reddemoman2','tf2arenaimages/reddemoman2.png',{frameWidth: 36,frameHeight:65});
        this.load.spritesheet('redspy','tf2arenaimages/redspy.png',{frameWidth: 36,frameHeight:75});
        //audio
        this.load.audio('bgmusic', 'tf2arenaimages/bgmusic.mp3');
        this.load.audio('scattergun_shoot', 'tf2arenaimages/scattergun_shoot.mp3');
        this.load.audio('scattergun_reload', 'tf2arenaimages/scattergun_reload.mp3');
        this.load.audio('pistol_shoot', 'tf2arenaimages/pistol_shoot.mp3');
        this.load.audio('pistol_reload', 'tf2arenaimages/pistol_reload.mp3');
        
        this.load.audio('minigun_shoot', 'tf2arenaimages/minigun_shoot.mp3');
        this.load.audio('minigun_empty', 'tf2arenaimages/minigun_empty.mp3');
        this.load.audio('shotgun_shoot', 'tf2arenaimages/shotgun_shoot.mp3');
        this.load.audio('shotgun_reload', 'tf2arenaimages/shotgun_reload.mp3');
        
        this.load.audio('grenadelauncher_shoot', 'tf2arenaimages/grenadelauncher_shoot.mp3');
        this.load.audio('grenadelauncher_reload', 'tf2arenaimages/grenadelauncher_reload.mp3');
        this.load.audio('grenadelauncher_drum_open', 'tf2arenaimages/grenadelauncher_drum_open.mp3');
        this.load.audio('grenadelauncher_drum_close', 'tf2arenaimages/grenadelauncher_drum_close.mp3');
        this.load.audio('stickybomblauncher_shoot', 'tf2arenaimages/stickybomblauncher_shoot.mp3');
        this.load.audio('stickybomblauncher_reload', 'tf2arenaimages/stickybomblauncher_reload.mp3');
        this.load.audio('explode', 'tf2arenaimages/explode.mp3');
        
        this.load.audio('revolver_shoot', 'tf2arenaimages/revolver_shoot.mp3');
        this.load.audio('revolver_reload', 'tf2arenaimages/revolver_reload.mp3');
    }
    create() {
        gameState.weaponselect = 1;
        gameState.loopSound = {
            loop: true,
            volume: 5
        }
        var bgmusic = this.sound.add('bgmusic');
        //scout audio
        var scattergun_shoot = this.sound.add('scattergun_shoot');
        var scattergun_reload = this.sound.add('scattergun_reload');
        var pistol_shoot = this.sound.add('pistol_shoot');
        var pistol_reload = this.sound.add('pistol_reload');
        //heavy audio
        var minigun_shoot = this.sound.add('minigun_shoot');
        var minigun_empty = this.sound.add('minigun_empty');
        var shotgun_shoot = this.sound.add('shotgun_shoot');
        var shotgun_reload = this.sound.add('shotgun_reload');
        //demoman audio
        var grenadelauncher_shoot = this.sound.add('grenadelauncher_shoot');
        var grenadelauncher_reload = this.sound.add('grenadelauncher_reload');
        var grenadelauncher_drum_open = this.sound.add('grenadelauncher_drum_open');
        var grenadelauncher_drum_close = this.sound.add('grenadelauncher_drum_close');
        var explode = this.sound.add('explode');
        var stickybomblauncher_shoot = this.sound.add('stickybomblauncher_shoot');
        var stickybomblauncher_reload = this.sound.add('stickybomblauncher_reload');
        //spy audio
        var revolver_shoot = this.sound.add('revolver_shoot');
        var revolver_reload = this.sound.add('revolver_reload');
        
        bgmusic.play(gameState.loopSound);
        gameState.input=this.input;
        gameState.mouse=this.input.mousePointer;
        this.input.mouse.disableContextMenu();
        gameState.cursors = this.input.keyboard.createCursorKeys();
        gameState.keys = this.input.keyboard.addKeys('W,S,A,D,R,SPACE,SHIFT,ONE,TWO');
        this.add.image(0,0,'arenabg').setOrigin(0,0);
        var back = this.add.image(20,450,'back').setOrigin(0,0).setInteractive();
        var infoicon = this.add.image(70,450,'infoicon').setOrigin(0,0).setInteractive();
        var info = null;
        back.on('pointerup', () => {
            bgmusic.pause();
            this.scene.stop("ArenaScene");
            this.scene.start("ChooseHeroScene");
		});
        infoicon.on('pointerup', () => {
            info = this.add.image(120,50,'info').setOrigin(0,0);
            this.time.addEvent({
                delay: 3000,
                callback: ()=>{
                    info.destroy();
                },  
                startAt: 0,
                timeScale: 1
            }); 
		});
        gameState.invisibleplatform = this.physics.add.staticGroup();
        gameState.invisibleplatform.create(0,350,'invisibleplatform').setOrigin(0,0).refreshBody(0);
        gameState.invisibleplatform.create(283,256,'70x10').setOrigin(0,0).refreshBody(0);
        gameState.invisibleplatform.create(457,256,'70x10').setOrigin(0,0).refreshBody(0);
        gameState.invisibleplatform.create(370,213,'60x6').setOrigin(0,0).refreshBody(0);
        gameState.invisibleplatform.create(543,234,'35x5').setOrigin(0,0).refreshBody(0);
        gameState.invisibleplatform.create(655,223,'130x10').setOrigin(0,0).refreshBody(0);
        gameState.invisibleplatform.create(146,232,'145x10').setOrigin(0,0).refreshBody(0);
        gameState.invisibleplatform.create(637,292,'25x5').setOrigin(0,0).refreshBody(0);
        gameState.loadanims = function(heroclass,scene){
            if(heroclass === 'scout'){
                scene.anims.create({
                    key: 'scoutidle',
                    repeat: -1,
                    frameRate: 3,
                    frames:scene.anims.generateFrameNames('redscout',{start: 0,end: 1})
                });
                scene.anims.create({
                    key: 'scoutrun',
                    repeat: -1,
                    frameRate: 20,
                    frames:scene.anims.generateFrameNames('redscout',{start: 4,end: 6})
                });
                scene.anims.create({
                    key: 'scoutjump',
                    repeat: -1,
                    frameRate: 20,
                    frames:scene.anims.generateFrameNames('redscout',{start: 7,end: 7})
                });
                scene.anims.create({
                    key: 'scoutidle2',
                    repeat: -1,
                    frameRate: 3,
                    frames:scene.anims.generateFrameNames('redscout2',{start: 0,end: 1})
                });
                scene.anims.create({
                    key: 'scoutrun2',
                    repeat: -1,
                    frameRate: 20,
                    frames:scene.anims.generateFrameNames('redscout2',{start: 4,end: 6})
                });
                scene.anims.create({
                    key: 'scoutjump2',
                    repeat: -1,
                    frameRate: 20,
                    frames:scene.anims.generateFrameNames('redscout2',{start: 7,end: 7})
                });
            }
            else if(heroclass === 'heavy'){
                scene.anims.create({
                    key: 'heavyidle',
                    repeat: -1,
                    frameRate: 3,
                    frames:scene.anims.generateFrameNames('redheavy',{start: 0,end: 1})
                });
                scene.anims.create({
                    key: 'heavyrun',
                    repeat: -1,
                    frameRate: 10,
                    frames:scene.anims.generateFrameNames('redheavy',{start: 2,end: 5})
                });
                scene.anims.create({
                    key: 'heavyjump',
                    repeat: -1,
                    frameRate: 20,
                    frames:scene.anims.generateFrameNames('redheavy',{start: 6,end: 6})
                });
                scene.anims.create({
                    key: 'heavyidle2',
                    repeat: -1,
                    frameRate: 3,
                    frames:scene.anims.generateFrameNames('redheavy2',{start: 0,end: 1})
                });
                scene.anims.create({
                    key: 'heavyrun2',
                    repeat: -1,
                    frameRate: 10,
                    frames:scene.anims.generateFrameNames('redheavy2',{start: 2,end: 5})
                });
                scene.anims.create({
                    key: 'heavyjump2',
                    repeat: -1,
                    frameRate: 20,
                    frames:scene.anims.generateFrameNames('redheavy2',{start: 6,end: 6})
                });
            }
            else if(heroclass === 'demoman'){
                scene.anims.create({
                    key: 'demomanidle',
                    repeat: -1,
                    frameRate: 3,
                    frames:scene.anims.generateFrameNames('reddemoman',{start: 0,end: 1})
                });
                scene.anims.create({
                    key: 'demomanrun',
                    repeat: -1,
                    frameRate: 10,
                    frames:scene.anims.generateFrameNames('reddemoman',{start: 3,end: 6})
                });
                scene.anims.create({
                    key: 'demomanjump',
                    repeat: -1,
                    frameRate: 20,
                    frames:scene.anims.generateFrameNames('reddemoman',{start: 2,end: 2})
                });
                scene.anims.create({
                    key: 'demoman2idle',
                    repeat: -1,
                    frameRate: 3,
                    frames:scene.anims.generateFrameNames('reddemoman2',{start: 0,end: 1})
                });
                scene.anims.create({
                    key: 'demoman2run',
                    repeat: -1,
                    frameRate: 10,
                    frames:scene.anims.generateFrameNames('reddemoman2',{start: 3,end: 6})
                });
                scene.anims.create({
                    key: 'demoman2jump',
                    repeat: -1,
                    frameRate: 20,
                    frames:scene.anims.generateFrameNames('reddemoman2',{start: 2,end: 2})
                });
                scene.anims.create({
                    key: 'explosion',
                    frameRate: 30,
                    frames:scene.anims.generateFrameNames('redpill',{start: 1,end: 6})
                });
            }
            else if(heroclass === 'spy'){
                scene.anims.create({
                    key: 'spyidle',
                    repeat: -1,
                    frameRate: 3,
                    frames:scene.anims.generateFrameNames('redspy',{start: 0,end: 1})
                });
                scene.anims.create({
                    key: 'spyrun',
                    repeat: -1,
                    frameRate: 10,
                    frames:scene.anims.generateFrameNames('redspy',{start: 3,end: 6})
                });
                scene.anims.create({
                    key: 'spyjump',
                    repeat: -1,
                    frameRate: 20,
                    frames:scene.anims.generateFrameNames('redspy',{start: 2,end: 2})
                });
            }
        }
        gameState.createhero = function(heroclass,scene){
            gameState.heroprimaryammo = scene.physics.add.group();
            gameState.herosecondaryammo = scene.physics.add.group();
            gameState.heroprimaryammo.outOfBoundsKill = true;
            if(heroclass === 'scout'){
                gameState.maxprimaryammo = 6;
                gameState.maxsecondaryammo = 12;
                gameState.primaryammo = 6;
                gameState.secondaryammo = 12;
                gameState.health = 125;
                gameState.hero = scene.physics.add.sprite(100,100,'redscout');
                gameState.hero.setSize(20,53);
                gameState.hero.body.offset.x = 0;
                gameState.jumpcooldown = 10;
                gameState.heroprimarycooldown = 0;
                scene.time.addEvent({
                    delay: 1,
                    callback: ()=>{
                        gameState.jumpcooldown -= 1;
                    },  
                    startAt: 0,
                    timeScale: 1,
                    repeat: -1
                }); 
                scene.time.addEvent({
                    delay: 1,
                    callback: ()=>{
                        gameState.heroprimarycooldown -= 1;
                    },  
                    startAt: 0,
                    timeScale: 1,
                    repeat: -1
                }); 
            }
            else if(heroclass === 'heavy'){
                gameState.maxprimaryammo = 200;
                gameState.maxsecondaryammo = 6;
                gameState.primaryammo = 200;
                gameState.secondaryammo = 6;
                gameState.health = 300;
                gameState.hero = scene.physics.add.sprite(100,100,'redheavy');
                gameState.hero.setSize(25,75);
                gameState.hero.body.offset.x = 0;
                gameState.jumpcooldown = 10;
                gameState.heroprimarycooldown = 0;
                scene.time.addEvent({
                    delay: 1,
                    callback: ()=>{
                        gameState.heroprimarycooldown -= 1;
                    },  
                    startAt: 0,
                    timeScale: 1,
                    repeat: -1
                }); 
            }
            else if(heroclass === 'demoman'){
                gameState.maxprimaryammo = 16;
                gameState.maxsecondaryammo = 24;
                gameState.primaryammo = 4;
                gameState.secondaryammo = 8;
                gameState.health = 175;
                gameState.hero = scene.physics.add.sprite(100,100,'reddemoman');
                gameState.hero.setSize(34,65);
                gameState.hero.body.offset.x = 0;
                gameState.jumpcooldown = 10;
                gameState.heroprimarycooldown = 0;
                scene.time.addEvent({
                    delay: 1,
                    callback: ()=>{
                        gameState.heroprimarycooldown -= 1;
                    },  
                    startAt: 0,
                    timeScale: 1,
                    repeat: -1
                }); 
            }
            else if(heroclass === 'spy'){
                gameState.maxprimaryammo = 6;
                gameState.maxsecondaryammo = 0;
                gameState.primaryammo = 6;
                gameState.secondaryammo = 0;
                gameState.health = 125;
                gameState.hero = scene.physics.add.sprite(100,100,'redspy');
                gameState.hero.setSize(20,75);
                gameState.hero.body.offset.x = 0;
                gameState.jumpcooldown = 10;
                gameState.heroprimarycooldown = 0;
                scene.time.addEvent({
                    delay: 1,
                    callback: ()=>{
                        gameState.heroprimarycooldown -= 1;
                    },  
                    startAt: 0,
                    timeScale: 1,
                    repeat: -1
                }); 
            }
            gameState.hero.body.checkCollision.up = false;
            gameState.hero.body.checkCollision.left = false;
            gameState.hero.body.checkCollision.right = false;
        }
        gameState.jumping = false;
        gameState.shooting = false;
        gameState.reloading = false;
        gameState.rando = 0;
        gameState.explosions = this.physics.add.group();
        gameState.heromovement = function (heroclass, scene){
            if(gameState.keys.ONE.isDown&&gameState.reloading === false&&gameState.shooting === false){
                gameState.weaponselect = 1;
            }
            else if(gameState.keys.TWO.isDown&&gameState.reloading === false&&gameState.shooting === false){
                gameState.weaponselect = 2;
            }
            function pillaction(pill, scene){
                scene.time.addEvent({
                    delay: 2500,
                    callback: ()=>{
                        explode.play();
                        pill.setGravityY(-1000);
                        pill.setGravityX(0);
                        pill.body.velocity.x = 0;
                        pill.body.velocity.y = 0;
                        pill.setSize(30,30)
                        pill.anims.play('explosion',true);
                        scene.time.addEvent({
                        delay: 250,
                            callback: ()=>{
                                pill.destroy();
                            },  
                            startAt: 0,
                            timeScale: 1
                        }); 
                    },  
                    startAt: 0,
                    timeScale: 1
                }); 
            }
            if(heroclass === 'scout'){
                if(gameState.weaponselect == 1){
                    if(gameState.mouse.isDown && gameState.primaryammo > 0 && gameState.heroprimarycooldown <= 0 && gameState.reloading === false){
                        gameState.shooting = true;
                        gameState.heroprimarycooldown = 35;
                        scene.time.addEvent({
                            delay: 40,
                            callback: ()=>{
                                gameState.shooting = false;;
                            },  
                            startAt: 0,
                            timeScale: 1
                        }); 
                        gameState.primaryammo -= 1;
                        scattergun_shoot.play();
                        if(gameState.input.x > gameState.hero.x){
                            for (var i = 0; i < 5; i++){
                                gameState.heroprimaryammo = scene.physics.add.sprite(gameState.hero.x+16,gameState.hero.y,'bullet').setGravityY(-1000);
                                scene.physics.moveTo(gameState.heroprimaryammo,gameState.input.x + Math.ceil(Math.random()*100), gameState.input.y+ Math.ceil(Math.random()*100),1000); gameState.angle=Phaser.Math.Angle.Between(gameState.heroprimaryammo.x,gameState.heroprimaryammo.y,gameState.input.x,gameState.input.
                                y);
                                gameState.heroprimaryammo.setRotation(gameState.angle);
                                scene.physics.add.overlap(gameState.heroprimaryammo, gameState.invisibleplatform,(ammo,platform)=>{
                                    ammo.destroy();
                                });
                            }
                            for (var i = 0; i < 5; i++){
                                gameState.heroprimaryammo = scene.physics.add.sprite(gameState.hero.x+16,gameState.hero.y,'bullet').setGravityY(-1000);
                                scene.physics.moveTo(gameState.heroprimaryammo,gameState.input.x + Math.ceil(Math.random()*100), gameState.input.y- Math.ceil(Math.random()*100),1000); gameState.angle=Phaser.Math.Angle.Between(gameState.heroprimaryammo.x,gameState.heroprimaryammo.y,gameState.input.x,gameState.input.
                                y);
                                gameState.heroprimaryammo.setRotation(gameState.angle);
                                scene.physics.add.overlap(gameState.heroprimaryammo, gameState.invisibleplatform,(ammo,platform)=>{
                                    ammo.destroy();
                                });
                            }
                        }
                        else {
                            for (var i = 0; i < 5; i++){
                                gameState.heroprimaryammo = scene.physics.add.sprite(gameState.hero.x-16,gameState.hero.y,'bullet').setGravityY(-1000);
                                scene.physics.moveTo(gameState.heroprimaryammo,gameState.input.x - Math.ceil(Math.random()*100), gameState.input.y+ Math.ceil(Math.random()*100),1000); gameState.angle=Phaser.Math.Angle.Between(gameState.heroprimaryammo.x,gameState.heroprimaryammo.y,gameState.input.x,gameState.input.
                                y);
                                gameState.heroprimaryammo.setRotation(gameState.angle);
                                scene.physics.add.overlap(gameState.heroprimaryammo, gameState.invisibleplatform,(ammo,platform)=>{
                                    ammo.destroy();
                                });
                            }
                            for (var i = 0; i < 5; i++){
                                gameState.heroprimaryammo = scene.physics.add.sprite(gameState.hero.x-16,gameState.hero.y,'bullet').setGravityY(-1000);
                                scene.physics.moveTo(gameState.heroprimaryammo,gameState.input.x - Math.ceil(Math.random()*100), gameState.input.y- Math.ceil(Math.random()*100),1000); gameState.angle=Phaser.Math.Angle.Between(gameState.heroprimaryammo.x,gameState.heroprimaryammo.y,gameState.input.x,gameState.input.
                                y);
                                gameState.heroprimaryammo.setRotation(gameState.angle);
                                scene.physics.add.overlap(gameState.heroprimaryammo, gameState.invisibleplatform,(ammo,platform)=>{
                                    ammo.destroy();
                                });
                            }
                        }
                    }
                    if(gameState.keys.R.isDown && gameState.shooting === false && gameState.primaryammo <= 0 && gameState.reloading === false){
                        gameState.reloading = true;
                        scene.time.addEvent({
                            delay: 400,
                            callback: ()=>{
                                scattergun_reload.play();
                                gameState.primaryammo += 1;
                            },  
                            startAt: 0,
                            timeScale: 1,
                            repeat: 5
                        }); 
                        scene.time.addEvent({
                            delay: 2400,
                            callback: ()=>{
                                gameState.reloading = false;
                            },  
                            startAt: 0,
                            timeScale: 1
                        }); 
                    }
                    if(gameState.keys.W.isDown && gameState.hero.body.touching.down){
                        gameState.jumpcount += 1;
                        gameState.jumping = true;
                        gameState.hero.setVelocityY(-350);
                    }
                    else if(gameState.keys.W.isDown && gameState.jumpcount < 2 && gameState.jumpcooldown <= 0){
                        gameState.jumpcount += 1;
                        gameState.hero.setVelocityY(-350);
                    }
                    if(gameState.keys.D.isDown){
                        gameState.hero.setVelocityX(200);
                        gameState.hero.flipX = false;
                        if(gameState.jumping === false){
                            gameState.hero.anims.play('scoutrun',true);
                        }
                    }
                    else if (gameState.keys.A.isDown){
                        gameState.hero.setVelocityX(-200);
                        gameState.hero.flipX = true;
                        if(gameState.jumping === false){
                            gameState.hero.anims.play('scoutrun',true);
                        }
                    }
                    else if (gameState.hero.body.touching.down){
                        gameState.hero.setVelocityX(0);
                    }
                    if(gameState.hero.body.velocity.x === 0 && gameState.hero.body.velocity.y === 0){
                        gameState.hero.anims.play('scoutidle',true);
                    }
                    if (!gameState.hero.body.touching.down){
                        gameState.hero.anims.play('scoutjump',true);
                    }
                    else{
                        gameState.jumping = false;
                        gameState.jumpcount = 0;
                        gameState.jumpcooldown = 10;
                    }
                }
                else {
                    if(gameState.mouse.isDown && gameState.secondaryammo > 0 && gameState.heroprimarycooldown <= 0 && gameState.reloading === false){
                        pistol_shoot.play();
                        gameState.shooting = true;
                        gameState.heroprimarycooldown = 8;
                        gameState.rando = Math.ceil(Math.random()*2);
                        gameState.secondaryammo -= 1;
                        if(gameState.rando === 1){
                            gameState.heroprimaryammo = scene.physics.add.sprite(gameState.hero.x,gameState.hero.y,'bullet').setGravityY(-1000);
                            scene.physics.moveTo(gameState.heroprimaryammo,gameState.input.x + Math.ceil(Math.random()*25), gameState.input.y+ Math.ceil(Math.random()*25),1000); gameState.angle=Phaser.Math.Angle.Between(gameState.heroprimaryammo.x,gameState.heroprimaryammo.y,gameState.input.x,gameState.input.
                            y);
                            gameState.heroprimaryammo.setRotation(gameState.angle);
                            scene.physics.add.overlap(gameState.heroprimaryammo, gameState.invisibleplatform,(ammo,platform)=>{
                                ammo.destroy();
                            });  
                        }
                        else if(gameState.rando === 2){
                            gameState.heroprimaryammo = scene.physics.add.sprite(gameState.hero.x,gameState.hero.y,'bullet').setGravityY(-1000);
                            scene.physics.moveTo(gameState.heroprimaryammo,gameState.input.x + Math.ceil(Math.random()*25), gameState.input.y- Math.ceil(Math.random()*25),1000); gameState.angle=Phaser.Math.Angle.Between(gameState.heroprimaryammo.x,gameState.heroprimaryammo.y,gameState.input.x,gameState.input.
                            y);
                            gameState.heroprimaryammo.setRotation(gameState.angle);
                            scene.physics.add.overlap(gameState.heroprimaryammo, gameState.invisibleplatform,(ammo,platform)=>{
                                ammo.destroy();
                            });  
                        }
                        gameState.shooting = false;
                    }
                    if(gameState.keys.R.isDown && gameState.shooting === false && gameState.secondaryammo <= 0 && gameState.reloading === false){
                        gameState.reloading = true;
                        pistol_reload.play();
                        scene.time.addEvent({
                            delay: 1000,
                            callback: ()=>{
                                gameState.secondaryammo += 12;
                                gameState.reloading = false;
                            },  
                            startAt: 0,
                            timeScale: 1
                        }); 
                    }
                    if(gameState.keys.W.isDown && gameState.hero.body.touching.down){
                        gameState.jumpcount += 1;
                        gameState.jumping = true;
                        gameState.hero.setVelocityY(-350);
                    }
                    else if(gameState.keys.W.isDown && gameState.jumpcount < 2 && gameState.jumpcooldown <= 0){
                        gameState.jumpcount += 1;
                        gameState.hero.setVelocityY(-350);
                    }
                    if(gameState.keys.D.isDown){
                        gameState.hero.setVelocityX(200);
                        gameState.hero.flipX = false;
                        if(gameState.jumping === false){
                            gameState.hero.anims.play('scoutrun2',true);
                        }
                    }
                    else if (gameState.keys.A.isDown){
                        gameState.hero.setVelocityX(-200);
                        gameState.hero.flipX = true;
                        if(gameState.jumping === false){
                            gameState.hero.anims.play('scoutrun2',true);
                        }
                    }
                    else if (gameState.hero.body.touching.down){
                        gameState.hero.setVelocityX(0);
                    }
                    if(gameState.hero.body.velocity.x === 0 && gameState.hero.body.velocity.y === 0){
                        gameState.hero.anims.play('scoutidle2',true);
                    }
                    if (!gameState.hero.body.touching.down){
                        gameState.hero.anims.play('scoutjump2',true);
                    }
                    else{
                        gameState.jumping = false;
                        gameState.jumpcount = 0;
                        gameState.jumpcooldown = 10;
                    }
                }
            }
            else if(heroclass === 'heavy'){
                if(gameState.weaponselect == 1){
                    if(gameState.mouse.isDown && gameState.primaryammo > 0 && gameState.heroprimarycooldown <= 0 && gameState.reloading === false){
                        minigun_shoot.resume();
                        gameState.shooting = true;
                        gameState.heroprimarycooldown = 5;
                        gameState.rando = Math.ceil(Math.random()*2);
                        gameState.primaryammo -= 1;
                        if(!minigun_shoot.isPlaying){
                            minigun_shoot.play();
                            console.log('lol');
                        }
                        if(gameState.input.x > gameState.hero.x){
                            if(gameState.rando === 1){
                                gameState.heroprimaryammo = scene.physics.add.sprite(gameState.hero.x+21,gameState.hero.y+13,'bullet').setGravityY(-1000);
                                scene.physics.moveTo(gameState.heroprimaryammo,gameState.input.x + Math.ceil(Math.random()*50), gameState.input.y+ Math.ceil(Math.random()*50),1000); gameState.angle=Phaser.Math.Angle.Between(gameState.heroprimaryammo.x,gameState.heroprimaryammo.y,gameState.input.x,gameState.input.
                                y);
                                gameState.heroprimaryammo.setRotation(gameState.angle);
                                scene.physics.add.overlap(gameState.heroprimaryammo, gameState.invisibleplatform,(ammo,platform)=>{
                                    ammo.destroy();
                                });  
                            }
                            else if(gameState.rando === 2){
                                gameState.heroprimaryammo = scene.physics.add.sprite(gameState.hero.x+21,gameState.hero.y+13,'bullet').setGravityY(-1000);
                                scene.physics.moveTo(gameState.heroprimaryammo,gameState.input.x + Math.ceil(Math.random()*50), gameState.input.y- Math.ceil(Math.random()*50),1000); gameState.angle=Phaser.Math.Angle.Between(gameState.heroprimaryammo.x,gameState.heroprimaryammo.y,gameState.input.x,gameState.input.
                                y);
                                gameState.heroprimaryammo.setRotation(gameState.angle);
                                scene.physics.add.overlap(gameState.heroprimaryammo, gameState.invisibleplatform,(ammo,platform)=>{
                                    ammo.destroy();
                                });  
                            }
                        }
                        else {
                            if(gameState.rando === 1){
                                gameState.heroprimaryammo = scene.physics.add.sprite(gameState.hero.x-21,gameState.hero.y+13,'bullet').setGravityY(-1000);
                                scene.physics.moveTo(gameState.heroprimaryammo,gameState.input.x - Math.ceil(Math.random()*50), gameState.input.y+ Math.ceil(Math.random()*50),1000); gameState.angle=Phaser.Math.Angle.Between(gameState.heroprimaryammo.x,gameState.heroprimaryammo.y,gameState.input.x,gameState.input.
                                y);
                                gameState.heroprimaryammo.setRotation(gameState.angle);
                                scene.physics.add.overlap(gameState.heroprimaryammo, gameState.invisibleplatform,(ammo,platform)=>{
                                    ammo.destroy();
                                }); 
                            }
                            else if(gameState.rando === 2){
                                gameState.heroprimaryammo = scene.physics.add.sprite(gameState.hero.x-21,gameState.hero.y+13,'bullet').setGravityY(-1000);
                                scene.physics.moveTo(gameState.heroprimaryammo,gameState.input.x - Math.ceil(Math.random()*50), gameState.input.y+ Math.ceil(Math.random()*50),1000); gameState.angle=Phaser.Math.Angle.Between(gameState.heroprimaryammo.x,gameState.heroprimaryammo.y,gameState.input.x,gameState.input.
                                y);
                                gameState.heroprimaryammo.setRotation(gameState.angle);
                                scene.physics.add.overlap(gameState.heroprimaryammo, gameState.invisibleplatform,(ammo,platform)=>{
                                    ammo.destroy();
                                }); 
                            }
                        }
                    }
                    else if (gameState.mouse.isDown && gameState.primaryammo <= 0 && gameState.heroprimarycooldown <= 0 && gameState.reloading === false){
                        minigun_empty.play();
                        minigun_shoot.pause();
                        gameState.heroprimarycooldown = 5;
                    }
                    else if (!gameState.mouse.isDown){
                        minigun_shoot.pause();
                        gameState.shooting = false;
                    }
                    if(gameState.keys.R.isDown && gameState.shooting === false && gameState.primaryammo <= 0 && gameState.reloading === false){

                    }
                    if(gameState.keys.W.isDown && gameState.hero.body.touching.down && gameState.shooting === false){
                        gameState.jumping = true;
                        gameState.hero.setVelocityY(-350);
                    }
                    if(gameState.keys.D.isDown){
                        if(gameState.shooting === true && gameState.weaponselect === 1){
                            gameState.hero.setVelocityX(80);
                        }
                        else {
                            gameState.hero.setVelocityX(150);
                        }
                        gameState.hero.flipX = false;
                        if(gameState.jumping === false){
                            gameState.hero.anims.play('heavyrun',true);
                        }
                    }
                    else if (gameState.keys.A.isDown){
                        if(gameState.shooting === true && gameState.weaponselect === 1){
                            gameState.hero.setVelocityX(-80);
                        }
                        else {
                            gameState.hero.setVelocityX(-150);
                        }
                        gameState.hero.flipX = true;
                        if(gameState.jumping === false){
                            gameState.hero.anims.play('heavyrun',true);
                        }
                    }
                    else if (gameState.hero.body.touching.down){
                        gameState.hero.setVelocityX(0);
                    }
                    if(gameState.hero.body.velocity.x === 0 && gameState.hero.body.velocity.y === 0 && gameState.weaponselect === 1){
                        gameState.hero.anims.play('heavyidle',true);
                    }
                    if (!gameState.hero.body.touching.down){
                        gameState.hero.anims.play('heavyjump',true);
                    }
                    else{
                        gameState.jumping = false;
                    }
                }
                else {
                    if(gameState.mouse.isDown && gameState.secondaryammo > 0 && gameState.heroprimarycooldown <= 0 && gameState.reloading === false){
                        shotgun_shoot.play();
                        gameState.heroprimarycooldown = 30;
                        gameState.rando = Math.ceil(Math.random()*2);
                        gameState.secondaryammo -= 1;
                        for (var i = 0; i < 5; i++){
                            gameState.heroprimaryammo = scene.physics.add.sprite(gameState.hero.x,gameState.hero.y,'bullet').setGravityY(-1000);
                            scene.physics.moveTo(gameState.heroprimaryammo,gameState.input.x + Math.ceil(Math.random()*100), gameState.input.y+ Math.ceil(Math.random()*100),1000); gameState.angle=Phaser.Math.Angle.Between(gameState.heroprimaryammo.x,gameState.heroprimaryammo.y,gameState.input.x,gameState.input.
                            y);
                            gameState.heroprimaryammo.setRotation(gameState.angle);
                            scene.physics.add.overlap(gameState.heroprimaryammo, gameState.invisibleplatform,(ammo,platform)=>{
                                ammo.destroy();
                            });
                        }
                        for (var i = 0; i < 5; i++){
                            gameState.heroprimaryammo = scene.physics.add.sprite(gameState.hero.x,gameState.hero.y,'bullet').setGravityY(-1000);
                            scene.physics.moveTo(gameState.heroprimaryammo,gameState.input.x + Math.ceil(Math.random()*100), gameState.input.y- Math.ceil(Math.random()*100),1000); gameState.angle=Phaser.Math.Angle.Between(gameState.heroprimaryammo.x,gameState.heroprimaryammo.y,gameState.input.x,gameState.input.
                            y);
                            gameState.heroprimaryammo.setRotation(gameState.angle);
                            scene.physics.add.overlap(gameState.heroprimaryammo, gameState.invisibleplatform,(ammo,platform)=>{
                                ammo.destroy();
                            });
                        }
                    }
                    if(gameState.keys.R.isDown && gameState.shooting === false && gameState.secondaryammo <= 0 && gameState.reloading === false){
                        gameState.reloading = true;
                        scene.time.addEvent({
                            delay: 500,
                            callback: ()=>{
                                shotgun_reload.play();
                                gameState.secondaryammo += 1;
                            },  
                            startAt: 0,
                            timeScale: 1,
                            repeat: 5
                        }); 
                        scene.time.addEvent({
                            delay: 3500,
                            callback: ()=>{
                                gameState.reloading = false;
                            },  
                            startAt: 0,
                            timeScale: 1
                        }); 
                    }
                    if(gameState.keys.W.isDown && gameState.hero.body.touching.down){
                        gameState.jumping = true;
                        gameState.hero.setVelocityY(-350);
                    }
                    if(gameState.keys.D.isDown){
                        if(gameState.shooting === true){
                            gameState.hero.setVelocityX(80);
                        }
                        else {
                            gameState.hero.setVelocityX(150);
                        }
                        gameState.hero.flipX = false;
                        if(gameState.jumping === false){
                            gameState.hero.anims.play('heavyrun2',true);
                        }
                    }
                    else if (gameState.keys.A.isDown){
                        gameState.hero.setVelocityX(-150);
                        gameState.hero.flipX = true;
                        if(gameState.jumping === false){
                            gameState.hero.anims.play('heavyrun2',true);
                        }
                    }
                    else if (gameState.hero.body.touching.down){
                        gameState.hero.setVelocityX(0);
                    }
                    if(gameState.hero.body.velocity.x === 0 && gameState.hero.body.velocity.y === 0){
                        gameState.hero.anims.play('heavyidle2',true);
                    }
                    if (!gameState.hero.body.touching.down){
                        gameState.hero.anims.play('heavyjump2',true);
                    }
                    else{
                        gameState.jumping = false;
                    }
                }
            }
            else if(heroclass === 'demoman'){
                this.input.on('pointerdown', function (pointer) {
                    if (pointer.rightButtonDown()){
                        gameState.pointerdown = true;
                        gameState.herosecondaryammo.getChildren().forEach(ammo => {
                            ammo.destroy();
                            explode.play();
                        });
                    }
                    else{
                        gameState.pointerdown = false;
                    }
                });
                if(gameState.weaponselect === 1){
                    if(gameState.mouse.isDown && gameState.primaryammo > 0 && gameState.heroprimarycooldown <= 0 && gameState.reloading === false){
                        grenadelauncher_shoot.play();
                        gameState.heroprimarycooldown = 30;
                        gameState.primaryammo -= 1;
                        gameState.heroprimaryammo.create(gameState.hero.x+13,gameState.hero.y+20,'redpill').setGravityY(-500).setSize(10,5);
                        gameState.first = gameState.heroprimaryammo.getChildren();
                        var selected = gameState.first[gameState.heroprimaryammo.getChildren().length-1];
                        scene.physics.moveTo(selected,gameState.input.x, gameState.input.y,600); gameState.angle=Phaser.Math.Angle.Between(selected.x,selected.y,gameState.input.x,gameState.input.y);
                        selected.setRotation(gameState.angle);
                        pillaction(selected, scene);
                        gameState.heroprimaryammo.getChildren().forEach(ammo => {
                            
                        });
                        scene.physics.add.collider(gameState.heroprimaryammo, gameState.invisibleplatform,(ammo,platform)=>{
                            if(ammo.body.velocity.x > 0){
                                ammo.body.velocity.x = 100;
                            }
                            else if(ammo.body.velocity.x === 0){
                                ammo.body.velocity.x = 0;
                            }
                            else {
                                ammo.body.velocity.x = -100;
                            }
                        });  
                    }
                    if(gameState.keys.R.isDown && gameState.shooting === false && gameState.primaryammo <= 0 && gameState.reloading === false){
                        gameState.reloading = true;
                        grenadelauncher_drum_open.play();
                        scene.time.addEvent({
                            delay: 600,
                            callback: ()=>{
                                grenadelauncher_reload.play();
                                gameState.primaryammo += 1;
                            },  
                            startAt: 0,
                            timeScale: 1,
                            repeat: 3
                        }); 
                        scene.time.addEvent({
                            delay: 2500,
                            callback: ()=>{
                                gameState.reloading = false;
                                grenadelauncher_drum_close.play();
                            },  
                            startAt: 0,
                            timeScale: 1
                        }); 
                    }
                    if(gameState.keys.W.isDown && gameState.hero.body.touching.down){
                        gameState.jumping = true;
                        gameState.hero.setVelocityY(-350);
                    }
                    if(gameState.keys.D.isDown){
                        gameState.hero.setVelocityX(175);
                        gameState.hero.flipX = false;
                        if(gameState.jumping === false){
                            gameState.hero.anims.play('demomanrun',true);
                        }
                    }
                    else if (gameState.keys.A.isDown){
                        gameState.hero.setVelocityX(-175);
                        gameState.hero.flipX = true;
                        if(gameState.jumping === false){
                            gameState.hero.anims.play('demomanrun',true);
                        }
                    }
                    else if (gameState.hero.body.touching.down){
                        gameState.hero.setVelocityX(0);
                    }
                    if(gameState.hero.body.velocity.x === 0 && gameState.hero.body.velocity.y === 0 && gameState.weaponselect === 1){
                        gameState.hero.anims.play('demomanidle',true);
                    }
                    if (!gameState.hero.body.touching.down){
                        gameState.hero.anims.play('demomanjump',true);
                    }
                    else{
                        gameState.jumping = false;
                    }
                }
                else {
                    if(gameState.mouse.isDown && gameState.secondaryammo > 0 && gameState.heroprimarycooldown <= 0 && gameState.reloading === false&& gameState.pointerdown === false){
                        stickybomblauncher_shoot.play();
                        console.log(gameState.herosecondaryammo.getChildren().length);
                        gameState.heroprimarycooldown = 30;
                        gameState.secondaryammo -= 1;
                        gameState.herosecondaryammo.getChildren().forEach(ammo => {
                            if(gameState.herosecondaryammo.getChildren().length > 7){
                                ammo.destroy();
                                explode.play();
                            }
                        });
                        gameState.herosecondaryammo.create(gameState.hero.x,gameState.hero.y+13,'redstickybomb').setGravityY(-500).setScale(0.5);
                        gameState.first = gameState.herosecondaryammo.getChildren();
                        var selected = gameState.first[gameState.herosecondaryammo.getChildren().length-1]
                        gameState.herosecondaryammo.getChildren().forEach(ammo => {
                            scene.physics.moveTo(selected,gameState.input.x, gameState.input.y,500); gameState.angle=Phaser.Math.Angle.Between(selected.x,selected.y,gameState.input.x,gameState.input.y);
                            selected.setRotation(gameState.angle);
                        });
                        scene.physics.add.collider(gameState.herosecondaryammo, gameState.invisibleplatform,(ammo,platform)=>{
                            ammo.body.velocity.x = 0;
                            ammo.body.velocity.y = 0;
                            ammo.setGravityY(-1000);
                        });  
                    }
                    if(gameState.keys.R.isDown && gameState.shooting === false && gameState.secondaryammo <= 0 && gameState.reloading === false){
                        gameState.reloading = true;
                        scene.time.addEvent({
                            delay: 600,
                            callback: ()=>{
                                stickybomblauncher_reload.play();
                                gameState.secondaryammo += 1;
                            },  
                            startAt: 0,
                            timeScale: 1,
                            repeat: 7
                        }); 
                        scene.time.addEvent({
                            delay: 5000,
                            callback: ()=>{
                                gameState.reloading = false;
                            },  
                            startAt: 0,
                            timeScale: 1,
                            repeat: 7
                        }); 
                    }
                    if(gameState.keys.W.isDown && gameState.hero.body.touching.down){
                        gameState.jumping = true;
                        gameState.hero.setVelocityY(-350);
                    }
                    if(gameState.keys.D.isDown){
                        gameState.hero.setVelocityX(175);
                        gameState.hero.flipX = false;
                        if(gameState.jumping === false){
                            gameState.hero.anims.play('demoman2run',true);
                        }
                    }
                    else if (gameState.keys.A.isDown){
                        gameState.hero.setVelocityX(-175);
                        gameState.hero.flipX = true;
                        if(gameState.jumping === false){
                            gameState.hero.anims.play('demoman2run',true);
                        }
                    }
                    else if (gameState.hero.body.touching.down){
                        gameState.hero.setVelocityX(0);
                    }
                    if(gameState.hero.body.velocity.x === 0 && gameState.hero.body.velocity.y === 0 && gameState.weaponselect === 2){
                        gameState.hero.anims.play('demoman2idle',true);
                    }
                    if (!gameState.hero.body.touching.down){
                        gameState.hero.anims.play('demoman2jump',true);
                    }
                    else{
                        gameState.jumping = false;
                    }
                }
            }
            else if(heroclass === 'spy'){
                if(gameState.weaponselect == 1){
                    if(gameState.mouse.isDown && gameState.primaryammo > 0 && gameState.heroprimarycooldown <= 0 && gameState.reloading === false){
                        gameState.shooting = true;
                        gameState.heroprimarycooldown = 25;
                        scene.time.addEvent({
                            delay: 40,
                            callback: ()=>{
                                gameState.shooting = false;;
                            },  
                            startAt: 0,
                            timeScale: 1
                        }); 
                        gameState.primaryammo -= 1;
                        revolver_shoot.play();
                        gameState.heroprimaryammo = scene.physics.add.sprite(gameState.hero.x,gameState.hero.y,'bullet').setGravityY(-1000);
                        scene.physics.moveTo(gameState.heroprimaryammo,gameState.input.x, gameState.input.y,2000); gameState.angle=Phaser.Math.Angle.Between(gameState.heroprimaryammo.x,gameState.heroprimaryammo.y,gameState.input.x,gameState.input.
                        y);
                        gameState.heroprimaryammo.setRotation(gameState.angle);
                        scene.physics.add.overlap(gameState.heroprimaryammo, gameState.invisibleplatform,(ammo,platform)=>{
                            ammo.destroy();
                        });   
                    }
                    if(gameState.keys.R.isDown && gameState.shooting === false && gameState.primaryammo <= 0 && gameState.reloading === false){
                        gameState.reloading = true;
                        revolver_reload.play();
                        scene.time.addEvent({
                            delay: 1500,
                            callback: ()=>{
                                gameState.primaryammo += 6;
                            },  
                            startAt: 0,
                            timeScale: 1
                        }); 
                        scene.time.addEvent({
                            delay: 1600,
                            callback: ()=>{
                                gameState.reloading = false;
                            },  
                            startAt: 0,
                            timeScale: 1
                        }); 
                    }
                    if(gameState.keys.W.isDown && gameState.hero.body.touching.down){
                        gameState.jumpcount += 1;
                        gameState.jumping = true;
                        gameState.hero.setVelocityY(-350);
                    }
                    else if(gameState.keys.W.isDown && gameState.jumpcount < 2 && gameState.jumpcooldown <= 0){
                        gameState.jumpcount += 1;
                        gameState.hero.setVelocityY(-350);
                    }
                    if(gameState.keys.D.isDown){
                        gameState.hero.setVelocityX(175);
                        gameState.hero.flipX = false;
                        if(gameState.jumping === false){
                            gameState.hero.anims.play('spyrun',true);
                        }
                    }
                    else if (gameState.keys.A.isDown){
                        gameState.hero.setVelocityX(-175);
                        gameState.hero.flipX = true;
                        if(gameState.jumping === false){
                            gameState.hero.anims.play('spyrun',true);
                        }
                    }
                    else if (gameState.hero.body.touching.down){
                        gameState.hero.setVelocityX(0);
                    }
                    if(gameState.hero.body.velocity.x === 0 && gameState.hero.body.velocity.y === 0){
                        gameState.hero.anims.play('spyidle',true);
                    }
                    if (!gameState.hero.body.touching.down){
                        gameState.hero.anims.play('spyjump',true);
                    }
                    else{
                        gameState.jumping = false;
                    }
                }
            }
            if(gameState.input.x > gameState.hero.x){
                gameState.hero.flipX = false;
                gameState.hero.body.offset.x = 0;
            }
            else if(gameState.input.x < gameState.hero.x){
                gameState.hero.flipX = true;
                if(gameState.class === 'demoman'){
                    gameState.hero.body.offset.x = 3;
                }
                else {
                    gameState.hero.body.offset.x = 15;
                }
            }
        }
        gameState.createhero(`${gameState.class}`,this);
        gameState.hero.setCollideWorldBounds(true);
        gameState.loadanims(`${gameState.class}`,this);
	}
    update(){
        gameState.heromovement(`${gameState.class}`,this);
        this.physics.add.collider(gameState.hero, gameState.invisibleplatform);
        console.log(gameState.input.x,gameState.input.y)
    }
}