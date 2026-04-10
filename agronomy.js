/**
 * База знаний: озимая пшеница — этапы и препараты Щелково Агрохим (betaren.ru)
 */
(function () {
  const typeClass = {
    fungicide: "border-l-4 border-blue-600 bg-blue-50/80",
    herbicide: "border-l-4 border-amber-500 bg-amber-50/80",
    insecticide: "border-l-4 border-red-600 bg-red-50/80",
    nutrition: "border-l-4 border-green-600 bg-green-50/80",
    growth: "border-l-4 border-violet-600 bg-violet-50/80",
  };

  const AGRONOMY_STAGES = {
    stage0: {
      title: "Этап 0 — Подготовка и сев",
      cardTitle: "Подготовка и сев",
      meta: { season: "Осень", period: "Август — октябрь", bbch: "до 13", nitrogen: null },
      description:
        "Базовое питание перед посевом и протравка/биостимуляция семян.",
      blocks: [
        {
          type: "nutrition",
          heading: "Перед посевом",
          items: [
            {
              name: "NPK(S) 5:17:36:2",
              norm: "200 кг/га",
              when: "Перед посевом, при основной подготовке почвы (до сева).",
              text: "Основное внесение до посева.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/",
            },
          ],
        },
        {
          type: "fungicide",
          heading: "Протравка",
          items: [
            {
              name: "Поларис Кватро",
              norm: "1,5 л/т",
              when: "На этапе протравки семян, непосредственно перед посевом.",
              text: "Фунгицидная обработка семян перед посевом.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/protraviteli-semyan/insekto-fungitsidnye/polaris-kvatro-sme/",
            },
          ],
        },
        {
          type: "nutrition",
          heading: "Биостимуляция семян",
          items: [
            {
              name: "Биостим Старт",
              norm: "1,0 л/т",
              when: "В баковой смеси при протравке семян перед севом.",
              text: "Стимуляция стартового развития.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/aminokislotnye-biostimulyatory/biostim_start/",
            },
            {
              name: "Гумат калия",
              norm: "0,7 л/т",
              when: "В баковой смеси при протравке семян перед севом.",
              text: "Поддержка энергии прорастания и укоренения.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/organomineralnoe-udobrenie/gumat_kaliya_sufler/",
            },
          ],
        },
      ],
    },
    stage1: {
      title: "Этап 1 — Осенние обработки",
      cardTitle: "Кущение (осень)",
      meta: { season: "Осень", period: "Октябрь — ноябрь", bbch: "13–24", nitrogen: null },
      description:
        "Обработки №2 и №3 из карты: регулирование роста, гербицидная и фунгицидная защита, микроэлементная поддержка.",
      blocks: [
        {
          type: "growth",
          heading: "Обработка №2 (фаза 13–14)",
          items: [
            {
              name: "Костандо",
              norm: "0,2 л/га",
              when: "Осенью в фазе ВВСН 13–14.",
              text: "Осеннее регулирование роста и укрепление посева.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/regulyatory-rosta-rasteniy/costando/",
            },
          ],
        },
        {
          type: "nutrition",
          heading: "Листовая подкормка",
          items: [
            {
              name: "Азафок",
              norm: "2,0 л/га",
              when: "Осенью в фазе ВВСН 13–14 (в составе обработки №2).",
              text: "Жидкое микробиологическое удобрение для улучшения питания растений азотом, фосфором и калием.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/mikrobiologicheskie-preparaty/azafok/",
            },
          ],
        },
        {
          type: "nutrition",
          heading: "Микроэлементное питание",
          items: [
            {
              name: "Ультрамаг Молибден",
              norm: "0,9 л/га",
              when: "Осенью в фазе ВВСН 13–14 (совместно с обработкой №2).",
              text: "Поддержка обменных процессов в осеннюю вегетацию. Поддержка процесса азотфиксации.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/mikroudobreniya/ultramag_molibden/",
            },
          ],
        },
        {
          type: "fungicide",
          heading: "Обработка №3 (фаза 24)",
          items: [
            {
              name: "Беназол",
              norm: "0,6 л/га",
              when: "Осенью в фазе ВВСН 24 (обработка №3).",
              text: "Фунгицидная защита посева в фазе кущения.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/fungitsidy/benazol_sp/",
            },
          ],
        },
      ],
    },
    stage2: {
      title: "Этап 2 — Возобновление вегетации (весна)",
      cardTitle: "Возобновление (весна)",
      meta: {
        season: "Весна",
        period: "Февраль — март",
        bbch: "25",
        nitrogen: "Аммиачная селитра — 150 кг/га (первая весенняя подкормка)",
      },
      description:
        "Обработка №4 по технологической карте: ранневесенняя фунгицидная обработка и стимуляция после перезимовки.",
      blocks: [
        {
          type: "fungicide",
          heading: "Обработка №4",
          items: [
            {
              name: "Азорро",
              norm: "1,0 л/га",
              when: "Ранней весной в фазе ВВСН 25 (обработка №4).",
              text: "Ранняя фунгицидная защита в фазе 25.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/fungitsidy/azorro/",
            },
          ],
        },
        {
          type: "nutrition",
          heading: "Антистресс",
          items: [
            {
              name: "Ультрамаг Фосфор Супер",
              norm: "2,0 л/га",
              when: "Ранней весной в фазе ВВСН 25 (в баковой смеси обработки №4).",
              text: "Стимулирование весеннего отрастания.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/makroudobreniya/ultramag-fosfor-super/",
            },
            {
              name: "Гумат калия Суфлер",
              norm: "0,3 л/га",
              when: "Ранней весной в фазе ВВСН 25 (в баковой смеси обработки №4).",
              text: "Антистрессовая поддержка в начале вегетации.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/organomineralnoe-udobrenie/gumat_kaliya_sufler/",
            },
          ],
        },
      ],
    },
    stage3: {
      title: "Этап 3 — Кущение (весна)",
      cardTitle: "Кущение (весна)",
      meta: { season: "Весна", period: "Март — апрель", bbch: "27–29", nitrogen: null },
      description:
        "Обработка №5 из карты: гербицидная защита и листовая подкормка в фазе 27–29.",
      blocks: [
        {
          type: "herbicide",
          heading: "Обработка №5",
          items: [
            {
              name: "Пиксель",
              norm: "0,3 л/га",
              when: "Весной в фазе ВВСН 27–29 (обработка №5).",
              text: "Системный контроль двудольных сорняков.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/gerbitsidy/pixel_md/",
            },
          ],
        },
        {
          type: "nutrition",
          heading: "Листовая подкормка",
          items: [
            {
              name: "Ультрамаг комби для зерновых",
              norm: "2,0 л/га",
              when: "Весной в фазе ВВСН 27–29 (листовая подкормка в обработке №5).",
              text: "Микроэлементы в баковой смеси с гербицидной обработкой.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/mikroudobreniya/ultramag_combi_zernovie/",
            },
            {
              name: "Азафок",
              norm: "2,0 л/га",
              when: "Весной в фазе ВВСН 27–29 (в составе листовой подкормки обработки №5).",
              text: "Жидкое микробиологическое удобрение для улучшения питания растений азотом, фосфором и калием.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/mikrobiologicheskie-preparaty/azafok/",
            },
          ],
        },
      ],
    },
    stage4: {
      title: "Этап 4 — Выход в трубку",
      cardTitle: "Выход в трубку",
      meta: {
        season: "Весна",
        period: "Апрель — май",
        bbch: "31",
        nitrogen: "Аммиачная селитра — 150 кг/га (подкормка в фазе 31)",
      },
      description:
        "Обработка №6 по карте: регуляция роста, биостимуляция, питание и инсектицидная защита.",
      blocks: [
        {
          type: "growth",
          heading: "Обработка №6",
          items: [
            {
              name: "Костандо",
              norm: "0,4 л/га",
              when: "Весной в фазе ВВСН 31 (обработка №6).",
              text: "Регуляция роста и снижение риска полегания.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/regulyatory-rosta-rasteniy/costando/",
            },
          ],
        },
        {
          type: "nutrition",
          heading: "Биостимуляция и питание",
          items: [
            {
              name: "Биостим зерновой",
              norm: "2,0 л/га",
              when: "Весной в фазе ВВСН 31 (в составе обработки №6).",
              text: "Поддержка активного роста в трубковании.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/aminokislotnye-biostimulyatory/biostim_zernovoy/",
            },
          ],
        },
        {
          type: "herbicide",
          heading: "Гербицидная защита",
          items: [
            {
              name: "Арго Прим",
              norm: "0,5 л/га",
              when: "Весной в фазе ВВСН 31 (в составе обработки №6).",
              text: "Листовое питание по карте обработок.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/gerbitsidy/argo-prim-me/",
            },
          ],
        },
        {
          type: "insecticide",
          heading: "Инсектицидная защита",
          items: [
            {
              name: "Фаскорд",
              norm: "0,15 л/га",
              when: "Весной в фазе ВВСН 31 (в составе обработки №6).",
              text: "Защита посева от комплекса вредителей.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/insektitsidy-i-akaritsidy/faskord_ke/",
            },
          ],
        },
      ],
    },
    stage5: {
      title: "Этап 5 — Флаговый лист",
      cardTitle: "Флаговый лист",
      meta: { season: "Весна / начало лета", period: "Май", bbch: "39", nitrogen: null },
      description:
        "Обработка №7 по технологической карте: фунгицид + биостимуляция + гумат + инсектицид.",
      blocks: [
        {
          type: "fungicide",
          heading: "Обработка №7",
          items: [
            {
              name: "Триада",
              norm: "0,6 л/га",
              when: "Весной в фазе ВВСН 39 (обработка №7).",
              text: "Фунгицидная защита листового аппарата в фазе 39.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/fungitsidy/triada_kkr/",
            },
          ],
        },
        {
          type: "nutrition",
          heading: "Антистресс",
          items: [
            {
              name: "Биостим универсал",
              norm: "0,5 л/га",
              when: "Весной в фазе ВВСН 39 (в составе обработки №7).",
              text: "Поддержка продуктивности в период формирования урожая. Защита от высоких температур.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/aminokislotnye-biostimulyatory/biostim_universal/",
            },
            {
              name: "Гумат калия Суфлер",
              norm: "0,5 л/га",
              when: "Весной в фазе ВВСН 39 (в составе обработки №7).",
              text: "Антистрессовая поддержка культуры. Защита от высоких температур.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/organomineralnoe-udobrenie/gumat_kaliya_sufler/",
            },
          ],
        },
        {
          type: "insecticide",
          heading: "Инсектицид",
          items: [
            {
              name: "Фаскорд",
              norm: "0,15 л/га",
              when: "Весной в фазе ВВСН 39 (в составе обработки №7).",
              text: "Контроль вредителей в ключевой фазе формирования урожая.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/insektitsidy-i-akaritsidy/faskord_ke/",
            },
          ],
        },
      ],
    },
    stage6: {
      title: "Этап 6 — Колошение и цветение",
      cardTitle: "Колошение и цветение",
      meta: {
        season: "Лето",
        period: "Май — июнь",
        bbch: "53–57",
        nitrogen: "Карбамид — 20 кг/га (листовая подкормка)",
      },
      description:
        "Обработка №8 (летняя): фунгицидная защита колоса, питание и инсектицид в одной технологической операции.",
      blocks: [
        {
          type: "fungicide",
          heading: "Фунгицидная защита колоса",
          items: [
            {
              name: "Эйс",
              norm: "1,0 л/га",
              when: "Летом в фазе ВВСН 53–57 (обработка №8).",
              text: "Защита колоса в фазе 53–57.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/fungitsidy/eys_kkr/",
            },
          ],
        },
        {
          type: "nutrition",
          heading: "Питание",
          items: [
            {
              name: "Ультрамаг Фосфор Супер",
              norm: "2,0 л/га",
              when: "Летом в фазе ВВСН 53–57 (в составе обработки №8).",
              text: "Фосфорная поддержка в летний период.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/makroudobreniya/ultramag-fosfor-super/",
            },
            {
              name: "Ультрамаг Сера 900",
              norm: "2,0 л/га",
              when: "Летом в фазе ВВСН 53–57 (в составе обработки №8).",
              text: "Серное питание для качества зерна.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/makroudobreniya/ultramag-super-sera-900/",
            },
          ],
        },
        {
          type: "insecticide",
          heading: "Инсектицидная защита",
          items: [
            {
              name: "Эсперо",
              norm: "0,1 л/га",
              when: "Летом в фазе ВВСН 53–57 (в составе обработки №8).",
              text: "Контроль вредителей в летний период.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/insektitsidy-i-akaritsidy/espero_ks/",
            },
          ],
        },
      ],
    },
    stage7: {
      title: "Этап 7 — Налив зерна",
      cardTitle: "Налив зерна",
      meta: { season: "Лето", period: "Июнь — июль", bbch: "70–89", nitrogen: null },
      description:
        "Отдельная плановая обработка на этой стадии не выделена. Этап ведётся как мониторинг состояния посева и оценка необходимости внеплановых обработок по ЭПВ.",
      blocks: [
        {
          type: "insecticide",
          heading: "Мониторинг и решения по ЭПВ",
          items: [
            {
              name: "Контроль вредителей и болезней",
              norm: "по факту",
              when: "В фазе налива зерна (ВВСН 70–89), при превышении ЭПВ.",
              text: "При превышении порогов вредоносности выполняются корректирующие обработки.",
              href: "https://betaren.ru/cultivation/zernovye-kultury/pshenitsa-ozimaya/",
            },
          ],
        },
      ],
    },
  };

  function buildAgronomyHtml(stage) {
    const metaParts = [
      `<span class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-800">Сезон: ${stage.meta.season}</span>`,
      `<span class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-800">Период: ${stage.meta.period}</span>`,
      `<span class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-800">ВВСН: ${stage.meta.bbch}</span>`,
    ];
    if (stage.meta.nitrogen) {
      metaParts.push(
        `<span class="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-1 text-xs text-amber-950">Азотная подкормка: ${stage.meta.nitrogen}</span>`
      );
    }
    let html = `
      <div class="space-y-5">
        <header>
          <h3 class="text-xl font-bold text-gray-900">${stage.title}</h3>
          <div class="mt-3 flex flex-wrap gap-2">${metaParts.join("")}</div>
          <p class="mt-4 text-gray-700 leading-relaxed">${stage.description}</p>
        </header>`;
    stage.blocks.forEach((block) => {
      const cls = typeClass[block.type] || "border-l-4 border-gray-400 bg-gray-50";
      html += `<section class="rounded-r-lg ${cls} pl-4 pr-3 py-4 shadow-sm">`;
      html += `<h4 class="font-bold text-gray-900">${block.heading}</h4><ul class="mt-3 space-y-4">`;
      block.items.forEach((item) => {
        html += `<li class="text-sm">
        <div><span class="font-semibold text-gray-900">${item.name}</span>`;
        if (item.norm) {
          html += ` <span class="text-gray-600">— Норма: ${item.norm}</span>`;
        }
        html += `</div>`;
        if (item.when) {
          html += `<p class="mt-1 text-xs text-gray-500"><span class="font-semibold">Когда вносить:</span> ${item.when}</p>`;
        }
        html += `<p class="mt-1.5 text-gray-700 leading-relaxed">${item.text}</p>`;
        if (item.href) {
          html += `<a href="${item.href}" target="_blank" rel="noopener noreferrer" class="mt-2 inline-block text-green-700 hover:text-green-800 hover:underline text-xs font-semibold">Карточка на betaren.ru →</a>`;
        }
        html += `</li>`;
      });
      html += `</ul></section>`;
    });
    html += `</div>`;
    return html;
  }

  function showAgronomyDetail(stageKey, clickedCard) {
    const stage = AGRONOMY_STAGES[stageKey];
    const root = document.getElementById("agronomy-detail-content");
    if (!stage || !root) return;
    root.innerHTML = buildAgronomyHtml(stage);
    document.querySelectorAll("[data-agronomy-stage]").forEach((el) => {
      el.classList.remove("ring-2", "ring-emerald-500", "ring-offset-2");
    });
    if (clickedCard) {
      clickedCard.classList.add("ring-2", "ring-emerald-500", "ring-offset-2");
    }
  }

  window.AGRONOMY_STAGES = AGRONOMY_STAGES;
  window.showAgronomyDetail = showAgronomyDetail;
})();
