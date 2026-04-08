const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
    });
  });
}

const varietyCatalog = [
  {
    name: "Володя",
    patentHolder: "ООО «Актив Агро», оригинатор АО «Щелково Агрохим»",
    registry:
      "Госреестр РФ с 2022 года: Центрально-Черноземный (5), Северо-Кавказский (6), Средневолжский (7)",
    region: "ЦЧР / СКФО / Средневолжье",
    winterHardiness: "Высокая",
    maturity: "Среднеспелый",
    protein: "до 18.2%",
    avgYield: "108.6 ц/га",
    maxYield: "122.6 ц/га",
    diseaseResistance:
      "Высокоустойчив к бурой ржавчине, умеренно устойчив к мучнистой росе и септориозу; восприимчив к фузариозу колоса и твердой головне",
    notes:
      "Низкорослый сорт высокоинтенсивного типа (75-90 см), устойчив к полеганию и осыпанию, созревает на 2-3 дня раньше стандарта Московская 39.",
    sourceUrl: "https://betaren.ru/",
    sourceLabel: "Материалы betaren.ru",
  },
  {
    name: "Изумруд Дубовицкого",
    patentHolder: "АО «Щелково Агрохим»",
    registry:
      "Госреестр РФ с 2026 года: Центрально-Черноземный (5), Средневолжский (7), Уральский (9)",
    region: "ЦЧР / Средневолжье / Урал",
    winterHardiness: "Высокая",
    maturity: "Раннеспелый",
    protein: "высокие хлебопекарные показатели",
    avgYield: "109.1 ц/га",
    maxYield: "115.6 ц/га",
    diseaseResistance:
      "Устойчив к пыльной и твердой головне, септориозу; восприимчив к бурой ржавчине и мучнистой росе",
    notes:
      "Низкорослый интенсивный сорт (80-90 см), выраженная засухоустойчивость и зимостойкость, высокий потенциал в засушливых регионах.",
    sourceUrl:
      "https://betaren.ru/videos/populyarnoe/zyuganovka-i-ermolovka-sorta-chempiony-ot-shchelkovo-agrokhim/",
    sourceLabel: "Публикации и материалы betaren.ru",
  },
  {
    name: "ДФ 2020",
    patentHolder: "АО «Щелково Агрохим»",
    registry: "Госреестр РФ с 2024 года: Средневолжский (7), Уральский (9)",
    region: "Средневолжье / Урал",
    winterHardiness: "Высокая",
    maturity: "Среднеранний",
    protein: "ценное зерно, натура 760-810 г/л",
    avgYield: "118.6 ц/га",
    maxYield: "124.6 ц/га",
    diseaseResistance:
      "Устойчив к пыльной и твердой головне, септориозу; восприимчив к бурой ржавчине и мучнистой росе",
    notes:
      "Интенсивный сорт с высокой адаптивностью к абиотическим стрессам, масса 1000 зерен 38-45 г.",
    sourceUrl: "https://betaren.ru/",
    sourceLabel: "Материалы betaren.ru",
  },
  {
    name: "Система",
    patentHolder: "АО «Щелково Агрохим» / АО Агрохолдинг «Степь»",
    registry: "Госреестр РФ с 2025 года: Северо-Кавказский (6)",
    region: "СКФО",
    winterHardiness: "Высокая",
    maturity: "Среднеспелый",
    protein: "более 16% в технологических опытах",
    avgYield: "118.9 ц/га",
    maxYield: "127.8 ц/га",
    diseaseResistance:
      "Устойчив к стеблевой и желтой ржавчине, вирусным болезням; восприимчив к фузариозу колоса",
    notes:
      "Высокоинтенсивный низкорослый сорт (80-90 см), способен формировать урожайность свыше 120 ц/га.",
    sourceUrl: "https://betaren.ru/",
    sourceLabel: "Материалы betaren.ru",
  },
  {
    name: "Ермоловка",
    patentHolder: "АО «Щелково Агрохим»",
    registry: "Госреестр РФ с 2025 года: Центральный регион (3)",
    region: "Центральный регион",
    winterHardiness: "Средняя",
    maturity: "Среднепоздний",
    protein: "более 15%, клейковина до 30%",
    avgYield: "131.4 ц/га",
    maxYield: "165.7 ц/га",
    diseaseResistance:
      "Устойчив к желтой, бурой и стеблевой ржавчине, вирусным заболеваниям; слабее устойчив к септориозу",
    notes:
      "Высокотехнологичный сорт с высокой регенерационной способностью весной, трижды отмечен рекордной продуктивностью.",
    sourceUrl:
      "https://betaren.ru/videos/populyarnoe/zyuganovka-i-ermolovka-sorta-chempiony-ot-shchelkovo-agrokhim/",
    sourceLabel: "Материал на betaren.ru",
  },
  {
    name: "Сократ",
    patentHolder: "АО «Щелково Агрохим»",
    registry: "Госреестр РФ с 2026 года: Центральный регион (3)",
    region: "Центральный регион",
    winterHardiness: "Средняя",
    maturity: "Среднепоздний",
    protein: "технологически относится к филлерам",
    avgYield: "136.2 ц/га",
    maxYield: "163.0 ц/га",
    diseaseResistance:
      "Устойчив к желтой ржавчине, вирусным заболеваниям; при бурой ржавчине проявляет толерантность",
    notes:
      "Высокотехнологичный сорт с крупным колосом, высокой озерненностью и выраженной регенерацией в весенний период.",
    sourceUrl: "https://betaren.ru/",
    sourceLabel: "Материалы betaren.ru",
  },
  {
    name: "Интеза",
    patentHolder: "АО «Щелково Агрохим»",
    registry:
      "Госреестр РФ с 2026 года: Центральный (3) и Северо-Кавказский (6) регионы",
    region: "Центральный регион / СКФО",
    winterHardiness: "Высокая",
    maturity: "Среднеранний",
    protein: "до 15.9%",
    avgYield: "118.5 ц/га",
    maxYield: "129.1 ц/га",
    diseaseResistance:
      "Высокоустойчив к бурой ржавчине, умеренно устойчив к мучнистой росе и септориозу; восприимчив к фузариозу колоса и твердой головне",
    notes:
      "Низкорослый высокоинтенсивный сорт (75-90 см), устойчив к полеганию и осыпанию, высокая адаптивность.",
    sourceUrl: "https://betaren.ru/",
    sourceLabel: "Материалы betaren.ru",
  },
];

const varietiesGrid = document.getElementById("varietiesGrid");
const varietySearch = document.getElementById("varietySearch");
const regionFilter = document.getElementById("regionFilter");
const winterHardinessFilter = document.getElementById("winterHardinessFilter");
const maturityFilter = document.getElementById("maturityFilter");
const catalogCount = document.getElementById("catalogCount");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");

function uniqueValues(list, key) {
  return [...new Set(list.map((item) => item[key]).filter(Boolean))];
}

function fillRegionOptions() {
  if (!regionFilter) return;
  uniqueValues(varietyCatalog, "region").forEach((region) => {
    const option = document.createElement("option");
    option.value = region;
    option.textContent = region;
    regionFilter.appendChild(option);
  });
}

function renderVarieties(items) {
  if (!varietiesGrid) return;

  varietiesGrid.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "module";
    card.innerHTML = `
      <h3>${item.name}</h3>
      <ul>
        <li>Регион допуска: ${item.region}</li>
        <li>Патентообладатель: ${item.patentHolder}</li>
        <li>${item.registry}</li>
        <li>Зимостойкость: ${item.winterHardiness}</li>
        <li>Срок созревания: ${item.maturity}</li>
        <li>Белок: ${item.protein}</li>
        <li>Средняя урожайность: ${item.avgYield}</li>
        <li>Максимальная урожайность: ${item.maxYield}</li>
        <li>Устойчивость: ${item.diseaseResistance}</li>
        <li>${item.notes}</li>
        <li>Источник: <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer">${item.sourceLabel}</a></li>
      </ul>
    `;
    varietiesGrid.appendChild(card);
  });

  if (catalogCount) {
    catalogCount.textContent = `Показано сортов: ${items.length} из ${varietyCatalog.length}`;
  }
}

function applyVarietyFilters() {
  const query = (varietySearch?.value || "").trim().toLowerCase();
  const region = regionFilter?.value || "";
  const winterHardiness = winterHardinessFilter?.value || "";
  const maturity = maturityFilter?.value || "";

  const filtered = varietyCatalog.filter((item) => {
    const byName = !query || item.name.toLowerCase().includes(query);
    const byRegion = !region || item.region === region;
    const byHardiness = !winterHardiness || item.winterHardiness === winterHardiness;
    const byMaturity = !maturity || item.maturity === maturity;
    return byName && byRegion && byHardiness && byMaturity;
  });

  renderVarieties(filtered);
}

if (varietiesGrid) {
  fillRegionOptions();
  renderVarieties(varietyCatalog);

  [varietySearch, regionFilter, winterHardinessFilter, maturityFilter].forEach((el) => {
    el?.addEventListener("input", applyVarietyFilters);
    el?.addEventListener("change", applyVarietyFilters);
  });

  resetFiltersBtn?.addEventListener("click", () => {
    if (varietySearch) varietySearch.value = "";
    if (regionFilter) regionFilter.value = "";
    if (winterHardinessFilter) winterHardinessFilter.value = "";
    if (maturityFilter) maturityFilter.value = "";
    renderVarieties(varietyCatalog);
  });
}
