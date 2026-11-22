(() => {
  const translations = {
    en: {
      "Puntos y cajas":"Dots and Boxes",
      "Une dos puntos por turno. Quien cierre una caja se la queda y vuelve a jugar.":"Connect two dots each turn. Whoever completes a box claims it and plays again.",
      "Crear partida online":"Create online game",
      "Mándale este enlace a tu amigo, o dile el código":"Send this link to your friend, or tell them the code",
      "Copiar":"Copy","¡Copiado!":"Copied!","Compartir":"Share",
      "Código de tu amigo":"Your friend's code","Unirse":"Join",
      "Crea una partida o únete con el código de tu amigo.":"Create a game or join using your friend's code.",
      "Azul":"Blue","Rojo":"Red","Máquina":"Computer","Azul (tú)":"Blue (you)","Rojo (tú)":"Red (you)",
      "Modo":"Mode","Contra la máquina":"Against the computer","Dos jugadores (mismo dispositivo)":"Two players (same device)","Online con un amigo":"Online with a friend",
      "Dificultad":"Difficulty","Fácil":"Easy","Difícil":"Hard","Tablero":"Board",
      "Deshacer":"Undo","Nueva partida":"New game","Cómo se juega":"How to play",
      "En tu turno dibuja una línea entre dos puntos vecinos (toca o haz clic en el hueco). Si con tu línea completas el cuarto lado de una caja, la caja es tuya y tiras otra vez.":"On your turn, draw a line between two neighbouring dots (tap or click the gap). If your line completes the fourth side of a box, it is yours and you play again.",
      "Truco: evita dibujar el tercer lado de una caja, porque se la regalas a tu rival. Al final, gana quien tenga más cajas.":"Tip: avoid drawing the third side of a box, because you give it to your opponent. The player with the most boxes wins.",
      "Online: uno pulsa «Crear partida online» y le manda el enlace al otro. Quien crea la partida juega con azul y empieza.":"Online: one player taps “Create online game” and sends the link to the other. The host plays blue and goes first.",
      "Tablero de juego":"Game board","Jugar otra vez":"Play again","¡Empate!":"It's a tie!","¡Has ganado!":"You won!","Gana la máquina":"The computer wins","Gana tu amigo":"Your friend wins",
      "¡Dos cajas! ":"Two boxes! ","¡Caja! ":"Box! ","Vuelve a jugar.":"Play again.",
      "¡Gana ":"Winner: ","Partida terminada.":"Game over.",
      "Tu turno":"Your turn","La máquina está pensando…":"The computer is thinking…","Esperando conexión…":"Waiting for connection…","Turno de tu amigo":"Your friend's turn","Turno de ":"Turn: ",
      "Esperando a que tu amigo se una…":"Waiting for your friend to join…","¡Conectados! Tú juegas con ":"Connected! You are playing ",
      " y empiezas.":" and you go first.",".":" .",
      "No se pudo cargar el modo online.":"Could not load online mode.",
      "Creando partida…":"Creating game…","Error de conexión (":"Connection error (","). Prueba otra vez.":"). Please try again.",
      "El código tiene 5 letras o números.":"The code must have 5 letters or numbers.",
      "Conectando…":"Connecting…","No existe esa partida. Revisa el código o pide uno nuevo.":"That game does not exist. Check the code or ask for a new one.",
      "Tu amigo se ha desconectado.":"Your friend has disconnected.","Se ha perdido la conexión.":"The connection was lost."
    },
    zh: {
      "Puntos y cajas":"点格棋",
      "Une dos puntos por turno. Quien cierre una caja se la queda y vuelve a jugar.":"每回合连接两个点。完成一个方格的玩家获得该方格，并再走一回合。",
      "Crear partida online":"创建在线游戏",
      "Mándale este enlace a tu amigo, o dile el código":"把链接发给朋友，或告诉对方游戏代码",
      "Copiar":"复制","¡Copiado!":"已复制！","Compartir":"分享",
      "Código de tu amigo":"朋友的游戏代码","Unirse":"加入",
      "Crea una partida o únete con el código de tu amigo.":"创建游戏，或使用朋友的代码加入。",
      "Azul":"蓝方","Rojo":"红方","Máquina":"电脑","Azul (tú)":"蓝方（你）","Rojo (tú)":"红方（你）",
      "Modo":"模式","Contra la máquina":"人机对战","Dos jugadores (mismo dispositivo)":"双人同设备","Online con un amigo":"与朋友在线对战",
      "Dificultad":"难度","Fácil":"简单","Difícil":"困难","Tablero":"棋盘",
      "Deshacer":"撤销","Nueva partida":"新游戏","Cómo se juega":"游戏规则",
      "En tu turno dibuja una línea entre dos puntos vecinos (toca o haz clic en el hueco). Si con tu línea completas el cuarto lado de una caja, la caja es tuya y tiras otra vez.":"轮到你时，在相邻的两个点之间画一条线（点击空隙即可）。如果你画的线完成了一个方格的第四条边，该方格就归你所有，并且你可以再走一回合。",
      "Truco: evita dibujar el tercer lado de una caja, porque se la regalas a tu rival. Al final, gana quien tenga más cajas.":"小提示：尽量不要画出一个方格的第三条边，否则就可能把它送给对手。最后，拥有方格较多的人获胜。",
      "Online: uno pulsa «Crear partida online» y le manda el enlace al otro. Quien crea la partida juega con azul y empieza.":"在线对战：一名玩家点击“创建在线游戏”，然后把链接发给另一名玩家。创建者使用蓝方并先开始。",
      "Tablero de juego":"游戏棋盘","Jugar otra vez":"再玩一次","¡Empate!":"平局！","¡Has ganado!":"你赢了！","Gana la máquina":"电脑获胜","Gana tu amigo":"朋友获胜",
      "¡Dos cajas! ":"获得两个方格！","¡Caja! ":"获得一个方格！","Vuelve a jugar.":"再走一回合。",
      "¡Gana ":"获胜者：","Partida terminada.":"游戏结束。",
      "Tu turno":"轮到你了","La máquina está pensando…":"电脑正在思考…","Esperando conexión…":"等待连接…","Turno de tu amigo":"轮到朋友了","Turno de ":"轮到：",
      "Esperando a que tu amigo se una…":"等待朋友加入…","¡Conectados! Tú juegas con ":"已连接！你使用",
      " y empiezas.":"，并先开始。",".":"。",
      "No se pudo cargar el modo online.":"无法加载在线模式。",
      "Creando partida…":"正在创建游戏…","Error de conexión (":"连接错误（","). Prueba otra vez。": "）。请重试。",
      "El código tiene 5 letras o números.":"游戏代码必须由5个字母或数字组成。",
      "Conectando…":"正在连接…","No existe esa partida. Revisa el código o pide uno nuevo.":"找不到该游戏。请检查代码或索取新代码。",
      "Tu amigo se ha desconectado.":"朋友已断开连接。","Se ha perdido la conexión.":"连接已中断。"
    }
  };
  const original = new Map();
  let applying = false;
  const langKey = "dab-language";
  const current = () => localStorage.getItem(langKey) || "es";
  const translate = value => {
    const dict = translations[current()];
    if (!dict) return value;
    if (dict[value] !== undefined) return dict[value];
    let result = value;
    for (const [from, to] of Object.entries(dict)) {
      if (from.length > 2 && result.includes(from)) result = result.split(from).join(to);
    }
    return result;
  };
  window.dabTranslate = translate;
  function updateNode(node) {
    if (node.nodeType !== Node.TEXT_NODE || !node.parentElement) return;
    if (["SCRIPT","STYLE"].includes(node.parentElement.tagName)) return;
    if (!original.has(node)) original.set(node, node.nodeValue);
    const source = original.get(node);
    const leading = source.match(/^\s*/)?.[0] || "";
    const trailing = source.match(/\s*$/)?.[0] || "";
    const core = source.slice(leading.length, source.length - trailing.length);
    const value = leading + translate(core) + trailing;
    if (node.nodeValue !== value) node.nodeValue = value;
  }
  function updateAttributes(root) {
    const nodes = [root, ...(root.querySelectorAll ? root.querySelectorAll("[placeholder],[aria-label],[title]") : [])].filter(Boolean);
    for (const el of nodes) {
      for (const attr of ["placeholder","aria-label","title"]) {
        if (el.hasAttribute?.(attr)) {
          const key = "data-i18n-original-" + attr;
          if (!el.hasAttribute(key)) el.setAttribute(key, el.getAttribute(attr));
          el.setAttribute(attr, translate(el.getAttribute(key)));
        }
      }
    }
  }
  function apply() {
    applying = true;
    document.documentElement.lang = current() === "zh" ? "zh-CN" : current() === "en" ? "en" : "es";
    document.title = translate("Puntos y cajas");
    for (const node of document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)) updateNode(node.currentNode);
    updateAttributes(document.body);
    applying = false;
  }
  const observer = new MutationObserver(records => {
    if (applying) return;
    applying = true;
    for (const record of records) {
      if (record.type === "childList") {
        record.addedNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) updateNode(node);
          else if (node.querySelectorAll) {
            const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
            while (walker.nextNode()) updateNode(walker.currentNode);
            updateAttributes(node);
          }
        });
      } else if (record.type === "characterData") updateNode(record.target);
    }
    applying = false;
  });
  window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("language");
    if (select) {
      select.value = current();
      select.addEventListener("change", () => {
        localStorage.setItem(langKey, select.value);
        apply();
      });
    }
    observer.observe(document.body, {subtree:true,childList:true,characterData:true});
    apply();
  });
})();