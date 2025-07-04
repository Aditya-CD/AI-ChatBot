# 🤖 AI Chatbot – Conversational AI using Google's Gemini API


> A responsive, intelligent chatbot powered by **Google's Gemini API**, built with React.js and styled using Tailwind CSS. It simulates real-time conversations and understands natural language queries — perfect for personal projects, education, or integrating into SaaS apps.

---

## 🧠 Key Features

* 💬 **Conversational Interface** — Real-time message exchange between user and AI
* ⚡️ **Gemini Pro API Integration** — Uses Google's latest LLM for smart responses
* 📱 **Responsive UI** — Built with React + Tailwind CSS for mobile & desktop
* 🧼 **Clean Codebase** — Modular and developer-friendly

---

## 🚀 Demo

> *Coming Soon...*

---

## 🛠️ Tech Stack

| Tech         | Description                        |
| ------------ | ---------------------------------- |
| React.js     | Frontend JavaScript framework      |
| Tailwind CSS | Utility-first styling              |
| Gemini API   | Conversational LLM from Google     |
| Axios/Fetch  | To send requests to the Gemini API |
| Vite / CRA   | Build tool for fast dev setup      |

---

## 📦 Installation & Usage

```bash
# 1. Clone the repo
git clone https://github.com/ADITYA-CD/AI-ChatBot.git
cd ai-chatbot

# 2. Install dependencies
npm install

# 3. Add your Gemini API key
# Create a .env file and add:
VITE_GEMINI_API_KEY=your_key_here

# 4. Start the development server
npm run dev
```

---

## 🗂️ Folder Structure

<details>
<summary>Click to expand</summary>

```
ai-chatbot/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ChatWindow.jsx
│   │   └── MessageBubble.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── api/
│   │   └── gemini.js     # API request handler
│   └── styles/
├── .env
├── tailwind.config.js
└── README.md
```

</details>

---

## 💡 How It Works

1. User types a message in the chat input.
2. The message is sent to the Gemini API using your API key.
3. The response is received and displayed as a bot reply in the chat window.
4. Supports continuous conversation and context (optional improvement).

---

## 🚧 Future Improvements

* 🧠 Add memory/contextual awareness (multi-turn conversations)
* 🔒 Authentication (Google Login, etc.)
* 🌐 Multilingual support
* 📥 Export chat logs

---

## 🤝 Contributing

Pull requests are welcome!
If you'd like to improve the UI, fix bugs, or enhance the model pipeline, feel free to fork and contribute.

```bash
git checkout -b feature-branch
git commit -m "Add new feature"
git push origin feature-branch
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

Made with ❤️ by [Aditya Gupta](https://github.com/ADITYA-CD)
Follow me on Instagram: [@adityag\_03](https://instagram.com/adityag_03)

---
