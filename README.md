# CreativeFlow AI (AI Builder Assignment) 

A full-stack application that automates creative workflows by transforming static images into viral social media assets (captions, hashtags, and descriptions) using Multimodal AI.

## 📄 Technical Write-up

### 1. AI Models Used
**Llama 3.2 11B Vision (Prevention)** via **Groq Cloud**.

### 2. Why this stack?
*   **Llama 3.2 Vision**: Chosen for its open-source multimodal capabilities, allowing it to "see" images and understand nuances in lighting, mood, and context without needing separate OCR or tagging models.
*   **Groq API**: Selected for its **LPU (Language Processing Unit)** inference engine, which delivers responses in milliseconds. This is critical for a "real-time" creative tool feel.
*   **Tech Stack**: React + Node.js was chosen for robust full-stack separation, allowing secure API key handling on the backend and a high-performance interactive UI on the frontend.

### 3. AI Implementation
The app uses a **RAG-lite approach**:
1.  User uploads an image to the frontend.
2.  Backend converts the image buffer to a base64 string.
3.  This visual context is sent to Llama 3.2 Vision with a specific "Persona Prompt" (Expert Social Media Manager).
4.  The AI outputs structured JSON containing captions, hashtags, and product descriptions, which is rendered instantly on the UI.

### 4. Architecture
*   **Frontend**: React (Vite), Tailwind CSS, Framer Motion (Glassmorphism UI, 3D Effects).
*   **Backend**: Express Server (handles file uploads, rate limiting, and secure API proxying).
*   **External**: Groq API (AI Inference).

---

## 🏃‍♂️ How to Run

### Prerequisite
Create a `.env` file in the `server` directory:
```env
GROQ_API_KEY=your_groq_api_key_here
PORT=5000
```

### 1. Backend
```bash
cd server
npm install
npm start
```

### 2. Frontend
```bash
cd client
npm install
npm run dev
```

## ✨ User Experience
*   **Visual Magic**: Hero section features a 3D-tilted interactive dashboard.
*   **Responsive**: Fully optimized for Mobile and Desktop.
*   **Feedback**: Real-time loading states and "Copy to Clipboard" functionality.

---
*Submitted by [Pichika Chandu] for the Robo Customized AI Builder Intern Assignment.*
