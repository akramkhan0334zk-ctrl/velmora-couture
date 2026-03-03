const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("canvas-container").appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(10,3,100,16);
const material = new THREE.MeshStandardMaterial({
  color:0xd4af37,
  metalness:1,
  roughness:0.2,
  wireframe:true
});

const knot = new THREE.Mesh(geometry,material);
scene.add(knot);

const light = new THREE.PointLight(0xffffff,1);
light.position.set(20,20,20);
scene.add(light);

camera.position.z=30;

function animate(){
  requestAnimationFrame(animate);
  knot.rotation.x+=0.003;
  knot.rotation.y+=0.004;
  renderer.render(scene,camera);
}

animate();

window.addEventListener("resize",()=>{
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect=window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
});