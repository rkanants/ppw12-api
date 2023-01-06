const tombolKucing = document.getElementById('tombolKucing');
const tombolAnjing = document.getElementById('tombolAnjing');
const hasilKucing = document.getElementById('hasilKucing');
const hasilAnjing = document.getElementById('hasilAnjing');

tombolKucing.addEventListener('click', getKucingAcak);
tombolAnjing.addEventListener('click', getAnjingAcak);

function getKucingAcak() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			hasilKucing.innerHTML = `<img src=${data.file} alt="kucing" />`
		});
}

function getAnjingAcak() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getAnjingAcak();
			}
			else {
				hasilAnjing.innerHTML = `<img src=${data.url} alt="anjing" />`;
			}
		});
}
