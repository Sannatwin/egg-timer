# 🥚 Egg Timer App

Una desktop app moderna sviluppata con **Angular 20** e **Tauri**, pensata per offrire un'interfaccia semplice ma visualmente accattivante per tenere traccia del tempo tramite un'animazione ispirata alla cottura dell’uovo perfetto.

---

## 🚀 Funzionalità

- ⏱ Timer configurabile via interfaccia
- 🎨 Barra gradiente dinamica da verde (inizio) a rosso (fine)
- 🥚 Icona animata dell’uovo che si muove lungo la barra
- 🌗 UI compatibile con dark mode
- 🖥 App desktop leggera grazie a Tauri

---

## 🧰 Tecnologie utilizzate

| Tecnologia            | Versione         |
|-----------------------|------------------|
| **Angular CLI**       | 20.0.1           |
| **Node.js**           | 22.16.0          |
| **npm**               | 10.9.2           |
| **Tauri CLI**         | 2.5.0            |
| **@tauri-apps/api**   | 2.5.0            |
| **Rust**              | 1.87.0           |
| **WebView2 Runtime**  | 137.0.3296.68    |
| **OS**                | Windows 10 x64   |

> ℹ️ La parte frontend è realizzata con **Angular**, mentre la parte backend/native è gestita da **Tauri** tramite WebView2, Rust e Webpack.

---

## 📦 Struttura del progetto

```

egg-timer-app/
├── src/                     # Sorgente Angular
│   ├── app/                 # Componenti e logica UI
│   └── assets/              # Icone (uovo), immagini, stili
├── src-tauri/               # Configurazione e backend Tauri
│   ├── tauri.conf.json      # Config principale Tauri     
├── dist/                    # Build Angular pronta per il bundle
├── package.json             # Configurazione Angular + Tauri
├── angular.json             # Angular workspace config

````

---

## ▶️ Come eseguire il progetto

1. **Installa le dipendenze:**

```bash
npm install
````

2. **Avvia il frontend Angular in modalità sviluppo:**

```bash
ng serve
```

3. **Avvia l’app desktop Tauri (in una seconda finestra terminale):**

```bash
npx tauri dev
```

---

## 📸 Screenshot

![image](https://github.com/user-attachments/assets/fa1239e6-fbde-4ee3-80f0-5423a43eb37a)

---


## 📜 Licenza

Rilasciato sotto licenza **MIT**. Puoi usarlo, modificarlo, e distribuirlo liberamente.
Just don’t overcook it 🥚🔥

```


