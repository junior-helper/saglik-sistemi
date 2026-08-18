const data = {
    "Kocaeli": {
        "İzmit": [
            "Seka Devlet Hastanesi ---> 14",
            "Şehir Hastanesi ---> 29/1",
            "Devlet Hastanesi ---> 15",
            "Ambulans Komuta Merkezi ---> 7",
            "İlçe Sağlık Müdürlüğü ---> 7",
            "2 Nolu Acil Sağlık Hizmetleri İstasyonu ---> 3"
        ],

        "Darıca": [
            "6 Nolu Acil Sağlık Hizmetleri İstasyonu ---> 2",
            "Farabi Eğitim Araştırma ---> 22",
            "İlçe Sağlık Müdürlüğü ---> 5"
        ],

        "Körfez": [
            "1 Nolu Acil Sağlık Hizmetleri İstasyonu ---> 2",
            "2 Nolu Acil Sağlık Hizmetleri İstasyonu ---> 3",
            "Devlet Hastanesi ---> 9",
            "İlçe Sağlık Müdürlüğü ---> 5"
        ],

        "Kartepe": [
            "İlçe Sağlık Müdürlüğü ---> 5"
        ],

        "Gölcük": [
            "1 Nolu Acil Sağlık Hizmetleri İstasyonu ---> 2",
            "İlçe Sağlık Müdürlüğü ---> 6",
            "Necati Çelik Devlet Hastanesi ---> 15/4"
        ],

        "Gebze": [
            "İlçe Sağlık Müdürlüğü ---> 4",
            "Fatih Devlet Hastanesi ---> 10",
            "1 Nolu Acil Sağlık Hizmetleri İstasyonu ---> 2"
        ],

        "Derince": [
            "1 Nolu 112 Acil Sağlık Hizmetleri İstasyonu ---> 3",
            "İlçe Sağlık Müdürlüğü ---> 6",
            "Eğitim Araştırma ---> 27"
        ],

        "Dilovası": [
            "İlçe Sağlık Müdürlüğü ---> 4",
            "Devlet Hastanesi ---> 8"
        ],

        "Çayırova": [
            "İlçe Sağlık Müdürlüğü ---> 6"
        ],

        "Kandıra": [
            "İlçe Sağlık Müdürlüğü ---> 5",
            "Ecz. Kazım Dinç Devlet Hastanesi ---> 9",
            "1 Nolu Acil Sağlık Hizmetleri İstasyonu ---> 2"
        ],

        "Karamürsel": [
            "İlçe Sağlık Müdürlüğü ---> 4",
            "Devlet Hastanesi ---> 8",
            "1 Nolu Acil Sağlık Hizmetleri İstasyonu ---> 3"
        ],

        "Başiskele": [
            "İlçe Sağlık Müdürlüğü ---> 5"
        ]
    },

    "Sakarya": {
        "Adapazarı": [
            "Eğitim Araştırma ---> 27/2",
            "İlçe Sağlık Müdürlüğü ---> 3",
            "1 Nolu Acil Sağlık Hizmetleri İstasyonu ---> 1",
            "2 Nolu Acil Sağlık Hizmetleri İstasyonu ---> 1",
            "Yenikent Devlet Hastanesi ---> 10",
            "Ambulans Komuta Merkezi ---> 5"
        ],

        "Akyazı": [
            "4 Nolu Acil Sağlık Hizmetleri İstasyonu ---> 2",
            "İlçe Sağlık Müdürlüğü ---> 2",
            "Devlet Hastanesi ---> 13"
        ],

        "Arifiye": [
            "Sadıka Sabancı Devlet Hastanesi ---> 12"
        ],

        "Serdivan": [
            "4 Nolu Acil Sağlık Hizmetleri İstasyonu ---> 1",
            "Devlet Hastanesi ---> 6",
            "İlçe Sağlık Müdürlüğü ---> 2",
            "Devlet Hastanesi ---> 8"
        ],

        "Hendek": [
            "4 Nolu Acil Sağlık Hizmetleri İstasyonu ---> 2",
            "İlçe Sağlık Müdürlüğü ---> 2",
            "Devlet Hastanesi ---> 14"
        ],

        "Geyve": [
            "İlçe Sağlık Müdürlüğü ---> 1",
            "Devlet Hastanesi ---> 11"
        ],

        "Karasu": [
            "7 Nolu Acil Sağlık Hizmetleri İstasyonu ---> 1",
            "İlçe Sağlık Müdürlüğü ---> 2",
            "Devlet Hastanesi ---> 15"
        ],

        "Pamukova": [
            "İlçe Sağlık Müdürlüğü ---> 2",
            "Devlet Hastanesi ---> 4"
        ],

        "Karapürçek": [
            "Toplum Sağlığı Merkezi ---> 1"
        ],

        "Taraklı": [
            "Devlet Hastanesi ---> 2"
        ],

        "Kocaali": [
            "Devlet Hastanesi ---> 6"
        ],

        "Ferizli": [
            "İlçe Sağlık Müdürlüğü ---> 3",
            "Devlet Hastanesi ---> 5"
        ],

        "Kaynarca": [
            "Toplum Sağlığı Merkezi ---> 2",
            "Şehit Gökhan Ayder Devlet Hastanesi ---> 4"
        ],

        "Sapanca": [
            "Devlet Hastanesi ---> 8"
        ],

        "Erenler": [
            "İlçe Sağlık Müdürlüğü ---> 2"
        ]
    }
};


// ========================================
// HTML ELEMENTS
// ========================================

const container = document.getElementById("iller");
const searchBox = document.getElementById("searchBox");


// ========================================
// TURKISH TEXT NORMALIZATION
// ========================================

function normalizeText(text) {

    return text
        .toLocaleLowerCase("tr-TR")
        .trim();

}


// ========================================
// SHOW CITIES
// ========================================

function showCities() {

    container.innerHTML = "";

    document.querySelector("h2").textContent = "İller";

    searchBox.value = "";


    Object.keys(data).forEach(function(il) {

        const city = document.createElement("div");

        city.className = "city";

        city.textContent = il;


        city.addEventListener("click", function() {

            showDistricts(il);

        });


        container.appendChild(city);

    });

}


// ========================================
// SHOW DISTRICTS
// ========================================

function showDistricts(il) {

    container.innerHTML = "";

    document.querySelector("h2").textContent =
        il + " - İlçeler";

    searchBox.value = "";


    // BACK BUTTON

    const backButton = document.createElement("button");

    backButton.textContent = "← Geri";


    backButton.addEventListener("click", function() {

        showCities();

    });


    container.appendChild(backButton);


    // DISTRICTS

    Object.keys(data[il]).forEach(function(ilce) {

        const district = document.createElement("div");

        district.className = "city";

        district.textContent = ilce;


        district.addEventListener("click", function() {

            showInstitutions(il, ilce);

        });


        container.appendChild(district);

    });

}


// ========================================
// SHOW INSTITUTIONS
// ========================================

function showInstitutions(il, ilce) {

    container.innerHTML = "";

    document.querySelector("h2").textContent =
        il + " → " + ilce;

    searchBox.value = "";


    // BACK BUTTON

    const backButton = document.createElement("button");

    backButton.textContent = "← Geri";


    backButton.addEventListener("click", function() {

        showDistricts(il);

    });


    container.appendChild(backButton);


    // INSTITUTIONS

    data[il][ilce].forEach(function(institution) {

        const item = document.createElement("div");

        item.className = "city";

        item.textContent = institution;


        container.appendChild(item);

    });

}


// ========================================
// SEARCH
// ========================================

function searchAll() {

    const searchText =
        normalizeText(searchBox.value);


    // EMPTY SEARCH

    if (searchText === "") {

        showCities();

        return;

    }


    container.innerHTML = "";

    document.querySelector("h2").textContent =
        "Arama Sonuçları";


    let resultFound = false;


    // SEARCH THROUGH ALL DATA

    Object.keys(data).forEach(function(il) {

        Object.keys(data[il]).forEach(function(ilce) {

            data[il][ilce].forEach(function(institution) {


                const fullText =
                    il + " " +
                    ilce + " " +
                    institution;


                const normalizedFullText =
                    normalizeText(fullText);


                if (
                    normalizedFullText.includes(searchText)
                ) {

                    resultFound = true;


                    const result =
                        document.createElement("div");


                    result.className = "city";


                    result.textContent =
                        il +
                        " → " +
                        ilce +
                        " → " +
                        institution;


                    container.appendChild(result);

                }

            });

        });

    });


    // NO RESULTS

    if (!resultFound) {

        const noResult =
            document.createElement("div");


        noResult.className = "city";


        noResult.textContent =
            "Sonuç bulunamadı.";


        container.appendChild(noResult);

    }

}


// ========================================
// SEARCH EVENT
// ========================================

searchBox.addEventListener(
    "input",
    searchAll
);


// ========================================
// START WEBSITE
// ========================================

showCities();