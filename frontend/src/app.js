(() => {
  "use strict";

  const MEMBER_KEY = "creambyte.member.v1";
  const ORDER_KEY = "creambyte.order.v1";
  const PAGE = document.body.dataset.page;
  const STEPS = ["Flavor", "Size", "Toppings", "Sauce", "Extra"];
  const STEP_PAGES = ["flavor", "size", "toppings", "sauce", "extra"];
  const ASSET_PATH = (file) => `/frontend/src/assets/${file}`;
  const OPTIONS = {
    Flavor: [
      {
        name: "Choco-Straw Twirl",
        price: 150,
        color: "#e8a4ac",
        kind: "scoop",
        group: "Limited Edition",
        image: "Choco-Straw Twirl.svg",
      },
      {
        name: "Watermelon",
        price: 135,
        color: "#f15b68",
        kind: "scoop",
        group: "Limited Edition",
        image: "Watermelon.svg",
      },
      {
        name: "Winter Cane",
        price: 140,
        color: "#e8ddd0",
        kind: "scoop",
        group: "Limited Edition",
        image: "Winter Cane.svg",
      },
      {
        name: "Banana Caramel",
        price: 135,
        color: "#e5a749",
        kind: "scoop",
        group: "Limited Edition",
        image: "Banana Caramel.svg",
      },
      {
        name: "Vanilla",
        price: 120,
        color: "#f2cd8b",
        kind: "scoop",
        group: "Limited Edition",
        image: "Vanilla.svg",
      },
      {
        name: "Ube",
        price: 135,
        color: "#a65bc0",
        kind: "scoop",
        group: "Limited Edition",
        image: "Ube.svg",
      },
      {
        name: "Chocolate",
        price: 120,
        color: "#744632",
        kind: "scoop",
        group: "Classic",
        image: "Chocolate.svg",
      },
      {
        name: "Blueberry",
        price: 135,
        color: "#7b7fd6",
        kind: "scoop",
        group: "Classic",
        image: "Blueberry.svg",
      },
      {
        name: "Caramel Crunch",
        price: 140,
        color: "#c98b4a",
        kind: "scoop",
        group: "Classic",
        image: "Caramel Crunch.svg",
      },
    ],
    Size: [
      {
        name: "Classic Cone",
        price: 0,
        color: "#e4a352",
        kind: "cup",
        image: "Classic Cone.svg",
      },
      {
        name: "Sugar Cone",
        price: 15,
        color: "#cc7d31",
        kind: "cup",
        image: "Sugar Cone.svg",
      },
      {
        name: "Medium Cup",
        price: 25,
        color: "#edc3c8",
        kind: "cup",
        image: "Medium Cup.svg",
      },
      {
        name: "Large Cup",
        price: 45,
        color: "#e8d6cd",
        kind: "cup",
        image: "Large Cup.svg",
      },
      {
        name: "Crepe Cup",
        price: 35,
        color: "#e6a43d",
        kind: "cup",
        image: "Crepe Cup.svg",
      },
    ],
    Toppings: [
      {
        name: "Oreo",
        price: 15,
        color: "#563c36",
        kind: "topping",
        image: "Oreo.svg",
      },
      {
        name: "Chocolate Chips",
        price: 20,
        color: "#754336",
        kind: "topping",
        image: "Chocolate Chips.svg",
      },
      {
        name: "Rainbow Sprinkles",
        price: 15,
        color: "#f48d9f",
        kind: "topping",
        image: "Rainbow Sprinkles.svg",
      },
      {
        name: "Mini Marshmallows",
        price: 15,
        color: "#f4c7d1",
        kind: "topping",
        image: "Mini Marshmallow.svg",
      },
      {
        name: "Crushed Peanuts",
        price: 15,
        color: "#c99046",
        kind: "topping",
        image: "Crushed Peanuts.svg",
      },
      { name: "No Topping", price: 0, color: "#fff1ec", kind: "topping" },
    ],
    Sauce: [
      {
        name: "Strawberry",
        price: 10,
        color: "#d83c4e",
        kind: "sauce",
        image: "Strawberry.svg",
      },
      {
        name: "Honey",
        price: 10,
        color: "#e8aa3d",
        kind: "sauce",
        image: "Honey.svg",
      },
      {
        name: "Chocolate",
        price: 10,
        color: "#543027",
        kind: "sauce",
        image: "Chocolate Sauce.svg",
      },
      {
        name: "Mango",
        price: 10,
        color: "#eca72a",
        kind: "sauce",
        image: "Mango.svg",
      },
      {
        name: "Caramel",
        price: 10,
        color: "#c87928",
        kind: "sauce",
        image: "Caramel.svg",
      },
      { name: "No Sauce", price: 0, color: "#fff1ec", kind: "sauce" },
    ],
    Extra: [
      {
        name: "Oreo",
        price: 15,
        color: "#563c36",
        kind: "topping",
        image: "Oreo.svg",
      },
      {
        name: "Chocolate Chips",
        price: 20,
        color: "#754336",
        kind: "topping",
        image: "Chocolate Chips.svg",
      },
      {
        name: "Rainbow Sprinkles",
        price: 15,
        color: "#f48d9f",
        kind: "topping",
        image: "Rainbow Sprinkles.svg",
      },
      {
        name: "Mini Marshmallows",
        price: 15,
        color: "#f4c7d1",
        kind: "topping",
        image: "Mini Marshmallow.svg",
      },
      {
        name: "Strawberry",
        price: 10,
        color: "#d83c4e",
        kind: "sauce",
        image: "Strawberry.svg",
      },
      {
        name: "Honey",
        price: 10,
        color: "#e8aa3d",
        kind: "sauce",
        image: "Honey.svg",
      },
      {
        name: "Chocolate Sauce",
        price: 10,
        color: "#543027",
        kind: "sauce",
        image: "Chocolate Sauce.svg",
      },
      { name: "Extra Scoop", price: 45, color: "#f28ca5", kind: "scoop" },
      { name: "No Extra", price: 0, color: "#fff1ec", kind: "topping" },
    ],
  };
  const EMPTY_SELECTION = () => ({
    Flavor: "",
    Size: "Classic Cone",
    Toppings: "No Topping",
    Sauce: "No Sauce",
    Extra: "No Extra",
  });
  const $ = (selector) => document.querySelector(selector);
  const money = (value) => `₱${Number(value).toFixed(2)}`;
  function showModal(message) {
    const existing = document.querySelector(".cb-modal-overlay");
    if (existing) existing.remove();
    const overlay = document.createElement("div");
    overlay.className = "cb-modal-overlay";
    const modal = document.createElement("div");
    modal.className = "cb-modal";
    const text = document.createElement("p");
    text.className = "cb-modal-message";
    text.textContent = message;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "primary-button cb-modal-close";
    button.textContent = "OK";
    button.addEventListener("click", () => overlay.remove());
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) overlay.remove();
    });
    modal.append(text, button);
    overlay.append(modal);
    document.body.appendChild(overlay);
  }

  const LANGUAGE_KEY = "creambyte.language.v1";
  let currentLanguage = "en";
  try {
    currentLanguage = localStorage.getItem(LANGUAGE_KEY) || "en";
  } catch {}
  const STRINGS = {
    en: {
      pointsRequired: "You need 50 points or more to apply them.",
      loginIdFirst: "Enter your Member ID first.",
      pinEnter: "Enter your 4–6 digit PIN.",
      noMember: "No member found for that ID.",
      incorrectPin: "Incorrect PIN. Please try again.",
      registerInvalid:
        "Enter a valid Member ID, your name, and a 4–6 digit PIN.",
    },
  };
  const STR = (key) => STRINGS[currentLanguage]?.[key] || STRINGS.en[key] || "";

  function setLanguage(code) {
    currentLanguage = code;
    try {
      localStorage.setItem(LANGUAGE_KEY, code);
    } catch {}
  }

  const languagePill = document.querySelector(".language-pill");
  if (languagePill) {
    languagePill.addEventListener("click", (event) => {
      event.stopPropagation();
      let menu = languagePill.querySelector(".cb-language-menu");
      if (!menu) {
        menu = document.createElement("div");
        menu.className = "cb-language-menu";
        const options = [{ code: "en", label: "English" }];
        options.forEach((option) => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "cb-language-option";
          button.textContent = option.label;
          button.addEventListener("click", () => {
            setLanguage(option.code);
            menu.remove();
          });
          menu.appendChild(button);
        });
        languagePill.appendChild(menu);
      }
      menu.classList.toggle("open");
    });
  }
  document.addEventListener("click", (event) => {
    const menu = document.querySelector(".cb-language-menu");
    const pill = document.querySelector(".language-pill");
    if (!menu || !pill) return;
    if (menu.classList.contains("open") && pill.contains(event.target)) {
      return;
    }
    if (menu.classList.contains("open") && !menu.contains(event.target)) {
      menu.classList.remove("open");
    }
  });
  const state = loadOrder();
  state.member = readMember();

  function readMember() {
    try {
      const value = JSON.parse(localStorage.getItem(MEMBER_KEY) || "null");
      if (
        value &&
        typeof value.id === "string" &&
        typeof value.name === "string" &&
        Number.isFinite(value.points)
      )
        return value;
    } catch {
      localStorage.removeItem(MEMBER_KEY);
    }
    return null;
  }

  function loadOrder() {
    const blank = {
      orderType: "Dine-in",
      items: [],
      draft: EMPTY_SELECTION(),
      unlockedStep: 0,
      activeMember: null,
      orderComplete: false,
      pointsEarned: 0,
      nextItemId: 1,
      editingId: null,
      redeemedPoints: 0,
      pendingGuestItems: false,
      justRegistered: false,
    };
    try {
      const saved = JSON.parse(sessionStorage.getItem(ORDER_KEY) || "null");
      if (
        saved &&
        Array.isArray(saved.items) &&
        saved.draft &&
        typeof saved.draft === "object"
      )
        return { ...blank, ...saved };
    } catch {
      sessionStorage.removeItem(ORDER_KEY);
    }
    return blank;
  }

  function saveOrder() {
    sessionStorage.setItem(ORDER_KEY, JSON.stringify(state));
  }

  function generateMemberId() {
    return `MBR-${10000 + Math.floor(Math.random() * 90000)}`;
  }

  function startNewOrder() {
    state.items = [];
    state.draft = EMPTY_SELECTION();
    state.unlockedStep = 0;
    state.orderComplete = false;
    state.pointsEarned = 0;
    state.nextItemId = 1;
    state.editingId = null;
    state.redeemedPoints = 0;
    state.pendingGuestItems = false;
  }

  function go(page) {
    saveOrder();
    window.location.href = `/frontend/src/${page}`;
  }

  function getOption(step, name) {
    return OPTIONS[step].find((option) => option.name === name);
  }

  function currentPrice() {
    return STEPS.reduce(
      (sum, step) => sum + (getOption(step, state.draft[step])?.price || 0),
      0,
    );
  }

  function makeOptionArt(option) {
    const art = document.createElement("div");
    art.className = "option-art";
    if (option.image) {
      const img = document.createElement("img");
      img.className = "option-img";
      img.src = ASSET_PATH(option.image);
      img.alt = "";
      img.loading = "lazy";
      art.append(img);
      return art;
    }
    if (option.kind === "scoop") {
      const scoop = document.createElement("span");
      scoop.className = "scoop-art";
      scoop.style.backgroundColor = option.color;
      art.append(scoop);
    } else if (option.kind === "cup") {
      const cup = document.createElement("span");
      cup.className = "cup-art";
      art.append(cup);
    } else if (option.name.startsWith("No ")) {
      const empty = document.createElement("span");
      empty.className = "empty-art";
      empty.textContent = "Just as it is";
      art.append(empty);
    } else {
      const toppings = document.createElement("span");
      toppings.className = "topping-art";
      for (let index = 0; index < 9; index += 1) {
        const dot = document.createElement("span");
        dot.style.backgroundColor = option.color;
        dot.style.opacity = index % 3 === 0 ? ".65" : "1";
        dot.style.transform = `scale(${index % 2 ? ".72" : "1"})`;
        toppings.append(dot);
      }
      art.append(toppings);
    }
    return art;
  }

  function renderOptions(step, container) {
    container.replaceChildren();
    OPTIONS[step]
      .filter((option) => !option.group)
      .forEach((option) => container.append(makeOptionCard(step, option)));
  }

  function makeOptionCard(step, option) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `option-card${state.draft[step] === option.name ? " selected" : ""}`;
    card.setAttribute(
      "aria-pressed",
      String(state.draft[step] === option.name),
    );
    card.addEventListener("click", () => {
      state.draft[step] = option.name;
      saveOrder();
      renderStep();
    });
    if (state.draft[step] === option.name) {
      const check = document.createElement("span");
      check.className = "selected-check";
      check.setAttribute("aria-label", "Selected");
      check.textContent = "✓";
      card.append(check);
    }
    card.append(makeOptionArt(option));
    const name = document.createElement("span");
    name.className = "option-name";
    const title = document.createElement("span");
    title.textContent = option.name;
    const price = document.createElement("span");
    price.className = "option-price";
    price.textContent = option.price ? `+ ${money(option.price)}` : "Included";
    name.append(title, price);
    card.append(name);
    return card;
  }

  function renderStep() {
    const step = STEPS[STEP_PAGES.indexOf(document.body.dataset.page)];
    const stepIndex = STEPS.indexOf(step);
    const panel = $(".build-panel");
    panel.dataset.step = step;
    $("#draft-total").textContent = money(currentPrice());
    const continueButton = $("#continue-step");
    continueButton.disabled = !state.draft[step];
    if (step === "Flavor") {
      $("#option-grid").replaceChildren(
        ...OPTIONS.Flavor.filter(
          (option) => option.group === "Limited Edition",
        ).map((option) => makeOptionCard(step, option)),
      );
      $("#classic-grid").replaceChildren(
        ...OPTIONS.Flavor.filter((option) => option.group === "Classic").map(
          (option) => makeOptionCard(step, option),
        ),
      );
    } else {
      renderOptions(step, $("#option-grid"));
    }
    if (stepIndex === 4 && state.draft.Extra)
      continueButton.innerHTML = state.editingId
        ? 'Update order <span aria-hidden="true">→</span>'
        : 'Add to order <span aria-hidden="true">→</span>';
  }

  function addConfiguredItem() {
    if (!state.draft.Flavor) return;
    const configured = {
      orderType: state.orderType,
      flavor: state.draft.Flavor,
      size: state.draft.Size,
      topping: state.draft.Toppings,
      sauce: state.draft.Sauce,
      extra: state.draft.Extra,
      price: currentPrice(),
    };
    const editIndex = state.editingId
      ? state.items.findIndex((item) => item.id === state.editingId)
      : -1;
    if (editIndex >= 0) {
      state.items[editIndex] = { ...state.items[editIndex], ...configured };
    } else {
      state.items.push({
        id: state.nextItemId++,
        ...configured,
        quantity: 1,
      });
    }
    state.editingId = null;
    state.draft = EMPTY_SELECTION();
    state.unlockedStep = 0;
    saveOrder();
    go("cart.html");
  }

  function startEdit(itemId) {
    const item = state.items.find((entry) => entry.id === itemId);
    if (!item) return;
    state.draft = {
      Flavor: item.flavor,
      Size: item.size,
      Toppings: item.topping,
      Sauce: item.sauce,
      Extra: item.extra,
    };
    state.editingId = item.id;
    state.unlockedStep = STEP_PAGES.length - 1;
    saveOrder();
    go("flavor.html");
  }

  function appendDetail(container, label, value, step, service = false) {
    const row = document.createElement("div");
    if (service) row.className = "service-detail";
    const term = document.createElement("dt");
    term.textContent = label;
    const detail = document.createElement("dd");
    const price = step ? getOption(step, value)?.price || 0 : 0;
    detail.textContent = `${value}${step ? ` · ${price ? `+ ${money(price)}` : "Included"}` : ""}`;
    row.append(term, detail);
    container.append(row);
  }

  function renderCart() {
    $("#item-count").textContent =
      `${state.items.length} ${state.items.length === 1 ? "item" : "items"}`;
    const list = $("#cart-items");
    list.replaceChildren();
    state.items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "cart-item";
      const art = document.createElement("div");
      art.className = "cart-art";
      const flavorOption = getOption("Flavor", item.flavor);
      if (flavorOption?.image) {
        const img = document.createElement("img");
        img.className = "cart-art-img";
        img.src = ASSET_PATH(flavorOption.image);
        img.alt = "";
        art.append(img);
      } else {
        const scoop = document.createElement("span");
        scoop.className = "cart-scoop";
        scoop.style.backgroundColor = flavorOption?.color || "#e8aa3d";
        art.append(scoop);
      }
      const main = document.createElement("div");
      main.className = "cart-item-main";
      const title = document.createElement("div");
      title.className = "cart-item-title";
      const heading = document.createElement("h2");
      heading.textContent = item.flavor;
      const lineTotal = document.createElement("strong");
      lineTotal.textContent = money(item.price * item.quantity);
      title.append(heading, lineTotal);
      const unit = document.createElement("p");
      unit.className = "unit-price";
      unit.textContent = `${money(item.price)} each · ${item.quantity} ${item.quantity === 1 ? "serving" : "servings"}`;
      const details = document.createElement("dl");
      details.className = "order-details";
      appendDetail(details, "Service", item.orderType, null, true);
      appendDetail(details, "Size", item.size, "Size");
      appendDetail(details, "Topping", item.topping, "Toppings");
      appendDetail(details, "Sauce", item.sauce, "Sauce");
      appendDetail(details, "Extra", item.extra, "Extra");
      const controls = document.createElement("div");
      controls.className = "cart-item-controls";
      const quantity = document.createElement("div");
      quantity.className = "quantity-control";
      const decrease = document.createElement("button");
      decrease.type = "button";
      decrease.setAttribute("aria-label", `Decrease ${item.flavor} quantity`);
      decrease.textContent = "−";
      decrease.addEventListener("click", () => {
        item.quantity = Math.max(1, item.quantity - 1);
        saveOrder();
        renderCart();
      });
      const count = document.createElement("span");
      count.textContent = String(item.quantity);
      const increase = document.createElement("button");
      increase.type = "button";
      increase.setAttribute("aria-label", `Increase ${item.flavor} quantity`);
      increase.textContent = "+";
      increase.addEventListener("click", () => {
        item.quantity += 1;
        saveOrder();
        renderCart();
      });
      quantity.append(decrease, count, increase);
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "remove-item";
      remove.setAttribute("aria-label", `Remove ${item.flavor}`);
      const removeIcon = document.createElement("img");
      removeIcon.className = "remove-icon";
      removeIcon.src = ASSET_PATH("Delete.svg");
      removeIcon.alt = "";
      remove.append(removeIcon);
      remove.addEventListener("click", () => {
        state.items = state.items.filter((entry) => entry.id !== item.id);
        saveOrder();
        if (state.items.length === 0) {
          go("flavor.html");
          return;
        }
        renderCart();
      });
      controls.append(quantity, remove);
      main.append(title, unit, details, controls);
      card.append(art, main);
      list.append(card);
    });
    renderTotals($("#cart-totals"));
    refreshPointsUi();
    $("#checkout").setAttribute(
      "aria-disabled",
      String(state.items.length === 0),
    );
  }

  function refreshPointsUi() {
    const pointsApply = $("#points-apply");
    const pointsNote = $("#points-note");
    const applyPoints = $("#apply-points");
    const guestCreatePoints = $("#guest-create-points");
    if (!state.items.length) {
      if (pointsApply) pointsApply.hidden = true;
      return;
    }
    if (state.activeMember) {
      if (!pointsApply) return;
      pointsApply.hidden = false;
      if (state.redeemedPoints > 0) {
        if (applyPoints) {
          applyPoints.hidden = true;
          applyPoints.disabled = true;
        }
        if (guestCreatePoints) guestCreatePoints.hidden = true;
        if (pointsNote) {
          pointsNote.textContent = `Points applied: -${money(state.redeemedPoints)}`;
        }
        return;
      }
      const hasPoints = state.member.points >= 50;
      if (applyPoints) {
        applyPoints.hidden = !hasPoints;
        applyPoints.disabled = !hasPoints;
      }
      if (guestCreatePoints) guestCreatePoints.hidden = true;
      if (pointsNote) {
        pointsNote.textContent = hasPoints
          ? `You have ${state.member.points} points — apply them to lower this order.`
          : "You need 50 points or more to apply them.";
      }
      return;
    }
    if (!pointsApply) return;
    pointsApply.hidden = false;
    if (applyPoints) applyPoints.hidden = true;
    if (guestCreatePoints) guestCreatePoints.hidden = false;
    const earned = 10;
    if (pointsNote) {
      pointsNote.textContent = `Create an account to earn ${earned} points on this order.`;
    }
  }

  function renderTotals(container) {
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const redeemed = Math.min(state.redeemedPoints || 0, subtotal);
    const discounted = subtotal - redeemed;
    const vat = discounted * 0.12;
    const total = discounted + vat;
    container.replaceChildren();
    const rows = [];
    if (redeemed > 0) rows.push(["Points", `-${money(redeemed)}`, "points"]);
    rows.push(["Subtotal", money(subtotal), ""]);
    rows.push(["VAT (12%)", money(vat), "vat"]);
    rows.push(["Total", money(total), "grand"]);
    rows.forEach(([label, value, style]) => {
      const row = document.createElement("div");
      row.className = `total-row ${style}`.trim();
      const name = document.createElement("span");
      name.textContent = label;
      const amount = document.createElement("strong");
      amount.textContent = value;
      row.append(name, amount);
      container.append(row);
    });
  }

  function completeOrder() {
    if (!state.items.length) return go("cart.html");
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const redeemed = Math.min(state.redeemedPoints || 0, subtotal);
    const payable = Math.max(0, subtotal - redeemed);
    const earned = state.activeMember ? 5 : 0;
    state.redeemedPoints = redeemed;
    if (state.activeMember) {
      state.member = {
        ...state.activeMember,
        points: state.activeMember.points + earned,
      };
      state.activeMember = state.member;
      localStorage.setItem(MEMBER_KEY, JSON.stringify(state.member));
    } else {
      state.pointsEarned = 0;
    }
    state.pointsEarned = earned;
    state.orderComplete = true;
    saveOrder();
    go("confirmed.html");
  }

  function renderConfirmation() {
    $("#order-number").textContent =
      `# ${Math.floor(10000 + Math.random() * 90000)}`;
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const redeemed = Math.min(state.redeemedPoints || 0, subtotal);
    const payable = Math.max(0, subtotal - redeemed);
    const earned = state.pointsEarned
      ? state.pointsEarned
      : state.activeMember
        ? 5
        : 0;
    const used = $("#points-used");
    const earnedEl = $("#points-earned");
    const balance = $("#points-balance");
    const message = $("#points-message");
    if (state.activeMember) {
      const newBalance = state.member.points + earned;
      state.member = { ...state.member, points: newBalance };
      state.activeMember = state.member;
      state.pointsEarned = earned;
      localStorage.setItem(MEMBER_KEY, JSON.stringify(state.member));
      used.hidden = redeemed <= 0;
      used.textContent = redeemed > 0 ? `Points used: ${redeemed}` : "";
      earnedEl.textContent = `+${earned} points earned`;
      balance.textContent = `New balance: ${newBalance} points`;
      message.hidden = false;
      message.textContent = `+${earned} points earned · ${newBalance} points total`;
    } else {
      used.hidden = true;
      earnedEl.textContent = "";
      balance.textContent = "";
      message.hidden = true;
    }
  }

  function redirectForStep() {
    const index = STEP_PAGES.indexOf(PAGE);
    if (index > state.unlockedStep) {
      window.location.replace(
        `/frontend/src/${STEP_PAGES[state.unlockedStep]}.html`,
      );
      return true;
    }
    return false;
  }

  /* ---------- Attract / idle screen ---------- */
  if (PAGE === "attract") {
    const mascot = $("#attract-mascot");
    const title = $("#attract-title");
    const FEATURED = [
      "Choco-Straw Twirl",
      "Watermelon",
      "Winter Cane",
      "Banana Caramel",
    ];
    const applyFeatured = (name) => {
      const option = OPTIONS.Flavor.find((entry) => entry.name === name);
      if (option) mascot.src = ASSET_PATH(option.image);
      if (title) title.textContent = name;
    };
    applyFeatured(FEATURED[0]);
    let started = false;
    const startAttraction = () => {
      if (started) return;
      started = true;
      go("index.html");
    };
    $("#attract-start").addEventListener("click", (event) => {
      event.preventDefault();
      startAttraction();
    });
    document.addEventListener(
      "pointerdown",
      (event) => {
        if (event.target.closest("#attract-start")) return;
        startAttraction();
      },
      { passive: true },
    );
  }

  if (["flavor", "size", "toppings", "sauce", "extra"].includes(PAGE)) {
    if (!redirectForStep()) renderStep();
    $("#continue-step").addEventListener("click", () => {
      const index = STEP_PAGES.indexOf(PAGE);
      if (!state.draft[STEPS[index]]) return;
      if (index === STEP_PAGES.length - 1) return addConfiguredItem();
      state.unlockedStep = Math.max(state.unlockedStep, index + 1);
      saveOrder();
      go(`${STEP_PAGES[index + 1]}.html`);
    });
  }

  if (PAGE === "home") {
    $("#guest-start").addEventListener("click", () => {
      state.activeMember = null;
      startNewOrder();
      go("preference.html");
    });
    $("#member-login").addEventListener("click", () => {
      go("login.html");
    });
  }

  if (PAGE === "register") {
    $("#member-id").value = state.member?.id || generateMemberId();
    $("#member-name").value = state.member?.name || "";
    $("#member-id").addEventListener("input", (event) => {
      event.currentTarget.value = event.currentTarget.value
        .replace(/[^A-Z0-9-]/g, "")
        .slice(0, 12)
        .toUpperCase();
    });
    $("#member-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const id = $("#member-id").value.trim().toUpperCase();
      const name = $("#member-name").value.trim();
      const pin = $("#member-pin").value.trim();
      if (!/^MBR-\d{5}$/.test(id) || !name || !/^[0-9]{4,6}$/.test(pin)) {
        showModal(STR("registerInvalid"));
        return;
      }
      state.member = {
        id,
        name,
        points: state.member?.id === id ? state.member.points : 10,
        pin,
      };
      state.activeMember = state.member;
      state.justRegistered = true;
      if (!state.pendingGuestItems) startNewOrder();
      state.pendingGuestItems = false;
      state.draft = EMPTY_SELECTION();
      state.unlockedStep = 0;
      state.editingId = null;
      state.redeemedPoints = 0;
      saveOrder();
      localStorage.setItem(MEMBER_KEY, JSON.stringify(state.member));
      go("payment.html");
    });
  }

  if (PAGE === "preference") {
    const pointsNote = $("#preference-points");
    if (state.activeMember) {
      pointsNote.hidden = false;
      pointsNote.textContent = `Hi! ${state.activeMember.name} your total points earned is ${state.activeMember.points}`;
    } else {
      pointsNote.hidden = true;
    }
    document.querySelectorAll("[data-order-type]").forEach((button) =>
      button.addEventListener("click", () => {
        state.orderType = button.dataset.orderType;
        state.draft = EMPTY_SELECTION();
        state.unlockedStep = 0;
        state.editingId = null;
        saveOrder();
        go("flavor.html");
      }),
    );
  }

  if (PAGE === "cart") {
    if (!state.items.length)
      window.location.replace("/frontend/src/preference.html");
    renderCart();
    $("#add-another-order").addEventListener("click", (event) => {
      event.preventDefault();
      state.editingId = null;
      state.draft = EMPTY_SELECTION();
      state.unlockedStep = 0;
      saveOrder();
      go("flavor.html");
    });
    $("#edit-order").addEventListener("click", (event) => {
      event.preventDefault();
      const item = state.items[state.items.length - 1];
      if (!item) return;
      startEdit(item.id);
    });
    $("#apply-points").addEventListener("click", () => {
      if (!state.activeMember) return;
      if (state.redeemedPoints > 0) return;
      const subtotal = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
      if (state.member.points < 50) {
        showModal(STR("pointsRequired"));
        return;
      }
      state.redeemedPoints = Math.min(state.member.points, subtotal);
      saveOrder();
      renderTotals($("#cart-totals"));
      refreshPointsUi();
    });
    $("#guest-create-points").addEventListener("click", () => {
      state.pendingGuestItems = true;
      go("register.html");
    });
    $("#checkout").addEventListener("click", (event) => {
      if (!state.items.length) {
        event.preventDefault();
        return;
      }
      const subtotal = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
      const payable = subtotal - Math.min(state.redeemedPoints || 0, subtotal);
      if (state.activeMember && payable <= 0) {
        event.preventDefault();
        completeOrder();
        return;
      }
      event.preventDefault();
      go("payment.html");
    });
  }

  if (PAGE === "login") {
    const keypadDisplay = $("#keypad-display");
    const keypadGrid = $("#keypad-grid");
    const keypadLogin = $("#keypad-login");
    const formError = $("#form-error");
    let entry = "";
    let stage = "id";
    let memberId = "";

    const normalizeId = (value) =>
      String(value || "")
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "");

    const renderDisplay = () => {
      keypadDisplay.textContent =
        stage === "id" ? `MBR - ${entry}` : `PIN · ${"*".repeat(entry.length)}`;
    };
    renderDisplay();
    keypadGrid.addEventListener("click", (event) => {
      const button = event.target.closest("[data-key]");
      if (!button) return;
      const key = button.dataset.key;
      if (key === "back") {
        entry = entry.slice(0, -1);
        renderDisplay();
        return;
      }
      if (key === "") return;
      if (stage === "id") {
        if (/^[0-9]$/.test(key)) {
          entry += key;
          if (entry.length >= 5) {
            memberId = entry;
            stage = "pin";
            entry = "";
          }
        }
        renderDisplay();
        return;
      }
      if (/^[0-9]$/.test(key)) entry += key;
      renderDisplay();
    });
    keypadLogin.addEventListener("click", () => {
      if (stage !== "pin") {
        showModal(STR("loginIdFirst"));
        return;
      }
      const pin = entry;
      if (pin.length < 4) {
        showModal(STR("pinEnter"));
        return;
      }
      let saved = null;
      try {
        saved = JSON.parse(localStorage.getItem(MEMBER_KEY) || "null");
      } catch {
        saved = null;
      }
      const fullId = `MBR-${memberId}`;
      const member =
        saved && normalizeId(saved.id) === normalizeId(fullId) ? saved : null;
      if (!member) {
        showModal(STR("noMember"));
        return;
      }
      if (member.pin !== pin) {
        showModal(STR("incorrectPin"));
        return;
      }
      state.member = {
        id: member.id,
        name: member.name,
        points: member.points,
        pin: member.pin,
      };
      state.activeMember = state.member;
      state.justRegistered = false;
      startNewOrder();
      saveOrder();
      go("preference.html");
    });
  }

  if (PAGE === "payment") {
    if (!state.items.length) window.location.replace("/frontend/src/cart.html");
    renderTotals($("#payment-totals"));
    document.querySelectorAll("[data-pay]").forEach((link) =>
      link.addEventListener("click", (event) => {
        event.preventDefault();
        if (link.dataset.pay === "counter") completeOrder();
        else go("cashless.html");
      }),
    );
  }

  if (PAGE === "cashless") {
    if (!state.items.length) window.location.replace("/frontend/src/cart.html");
    document.querySelectorAll("[data-complete]").forEach((link) =>
      link.addEventListener("click", (event) => {
        event.preventDefault();
        if (link.dataset.complete === "instapay") {
          go("qr.html");
          return;
        }
        completeOrder();
      }),
    );
  }

  if (PAGE === "qr") {
    if (!state.items.length) window.location.replace("/frontend/src/cart.html");
    $("#qr-complete").addEventListener("click", () => completeOrder());
  }

  if (PAGE === "confirmed") {
    if (!state.orderComplete) window.location.replace("/frontend/src/");
    renderConfirmation();
    $("#back-home").addEventListener("click", (event) => {
      event.preventDefault();
      startNewOrder();
      saveOrder();
      go("preference.html");
    });
    $("#done").addEventListener("click", () => {
      state.activeMember = null;
      startNewOrder();
      saveOrder();
      go("index.html");
    });
  }

  document.querySelectorAll("[data-back], .back-button").forEach((link) =>
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const index = STEP_PAGES.indexOf(PAGE);
      if (index >= 0)
        go(index === 0 ? "preference.html" : `${STEP_PAGES[index - 1]}.html`);
      else if (PAGE === "register" || PAGE === "preference") go("index.html");
      else if (PAGE === "login") go("index.html");
      else if (PAGE === "cart") go("preference.html");
      else if (PAGE === "payment") go("cart.html");
      else if (PAGE === "cashless") go("payment.html");
      else if (PAGE === "qr") go("cashless.html");
    }),
  );
})();
