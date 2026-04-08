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
      meta: {
        season: "Осень",
        period: "Август — октябрь",
        bbch: "00–13",
        nitrogen: null,
      },
      description:
        "Подготовка семян, предпосевная обработка, сев. Закладка основ будущего урожая — выбор сорта, протравливание семян, внесение основных удобрений.",
      blocks: [
        {
          type: "fungicide",
          heading: "Протравливание семян (фунгициды)",
          items: [
            {
              name: "Протего Макс, МЭ",
              norm: "1,0–1,25 л/т",
              text:
                "Тройной фунгицидный протравитель (протиоконазол 75 г/л + пираклостробин 25 г/л + тебуконазол 25 г/л). Защита от корневых гнилей, твёрдой и пыльной головни, септориоза проростков.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/protraviteli-semyan/fungitsidnye/protego-maks-me/",
            },
            {
              name: "Депозит Суприм, МЭ",
              norm: "0,5–0,75 л/т",
              text:
                "Фунгицидный протравитель для защиты зерновых от комплекса семенных и почвенных инфекций.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/protraviteli-semyan/fungitsidnye/depozit-suprim-me/",
            },
          ],
        },
        {
          type: "insecticide",
          heading: "Протравливание семян (инсектицид)",
          items: [
            {
              name: "Бомбарда, КС",
              norm: "0,5–0,75 л/т",
              text:
                "Трёхкомпонентный инсектицидный протравитель (тиаметоксам 130 г/л + имидаклоприд 90 г/л + фипронил 60 г/л). Надёжная защита всходов от почвообитающих и наземных вредителей, продолжительная защита по вегетации.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/protraviteli-semyan/insektitsidnye/bombarda-ks/",
            },
          ],
        },
        {
          type: "nutrition",
          heading: "Стимуляция при севе",
          items: [
            {
              name: "Ультрамаг Фосфор Супер",
              norm: "1,0–1,5 л/га",
              text:
                "Высококонцентрированное фосфорное удобрение для листовых подкормок. Усиливает развитие корневой системы в начальный период.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/mikroudobreniya/",
            },
            {
              name: "Гумат калия Суфлер",
              norm: "1,0 л/га",
              text:
                "Гуминовое удобрение. Стимулирует прорастание, улучшает укоренение, повышает стрессоустойчивость молодых растений.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/organomineralnoe-udobrenie/",
            },
          ],
        },
      ],
    },
    stage1: {
      title: "Этап 1 — Кущение (осень)",
      cardTitle: "Кущение (осень)",
      meta: {
        season: "Осень",
        period: "Октябрь — ноябрь",
        bbch: "20–29",
        nitrogen: null,
      },
      description:
        "Осеннее кущение — критический период для защиты от сорняков. Оптимальная фаза для осеннего применения гербицидов и регуляторов роста.",
      blocks: [
        {
          type: "herbicide",
          heading: "Гербицидная защита",
          items: [
            {
              name: "Пиксель, МД",
              norm: "0,4–0,5 л/га",
              text:
                "Тройной гербицид (тифенсульфурон-метил 90 г/л + флуметсулам 24 г/л + флорасулам 18 г/л). Мягкая защита от широкого спектра двудольных сорняков, применим даже в поздние фазы развития культуры.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/gerbitsidy/pixel_md/",
            },
            {
              name: "Азофок",
              norm: "по регламенту",
              text: "Гербицид против злаковых и двудольных сорняков в посевах пшеницы осенью.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/gerbitsidy/",
            },
          ],
        },
        {
          type: "nutrition",
          heading: "Микроэлементы (листовая подкормка)",
          items: [
            {
              name: "Ультрамаг комби для зерновых",
              norm: "1,0–1,5 л/га",
              text:
                "Сбалансированный комплекс микроэлементов для листовой подкормки зерновых культур.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/mikroudobreniya/",
            },
          ],
        },
        {
          type: "growth",
          heading: "Регулятор роста",
          items: [
            {
              name: "Костандо, КЭ",
              norm: "0,25–0,5 л/га",
              text:
                "Регулятор роста на основе тринексапак-этила. Возможно двукратное применение — осенью и весной. Укрепляет соломину, повышает зимостойкость. Механизм: подавляет синтез гибберелиновой кислоты, уменьшает длину междоузлий, способствует росту корневой системы и утолщению стенок соломины.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/regulyatory-rosta-rasteniy/costando/",
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
        bbch: "21–25",
        nitrogen: "Аммиачная селитра (первая весенняя подкормка)",
      },
      description:
        "Первая весенняя подкормка азотными удобрениями. Ранняя фунгицидная защита против перезимовавшей инфекции — корневых гнилей и ранних листовых болезней.",
      blocks: [
        {
          type: "fungicide",
          heading: "Ранняя фунгицидная обработка (Т1)",
          items: [
            {
              name: "Азорро, КС",
              norm: "0,8–1,0 л/га",
              text:
                "Комбинированный фунгицид (карбендазим 300 г/л + азоксистробин 100 г/л). Уничтожает инфекцию в прикорневой зоне, контролирует ранние листовые болезни. Особо рекомендован для первой весенней фунгицидной обработки озимых. Период защитного действия — 4 недели. Эффект «зелёного листа» и «антистресс». Применяется против: мучнистой росы, ржавчины бурой, септориоза листьев, пиренофороза, церкоспореллёза.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/fungitsidy/azorro/",
            },
          ],
        },
        {
          type: "nutrition",
          heading: "Питание и биостимуляция",
          items: [
            {
              name: "Ультрамаг Фосфор Супер",
              norm: "1,0–1,5 л/га",
              text:
                "Фосфорное удобрение для листовой подкормки. Активирует отрастание после перезимовки.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/mikroudobreniya/",
            },
            {
              name: "Гумат калия Суфлер",
              norm: "1,0 л/га",
              text:
                "Антистрессовый эффект при возобновлении вегетации, стимулирует восстановление корневой системы.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/organomineralnoe-udobrenie/",
            },
          ],
        },
      ],
    },
    stage3: {
      title: "Этап 3 — Кущение (весна)",
      cardTitle: "Кущение (весна)",
      meta: {
        season: "Весна",
        period: "Март — апрель",
        bbch: "25–30",
        nitrogen: "Аммиачная селитра (вторая весенняя подкормка)",
      },
      description:
        "Основная гербицидная обработка против сорняков. Подкормка карбамидом или аммиачной селитрой. Применение регуляторов роста для укрепления стебля.",
      blocks: [
        {
          type: "herbicide",
          heading: "Гербицидная защита (Т1)",
          items: [
            {
              name: "Пиксель, МД",
              norm: "0,4–0,5 л/га",
              text:
                "Системный гербицид для мягкой защиты пшеницы. Эффективен даже в фазе выхода в трубку, когда препараты на основе 2,4-Д уже нельзя применять.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/gerbitsidy/pixel_md/",
            },
            {
              name: "Азофок",
              norm: "по регламенту",
              text: "Дополнительный контроль злаковых сорняков в посевах пшеницы.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/gerbitsidy/",
            },
          ],
        },
        {
          type: "nutrition",
          heading: "Микроэлементы (листовая подкормка)",
          items: [
            {
              name: "Ультрамаг комби для зерновых",
              norm: "1,0–1,5 л/га",
              text:
                "Листовая подкормка комплексом микроэлементов в составе баковой смеси с гербицидом.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/mikroudobreniya/",
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
        bbch: "30–37",
        nitrogen: "Аммиачная селитра (третья подкормка, некорневая)",
      },
      description:
        "Ключевой этап — обработка Т2. Контроль листовых болезней, укрепление стебля регулятором роста, листовая подкормка. Закладывается потенциал урожайности.",
      blocks: [
        {
          type: "fungicide",
          heading: "Фунгицидная обработка (Т2)",
          items: [
            {
              name: "Триада, ККР",
              norm: "0,4–0,6 л/га",
              text:
                "Инновационный трёхкомпонентный фунгицид (пропиконазол 140 г/л + тебуконазол 140 г/л + эпоксиконазол 72 г/л). Защита от комплекса листостебельных и колосовых заболеваний. Усиленная фунгицидная активность благодаря уникальной комбинации триазолов.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/fungitsidy/triada_kkr/",
            },
          ],
        },
        {
          type: "growth",
          heading: "Регулятор роста (Т2)",
          items: [
            {
              name: "Костандо, КЭ",
              norm: "0,25–0,5 л/га",
              text:
                "Вторая обработка весной. Укорачивает нижние междоузлия, снижает риск полегания, утолщает стенки соломины.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/regulyatory-rosta-rasteniy/costando/",
            },
          ],
        },
        {
          type: "nutrition",
          heading: "Питание и биостимуляция",
          items: [
            {
              name: "Биостим Зерновой",
              norm: "1,0–2,0 л/га",
              text:
                "Жидкое аминокислотное удобрение-биостимулятор (аминокислоты + макро- и микроэлементы). Усиливает ростовые процессы в период трубкования, повышает стрессоустойчивость.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/aminokislotnye-biostimulyatory/biostim_zernovoy/",
            },
            {
              name: "Арго Прим",
              norm: "по регламенту",
              text: "Листовое удобрение для подкормки зерновых в период активного роста.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/",
            },
          ],
        },
        {
          type: "insecticide",
          heading: "Инсектицидная защита",
          items: [
            {
              name: "Фаскорд, КЭ",
              norm: "0,1–0,15 л/га",
              text:
                "Пиретроидный инсектицид. Защита от вредителей в период трубкования (хлебный пилильщик, трипсы, злаковые мухи).",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/insektitsidy-i-akaritsidy/",
            },
          ],
        },
      ],
    },
    stage5: {
      title: "Этап 5 — Флаговый лист",
      cardTitle: "Флаговый лист",
      meta: {
        season: "Весна / начало лета",
        period: "Май",
        bbch: "37–51",
        nitrogen: null,
      },
      description:
        "Защита флагового и подфлагового листа — ключевых органов формирования урожая. Фунгицидная обработка Т3 и инсектицидная защита от вредителей колоса.",
      blocks: [
        {
          type: "fungicide",
          heading: "Фунгицидная обработка (Т3)",
          items: [
            {
              name: "Триада, ККР",
              norm: "0,5–0,6 л/га",
              text:
                "Защита флагового листа и подфлагового листа от септориоза, бурой ржавчины, мучнистой росы. Широкий спектр действия.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/fungitsidy/triada_kkr/",
            },
          ],
        },
        {
          type: "nutrition",
          heading: "Питание и биостимуляция",
          items: [
            {
              name: "Биостим Универсал",
              norm: "1,5–2,0 л/га",
              text:
                "Универсальный аминокислотный биостимулятор. Повышает закладку зерна в колосе, снижает стресс от жары и засухи.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/aminokislotnye-biostimulyatory/",
            },
            {
              name: "Гумат калия Суфлер",
              norm: "1,0 л/га",
              text:
                "Поддерживает физиологические процессы в критический период закладки зерна.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/organomineralnoe-udobrenie/",
            },
          ],
        },
        {
          type: "insecticide",
          heading: "Инсектицидная защита",
          items: [
            {
              name: "Фаскорд, КЭ",
              norm: "0,1–0,15 л/га",
              text:
                "Инсектицидная защита от вредной черепашки, тлей, трипсов в период колошения.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/insektitsidy-i-akaritsidy/",
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
        bbch: "51–69",
        nitrogen: "Карбамид (некорневая подкормка для повышения качества зерна)",
      },
      description:
        "Защита колоса от фузариоза и других болезней. Листовые подкормки карбамидом для повышения белка и клейковины. Инсектицидная защита от вредителей колоса.",
      blocks: [
        {
          type: "fungicide",
          heading: "Фунгицидная обработка колоса (Т4)",
          items: [
            {
              name: "Эйс, ККР",
              norm: "0,75–1,0 л/га",
              text:
                "Трёхкомпонентный фунгицид в НАНОформуляции (протиоконазол + тебуконазол + азоксистробин). Единственный в России препарат с регистрацией против гибеллинозной корневой гнили. Широкий спектр: фузариоз колоса, септориоз, пиренофороз, ржавчины, мучнистая роса, пятнистости, ринхоспориоз, церкоспореллёз, сетчатая пятнистость ячменя. Применять в начале цветения (ВВСН 61–65) — работа на опережение.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/fungitsidy/eys_kkr/",
            },
          ],
        },
        {
          type: "nutrition",
          heading: "Питание (листовые подкормки)",
          items: [
            {
              name: "Ультрамаг Фосфор Супер",
              norm: "1,0–1,5 л/га",
              text:
                "Фосфорное питание в период налива. Способствует формированию полновесного зерна.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/mikroudobreniya/",
            },
            {
              name: "Ультрамаг Сера 900",
              norm: "1,0 л/га",
              text:
                "Высококонцентрированное серное удобрение. Сера необходима для синтеза клейковины и улучшения хлебопекарного качества зерна.",
              href: "https://betaren.ru/catalog/spetsialnye-udobreniya/mikroudobreniya/",
            },
          ],
        },
        {
          type: "insecticide",
          heading: "Инсектицидная защита",
          items: [
            {
              name: "Эсперо, КС",
              norm: "0,15–0,18 л/га",
              text:
                "Комбинированный инсектицид (имидаклоприд + альфа-циперметрин) продолжительного действия. Контроль вредителей в период колошения и цветения.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/insektitsidy-i-akaritsidy/espero_ks/",
            },
          ],
        },
      ],
    },
    stage7: {
      title: "Этап 7 — Налив зерна",
      cardTitle: "Налив зерна",
      meta: {
        season: "Лето",
        period: "Июнь — июль",
        bbch: "70–89",
        nitrogen: null,
      },
      description:
        "Период налива зерна и созревания. При превышении ЭПВ (экономического порога вредоносности) — инсектицидная защита от вредной черепашки. Мониторинг болезней колоса.",
      blocks: [
        {
          type: "insecticide",
          heading: "Инсектицидная защита",
          items: [
            {
              name: "Эсперо, КС",
              norm: "0,15–0,18 л/га",
              text:
                "Применяется при превышении ЭПВ вредной черепашки в фазе молочной спелости зерна (против личинок 3–5 возраста).",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/insektitsidy-i-akaritsidy/espero_ks/",
            },
            {
              name: "Беретта, МД",
              norm: "0,1–0,15 л/га",
              text:
                "Трёхкомпонентный инсектицид в масляной формуляции (бифентрин 60 г/л + тиаметоксам 40 г/л + альфа-циперметрин 30 г/л). Контроль особо вредоносных насекомых с продолжительным защитным периодом.",
              href: "https://betaren.ru/catalog/sredstva-zashchity-rasteniy/insektitsidy-i-akaritsidy/beretta-md/",
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
        html += `</div>
        <p class="mt-1.5 text-gray-700 leading-relaxed">${item.text}</p>`;
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
