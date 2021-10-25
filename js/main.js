"use strict";

let myDigiList = [];

const showDigiList = (list) => {
	list.forEach((digiInfo) => {
		let container = document.createElement("div");
		container.className = "container";

		let name = document.createElement("h2");
		name.className = "digiName";
		name.innerHTML = digiInfo.name;

		let digiImg = document.createElement("img");
		digiImg.className = "photo";
		digiImg.setAttribute("src", digiInfo.img);
		digiImg.setAttribute("alt", digiInfo.name);

		let level = document.createElement("span");
		level.className = "level";
		level.textContent = digiInfo.level;

		document.querySelector(".digiList").appendChild(container);
		container.appendChild(name);
		container.appendChild(digiImg);
		container.appendChild(level);
	});
};

const url = "https://digimon-api.vercel.app/api/digimon";

fetch(url)
	.then((result) => result.json())
	.then((digiEvol) => {
		myDigiList = digiEvol;

		showDigiList(myDigiList);
	});

const refreshInfo = () => {
	document.querySelector(".digiList").innerHTML = "";
};

const filterByLevel = () => {
	refreshInfo();

	let filterList = document.getElementById("filterList").value;

	switch (filterList) {
		case "inTraining":
			showDigiList(
				myDigiList.filter((digiLevel) => {
					let level = digiLevel.level;

					if (level == "In Training") return true;
					else if (level != "In Training") return false;
				})
			);
			break;
		case "rookie":
			showDigiList(
				myDigiList.filter((digiLevel) => {
					let level = digiLevel.level;

					if (level == "Rookie") return true;
					else if (level != "Rookie") return false;
				})
			);
			break;
		case "champion":
			showDigiList(
				myDigiList.filter((digiLevel) => {
					let level = digiLevel.level;

					if (level == "Champion") return true;
					else if (level != "Champion") return false;
				})
			);
			break;
		case "ultimate":
			showDigiList(
				myDigiList.filter((digiLevel) => {
					let level = digiLevel.level;

					if (level == "Ultimate") return true;
					else if (level != "Ultimate") return false;
				})
			);
			break;
		case "fresh":
			showDigiList(
				myDigiList.filter((digiLevel) => {
					let level = digiLevel.level;

					if (level == "Fresh") return true;
					else if (level != "Fresh") return false;
				})
			);
			break;

		case "mega":
			showDigiList(
				myDigiList.filter((digiLevel) => {
					let level = digiLevel.level;

					if (level == "Mega") return true;
					else if (level != "Mega") return false;
				})
			);
			break;

		default:
			showDigiList(
				myDigiList.filter((digiLevel) => {
					let level = digiLevel.level;

					if (level == "In Training") return true;
					else if (level != "In Training") return false;
				})
			);
			break;
	}
};

document.getElementById("filterList").addEventListener("change", filterByLevel);
