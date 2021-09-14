
var container, stats;
var camera, scene, controls, renderer;
var effect;

var frustumSize = 1000;

init();
animate();

function init(  ) {

	var width = window.innerWidth || 2;
	var height = window.innerHeight || 2;

	container = document.createElement( 'div' );
	container.style.position="fixed";
	document.body.appendChild( container );

	var aspect = window.innerWidth / window.innerHeight;
	camera = new THREE.OrthographicCamera( frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 0.001, 2000 );
	camera.position.y = 200;
	camera.position.x = 400;

	scene = new THREE.Scene();
	scene.background = new THREE.Color( "none");

	// Cubes
	var geometry = new THREE.BoxGeometry(800,300,300);
	
	
	var material = new THREE.MeshLambertMaterial( { color: "white", overdraw: 0 } );

	for ( var i = 0; i < 35; i ++ ) {

		var cube = new THREE.Mesh( geometry, material );
		cube.position.x = Math.floor( ( Math.random() * 5000 - 500 ) / 200 ) * 200 + 25;
		 cube.position.y = Math.floor( ( Math.random() * 5000 - 500 ) / 200 ) * 200 + 25;
		cube.position.y=0;
		cube.position.z = Math.floor( ( Math.random() * 5000 - 500 ) / 200 ) * 200 + 25;

		scene.add( cube );

	}

	// Lights

	var ambientLight = new THREE.AmbientLight( Math.random() * 0x10 );
	scene.add( ambientLight );

	var color1 =3540401.840119951;
	var directionalLight = new THREE.DirectionalLight( color1 );
	console.log("color1: "+ color1);
	directionalLight.position.x = Math.random() - 0.1;
	directionalLight.position.y = Math.random() - 0.5;
	directionalLight.position.z = Math.random() - 0.5;
	directionalLight.position.normalize();
	scene.add( directionalLight );
	
	var color2 =14960462.948172117;
	var directionalLight = new THREE.DirectionalLight( color2 );
	console.log("color2: "+ color2);
	directionalLight.position.x =Math.random() - 0.1;
	directionalLight.position.y =Math.random() - 0.1;
	directionalLight.position.z =Math.random() - 0.1;
	directionalLight.position.normalize();
	scene.add( directionalLight );

	renderer = new THREE.CanvasRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	//container.appendChild( renderer.domElement );
	
	effect = new THREE.AsciiEffect( renderer );
	effect.setSize( width,height );
	container.appendChild( effect.domElement );

	window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
	var aspect = window.innerWidth / window.innerHeight;
	camera.left   = - frustumSize * aspect / 2;
	camera.right  =   frustumSize * aspect / 2;
	camera.top    =   frustumSize / 2;
	camera.bottom = - frustumSize / 2;
	camera.updateProjectionMatrix();
	// renderer.setSize( window.innerWidth, window.innerHeight );
	effect.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
	// controls.update();
	requestAnimationFrame( animate );

	render();
}

function render() {
	var timer = Date.now() * 0.0001;
	camera.position.x = Math.cos( timer ) * 500;
	camera.position.z = Math.sin( timer ) * 500;
	camera.lookAt( scene.position );

	renderer.clear();
	// renderer.render( scene, camera );

	effect.render( scene, camera );

}
