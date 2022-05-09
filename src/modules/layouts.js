const layouts = [
  {
    key: "Backquote",
    ru: {
      lowercase: "ё",
      uppercase: "Ё",
      capsLowercase: "Ё",
      capsUppercase: "ё",
      toCapsUppercase: "Ё",
    },
    en: {
      lowercase: "`",
      uppercase: "~",
      capsLowercase: "`",
      capsUppercase: "~",
      toCapsUppercase: "`",
    },
  },
  {
    key: "Digit1",
    ru: {
      lowercase: "1",
      uppercase: "!",
      capsLowercase: "1",
      capsUppercase: "!",
      toCapsUppercase: "1",
    },
    en: {
      lowercase: "1",
      uppercase: "!",
      capsLowercase: "1",
      capsUppercase: "!",
      toCapsUppercase: "1",
    },
  },
  {
    key: "Digit2",
    ru: {
      lowercase: "2",
      uppercase: `"`,
      capsLowercase: "2",
      capsUppercase: `"`,
      toCapsUppercase: "2",
    },
    en: {
      lowercase: "2",
      uppercase: "@",
      capsLowercase: "2",
      capsUppercase: "@",
      toCapsUppercase: "2",
    },
  },
  {
    key: "Digit3",
    ru: {
      lowercase: "3",
      uppercase: "№",
      capsLowercase: "3",
      capsUppercase: "№",
      toCapsUppercase: "3",
    },
    en: {
      lowercase: "3",
      uppercase: "#",
      capsLowercase: "3",
      capsUppercase: "#",
      toCapsUppercase: "3",
    },
  },
  {
    key: "Digit4",
    ru: {
      lowercase: "4",
      uppercase: ";",
      capsLowercase: "4",
      capsUppercase: ";",
      toCapsUppercase: "4",
    },
    en: {
      lowercase: "4",
      uppercase: "$",
      capsLowercase: "4",
      capsUppercase: "$",
      toCapsUppercase: "4",
    },
  },
  {
    key: "Digit5",
    ru: {
      lowercase: "5",
      uppercase: "%",
      capsLowercase: "5",
      capsUppercase: "%",
      toCapsUppercase: "5",
    },
    en: {
      lowercase: "5",
      uppercase: "%",
      capsLowercase: "5",
      capsUppercase: "%",
      toCapsUppercase: "5",
    },
  },
  {
    key: "Digit6",
    ru: {
      lowercase: "6",
      uppercase: ":",
      capsLowercase: "6",
      capsUppercase: ":",
      toCapsUppercase: "6",
    },
    en: {
      lowercase: "6",
      uppercase: "^",
      capsLowercase: "6",
      capsUppercase: "^",
      toCapsUppercase: "6",
    },
  },
  {
    key: "Digit7",
    ru: {
      lowercase: "7",
      uppercase: "?",
      capsLowercase: "7",
      capsUppercase: "?",
      toCapsUppercase: "7",
    },
    en: {
      lowercase: "7",
      uppercase: "&",
      capsLowercase: "7",
      capsUppercase: "&",
      toCapsUppercase: "7",
    },
  },
  {
    key: "Digit8",
    ru: {
      lowercase: "8",
      uppercase: "*",
      capsLowercase: "8",
      capsUppercase: "*",
      toCapsUppercase: "8",
    },
    en: {
      lowercase: "8",
      uppercase: "*",
      capsLowercase: "8",
      capsUppercase: "*",
      toCapsUppercase: "8",
    },
  },
  {
    key: "Digit9",
    ru: {
      lowercase: "9",
      uppercase: "(",
      capsLowercase: "9",
      capsUppercase: "(",
      toCapsUppercase: "9",
    },
    en: {
      lowercase: "9",
      uppercase: "(",
      capsLowercase: "9",
      capsUppercase: "(",
      toCapsUppercase: "9",
    },
  },
  {
    key: "Digit0",
    ru: {
      lowercase: "0",
      uppercase: ")",
      capsLowercase: "0",
      capsUppercase: ")",
      toCapsUppercase: "0",
    },
    en: {
      lowercase: "0",
      uppercase: ")",
      capsLowercase: "0",
      capsUppercase: ")",
      toCapsUppercase: "0",
    },
  },
  {
    key: "Minus",
    ru: {
      lowercase: "-",
      uppercase: "_",
      capsLowercase: "-",
      capsUppercase: "_",
      toCapsUppercase: "-",
    },
    en: {
      lowercase: "-",
      uppercase: "_",
      capsLowercase: "-",
      capsUppercase: "_",
      toCapsUppercase: "-",
    },
  },
  {
    key: "Equal",
    ru: {
      lowercase: "=",
      uppercase: "+",
      capsLowercase: "=",
      capsUppercase: "+",
      toCapsUppercase: "=",
    },
    en: {
      lowercase: "=",
      uppercase: "+",
      capsLowercase: "=",
      capsUppercase: "+",
      toCapsUppercase: "=",
    },
  },
  {
    key: "Backspace",
    ru: {
      lowercase: "backspace",
      uppercase: "backspace",
      capsLowercase: "backspace",
      capsUppercase: "backspace",
      toCapsUppercase: "backspace",
    },
    en: {
      lowercase: "backspace",
      uppercase: "backspace",
      capsLowercase: "backspace",
      capsUppercase: "backspace",
      toCapsUppercase: "backspace",
    },
    special: true,
  },
  {
    key: "Tab",
    ru: {
      lowercase: "tab",
      uppercase: "tab",
      capsLowercase: "tab",
      capsUppercase: "tab",
      toCapsUppercase: "tab",
    },
    en: {
      lowercase: "tab",
      uppercase: "tab",
      capsLowercase: "tab",
      capsUppercase: "tab",
      toCapsUppercase: "tab",
    },
    special: true,
  },
  {
    key: "KeyQ",
    ru: {
      lowercase: "й",
      uppercase: "Й",
      capsLowercase: "Й",
      capsUppercase: "й",
      toCapsUppercase: "Й",
    },
    en: {
      lowercase: "q",
      uppercase: "Q",
      capsLowercase: "Q",
      capsUppercase: "q",
      toCapsUppercase: "Q",
    },
  },
  {
    key: "KeyW",
    ru: {
      lowercase: "ц",
      uppercase: "Ц",
      capsLowercase: "Ц",
      capsUppercase: "ц",
      toCapsUppercase: "Ц",
    },
    en: {
      lowercase: "w",
      uppercase: "W",
      capsLowercase: "W",
      capsUppercase: "w",
      toCapsUppercase: "W",
    },
  },
  {
    key: "KeyE",
    ru: {
      lowercase: "у",
      uppercase: "У",
      capsLowercase: "У",
      capsUppercase: "у",
      toCapsUppercase: "У",
    },
    en: {
      lowercase: "e",
      uppercase: "E",
      capsLowercase: "E",
      capsUppercase: "e",
      toCapsUppercase: "E",
    },
  },
  {
    key: "KeyR",
    ru: {
      lowercase: "к",
      uppercase: "К",
      capsLowercase: "К",
      capsUppercase: "к",
      toCapsUppercase: "К",
    },
    en: {
      lowercase: "r",
      uppercase: "R",
      capsLowercase: "R",
      capsUppercase: "r",
      toCapsUppercase: "R",
    },
  },
  {
    key: "KeyT",
    ru: {
      lowercase: "е",
      uppercase: "Е",
      capsLowercase: "Е",
      capsUppercase: "е",
      toCapsUppercase: "Е",
    },
    en: {
      lowercase: "t",
      uppercase: "T",
      capsLowercase: "T",
      capsUppercase: "t",
      toCapsUppercase: "T",
    },
  },
  {
    key: "KeyY",
    ru: {
      lowercase: "н",
      uppercase: "Н",
      capsLowercase: "Н",
      capsUppercase: "н",
      toCapsUppercase: "Н",
    },
    en: {
      lowercase: "y",
      uppercase: "Y",
      capsLowercase: "Y",
      capsUppercase: "y",
      toCapsUppercase: "Y",
    },
  },
  {
    key: "KeyU",
    ru: {
      lowercase: "г",
      uppercase: "Г",
      capsLowercase: "Г",
      capsUppercase: "г",
      toCapsUppercase: "Г",
    },
    en: {
      lowercase: "u",
      uppercase: "U",
      capsLowercase: "U",
      capsUppercase: "u",
      toCapsUppercase: "U",
    },
  },
  {
    key: "KeyI",
    ru: {
      lowercase: "ш",
      uppercase: "Ш",
      capsLowercase: "Ш",
      capsUppercase: "ш",
      toCapsUppercase: "Ш",
    },
    en: {
      lowercase: "i",
      uppercase: "I",
      capsLowercase: "I",
      capsUppercase: "i",
      toCapsUppercase: "I",
    },
  },
  {
    key: "KeyO",
    ru: {
      lowercase: "щ",
      uppercase: "Щ",
      capsLowercase: "Щ",
      capsUppercase: "щ",
      toCapsUppercase: "Щ",
    },
    en: {
      lowercase: "o",
      uppercase: "O",
      capsLowercase: "O",
      capsUppercase: "o",
      toCapsUppercase: "O",
    },
  },
  {
    key: "KeyP",
    ru: {
      lowercase: "з",
      uppercase: "З",
      capsLowercase: "З",
      capsUppercase: "з",
      toCapsUppercase: "З",
    },
    en: {
      lowercase: "p",
      uppercase: "P",
      capsLowercase: "P",
      capsUppercase: "p",
      toCapsUppercase: "P",
    },
  },
  {
    key: "BracketLeft",
    ru: {
      lowercase: "х",
      uppercase: "Х",
      capsLowercase: "Х",
      capsUppercase: "х",
      toCapsUppercase: "Х",
    },
    en: {
      lowercase: "[",
      uppercase: "{",
      capsLowercase: "[",
      capsUppercase: "{",
      toCapsUppercase: "[",
    },
  },
  {
    key: "BracketRight",
    ru: {
      lowercase: "ъ",
      uppercase: "Ъ",
      capsLowercase: "Ъ",
      capsUppercase: "ъ",
      toCapsUppercase: "Ъ",
    },
    en: {
      lowercase: "]",
      uppercase: "}",
      capsLowercase: "]",
      capsUppercase: "}",
      toCapsUppercase: "]",
    },
  },
  {
    key: "Backslash",
    ru: {
      lowercase: "\\",
      uppercase: "|",
      capsLowercase: "\\",
      capsUppercase: "|",
      toCapsUppercase: "\\",
    },
    en: {
      lowercase: "\\",
      uppercase: "|",
      capsLowercase: "\\",
      capsUppercase: "|",
      toCapsUppercase: "\\",
    },
  },
  {
    key: "Delete",
    ru: {
      lowercase: "Del",
      uppercase: "Del",
      capsLowercase: "Del",
      capsUppercase: "Del",
      toCapsUppercase: "Del",
    },
    en: {
      lowercase: "Del",
      uppercase: "Del",
      capsLowercase: "Del",
      capsUppercase: "Del",
      toCapsUppercase: "Del",
    },
    special: true,
  },
  {
    key: "CapsLock",
    ru: {
      lowercase: "capslock",
      uppercase: "capslock",
      capsLowercase: "capslock",
      capsUppercase: "capslock",
      toCapsUppercase: "capslock",
    },
    en: {
      lowercase: "capslock",
      uppercase: "capslock",
      capsLowercase: "capslock",
      capsUppercase: "capslock",
      toCapsUppercase: "capslock",
    },
    special: true,
  },
  {
    key: "KeyA",
    ru: {
      lowercase: "ф",
      uppercase: "Ф",
      capsLowercase: "Ф",
      capsUppercase: "ф",
      toCapsUppercase: "Ф",
    },
    en: {
      lowercase: "a",
      uppercase: "A",
      capsLowercase: "A",
      capsUppercase: "a",
      toCapsUppercase: "A",
    },
  },
  {
    key: "KeyS",
    ru: {
      lowercase: "ы",
      uppercase: "Ы",
      capsLowercase: "Ы",
      capsUppercase: "ы",
      toCapsUppercase: "Ы",
    },
    en: {
      lowercase: "s",
      uppercase: "S",
      capsLowercase: "S",
      capsUppercase: "s",
      toCapsUppercase: "S",
    },
  },
  {
    key: "KeyD",
    ru: {
      lowercase: "в",
      uppercase: "В",
      capsLowercase: "В",
      capsUppercase: "в",
      toCapsUppercase: "В",
    },
    en: {
      lowercase: "d",
      uppercase: "D",
      capsLowercase: "D",
      capsUppercase: "d",
      toCapsUppercase: "D",
    },
  },
  {
    key: "KeyF",
    ru: {
      lowercase: "а",
      uppercase: "А",
      capsLowercase: "А",
      capsUppercase: "а",
      toCapsUppercase: "А",
    },
    en: {
      lowercase: "f",
      uppercase: "F",
      capsLowercase: "F",
      capsUppercase: "f",
      toCapsUppercase: "F",
    },
  },
  {
    key: "KeyG",
    ru: {
      lowercase: "п",
      uppercase: "П",
      capsLowercase: "П",
      capsUppercase: "п",
      toCapsUppercase: "П",
    },
    en: {
      lowercase: "g",
      uppercase: "G",
      capsLowercase: "G",
      capsUppercase: "g",
      toCapsUppercase: "G",
    },
  },
  {
    key: "KeyH",
    ru: {
      lowercase: "р",
      uppercase: "Р",
      capsLowercase: "Р",
      capsUppercase: "р",
      toCapsUppercase: "Р",
    },
    en: {
      lowercase: "h",
      uppercase: "H",
      capsLowercase: "H",
      capsUppercase: "h",
      toCapsUppercase: "H",
    },
  },
  {
    key: "KeyJ",
    ru: {
      lowercase: "о",
      uppercase: "О",
      capsLowercase: "О",
      capsUppercase: "о",
      toCapsUppercase: "О",
    },
    en: {
      lowercase: "j",
      uppercase: "J",
      capsLowercase: "J",
      capsUppercase: "j",
      toCapsUppercase: "J",
    },
  },
  {
    key: "KeyK",
    ru: {
      lowercase: "л",
      uppercase: "Л",
      capsLowercase: "Л",
      capsUppercase: "л",
      toCapsUppercase: "Л",
    },
    en: {
      lowercase: "k",
      uppercase: "K",
      capsLowercase: "K",
      capsUppercase: "k",
      toCapsUppercase: "K",
    },
  },
  {
    key: "KeyL",
    ru: {
      lowercase: "д",
      uppercase: "Д",
      capsLowercase: "Д",
      capsUppercase: "д",
      toCapsUppercase: "Д",
    },
    en: {
      lowercase: "l",
      uppercase: "L",
      capsLowercase: "L",
      capsUppercase: "l",
      toCapsUppercase: "L",
    },
  },
  {
    key: "Semicolon",
    ru: {
      lowercase: "ж",
      uppercase: "Ж",
      capsLowercase: "Ж",
      capsUppercase: "ж",
      toCapsUppercase: "Ж",
    },
    en: {
      lowercase: ";",
      uppercase: ":",
      capsLowercase: ";",
      capsUppercase: ":",
      toCapsUppercase: ";",
    },
  },
  {
    key: "Quote",
    ru: {
      lowercase: "э",
      uppercase: "Э",
      capsLowercase: "Э",
      capsUppercase: "э",
      toCapsUppercase: "Э",
    },
    en: {
      lowercase: "'",
      uppercase: '"',
      capsLowercase: "'",
      capsUppercase: '"',
      toCapsUppercase: "'",
    },
  },
  {
    key: "Enter",
    ru: {
      lowercase: "enter",
      uppercase: "enter",
      capsLowercase: "enter",
      capsUppercase: "enter",
      toCapsUppercase: "enter",
    },
    en: {
      lowercase: "enter",
      uppercase: "enter",
      capsLowercase: "enter",
      capsUppercase: "enter",
      toCapsUppercase: "enter",
    },
    special: true,
  },

  {
    key: "ShiftLeft",
    ru: {
      lowercase: "shift",
      uppercase: "shift",
      capsLowercase: "shift",
      capsUppercase: "shift",
      toCapsUppercase: "shift",
    },
    en: {
      lowercase: "shift",
      uppercase: "shift",
      capsLowercase: "shift",
      capsUppercase: "shift",
      toCapsUppercase: "shift",
    },
    special: true,
  },
  {
    key: "KeyZ",
    ru: {
      lowercase: "я",
      uppercase: "Я",
      capsLowercase: "Я",
      capsUppercase: "я",
      toCapsUppercase: "Я",
    },
    en: {
      lowercase: "z",
      uppercase: "Z",
      capsLowercase: "Z",
      capsUppercase: "z",
      toCapsUppercase: "Z",
    },
  },
  {
    key: "KeyX",
    ru: {
      lowercase: "ч",
      uppercase: "Ч",
      capsLowercase: "Ч",
      capsUppercase: "ч",
      toCapsUppercase: "Ч",
    },
    en: {
      lowercase: "x",
      uppercase: "X",
      capsLowercase: "X",
      capsUppercase: "x",
      toCapsUppercase: "X",
    },
  },
  {
    key: "KeyC",
    ru: {
      lowercase: "с",
      uppercase: "С",
      capsLowercase: "С",
      capsUppercase: "с",
      toCapsUppercase: "С",
    },
    en: {
      lowercase: "c",
      uppercase: "C",
      capsLowercase: "C",
      capsUppercase: "c",
      toCapsUppercase: "C",
    },
  },
  {
    key: "KeyV",
    ru: {
      lowercase: "м",
      uppercase: "М",
      capsLowercase: "М",
      capsUppercase: "м",
      toCapsUppercase: "М",
    },
    en: {
      lowercase: "v",
      uppercase: "V",
      capsLowercase: "V",
      capsUppercase: "v",
      toCapsUppercase: "V",
    },
  },
  {
    key: "KeyB",
    ru: {
      lowercase: "и",
      uppercase: "И",
      capsLowercase: "И",
      capsUppercase: "и",
      toCapsUppercase: "И",
    },
    en: {
      lowercase: "b",
      uppercase: "B",
      capsLowercase: "B",
      capsUppercase: "b",
      toCapsUppercase: "B",
    },
  },
  {
    key: "KeyN",
    ru: {
      lowercase: "т",
      uppercase: "Т",
      capsLowercase: "Т",
      capsUppercase: "т",
      toCapsUppercase: "Т",
    },
    en: {
      lowercase: "n",
      uppercase: "N",
      capsLowercase: "N",
      capsUppercase: "n",
      toCapsUppercase: "N",
    },
  },
  {
    key: "KeyM",
    ru: {
      lowercase: "ь",
      uppercase: "Ь",
      capsLowercase: "Ь",
      capsUppercase: "ь",
      toCapsUppercase: "Ь",
    },
    en: {
      lowercase: "m",
      uppercase: "M",
      capsLowercase: "M",
      capsUppercase: "m",
      toCapsUppercase: "M",
    },
  },
  {
    key: "Comma",
    ru: {
      lowercase: "б",
      uppercase: "Б",
      capsLowercase: "Б",
      capsUppercase: "б",
      toCapsUppercase: "Б",
    },
    en: {
      lowercase: ",",
      uppercase: "<",
      capsLowercase: ",",
      capsUppercase: "<",
      toCapsUppercase: ",",
    },
  },
  {
    key: "Period",
    ru: {
      lowercase: "ю",
      uppercase: "Ю",
      capsLowercase: "Ю",
      capsUppercase: "ю",
      toCapsUppercase: "Ю",
    },
    en: {
      lowercase: ".",
      uppercase: ">",
      capsLowercase: ".",
      capsUppercase: ">",
      toCapsUppercase: ".",
    },
  },
  {
    key: "Slash",
    ru: {
      lowercase: ".",
      uppercase: ",",
      capsLowercase: ".",
      capsUppercase: ",",
      toCapsUppercase: ".",
    },
    en: {
      lowercase: "/",
      uppercase: "?",
      capsLowercase: "/",
      capsUppercase: "?",
      toCapsUppercase: "/",
    },
  },
  {
    key: "ArrowLeft",
    ru: {
      uppercase: "←",
      lowercase: "←",
      capsLowercase: "←",
      capsUppercase: "←",
      toCapsUppercase: "←",
    },
    en: {
      lowercase: "←",
      uppercase: "←",
      capsLowercase: "←",
      capsUppercase: "←",
      toCapsUppercase: "←",
    },
  },
  {
    key: "ArrowUp",
    ru: {
      lowercase: "↑",
      uppercase: "↑",
      capsLowercase: "↑",
      capsUppercase: "↑",
      toCapsUppercase: "↑",
    },
    en: {
      lowercase: `↑`,
      uppercase: "↑",
      capsLowercase: "↑",
      capsUppercase: "↑",
      toCapsUppercase: "↑",
    },
  },
  {
    key: "ShiftRight",
    ru: {
      lowercase: "shift",
      uppercase: "shift",
      capsLowercase: "shift",
      capsUppercase: "shift",
      toCapsUppercase: "shift",
    },
    en: {
      lowercase: "shift",
      uppercase: "shift",
      capsLowercase: "shift",
      capsUppercase: "shift",
      toCapsUppercase: "shift",
    },
    special: true,
  },
  {
    key: "ControlLeft",
    ru: {
      lowercase: "ctrl",
      uppercase: "ctrl",
      capsLowercase: "ctrl",
      capsUppercase: "ctrl",
      toCapsUppercase: "ctrl",
    },
    en: {
      lowercase: "ctrl",
      uppercase: "ctrl",
      capsLowercase: "ctrl",
      capsUppercase: "ctrl",
      toCapsUppercase: "ctrl",
    },
    special: true,
  },
  {
    key: "MetaLeft",
    ru: {
      lowercase: "win",
      uppercase: "win",
      capsLowercase: "win",
      capsUppercase: "win",
      toCapsUppercase: "win",
    },
    en: {
      lowercase: "win",
      uppercase: "win",
      capsLowercase: "win",
      capsUppercase: "win",
      toCapsUppercase: "win",
    },
    special: true,
  },
  {
    key: "AltLeft",
    ru: {
      lowercase: "alt",
      uppercase: "alt",
      capsLowercase: "alt",
      capsUppercase: "alt",
      toCapsUppercase: "alt",
    },
    en: {
      lowercase: "alt",
      uppercase: "alt",
      capsLowercase: "alt",
      capsUppercase: "alt",
      toCapsUppercase: "alt",
    },
    special: true,
  },
  {
    key: "Space",
    ru: {
      lowercase: "space",
      uppercase: "space",
      capsLowercase: "space",
      capsUppercase: "space",
      toCapsUppercase: "space",
    },
    en: {
      lowercase: "space",
      uppercase: "space",
      capsLowercase: "space",
      capsUppercase: "space",
      toCapsUppercase: "space",
    },
    special: true,
  },
  {
    key: "AltRight",
    ru: {
      lowercase: "alt",
      uppercase: "alt",
      capsLowercase: "alt",
      capsUppercase: "alt",
      toCapsUppercase: "alt",
    },
    en: {
      lowercase: "alt",
      uppercase: "alt",
      capsLowercase: "alt",
      capsUppercase: "alt",
      toCapsUppercase: "alt",
    },
    special: true,
  },
  {
    key: "MetaRight",
    ru: {
      lowercase: "win",
      uppercase: "win",
      capsLowercase: "win",
      capsUppercase: "win",
      toCapsUppercase: "win",
    },
    en: {
      lowercase: "win",
      uppercase: "win",
      capsLowercase: "win",
      capsUppercase: "win",
      toCapsUppercase: "win",
    },
    special: true,
  },
  {
    key: "ControlRight",
    ru: {
      lowercase: "ctrl",
      uppercase: "ctrl",
      capsLowercase: "ctrl",
      capsUppercase: "ctrl",
      toCapsUppercase: "ctrl",
    },
    en: {
      lowercase: "ctrl",
      uppercase: "ctrl",
      capsLowercase: "ctrl",
      capsUppercase: "ctrl",
      toCapsUppercase: "ctrl",
    },
    special: true,
  },
  {
    key: "ArrowDown",
    ru: {
      lowercase: "↓",
      uppercase: "↓",
      capsLowercase: "↓",
      capsUppercase: "↓",
      toCapsUppercase: "↓",
    },
    en: {
      lowercase: "↓",
      uppercase: "↓;",
      capsLowercase: "↓",
      capsUppercase: "↓",
      toCapsUppercase: "↓",
    },
  },
  {
    key: "ArrowRight",
    ru: {
      lowercase: "→",
      uppercase: "→",
      capsLowercase: "→",
      capsUppercase: "→",
      toCapsUppercase: "→",
    },
    en: {
      lowercase: "→",
      uppercase: "→",
      capsLowercase: "→",
      capsUppercase: "→",
      toCapsUppercase: "→",
    },
  },
]

export default layouts
