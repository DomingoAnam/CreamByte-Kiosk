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

  function startNewOrder() {
    state.items = [];
    state.draft = EMPTY_SELECTION();
    state.unlockedStep = 0;
    state.orderComplete = false;
    state.pointsEarned = 0;
    state.nextItemId = 1;
    state.editingId = null;
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
        renderCart();
      });
      controls.append(quantity, remove);
      main.append(title, unit, details, controls);
      card.append(art, main);
      list.append(card);
    });
    renderTotals($("#cart-totals"));
    $("#checkout").setAttribute(
      "aria-disabled",
      String(state.items.length === 0),
    );
  }

  function renderTotals(container) {
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const vat = subtotal * 0.12;
    container.replaceChildren();
    [
      ["Subtotal", money(subtotal), ""],
      ["VAT (12%)", money(vat), "vat"],
      ["Total", money(subtotal + vat), "grand"],
    ].forEach(([label, value, style]) => {
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
    if (state.activeMember) {
      const subtotal = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
      state.pointsEarned = Math.floor((subtotal * 1.12) / 10);
      state.member = {
        ...state.activeMember,
        points: state.activeMember.points + state.pointsEarned,
      };
      state.activeMember = state.member;
      localStorage.setItem(MEMBER_KEY, JSON.stringify(state.member));
    } else {
      state.pointsEarned = 0;
    }
    state.orderComplete = true;
    saveOrder();
    go("confirmed.html");
  }

  function renderConfirmation() {
    $("#order-number").textContent =
      `# ${Math.floor(10000 + Math.random() * 90000)}`;
    const message = $("#points-message");
    message.hidden = !state.activeMember;
    message.textContent = state.activeMember
      ? `+${state.pointsEarned} points earned · ${state.member.points} points total`
      : "";
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
    const welcome = $("#member-welcome");
    if (state.member) {
      welcome.hidden = false;
      welcome.textContent = `Saved profile · ${state.member.name} · ${state.member.points} points`;
    }
    $("#guest-start").addEventListener("click", () => {
      state.activeMember = null;
      startNewOrder();
      go("preference.html");
    });
  }

  if (PAGE === "register") {
    $("#member-id").value = state.member?.id || "";
    $("#member-name").value = state.member?.name || "";
    $("#member-id").addEventListener("input", (event) => {
      event.currentTarget.value = event.currentTarget.value
        .replace(/\D/g, "")
        .slice(0, 6);
    });
    $("#member-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const id = $("#member-id").value.trim();
      const name = $("#member-name").value.trim();
      const password = $("#member-password").value;
      if (!/^\d{6}$/.test(id) || !name || password.length < 8) {
        const error = $("#form-error");
        error.textContent =
          "Enter a 6-digit ID, your name, and a password with at least 8 characters.";
        error.hidden = false;
        return;
      }
      state.member = {
        id,
        name,
        points: state.member?.id === id ? state.member.points : 0,
      };
      state.activeMember = state.member;
      startNewOrder();
      $("#member-password").value = "";
      saveOrder();
      localStorage.setItem(MEMBER_KEY, JSON.stringify(state.member));
      go("preference.html");
    });
  }

  if (PAGE === "preference") {
    const greeting = $("#preference-greeting");
    greeting.hidden = !state.activeMember;
    greeting.textContent = state.activeMember
      ? `Hi, ${state.activeMember.name}!`
      : "";
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
    $("#add-another-order").addEventListener("click", () => {
      state.editingId = null;
      state.draft = EMPTY_SELECTION();
      state.unlockedStep = 0;
      saveOrder();
    });
    $("#edit-order").addEventListener("click", () => {
      const item = state.items[state.items.length - 1];
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
    });
    $("#checkout").addEventListener("click", (event) => {
      if (!state.items.length) event.preventDefault();
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
        completeOrder();
      }),
    );
  }

  if (PAGE === "confirmed") {
    if (!state.orderComplete) window.location.replace("/frontend/src/");
    renderConfirmation();
    $("#back-home").addEventListener("click", () => {
      state.activeMember = null;
      startNewOrder();
      saveOrder();
    });
  }

  document.querySelectorAll("[data-back], .back-button").forEach((link) =>
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const index = STEP_PAGES.indexOf(PAGE);
      if (index >= 0)
        go(index === 0 ? "preference.html" : `${STEP_PAGES[index - 1]}.html`);
      else if (PAGE === "register" || PAGE === "preference") go("index.html");
      else if (PAGE === "cart") go("preference.html");
      else if (PAGE === "payment") go("cart.html");
      else if (PAGE === "cashless") go("payment.html");
    }),
  );
})();
