/* ==========================================================================
   O INVISÍVEL — Workshop Descomplicouti + Level Up
   ---------------------------------------------------------------------------
   CONFIG: tudo o que muda de edição para edição fica AQUI, em um lugar só.
   Preencha os valores abaixo e o site inteiro se atualiza.
   ========================================================================== */

const CONFIG = {
  /* --- Inscrição ------------------------------------------------------- */
  // URL do formulário no Respondi (obrigatório antes de publicar):
  formUrl: "https://forms.respondi.app/SEU-LINK-AQUI",
  // Acrescenta ?utm_source=site&utm_content=header|hero|final a cada botão,
  // para medir qual posição converte. Desligue com false se não quiser.
  utm: true,

  /* --- Evento ----------------------------------------------------------- */
  data: "[DATA]",                       // ex.: "12 de setembro"
  dataExtenso: "[DATA POR EXTENSO]",    // ex.: "Sexta-feira, 12 de setembro"
  horario: "[HORÁRIO]",                 // ex.: "8h às 12h"
  cidade: "Mogi das Cruzes/SP",
  local: "O endereço será informado aos inscritos.", // ou o endereço completo
  mapsUrl: "",                          // link do Google Maps; vazio = link não aparece
  vagas: "[XX]",                        // ex.: "40"

  /* --- Quem conduz ------------------------------------------------------ */
  bioDeise: "Coach, Consultora, Sócia da Descomplicouti e Proprietária do espaço cultural Burkadaguti",
  bioJessica: "Sócia fundadora na Descomplicouti | Neuroespecialista comportamental | Professora de Inteligência Emocional | Master Coach | Palestrante | Consultora | Treinadora de Líderes e Times",
  bioMarcela: "Especialista em Gestão Comercial e processos, Fundadora & CEO da empresa @levelUP",

  /* --- Rodapé / contato ------------------------------------------------- */
  email: "comercial@consultorialevelup.com.br",
  whatsapp: "",                         // só números, com DDI: ex. "5511999999999"
  instagram: "",                        // sem @: ex. "descomplicouti"
  razaoSocial: "Level UP LTDA · CNPJ 48.792.515/0001-06",
  privacidadeUrl: "",                   // URL da política de privacidade
};

/* ==========================================================================
   Daqui para baixo não precisa mexer.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- 1. Aplica CONFIG aos textos (data-bind) ---------- */
  document.querySelectorAll("[data-bind]").forEach(function (el) {
    var key = el.getAttribute("data-bind");
    if (CONFIG[key]) el.textContent = CONFIG[key];
  });

  /* ---------- 2. CTAs: mesma URL em todos, com utm_content por posição ---------- */
  function ctaUrl(position) {
    if (!CONFIG.utm) return CONFIG.formUrl;
    var sep = CONFIG.formUrl.indexOf("?") === -1 ? "?" : "&";
    return CONFIG.formUrl + sep + "utm_source=site&utm_content=" + encodeURIComponent(position);
  }

  document.querySelectorAll(".js-cta").forEach(function (btn) {
    var position = btn.getAttribute("data-cta") || "cta";
    btn.href = ctaUrl(position);
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";

    btn.addEventListener("click", function () {
      var payload = {
        event: "cta_click",
        cta_position: position,
        cta_label: "Garantir minha vaga",
      };
      if (typeof window.gtag === "function") {
        window.gtag("event", "cta_click", { cta_position: position });
      }
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(payload);
    });
  });

  /* ---------- 3. Contatos condicionais (só aparecem se preenchidos) ---------- */
  var emailLink = document.querySelector(".js-email");
  if (emailLink) {
    if (CONFIG.email) {
      emailLink.href = "mailto:" + CONFIG.email;
      emailLink.textContent = CONFIG.email;
    } else {
      emailLink.removeAttribute("href");
    }
  }

  document.querySelectorAll(".js-whats").forEach(function (el) {
    if (CONFIG.whatsapp) {
      el.href = "https://wa.me/" + CONFIG.whatsapp.replace(/\D/g, "");
      el.hidden = false;
    }
  });

  var instaLink = document.querySelector(".js-insta");
  if (instaLink && CONFIG.instagram) {
    var handle = CONFIG.instagram.replace(/^@/, "");
    instaLink.href = "https://instagram.com/" + handle;
    instaLink.textContent = "@" + handle;
    instaLink.hidden = false;
  }

  var mapsLink = document.querySelector(".js-maps");
  if (mapsLink && CONFIG.mapsUrl) {
    mapsLink.href = CONFIG.mapsUrl;
    mapsLink.hidden = false;
  }

  var privacyLink = document.querySelector(".js-privacy");
  if (privacyLink && CONFIG.privacidadeUrl) {
    privacyLink.href = CONFIG.privacidadeUrl;
  }

  /* ---------- 4. Header: fundo com blur ao rolar ---------- */
  var header = document.getElementById("header");
  var onScroll = function () {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- 5. Elemento assinatura: o invisível vira visível ---------- */
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(".lock-item, .reveal");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    // estado final direto, sem transição (o CSS também cobre este caso)
    targets.forEach(function (el) { el.classList.add("is-revealed"); });
  } else {
    // stagger: cada travamento entra em foco um pouco depois do anterior
    document.querySelectorAll(".lock-item").forEach(function (el, i) {
      el.style.setProperty("--stagger", (i * 0.12) + "s");
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach(function (el) { observer.observe(el); });
  }
})();
